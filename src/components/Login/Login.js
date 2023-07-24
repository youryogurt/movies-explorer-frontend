import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="login__section">
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">
        E-mail
        <input className="form__input" required />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input className="form__input form__input_last" required />
        <span className="form__error"></span>
      </label>
      <button className="form__button">Войти</button>
      <p className="form__question">
        Ещё не зарегистрированы?
        <Link className="form__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
