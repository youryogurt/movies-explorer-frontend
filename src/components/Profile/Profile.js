import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile__section">
    <form className="profile__form">
      <h2 className="profile__title">Привет, Жанна!</h2>
      <label className="profile__label">Имя
        <input className="profile__input" defaultValue="Жанна" />
        <span className="form__error"></span>
      </label>
      <label className="profile__label">E-mail
        <input className="profile__input form__input_last" defaultValue="zhanna.gurt@gmail.com" />
        <span className="form__error"></span>
      </label>
    </form>
    <Link className="profile__button" to="/edit">Редактировать</Link>
    <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
    </div>
  )
}

export default Profile;