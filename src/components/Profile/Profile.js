import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useFormValidation.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { values, handleChange, errors, isValid, resetForm } = useValidation({
    name: "",
    email: "",
  });

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm({ email: currentUser.email, name: currentUser.name });
  }, [currentUser, resetForm]);
  
  useEffect(() => {
    let isActiveButton = (currentUser.name !== values.name) || (currentUser.email !== values.email);
    setIsDisabled(isActiveButton);
  }, [values, currentUser, isValid])

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.handleUpdateUser(values.name, values.email);
    }
  }

  return (
    <div className="profile__section">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <label className="profile__label">
          Имя
          <input
            className="profile__input"
            required
            onChange={handleChange}
            id="name"
            type="text"
            name="name"
            value={values.name || ""}
            placeholder={currentUser.name}
          />
          <span className="profile__form-error">{errors.name}</span>
        </label>
        <label className="profile__label">
          E-mail
          <input
            className="profile__input form__input_last"
            required
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            minLength={4}
            value={values.email || ""}
            placeholder={currentUser.email}
            pattern="\S+@\S+\.\S+"
          />
          <span className="form__error">{errors.email}</span>
        </label>
      </form>
      <button
        className={`profile__button ${!isValid && errors ? 'profile__button_disabled' : ''}`}
        disabled={!isValid || !isDisabled}
      >Редактировать</button>
      <Link className="profile__link" to="/">
        Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Profile;
