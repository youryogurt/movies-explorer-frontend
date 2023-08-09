import React from "react";
import SearchForm from "../SearchForm/SearchForm";
function SavedMovies(props) {
  return (
    <div className="saved-movies__section">
      <SearchForm />
      <section className="movies-card-list">
      </section>
    </div>
  );
}

export default SavedMovies;
