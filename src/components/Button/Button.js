import React from "react";

import "./Button.css";

const Button = ({ icon, text, onClick }) => {
  return (
    <div className="Button center" onClick={onClick}>
      {icon && <img className="Button-icon" src={icon} alt="" />}
      {text}
    </div>
  );
};

export default Button;