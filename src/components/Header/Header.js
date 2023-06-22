import React from 'react';
import logo from '../../images/logo.svg';
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Header() {
  // const location = useLocation();
  
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Белый смайлик с улыбкой без глаз в зеленом квадрате с закругленными краями" />
      </Link>
      {/* <Routes>
      <Route
          path="/"
          element={
            <>
              <Link to="/signup" className="header__link">Регистрация</Link>
              <Link to="/signin" className="header__link">Вход</Link>
            </>
          }
        />
        <Route
          path={["/movies", "/saved-movies", "/profile"]}
          element={
            <>
              <Link to="/movies" className="header__link">Фильмы</Link>
              <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
              <Link to="/profile" className="header__link">Аккаунт</Link>
            </>
          }
        />
      </Routes> */}
    </header>
  )
}

export default Header;