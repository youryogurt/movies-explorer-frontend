import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useFormValidation.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile(props) {
  const { values, handleChange, errors, isValid, resetForm } = useValidation({
    name: "",
    email: "",
  });

  const currentUser = React.useContext(CurrentUserContext);
  const [isNewValues, setIsNewValues] = useState(false);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsNewValues(false);
    } else {
      setIsNewValues(true);
    }
  }, [currentUser.name, currentUser.email, values]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.handleRegister(values.name, values.email);
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
      <button className="profile__button">Редактировать</button>
      <Link className="profile__link" to="/">
        Выйти из аккаунта
      </Link>
    </div>
  );
}

export default Profile;
