import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <form className="profile__section">
      <h2 className="profile__title">Привет, Жанна!</h2>
      <label className="profile__label">Имя
        <input className="profile__input" defaultValue="Жанна"/>
      </label>
      <label className="profile__label">E-mail
        <input className="profile__input" defaultValue="zhanna.gurt@gmail.com"/>
      </label>
      <button className="profile__button">Редактировать</button>
      <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
    </form>
  )
}

export default Profile;