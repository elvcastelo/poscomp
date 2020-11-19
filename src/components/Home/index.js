import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeExamList from '../HomeExamList';
import HomeTutorial from '../HomeTutorial';
import Footer from '../Footer';
import './index.css';

function Home() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <div className="wrapper">
      <HomeBanner />
      <HomeExamList />
      <HomeTutorial />
      <Footer />
    </div>
  );
}

export default Home;
