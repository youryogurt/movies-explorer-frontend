import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BurgerOpenButton } from "../../images/burger-icon.svg";
import { ReactComponent as BurgerCloseButton } from "../../images/burger-close-icon.svg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(true);
  const location = useLocation();

  return (
    <nav className="navigation">
      {location.pathname === "/" && (
        <div className="navigation-start-page">
          <Link to="/signup" className="navigation__link">
            <button className="navigation__button navigation__button_signup">
              Регистрация
            </button>
          </Link>
          <Link to="/signin" className="navigation__link">
            <button className="navigation__button navigation__button_signin">
              Войти
            </button>
          </Link>
        </div>
      )}

      {location.pathname === "/movies" && (
        <div
          className={
            isBurgerMenuOpen
              ? [
                  "navigation-movies-page",
                  "navigation-movies-page_active",
                ].join(" ")
              : "navigation-movies-page"
          }
        >
          <div className="navigation__links">
            <Link to="/" className="navigation__link navigation__link_mobile">
              <button className="navigation__button navigation__button_films">
                Главная
              </button>
            </Link>
            <Link to="/movies" className="navigation__link">
              <button className="navigation__button navigation__button_films">
                Фильмы
              </button>
            </Link>
            <Link to="/saved-movies" className="navigation__link">
              <button className="navigation__button navigation__button_saved_films">
                Сохранённые фильмы
              </button>
            </Link>
          </div>
          <Link
            to="/profile"
            className="navigation__link navigation__link_last"
          >
            <button className="navigation__button navigation__button_profile">
              Аккаунт
            </button>
          </Link>
          <div
            className="mobile-burger-button"
            onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
          >
            {isBurgerMenuOpen ? (
              <BurgerCloseButton className="burger__icon" />
            ) : (
              <BurgerOpenButton className="burger__icon" />
            )}
          </div>
        </div>
      )}

      {location.pathname === "/saved-movies" && (
        <div className="navigation-movies-page">
          <div>
            <Link to="/movies" className="navigation__link">
              <button className="navigation__button navigation__button_films">
                Фильмы
              </button>
            </Link>
            <Link to="/saved-movies" className="navigation__link">
              <button className="navigation__button navigation__button_saved_films">
                Сохранённые фильмы
              </button>
            </Link>
          </div>
          <Link to="/profile" className="navigation__link">
            <button className="navigation__button navigation__button_profile">
              Аккаунт
            </button>
          </Link>
        </div>
      )}

      {location.pathname === "/profile" && (
        <div className="navigation-movies-page">
          <div>
            <Link to="/movies" className="navigation__link">
              <button className="navigation__button navigation__button_films">
                Фильмы
              </button>
            </Link>
            <Link to="/saved-movies" className="navigation__link">
              <button className="navigation__button navigation__button_saved_films">
                Сохранённые фильмы
              </button>
            </Link>
          </div>
          <Link to="/profile" className="navigation__link">
            <button className="navigation__button navigation__button_profile">
              Аккаунт
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
