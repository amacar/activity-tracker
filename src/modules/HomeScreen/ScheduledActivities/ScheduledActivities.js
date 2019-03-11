import React from "react";

import "./ScheduledActivities.css";
import Button from "../../../components/Button/Button";
import Activities from "../../../components/Activities/Activities";
import iconPlus from "../../../assets/icn_plus.svg";
import { Home } from "../../../strings/en.js";

const { scheduledActivities, scheduleActivity, noScheduledActivities } = Home;

const ScheduledActivities = () => {
  return (
    <div className="ScheduledActivities">
      <span className="ScheduledActivities-header">{scheduledActivities}</span>
      <Activities noActivitiesText={noScheduledActivities} />
      <Button text={scheduleActivity} icon={iconPlus} />
    </div>
  );
};

export default ScheduledActivities;
