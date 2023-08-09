import React, { useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useFormValidation.js";

function Register(props) {

  const { values, handleChange, errors, isValid } =
  useValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.handleRegister(values.name, values.email, values.password);
    }
  }

  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <h2 className="form__title">Добро пожаловать!</h2>
      <label className="form__label">
        Имя
        <input
          className="form__input"
          required
          onChange={handleChange}
          id="name"
          type="name"
          name="name"
          value={values.name || ""}
        />
        <span className="form__error">{errors.name}</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          required
          onChange={handleChange}
          id="email"
          type="email"
          name="email"
          value={values.email || ""}
          pattern="\S+@\S+\.\S+"
        />
        <span className="form__error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          className="form__input form__input_last"
          required
          onChange={handleChange}
          id="password"
          type="password"
          name="password"
          value={values.password || ""}
        />
        <span className="form__error">{errors.password}</span>
      </label>
      <button className="form__button" disabled={!isValid}>
        Зарегистрироваться
      </button>
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
