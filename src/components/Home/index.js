import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeExamList from '../HomeExamList';
import './index.css';

function Home() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <div className="wrapper">
      <HomeBanner />
      <HomeExamList />
    </div>
  );
}

export default Home;
