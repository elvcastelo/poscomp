import React from 'react';
import './index.css';

function HomeBanner() {
  return (
    <div className="banner" id="banner">
      <p className="banner__title">SISCOMP</p>
      <nav className="banner__nav">
        <a className="banner__nav__item" href="#banner">HOME</a>
        <a className="banner__nav__item" href="#banner">EDITOR</a>
        <a className="banner__nav__item" href="#exams">PROVAS</a>
        <a className="banner__nav__item" href="#contribute">CONTRIBUIR</a>
      </nav>
    </div>
  );
}

export default HomeBanner;
