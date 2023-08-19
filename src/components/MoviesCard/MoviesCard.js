import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();

  const cardSaveButtonClassName = `movies-card__unsave-film-button ${
    props.isSaved && "movies-card__save-film-button"
  }`;

  function handleSaveMovie() {
    console.log(!props.isSaved, "состояние сохранения до клика лайка");
    // setIsSaved(!isSaved);
    props.onClick({ ...props.movie, movieId: props.savedId }, props.isSaved);
    console.log(!props.isSaved, "состояние сохранения после клика лайка");
  }

  async function handleDeleteMovie() {
    console.log(props.movie, "данные карточки при удалении");
    setIsDeleting(true);
    await props.onClick(props.movie);
    setIsDeleting(false);
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
        {location.pathname === "/movies" && (
          <button
          className={`${cardSaveButtonClassName}`}
          type="button"
          onClick={handleSaveMovie}
          // onDelete={handleDeleteMovie}
        ></button>
        )}

        {location.pathname === "/saved-movies" && (
          <button
          className="movies-card__delete-film-button"
          type="button"
          disabled={isDeleting}
          onClick={handleDeleteMovie}
        ></button>
        )}

      </div>
      <img
        className="movies-card__image"
        src={location.pathname === "/saved-movies" ? props.movie.image : `https://api.nomoreparties.co${props.movie.image.url}`}
        // src={props.movie.image.url}
        alt={props.movie.nameRU}
        onClick={openTrailer}
      />
    </div>
  );
}

export default MoviesCard;
