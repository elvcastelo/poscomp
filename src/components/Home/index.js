import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeExamList from '../HomeExamList';
import './index.css';

function Home() {
  return (
    <div className="wrapper">
      <HomeBanner />
      <HomeExamList />
    </div>
  );
}

export default Home;
