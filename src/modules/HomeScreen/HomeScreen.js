import React, { Component, Fragment } from "react";

import Header from "./Header/Header";
import TrackActivity from "./TrackActivity/TrackActivity";
import ScheduledActivities from "./ScheduledActivities/ScheduledActivities";
import TrackedActivities from "./TrackedActivities/TrackedActivities";
import "./HomeScreen.css";

class HomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="Home-content">
          <TrackActivity />
          <ScheduledActivities />
          <TrackedActivities />
        </div>
      </Fragment>
    );
  }
}

export default HomeScreen;
