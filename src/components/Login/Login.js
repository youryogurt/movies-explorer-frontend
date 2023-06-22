import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="login__section">
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">E-mail
        <input className="form__input"/>
      </label>
      <label className="form__label">Пароль
        <input className="form__input"/>
      </label>
      <button className="form__button">Войти</button>
      <p className="form__question">Ещё не зарегистрированы?
        <Link className="form__link" to="/signup">Регистрация</Link>
      </p>
  </form>
  )
}

export default Login;