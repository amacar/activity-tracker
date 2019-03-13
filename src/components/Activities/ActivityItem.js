import React from "react";

import "./ActivityItem.css";

const ActivityItem = ({ icon, text }) => {
  return (
    <div className="ActivityItem">
      <div className="ActivityItem-icon">
        <img src={icon} alt="" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default ActivityItem;
