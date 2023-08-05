import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

function Register({ onRegister}) {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }

  // function handleChangeEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function handleChangePassword(e) {
  //   setPassword(e.target.value);
  // }

  const { formValues, errors, isValid, handleChange, resetForm } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formValues.name, formValues.email, formValues.password);
    // resetForm();
  };

  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <h2 className="form__title">Добро пожаловать!</h2>
      <label className="form__label">
        Имя
        <input className="form__input" required onChange={handleChange}/>
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        E-mail
        <input className="form__input" required onChange={handleChange} />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input className="form__input form__input_last" required onChange={handleChange} />
        <span className="form__error">Что-то пошло не так...</span>
      </label>
      <button className="form__button" disabled={!isValid}>Зарегистрироваться</button>
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
