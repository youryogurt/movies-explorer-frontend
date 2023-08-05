import React from "react";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  if (
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/edit"
  ) {
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
  } else {
    return (
      <header className="header">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Белый смайлик с улыбкой без глаз в зеленом квадрате с закругленными краями"
          />
        </Link>
        <Navigation />
      </header>
    );
  }
}

export default Header;
