import React from "react";
import moment from "moment";
import Slider from "react-slick";

import "./ActivitiesRow.css";
import { Activities } from "../../util/constants";
import ActivityItem from "./ActivityItem";

const ActivitiesRow = ({ group: { month, day, dayWord, activities } }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false,
    swipeToSlide: true
  };

  return (
    <div className="ActivitiesRow">
      <span className="ActivitiesRow-month">
        {month.toUpperCase()} {day}
      </span>
      <span className="ActivitiesRow-day">{dayWord}</span>
      <div className="ActivitiesRow-slider">
        <Slider {...settings}>
          {activities.map(activity => (
            <ActivityItem key={activity.id} icon={Activities[activity.type].icon} text={moment(activity.start).format("h:mm A")} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ActivitiesRow;
