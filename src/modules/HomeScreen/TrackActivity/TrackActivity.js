import React from "react";
import Slider from "react-slick";

import "./TrackActivity.css";
import { Home } from "../../../strings/en.js";
import surfingImg from "../../../assets/surfing.png";
import hikingImg from "../../../assets/hiking.png";
import weightsImg from "../../../assets/weights.png";
import spinningImg from "../../../assets/spinning.png";
import surfingIcon from "../../../assets/icn_surfing.svg";
import hikingIcon from "../../../assets/icn_hiking.svg";
import weightsIcon from "../../../assets/icn_weights.svg";
import spinningIcon from "../../../assets/icn_spin.svg";

const { trackActivity, surfing, surfingSub, hiking, hikingSub, weights, weightsSub, spinning, spinningSub } = Home;

const TrackActivity = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  };

  const getActivities = () => {
    const activities = [
      { src: surfingImg, icon: surfingIcon, text: surfing, subtext: surfingSub },
      { src: hikingImg, icon: hikingIcon, text: hiking, subtext: hikingSub },
      { src: weightsImg, icon: weightsIcon, text: weights, subtext: weightsSub },
      { src: spinningImg, icon: spinningIcon, text: spinning, subtext: spinningSub }
    ];
    return activities;
  };

  return (
    <div className="TrackActivity">
      <span className="TrackActivity-header">{trackActivity}</span>
      <div className="TrackActivity-carousel">
        <Slider {...settings}>
          {getActivities().map(activity => (
            <div>
              <img src={activity.src} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrackActivity;
