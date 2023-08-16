import React, { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [foundMovies, setFoundMovies] = useState(props.isSavedMovies); // массив найденных фильмов по запросу
  const [isCheckbox, setIsCheckbox] = useState(false); // состояние чекбокса короткометражек

  const [isLoading, setIsLoading] = useState(true); // состояние загрузки
  const [error, setError] = useState(null); // состояние ошибки

  // фильтрация фильмов (короткометражки)
  function filterShortMovies(foundMovies) {
    return foundMovies.filter((movie) => movie.duration <= 40);
  }

  // переключение чекбокса короткометражек
  function handleShortMoviesCheckbox(checked, query) {
    setIsCheckbox(checked);
    if (!checked) {
      setFoundMovies(filterShortMovies(foundMovies));
    } else {
      setFoundMovies(foundMovies);
    }
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
    console.log("query", query);
    console.log("saved movies", props.isSavedMovies);
    const initialMovies = props.isSavedMovies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const newQuery = query.toLowerCase().trim();
      console.log("movieRu", movieRu);
      console.log("newQuery", newQuery);
      console.log(movieRu.indexOf(newQuery) !== -1);
      return movieRu.indexOf(newQuery) !== -1;
    });
    console.log("initialMovies", initialMovies);
    return initialMovies;
  }

  function handleFilterMovies(query, short) {
    setIsLoading(true);
    setError(null);

    const moviesList = handleSearch(query);
    // setFoundMovies(moviesList);
    setFoundMovies(short ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem("filtredmovies", JSON.stringify(moviesList));
    setIsLoading(false);
  }

  function handleSearchFormSubmit(query) {
    localStorage.setItem("shortfilms", isCheckbox);
    handleFilterMovies(query, isCheckbox);
  }

  return (
    <div className="saved-movies__section">
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        isCheckbox={isCheckbox}
        onCheckbox={handleShortMoviesCheckbox}
      />
      {/* {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      ) : foundMovies.length === 0 ? (
        <p className="movies__error">Ничего не найдено</p>
      ) : ( */}
        <MoviesCardList
          // onClick={props.onClick}
          // onClick={props.onClick}
          // isSavedMovies={props.isSavedMovies}
          isSavedMovies={props.isSavedMovies}
          movies={foundMovies}
          onClick={props.onClick}
        />
      {/* )} */}
    </div>
  );
}

export default SavedMovies;
