import React, { useState } from "react";
// import MoviesCard from "../Movies/Movies"

function MoviesCardList() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="movies-card-list">
    {/* <MoviesCard/> */}
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text">
          <h4 className="movies-card__name">33 слова о дизайне</h4>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {isSaved ? (
          <button type="button" className="movies-card__unsave-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        ) : (
          <button type="button" className="movies-card__save-film-button" onClick={() => setIsSaved(!isSaved)}></button>
        )}
      </div>
      <img className="movies-card__image" alt="описание карточки" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
    </div>
      {/* <MoviesCard/> */}
    </section>
  )
}

export default MoviesCardList;