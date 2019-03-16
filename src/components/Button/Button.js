import React from "react";

import "./Button.css";

const Button = ({ icon, text, onClick, className }) => {
  return (
    <div
      className={`Button center${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {icon && <img className="Button-icon" src={icon} alt={text} />}
      {text}
    </div>
  );
};

export default Button;
