import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  
  return (
    <section className="not-found__section">
      <h2 className="not-found__header">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__link-back" to={location.state?.from || "/"}>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
