import React from "react";

import "./Dropdown.css";
import dropdownIcon from "../../assets/icn_dropdown.svg";

const Dropdown = ({ selected, options, onChange }) => {
  return (
    <div className="Dropdown">
      <select value={selected} onChange={onChange}>
        {options.map(option => (
          <option key={option.val} value={option.val}>
            {option.text}
          </option>
        ))}
      </select>
      <div className="Dropdown-input">
        <div className="Dropdown-input-text">
          {options.find(option => option.val === selected).text}
        </div>
      </div>
      <div className="Dropdown-button">
        <img src={dropdownIcon} alt="dropdown icon" />
      </div>
    </div>
  );
};

export default Dropdown;
