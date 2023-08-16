import React, { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search from "../../images/search-icon.svg";
// import useValidation from "../../hooks/useFormValidation.js";

function SearchForm(props) {
  const [isValid, setIsValid] = useState(true);
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  // фильтрация короткометражек
  function handleShortChange(e) {
    props.onCheckbox(e.target.checked, query);
  }

  function handleChange(e) {
    localStorage.setItem("query", e.target.value);
    setQuery(e.target.value);
  }

  function validate() {
setIsValid(Boolean(query));
  }

  // сабмит формы поиска
  function handleSubmit(e) {
    e.preventDefault();
      validate();
      localStorage.setItem("query", query);
      props.handleSearchFormSubmit(query);
    }

  return (
    <>
    <section className="search-form__section">
      <div className="search-form">
        <img className="search-form__icon" alt="Лупа" src={search} />
        <form className="search-form__container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="Фильм"
            className="search-input"
            onChange={handleChange}
          />
          <div className="search-form__items">
            <button type="submit" className="search-form__button"></button>
            <div className="search-form__line"></div>
            <FilterCheckbox
              className="search-form__checkbox"
              text="Короткометражки"
              short={props.isCheckbox}
              onChange={handleShortChange}
            />
          </div>
          <div className="search-form__items_mobile">
            <button type="submit" className="search-form__button"></button>
          </div>
        </form>
      </div>
      {!isValid && <span className="search-form__error">Нужно ввести ключевое слово</span>}
      <div className="search-form__mobile-checkbox">
        <FilterCheckbox
          className="search-form__checkbox"
          text="Короткометражки"
          short={props.isCheckbox}
          onChange={handleShortChange}
        />
      </div>
    </section>
    </>
  );
}

export default SearchForm;
