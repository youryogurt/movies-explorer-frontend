import React from "react";
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCard from "../Movies/Movies"
function SavedMovies() {

  return (
    <div>
      <SearchForm/>
      <section className="movies-card-list">
      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <h4 className="movies-card__name">33 слова о дизайне</h4>
            <p className="movies-card__duration">1ч 47м</p>
          </div>
          <button className="movies-card__delete-film-button"></button>
        </div>
        <img className="movies-card__image" alt="Обложка фильма" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
      </div>
      
      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <h4 className="movies-card__name">33 слова о дизайне</h4>
            <p className="movies-card__duration">1ч 47м</p>
          </div>
          <button className="movies-card__delete-film-button"></button>
        </div>
        <img className="movies-card__image" alt="Обложка фильма" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
      </div>

      <div className="movies-card">
        <div className="movies-card__info">
          <div className="movies-card__text">
            <h4 className="movies-card__name">33 слова о дизайне</h4>
            <p className="movies-card__duration">1ч 47м</p>
          </div>
          <button className="movies-card__delete-film-button"></button>
        </div>
        <img className="movies-card__image" alt="Обложка фильма" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
      </div>

        {/* <MoviesCard/> */}
      </section>
    </div>
  )
}

export default SavedMovies;