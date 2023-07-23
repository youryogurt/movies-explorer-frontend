import React from "react";

function Edit() {
  return (
    <form className="login__section">
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">
        Имя
        <input className="form__input" required />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        E-mail
        <input className="form__input form__input_last" required />
        <span className="form__error"></span>
      </label>
      <button className="form__button">Сохранить</button>
    </form>
  );
}

export default Edit;
