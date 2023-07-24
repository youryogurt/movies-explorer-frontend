import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form className="login__section">
      <h2 className="form__title">Добро пожаловать!</h2>
      <label className="form__label">
        Имя
        <input className="form__input" required />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        E-mail
        <input className="form__input" required />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input className="form__input form__input_last" required />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
      <button className="form__button">Зарегистрироваться</button>
      <p className="form__question">
        Уже зарегистрированы?
        <Link className="form__link" to="/signin">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
