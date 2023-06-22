import React from 'react';

function AboutProject() {
  return (
    <section className="about-project">
      <h3 className="section-title">О проекте</h3>
      <div className="about-project__duration-description">
        <h4 className="about-project__subtitle about-project__element_1">Дипломный проект включал 5 этапов</h4>
        <h4 className="about-project__subtitle about-project__element_3">На выполнение диплома ушло 5 недель</h4>
        <p className="about-project__info about-project__element_2">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__info about-project__element_4">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__duration-scheme">
        <p className="about-project__scheme-time scheme-time_color_green">1 неделя</p>
        <p className="about-project__scheme-time scheme-time_color_grey">4 недели</p>
        <p className="about-project__scheme-text">Back-end</p>
        <p className="about-project__scheme-text">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;