import React from "react";

import "./Header.css";
import logoHeader from "../../../assets/logo_header_wide.svg";

const Header = () => {
  return (
    <header className="Home-header center">
      <img src={logoHeader} alt="header logo" />
    </header>
  );
};

export default Header;
