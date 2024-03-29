import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useFormValidation.js";

function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useValidation({
    email: "",
    password: "",
  });

  useEffect(() => {
    resetForm({ email: "", password: "" });
  }, [resetForm]);


  async function handleSubmit(e) {
    e.preventDefault();
    if (!isSubmitting && isValid) {
      setIsSubmitting(true);
      try {
        await props.handleLogin(values.email, values.password);
      } catch (error) {
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          required
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          minLength={4}
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
          name="password"
          type="password"
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
        // disabled={!isValid}
        disabled={!isValid || isSubmitting}
      >
        Войти
      </button>
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
