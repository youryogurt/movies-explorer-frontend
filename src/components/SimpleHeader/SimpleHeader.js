import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function SimpleHeader() {
  return (
    <header className="simple-header">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Белый смайлик с улыбкой без глаз в зеленом квадрате с закругленными краями"
        />
      </Link>
    </header>
  );
}

export default SimpleHeader;
