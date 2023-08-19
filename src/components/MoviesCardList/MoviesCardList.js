import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

import {
  SCREEN_L,
  SCREEN_M,
  SCREEN_S,
  MOVIES_PER_PAGE_L,
  MOVIES_PER_PAGE_M,
  MOVIES_PER_PAGE_S,
} from "../../utils/constants";

function MoviesCardList(props) {
  const location = useLocation();
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.addEventListener("resize", getShownMovies);
  //   }, 1000);
  // });

  useEffect(() => {
    // добавляем обработчик события resize с задержкой при монтировании
    const resizeTimeout = setTimeout(() => {
      window.addEventListener("resize", getShownMovies);
    }, 1000);
    // функция, которая будет вызвана при размонтировании компонента
    return () => {
      // удаляем обработчик события resize при размонтировании
      window.removeEventListener("resize", getShownMovies);
      // очищаем timeout при размонтировании, чтобы избежать утечек памяти
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section className="movies-card-list-section">
      {location.pathname === "/movies" && (
        <>
          <ul className="movies-card-list">
            {props.movies.slice(0, shownMovies).map((movie) => {
              const isSaved = props.isSavedMovies.find(
                ({ movieId }) => movieId === movie.id
              );
              // console.log(props.isSavedMovies);
              return (
                <MoviesCard
                  key={props.isSavedFilms ? movie._id : movie.id}
                  movie={movie}
                  isSavedMovies={props.isSavedMovies}
                  savedMovies={props.savedMovies}
                  onCardClick={props.onCardClick}
                  onCardSave={props.onCardSave}
                  savedId={isSaved?._id}
                  isSaved={!!isSaved}
                  setIsSaved={setIsSaved}
                  // saved={props.isSavedMovies}
                  // saved={getSavedMovies(props.savedMovies, movie)}
                  onClick={props.onClick}
                />
              );
            })}
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

      {location.pathname === "/saved-movies" && (
        <ul className="movies-card-list">
          {props.movies.slice(0, shownMovies).map((movie) => (
            <MoviesCard
              // key={props.isSavedFilms ? movie._id : movie.id}
              key={movie.id}
              movie={movie}
              isSavedMovies={props.isSavedMovies}
              savedMovies={props.savedMovies}
              onCardClick={props.onCardClick}
              onCardSave={props.onCardSave}
              isSaved={isSaved}
              setIsSaved={setIsSaved}
              saved={props.isSavedMovies}
              // saved={getSavedMovies(props.savedMovies, movie)}
              // onClick={props.onClick}
              onClick={props.onClick}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
