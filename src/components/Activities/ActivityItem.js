import React from "react";

import "./ActivityItem.css";

const ActivityItem = ({ icon, text, className, onClick, selected }) => {
  return icon ? (
    <div className={className ? `ActivityItem ${className}` : "ActivityItem"} onClick={onClick}>
      <div className={`ActivityItem-icon${selected ? " selected" : ""}`}>
        <img src={icon} alt="" />
      </div>
      <span>{text}</span>
    </div>
  ) : (
    <div className={className ? `ActivityItem ${className}` : "ActivityItem"}>
      <div className="ActivityItem-icon-blank" />
    </div>
  );
};

export default ActivityItem;
