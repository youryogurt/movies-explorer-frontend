import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found__section">
      <h2 className="not-found__header">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__link-back" to="/">Назад</Link>
    </section>
  )
}

export default NotFound;