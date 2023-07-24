import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__subtitle">Портфолио</h5>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__list-element">
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__list-element portfolio__list-element_last">
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="https://youryogurt.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Адаптивный сайт"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
