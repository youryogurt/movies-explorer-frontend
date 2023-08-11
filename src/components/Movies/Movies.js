import React, { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/MoviesApi.js";

function Movies(props) {
  const [foundMovies, setFoundMovies] = useState([]); // массив найденных фильмов по запросу
  const [isCheckbox, setIsCheckbox] = useState(false); // состояние чекбокса короткометражек
  const [filteredMovies, setFilteredMovies] = useState([]); // фильмы, полученные в результате фильтрации (чекбокс)
  const [isNotFoundError, setIsNotFoundError] = useState(false); // ошибка поиска, когда по запросу ничего не найдено
 
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
  function filterShortMovies(movies) {
    return movies.filter((movie) => movie.duration <= 40);
  }

  // переключение чекбокса короткометражек
  function handleShortMoviesCheckbox() {
    setIsCheckbox(!isCheckbox);
    if (!isCheckbox) {
      setFilteredMovies(filterShortMovies(foundMovies));
    } else {
      setFilteredMovies(foundMovies);
    }
    localStorage.setItem('shortfilms', !isCheckbox);
  }

  // установка положения чекбокса
  useEffect(() => {
    if (localStorage.getItem('shortfilms') === 'true') {
      setIsCheckbox(true);
    } else {
      setIsCheckbox(false);
    }
  }, []);

  // поиск фильмов
  function handleSearch() {
    const initialMovies = props.movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const newQuery = props.query.toLowerCase().trim();
      return movieRu.indexOf(newQuery) !== -1;
    });
    return initialMovies;
  }

  function handleFilterMovies(short) {
    const moviesList = handleSearch(props.movies, props.query, short); 
    setFoundMovies(moviesList);
    setFilteredMovies(short ? filterShortMovies(moviesList) : moviesList); 
    localStorage.setItem('filtredmovies', JSON.stringify(moviesList));
    if (moviesList.length === 0) {
      setIsNotFoundError(true);
    }
  }

  // сабмит формы поиска
  function handleSearchFormSubmit() {
    // localStorage.setItem('query', query);
    localStorage.setItem('shortfilms', isCheckbox);
    
    handleFilterMovies(props.movies, props.query, isCheckbox);
  }

  return (
    <div>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit} 
        isCheckbox={isCheckbox}
        onCheckbox={handleShortMoviesCheckbox}
      />
      <MoviesCardList
      movies={foundMovies} />
    </div>
  );
}

export default Movies;
