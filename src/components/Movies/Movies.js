import React, { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
// import { getMovies } from "../../utils/MoviesApi.js";

function Movies(props) {
  const [foundMovies, setFoundMovies] = useState([]); // массив найденных фильмов по запросу
  const [isCheckbox, setIsCheckbox] = useState(false); // состояние чекбокса короткометражек

  const [isLoading, setIsLoading] = useState(true); // состояние загрузки
  const [error, setError] = useState(null); // состояние ошибки

  // получение списка фильмов
  // function getMoviesList() {
  //   getMovies()
  //     .then((res) => {
  //       setFoundMovies(res);
  //       setFilteredMovies(res);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // const movies = getMoviesList();

  // фильтрация фильмов (короткометражки)
  function filterShortMovies(foundMovies) {
    return foundMovies.filter((movie) => movie.duration <= 40);
  }

  // переключение чекбокса короткометражек
  function handleShortMoviesCheckbox(checked) {
    setIsCheckbox(checked);
    if (!checked) {
      setFoundMovies(filterShortMovies(foundMovies));
    } else {
      setFoundMovies(foundMovies);
    }
    localStorage.setItem("shortfilms", checked);
  }

  // установка положения чекбокса
  useEffect(() => {
    console.log(localStorage.getItem("shortfilms"))
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
    setFoundMovies(moviesList);
    setFoundMovies(short ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem("filtredmovies", JSON.stringify(moviesList));
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
        movies={foundMovies}
        onClick={props.onClick}
        />
      )}
    </div>
  );
}

export default Movies;
