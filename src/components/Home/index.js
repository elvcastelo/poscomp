import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeExamList from '../HomeExamList';
import HomeTutorial from '../HomeTutorial';

function Home() {
    return (
        <>
            <HomeBanner />
            <HomeExamList />
            <HomeTutorial />
        </>
    );
}

export default Home;