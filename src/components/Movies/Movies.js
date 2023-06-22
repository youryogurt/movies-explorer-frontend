import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
// import Preloader from './Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movie() {
  return (
    <div>
      <SearchForm/>
      <MoviesCardList/>
      <button className="more-button">Ещё</button>
    </div>
  )
}

export default Movie;