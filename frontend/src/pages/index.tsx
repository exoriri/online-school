import React, { useState } from 'react';
import styled from 'styled-components';

import { Header, Box } from '../components/common';
import { AboutWebinar, Video } from '../components/Webinar';

 const Wrapper = styled(Box)`
    height: 100vh;
    background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #2c3e50 100%);
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
        <Header />
        <Video />
        <AboutWebinar />
    </Wrapper>
};

export default HomePage;
