import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useFormValidation.js";

function Register(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useValidation({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    resetForm({ name: "", email: "", password: "" });
  }, [resetForm]);

  async function handleSubmit(e) {
    console.log("значение до сабмита", isSubmitting);
    e.preventDefault();
    if (!isSubmitting && isValid) {
      setIsSubmitting(true);
      console.log("значение перед сабмитом", isSubmitting);
      try {
        await props.handleRegister(values.name, values.email, values.password);
      } finally {
        console.log("in finally");
        setIsSubmitting(false);
      }
    }
  }

  console.log("значение вне", isSubmitting);

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
          type="text"
          name="name"
          value={values.name || ""}
          pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
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
          minLength={8}
        />
        <span className="form__error">{errors.password}</span>
      </label>
      {props.error && <span className="form__error">{props.error}</span>}
      <button
        // className={`form__button ${
        //   !isValid && errors ? "form__button_disabled" : ""
        // }`}
        className={`form__button ${
          !isValid || isSubmitting ? "form__button_disabled" : ""
        }`}
        type="submit"
        // disabled={isSubmitting}
        disabled={!isValid || true}
      >
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
