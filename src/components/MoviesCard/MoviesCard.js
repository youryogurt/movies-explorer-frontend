import React, { useState, useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function MoviesCard(props) {
  const currentUser = useContext(CurrentUserContext);

  const [isSaved, setIsSaved] = useState(false);

  const cardSaveButtonClassName = `movies-card__unsave-film-button ${
    isSaved && "movies-card__save-film-button"
  }`;

  function handleSaveMovie() {
    setIsSaved(!isSaved);
    props.onMovieLike(props.movie);
  }

  function handleDeleteMovie() {
    props.onMovieDelete(props.movie);
  }

  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  function openTrailer() {
    window.open(props.movie.trailerLink, "_blank");
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">{props.movie.nameRU}</h4>
          <p className="movies-card__duration">{convertDuration(props.movie.duration)}</p>
        </div>
        <button
          className={`${cardSaveButtonClassName}`}
          type="button"
          onClick={handleSaveMovie}
          onDelete={handleDeleteMovie}
        ></button>
      </div>
      <img
        className="movies-card__image"
        src={`https://api.nomoreparties.co${props.movie.image.url}`}
        alt={props.movie.nameRU}
        onClick={openTrailer}
      />
    </div>
  );
}

export default MoviesCard;
