import React from 'react';

function Techs() {
  return (
    <section className="techs-wrapper" id="techs-section">
      <div className="techs">
        <h3 className="section-title techs__section-title">Технологии</h3>
        <h2 className="techs-title">7 технологий</h2>
        <p className="techs-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs-list">
          <li className="techs-list-element">HTML</li>
          <li className="techs-list-element">CSS</li>
          <li className="techs-list-element">JS</li>
          <li className="techs-list-element">React</li>
          <li className="techs-list-element">Git</li>
          <li className="techs-list-element">Express.js</li>
          <li className="techs-list-element">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;