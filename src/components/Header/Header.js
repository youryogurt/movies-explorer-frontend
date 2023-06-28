import React from "react";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  let logoClassName = "logo";
  // let headerClassName = "header__auth";

  if (location.pathname === "/") {
    logoClassName = "logo__home";
  } else if (
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile" ||
    location.pathname === "/signin" ||
    location.pathname === "/signup"
  ) {
    logoClassName = "logo__routes";
  }
  // } else if (location.pathname === "/signin" || location.pathname === "/signup") {
  //   headerClassName = "header__auth";
  // }

  return (
    // <header className={`header ${headerClassName}`}>
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          // className={`logo ${logoClassName}`}
          src={logo}
          alt="Белый смайлик с улыбкой без глаз в зеленом квадрате с закругленными краями"
        />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
