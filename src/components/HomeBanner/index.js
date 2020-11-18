import React from 'react';
import './index.css';

function HomeBanner() {
  return (
    <div className="banner">
      <p className="banner__title">SISCOMP</p>
      <nav className="banner__nav">
        <p className="banner__nav__item banner__nav__item--selected">HOME</p>
        <p className="banner__nav__item">EDITOR</p>
        <p className="banner__nav__item">PROVAS</p>
        <p className="banner__nav__item">CONTRIBUIR</p>
      </nav>
    </div>
  );
}

export default HomeBanner;
