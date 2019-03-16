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

  generateFreeDateTimes = () => [];

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
            options={this.generateFreeDateTimes()}
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

const mapDispatchToProps = {
  saveActivity: activity => saveActivity(activity)
};

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(ScheduleActivityModal)
);
