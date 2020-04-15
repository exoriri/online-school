import React, { useState } from 'react';
import styled from 'styled-components';

import { Header, MobileHeader, Box } from '../components/common';
import { Main, Courses, AboutSchool, Question, Footer } from '../components/Landing';

const Wrapper = styled(Box)`
    position: relative;
    display: flex;
    overflow: ${props => props.isShow ? 'hidden' : 'auto'};
`;

const Content = styled(Box)`
    width: 100%;
    height: 100%;
    transition: padding .4s;
    padding-left: ${props => props.isShow ? '165px' : '0px'};
    overflow: ${props => props.isShow ? 'hidden' : 'auto'};

    @media screen and (min-width: 1024px) {
        padding-left: 0;
    }
`;

const HomePage = () => {
    const [isShow, setShow] = useState(false);
    
    return <Wrapper isShow={isShow}>
        <MobileHeader setShow={setShow} isShow={isShow} />
        <Content isShow={isShow}>
            <Header isShow={isShow} setShow={setShow} />
            <Main />
            <Courses />
            <AboutSchool />
            <Question />
            <Footer />
        </Content>
    </Wrapper>
};

export default HomePage;