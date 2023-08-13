import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect } from "react";

function SavedMovies(props) {

  return (
    <div className="saved-movies__section">
      <SearchForm />
      <MoviesCardList
        // onClick={props.onClick}
        onDelete={props.onDelete}
        isSavedMovies={props.isSavedMovies}
        />

    </div>
  );
}

export default SavedMovies;
