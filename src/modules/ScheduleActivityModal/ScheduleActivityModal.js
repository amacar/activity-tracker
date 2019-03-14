import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../components/Button/Button";
import ActivityItem from "../../components/Activities/ActivityItem";
import "./ScheduleActivityModal.css";
import { Schedule } from "../../strings/en";
import { Activities } from "../../util/constants";

const { scheduleActivity } = Schedule;

class ScheduleActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log(this.state);
    this.setState({ selectedActivity: key });
  };

  render() {
    const { selectedActivity } = this.state;
    return (
      <div className="ScheduleActivityModal">
        <div className="ScheduleActivityModal-exit">
          <span onClick={this.redirectToHome}>&#10006;</span>
        </div>
        <div className="ScheduleActivityModal-header">{scheduleActivity}</div>
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

        <Button text={"Schedule"} />
      </div>
    );
  }
}

export default withRouter(ScheduleActivityModal);
