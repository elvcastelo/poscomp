import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeExamList from '../HomeExamList';
import HomeTutorial from '../HomeTutorial';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <HomeExamList />
      <HomeTutorial />
    </>
  );
}

export default Home;
