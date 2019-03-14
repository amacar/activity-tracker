import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ScheduledActivities.css";
import Button from "../../../components/Button/Button";
import Activities from "../../../components/Activities/Activities";
import iconPlus from "../../../assets/icn_plus.svg";
import { Home } from "../../../strings/en.js";

const { scheduledActivities, scheduleActivity, noScheduledActivities } = Home;

const ScheduledActivities = ({ scheduled, isFetching, history }) => {
  const redirectToScheduleActivity = () => {
    history.push("/schedule-activity");
  };

  return (
    <div className="ScheduledActivities">
      <span className="ScheduledActivities-header">{scheduledActivities}</span>
      <Activities noActivitiesText={noScheduledActivities} activities={scheduled} isFetching={isFetching} />
      <Button text={scheduleActivity} icon={iconPlus} onClick={redirectToScheduleActivity} className={"ScheduledActivities-button"} />
    </div>
  );
};

const mapStateToProps = state => {
  const {
    activitiesStore: { scheduled, isFetching }
  } = state;

  return {
    scheduled,
    isFetching
  };
};

export default withRouter(connect(mapStateToProps)(ScheduledActivities));
