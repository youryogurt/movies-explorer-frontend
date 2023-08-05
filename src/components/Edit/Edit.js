import React, { useEffect, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Edit(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      email,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <h2 className="form__title">Рады видеть!</h2>
      <label className="form__label">
        Имя
        <input className="form__input" required onChange={handleNameChange} />
        <span className="form__error"></span>
      </label>
      <label className="form__label">
        E-mail
        <input className="form__input form__input_last" required onChange={handleEmailChange}/>
        <span className="form__error"></span>
      </label>
      <button className="form__button">Сохранить</button>
    </form>
  );
}

export default Edit;
