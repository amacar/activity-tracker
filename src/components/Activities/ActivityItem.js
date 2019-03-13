import React from "react";

import "./ActivityItem.css";

const ActivityItem = ({ icon, text }) => {
  return icon ? (
    <div className="ActivityItem">
      <div className="ActivityItem-icon">
        <img src={icon} alt="" />
      </div>
      <span>{text}</span>
    </div>
  ) : (
    <div className="ActivityItem">
      <div className="ActivityItem-icon-blank" />
    </div>
  );
};

export default ActivityItem;
