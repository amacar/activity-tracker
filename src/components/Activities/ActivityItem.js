import React from "react";

import "./ActivityItem.css";

const ActivityItem = ({ icon, text, className, onClick, selected }) => {
  return icon ? (
    <div
      className={`ActivityItem${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <div className={`ActivityItem-icon${selected ? " selected" : ""}`}>
        <img src={icon} alt={text} />
      </div>
      <span>{text}</span>
    </div>
  ) : (
    <div className={`ActivityItem${className ? ` ${className}` : ""}`}>
      <div className="ActivityItem-icon-blank" />
    </div>
  );
};

export default ActivityItem;
