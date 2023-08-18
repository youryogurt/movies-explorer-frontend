import React, { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [foundMovies, setFoundMovies] = useState([]); // массив найденных фильмов по запросу
  const [isCheckbox, setIsCheckbox] = useState(false); // состояние чекбокса короткометражек
  
  const saveSearchQuery = true;

  const [isLoading, setIsLoading] = useState(true); // состояние загрузки
  const [error, setError] = useState(null); // состояние ошибки

  // фильтрация фильмов (короткометражки)
  function filterShortMovies(foundMovies) {
    return foundMovies.filter((movie) => movie.duration <= 40);
  }

  // переключение чекбокса короткометражек
  function handleShortMoviesCheckbox(checked, query) {
    setIsCheckbox(checked);
    localStorage.setItem("shortfilms", checked);
    handleFilterMovies(query, checked);
  }

  // установка положения чекбокса
  useEffect(() => {
    console.log(localStorage.getItem("shortfilms"));
    setIsCheckbox(localStorage.getItem("shortfilms") === "true");
    }, []);

  // поиск фильмов
  function handleSearch(query) {
    const initialMovies = props.movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const newQuery = query.toLowerCase().trim();
      return movieRu.indexOf(newQuery) !== -1;
    });
    return initialMovies;
  }

  function handleFilterMovies(query, short) {
    setIsLoading(true);
    setError(null);

    const moviesList = handleSearch(query);
    // setFoundMovies(moviesList);
    console.log("all list", moviesList);
    setFoundMovies(short ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem("filtredmovies", short ? JSON.stringify(filterShortMovies(moviesList)) : JSON.stringify(moviesList));
    setIsLoading(false);
  }

  function handleSearchFormSubmit(query) {
    localStorage.setItem("shortfilms", isCheckbox);
    handleFilterMovies(query, isCheckbox);
  }

  // отрисовка тех фильмов, которые я искала ранее, при перезагрузке страницы
  useEffect(() => {
    if (localStorage.getItem("filtredmovies")) {
      const moviesList = JSON.parse(localStorage.getItem("filtredmovies"));
      setFoundMovies(moviesList);
      setFoundMovies(isCheckbox ? filterShortMovies(moviesList) : moviesList);
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        isCheckbox={isCheckbox}
        onCheckbox={handleShortMoviesCheckbox}
        saveSearchQuery
      />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      ) : foundMovies.length === 0 ? (
        <p className="movies__error">Ничего не найдено</p>
      ) : (
        <MoviesCardList
          isSavedMovies={props.isSavedMovies}
          movies={foundMovies}
          onClick={props.onClick}
        />
      )}
    </div>
  );
}

export default Movies;
