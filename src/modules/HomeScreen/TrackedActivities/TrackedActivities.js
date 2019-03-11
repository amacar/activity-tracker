import React from "react";

import "./TrackedActivities.css";
import Activities from "../../../components/Activities/Activities";
import { Home } from "../../../strings/en.js";

const { trackedActivities, noTrackedActivities } = Home;

const TrackedActivities = () => {
  return (
    <div className="TrackedActivities">
      <span className="TrackedActivities-header">{trackedActivities}</span>
      <Activities noActivitiesText={noTrackedActivities} />
    </div>
  );
};

export default TrackedActivities;
