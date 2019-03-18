import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

import Button from "../../components/Button/Button";
import ActivityItem from "../../components/Activities/ActivityItem";
import "./ScheduleActivityModal.css";
import { Schedule } from "../../strings/en";
import { Activities } from "../../util/constants";
import DropdownWrapper from "../../components/Dropdown/DropdownWrapper";
import Dropdown from "../../components/Dropdown/Dropdown";
import DateTimeDropdown from "../../components/Dropdown/DateTimeDropdown";
import { saveActivity } from "../../actions/activitiesActions";

const { scheduleActivity, howLong, whenToDo, pickDate } = Schedule;

class ScheduleActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = { duration: 15 };
  }

  redirectToHome = () => {
    this.props.history.push("/");
  };

  getActivities = () =>
    Object.entries(Activities).map(([key, activity]) => {
      return {
        key,
        icon: activity.icon,
        iconLight: activity.iconLight,
        text: activity.text.toUpperCase()
      };
    });

  selectActivity = key => {
    this.setState({ selectedActivity: key });
  };

  allFieldsSelected = () => {
    const { selectedActivity, duration, start } = this.state;
    return selectedActivity && duration && start;
  };

  generateDurations = () => {
    // generate durations for 24 hours
    return Array.from(Array(96), (_, index) => index + 1).map(val => {
      const total = val * 15;
      const now = moment.duration(total, "minutes");
      const hours = parseInt(now.asHours());
      const min = now.subtract(hours, "hours").asMinutes();

      return {
        val: total,
        text: (hours ? `${hours} h ` : "") + (min ? `${min} min` : "")
      };
    });
  };

  handleDropdownChange = event => {
    this.setState({ duration: parseInt(event.target.value) });
  };

  handleDateTimeDropdownChange = event => {
    this.setState({ start: event.target.value });
  };

  generateTimeSlots = () => {
    const { duration } = this.state;
    const { scheduled } = this.props;
    const proposedTimeSlots = [];
    let current = moment()
      .add(1, "d")
      .startOf("day")
      .hour(8);
    const endPeriod = moment()
      .add(7, "d")
      .startOf("day")
      .hour(22);

    // filter scheduled in next 7 days
    const filteredScheduled = scheduled.filter(
      act =>
        moment(act.end).isAfter(current) &&
        moment(act.start).isBefore(endPeriod)
    );
    let filteredSearchIndex = 0;

    while (
      moment(current)
        .add(duration, "m")
        .isSameOrBefore(endPeriod)
    ) {
      const day = current.day();
      const dayEnd = moment(current)
        .startOf("day")
        .hour(22);
      const currentEnd = moment(current).add(duration, "m");

      // if weekend (not extra specified but based on your example) or time after 22.00 then go to next day
      if (day === 0 || day === 6 || currentEnd.isAfter(dayEnd)) {
        current
          .add(1, "d")
          .startOf("day")
          .hour(8);
      } else {
        let checkNextScheduled = false;
        // check against other scheduled activities
        if (filteredSearchIndex < filteredScheduled.length) {
          const scheduledActivity = filteredScheduled[filteredSearchIndex];

          // if scheduled is before start of proposed, check with next scheduled
          // if scheduled overlap with proposed move to end of scheduled
          if (moment(scheduledActivity.end).isSameOrBefore(current)) {
            checkNextScheduled = true;
          } else if (
            !moment(scheduledActivity.start).isSameOrAfter(currentEnd)
          ) {
            current = moment(scheduledActivity.end);
            checkNextScheduled = true;
          }
        }

        if (checkNextScheduled) {
          filteredSearchIndex++;
        } else {
          proposedTimeSlots.push(moment(current).format());
          current = currentEnd;
        }
      }
    }

    return proposedTimeSlots;
  };

  handleSubmit = async () => {
    if (this.allFieldsSelected()) {
      const { selectedActivity, duration, start } = this.state;
      const startMoment = moment(start);
      const endMoment = startMoment.clone().add(duration, "m");
      const activity = {
        type: selectedActivity,
        start: startMoment.valueOf(),
        end: endMoment.valueOf()
      };
      await this.props.saveActivity(activity);
      this.redirectToHome();
    }
  };

  render() {
    const { selectedActivity, duration, start } = this.state;
    return (
      <div className="ScheduleActivityModal">
        <div className="ScheduleActivityModal-exit">
          <span onClick={this.redirectToHome}>&#10006;</span>
        </div>
        <div className="ScheduleActivityModal-header center">
          {scheduleActivity}
        </div>
        <div className="ScheduleActivityModal-activities">
          {this.getActivities().map(activity => {
            const selected = selectedActivity === activity.key;
            return (
              <ActivityItem
                key={activity.key}
                icon={selected ? activity.iconLight : activity.icon}
                text={activity.text}
                className={"ActivityItem-schedule"}
                onClick={() => this.selectActivity(activity.key)}
                selected={selected}
              />
            );
          })}
        </div>
        <DropdownWrapper text={howLong}>
          <Dropdown
            selected={duration}
            options={this.generateDurations()}
            onChange={this.handleDropdownChange}
          />
        </DropdownWrapper>
        <DropdownWrapper text={whenToDo}>
          <DateTimeDropdown
            start={start}
            options={this.generateTimeSlots()}
            onDateTimeChange={this.handleDateTimeDropdownChange}
            defaultText={pickDate}
          />
        </DropdownWrapper>
        <div className="ScheduleActivityModal-buttonWrapper">
          <Button
            text={"Schedule"}
            className={
              "ScheduleActivityModal-button" +
              (this.allFieldsSelected() ? " active" : "")
            }
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    activitiesStore: { scheduled }
  } = state;

  return { scheduled };
};

const mapDispatchToProps = {
  saveActivity: activity => saveActivity(activity)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScheduleActivityModal)
);
