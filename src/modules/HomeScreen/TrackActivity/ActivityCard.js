import React from "react";

import "./ActivityCard.css";

const ActivityCard = props => {
  const { activity } = props;

  return (
    <div className="ActivityCard center">
      <img src={activity.src} alt={activity.text} />
      <div className="ActivityCard-icon">
        <img src={activity.icon} alt={activity.text} />
      </div>
      <div className="ActivityCard-text">
        <span className="ActivityCard-header">{activity.text}</span>
        <span className="ActivityCard-subtext">{activity.subtext}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
