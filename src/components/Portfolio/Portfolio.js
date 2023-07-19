import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
    <h5 className="portfolio__subtitle">Портфолио</h5>
    <ul className="portfolio__list">
      <li className="portfolio__list-element">
        <p className="portfolio__link-text">Статичный сайт</p>
        <a className="portfolio__link" href="https://github.com/youryogurt/how-to-learn" target="_blank" rel="noopener noreferrer">↗</a>
      </li>
      <li className="portfolio__list-element">
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <a className="portfolio__link" href="https://youryogurt.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">↗</a>
      </li>
      <li className="portfolio__list-element portfolio__list-element_last">
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <a className="portfolio__link" href="https://github.com/youryogurt/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">↗</a>
      </li>
    </ul>
  </section>
  )
}

export default Portfolio;