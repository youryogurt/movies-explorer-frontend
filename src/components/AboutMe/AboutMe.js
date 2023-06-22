import React from 'react';
import photo from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="section-title">Студент</h3>
      <div className="about-me__info">
        <div className="about-me__text">
          <h2 className="about-me__name">Жанна</h2>
          <p className="about-me__job">Фронтенд-разработчик, 23 года</p>
          <p className="about-me__description">Я родилась в Москве, 2 года назад решила улететь без обратного билета в Грузию и с того момента путешествую. Через год после начала путешествий взяла из приюта собаку Мабаку, теперь мы везде вдвоем. В процессе прохождения курса по веб-разработке нашла работу на позиции верстальщика.</p>
          <a className="about-me__github" href="https://github.com/youryogurt">Github</a>
        </div>
        <img className="about-me__photo" alt="" src={photo} />
      </div>
    </section>
  )
}

export default AboutMe;