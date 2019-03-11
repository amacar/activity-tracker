import React from "react";

import "./ActivityCard.css";

const ActivityCard = props => {
  const { activity } = props;

  return (
    <div className="ActivityCard">
      <img src={activity.src} alt="" />
      <div className="ActivityCard-icon">
        <img src={activity.icon} alt="" />
      </div>
      <div className="ActivityCard-text">
        <span className="ActivityCard-header">{activity.text}</span>
        <span className="ActivityCard-subtext">{activity.subtext}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
