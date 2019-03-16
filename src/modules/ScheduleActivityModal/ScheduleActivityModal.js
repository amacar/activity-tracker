import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";

import Button from "../../components/Button/Button";
import ActivityItem from "../../components/Activities/ActivityItem";
import "./ScheduleActivityModal.css";
import { Schedule } from "../../strings/en";
import { Activities } from "../../util/constants";
import DropdownWrapper from "../../components/Dropdown/DropdownWrapper";
import Dropdown from "../../components/Dropdown/Dropdown";

const { scheduleActivity, howLong } = Schedule;

class ScheduleActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 15 };
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
    const { selectedActivity, selected } = this.state;
    return selectedActivity && selected;
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
    this.setState({ selected: parseInt(event.target.value) });
  };

  render() {
    const { selectedActivity, selected } = this.state;
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
            selected={selected}
            options={this.generateDurations()}
            onChange={this.handleDropdownChange}
          />
        </DropdownWrapper>
        <Button
          text={"Schedule"}
          className={
            "ScheduleActivityModal-button" +
            (this.allFieldsSelected() ? " active" : "")
          }
        />
      </div>
    );
  }
}

export default withRouter(ScheduleActivityModal);
