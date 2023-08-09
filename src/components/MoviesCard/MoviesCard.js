import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function MoviesCard(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);

  // const isOwn = card.owner === currentUser._id;
  // const isLiked = card.likes.some(id => id === currentUser._id);

  const cardSaveButtonClassName = `movies-card__unsave-film-button ${
    isSaved && "movies-card__save-film-button"
  }`;

  // function handleCardClick() {
  //   onCardClick(card);
  // }

  // function handleSaveClick() {
  //   onCardSave(card);
  //   setIsSaved(!isSaved);
  // }

  function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  function openTrailer() {
    window.open(props.card.trailerLink, "_blank");
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">{props.card.name.nameRU}</h4>
          <p className="movies-card__duration">{convertDuration(props.card.duration)}</p>
        </div>
        <button
          className={`${cardSaveButtonClassName}`}
          type="button"
          // onClick={handleSaveClick}
        ></button>
        {/* {isSaved ? (
          <button
            type="button"
            className="movies-card__unsave-film-button"
            onClick={() => setIsSaved(!isSaved)}
          ></button>
        ) : (
          <button
            type="button"
            className="movies-card__save-film-button"
            onClick={() => setIsSaved(!isSaved)}
          ></button>
        )} */}
      </div>
      <img
        className="movies-card__image"
        src={`https://api.nomoreparties.co${props.card.image.url}`}
        alt={props.card.nameRU}
        onClick={openTrailer}
      />
    </div>
  );
}

export default MoviesCard;
