import React from "react";
import { connect } from "react-redux";

import "./TrackedActivities.css";
import Activities from "../../../components/Activities/Activities";
import { Home } from "../../../strings/en.js";

const { trackedActivities, noTrackedActivities } = Home;

const TrackedActivities = ({ tracked, isFetching }) => {
  return (
    <div className="TrackedActivities">
      <span className="TrackedActivities-header">{trackedActivities}</span>
      <Activities noActivitiesText={noTrackedActivities} activities={tracked} isFetching={isFetching} />
    </div>
  );
};

const mapStateToProps = state => {
  const {
    activitiesStore: { tracked, isFetching }
  } = state;

  return {
    tracked,
    isFetching
  };
};

export default connect(mapStateToProps)(TrackedActivities);
