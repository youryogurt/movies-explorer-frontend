import React, { useState } from 'react';
// import { ReactComponent as SaveButtonIcon } from '../../images/save-button.svg';
import savedFilmIcon from "../../images/saved-film-icon.svg";
import unsavedFilmIcon from "../../images/save-button.svg";

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">Наззвание фильма</h4>
          <p className="movies-card__duration">длительность фильма</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="Обложка фильма" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
  )
}

export default MoviesCard;