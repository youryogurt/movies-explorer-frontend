import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import search from "../../images/search-icon.svg";

function SearchForm(props) {
  const [query, setQuery] = useState("");
  const [short, setShort] = useState(false);
  
  // фильтрация короткометражек
  function handleShortChange(e) {
    e.preventDefault();
    setShort(!short);
    props.handleShortMoviesCheckbox(short);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  // сабмит формы поиска
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearchFormSubmit(query);
  }

  return (
    <section className="search-form__section">
      <div className="search-form">
        <img className="search-form__icon" alt="Лупа" src={search} />
        <form className="search-form__container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Фильм" className="search-input" required onChange={handleChange} />
          <div className="search-form__items">
            <button type="submit" className="search-form__button"></button>
            <div className="search-form__line"></div>
            <FilterCheckbox
              className="search-form__checkbox"
              text="Короткометражки"
              short={short}
              onChange={handleShortChange}
            />
          </div>

          <div className="search-form__items_mobile">
            <button type="submit" className="search-form__button"></button>
          </div>
        </form>
      </div>
      <div className="search-form__mobile-checkbox">
        <FilterCheckbox
          className="search-form__checkbox"
          text="Короткометражки"
        />
      </div>
    </section>
  );
}

export default SearchForm;
