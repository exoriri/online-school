import React, { useState } from 'react';
import styled from 'styled-components';

import { Header, Box } from '../components/common';
import { WebinarDescription, Contacts } from '../components/Webinar';

const Wrapper = styled(Box)`
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 100%);
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const HomePage = () => {
     return <Wrapper>
        <Header />
        <WebinarDescription />
        <Contacts />
    </Wrapper>
};

export default HomePage;
