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
  const dayMonthHourFormat = "dddd, MMMM Do h:mma";
  return (
    <div className="DateTimeDropdown">
      <input
        type="datetime-local"
        min={moment()
          .format()
          .substr(0, 16)}
        onChange={onDateTimeChange}
      />
      <select value={start} onChange={onDateTimeChange}>
        <option hidden />
        {options.map(option => (
          <option key={option} value={option}>
            {moment(option).format(dayMonthHourFormat)}
          </option>
        ))}
      </select>
      <div className="DateTimeDropdown-input">
        <div className="DateTimeDropdown-input-text">
          {start ? moment(start).format(dayMonthHourFormat) : defaultText}
        </div>
      </div>
      <div className="DateTimeDropdown-button">
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
};

export default DateTimeDropdown;
