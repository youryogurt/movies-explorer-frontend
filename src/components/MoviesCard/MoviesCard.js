import React from 'react';
import { ReactComponent as SaveButtonIcon } from '../../images/save-button.svg';

function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">Наззвание фильма</h4>
          <p className="movies-card__duration">длительность фильма</p>
        </div>
        <button className="movies-card__save-button">
          <SaveButtonIcon/>
        </button>
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
  )
}

export default MoviesCard;