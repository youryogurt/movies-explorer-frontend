import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


function SavedMovies(props) {

  return (
    <div className="saved-movies__section">
      <SearchForm />
      <MoviesCardList
        // onClick={props.onClick}
        onClick={props.onClick}
        isSavedMovies={props.isSavedMovies}
        />

    </div>
  );
}

export default SavedMovies;
