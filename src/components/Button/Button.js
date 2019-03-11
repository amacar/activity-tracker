import React from "react";

import "./Button.css";

const Button = props => {
  const { icon, text, onClick } = props;
  return (
    <div className="Button center" onClick={onClick}>
      {icon && <img className="Button-icon" src={icon} alt="" />}
      {text}
    </div>
  );
};

export default Button;
