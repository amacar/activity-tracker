import React from "react";
import moment from "moment";

import "./DateTimeDropdown.css";
import searchIcon from "../../assets/icn_search_light.svg";

const DateTimeDropdown = ({
  start,
  options,
  onDateTimeChange,
  defaultText
}) => {
  return (
    <div className="DateTimeDropdown">
      <input
        type="datetime-local"
        min={moment()
          .format()
          .substr(0, 16)}
        onChange={onDateTimeChange}
      />
      <div className="DateTimeDropdown-input">
        <div className="DateTimeDropdown-input-text">
          {start ? moment(start).format("dddd, MMMM Do h:mma") : defaultText}
        </div>
      </div>
      <div className="DateTimeDropdown-button">
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
};

export default DateTimeDropdown;
