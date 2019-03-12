import React from "react";
import Slider from "react-slick";

import "./TrackActivity.css";
import { Home } from "../../../strings/en";
import { Activities } from "../../../util/constants";
import ActivityCard from "./ActivityCard";

const { trackActivity } = Home;

const TrackActivity = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  };

  const getActivities = () =>
    Object.entries(Activities).map(([key, activity]) => {
      return {
        key,
        src: activity.img,
        icon: activity.icon,
        text: activity.text,
        subtext: activity.subtext
      };
    });

  return (
    <div className="TrackActivity">
      <span className="TrackActivity-header">{trackActivity}</span>
      <div className="TrackActivity-carousel">
        <Slider {...settings}>
          {getActivities().map(activity => (
            <ActivityCard key={activity.key} activity={activity} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrackActivity;
