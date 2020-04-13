import React from 'react';

import { Header } from '../components/common';
import { Main, Courses, AboutSchool, Question, Footer } from '../components/Landing';

const HomePage = () => (
    <>
        <Header />
        <Main />
        <Courses />
        <AboutSchool />
        <Question />
        <Footer />
    </>
);

export default HomePage;