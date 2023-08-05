import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">
        E-mail
        <input className="form__input" required onChange={handleChangeEmail} />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input className="form__input form__input_last" required onChange={handleChangePassword} />
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
