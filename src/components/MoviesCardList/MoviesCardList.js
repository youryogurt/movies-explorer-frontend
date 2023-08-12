import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import {
  SCREEN_L,
  SCREEN_M,
  SCREEN_S,
  MOVIES_PER_PAGE_L,
  MOVIES_PER_PAGE_M,
  MOVIES_PER_PAGE_S,
} from "../../utils/constants";

function MoviesCardList(props) {
  const [isSaved, setIsSaved] = useState(false);

  const [shownMovies, setShownMovies] = useState(12);

  function getShownMovies() {
    if (window.innerWidth >= SCREEN_L) {
      return MOVIES_PER_PAGE_L;
    } else if (window.innerWidth >= SCREEN_M) {
      return MOVIES_PER_PAGE_M;
    } else if (window.innerWidth >= SCREEN_S) {
      return MOVIES_PER_PAGE_S;
    }
  }

  function handleShowMore() {
    if (window.innerWidth >= SCREEN_L) {
      setShownMovies(shownMovies + 3);
    } else if (window.innerWidth >= SCREEN_M) {
      setShownMovies(shownMovies + 2);
    } else if (window.innerWidth >= SCREEN_S) {
      setShownMovies(shownMovies + 2);
    }
  }

  useEffect(() => {
    getShownMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", getShownMovies);
    }, 1000);
  });

  // function getSavedMovies(savedMovies, movie) {
  //   return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  // }
  
  // просто функция-пустышка пока что
  function getSavedMovies() {
    console.log('hi');
  }

  return (
    <section className="movies-card-list-section">
      {props.isLoading && <Preloader />}
      {props.isNotFoundError && <p className="movies-card-list__error">Ничего не найдено</p>}
      {props.isQueryError && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {!props.isLoading && !props.isNotFoundError && !props.isQueryError && (
        <>
          <ul className="movies-card-list">
            {props.movies.slice(0, shownMovies).map((movie) => (
              <MoviesCard
                key={props.isSavedFilms ? movie._id : movie.id}
                movie={movie}
                isSavedMovies={props.isSavedMovies}
                savedMovies={props.savedMovies}
                onCardClick={props.onCardClick}
                onCardSave={props.onCardSave}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                saved={getSavedMovies(props.savedMovies, movie)}
                onClick={props.onClick}
                onDelete={props.onDelete}
              />
            ))}
          </ul>
          {props.movies.length > shownMovies && (
            <button
              className="more-button"
              type="button"
              onClick={handleShowMore}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
