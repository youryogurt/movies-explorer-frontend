import React from 'react';

function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text footer__info-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__text footer__link-text footer__year">&copy; {currentYear}</p>
        <div className="footer__links">
          <a className="footer__text footer__link-text" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__text footer__link-text" href="https://github.com/youryogurt">Github</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;