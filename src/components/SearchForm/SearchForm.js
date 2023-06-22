import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { ReactComponent as SearchButtonIcon } from '../../images/search-arrow.svg';
import search from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <section className="search-form__section">
      <img className="search-form__icon" alt="Лупа" src={search} />
      <form className="search-form">
        <input
            type="text"
            placeholder="Фильм"
            className="search-input"
        />
        <button className="search-form__button">
          <SearchButtonIcon className="search-button-icon" />
        </button>
      </form>
      <div className="search-form__vertical-line"></div>
      <FilterCheckbox/>
    </section>
  )
}

export default SearchForm;