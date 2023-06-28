import React from "react";
// import { Link } from "react-router-dom";

function Edit() {
  return (
    <form className="login__section">
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">Имя
        <input className="form__input"/>
        <span className="form__error"></span>
      </label>
      <label className="form__label">E-mail
        <input className="form__input form__input_last"/>
        <span className="form__error"></span>
      </label>
      <button className="form__button">Сохранить</button>
      {/* <button className="form__button">Войти</button> */}
      {/* <p className="form__question">Ещё не зарегистрированы? */}
        {/* <Link className="form__link" to="/signup">Регистрация</Link> */}
      {/* </p> */}
  </form>
  )
}

export default Edit;