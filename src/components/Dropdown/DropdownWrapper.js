import React from "react";

import "./DropdownWrapper.css";

const DropdownWrapper = ({ text, children }) => {
  return (
    <div className="DropdownWrapper">
      <div className="DropdownWrapper-header">{text}</div>
      {children}
    </div>
  );
};

export default DropdownWrapper;
