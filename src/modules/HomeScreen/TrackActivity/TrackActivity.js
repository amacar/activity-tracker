import React from "react";

import "./TrackActivity.css";
import { Home } from "../../../strings/en.js";

const { trackActivity } = Home;

const TrackActivity = () => {
  return (
    <div className="TrackActivity">
      <span className="TrackActivity-header">{trackActivity}</span>
      <div className="TrackActivity-carousel">Carousel</div>
    </div>
  );
};

export default TrackActivity;
