import React, { useState } from 'react';
import styled from 'styled-components';

import { Header, Box } from '../components/common';
import { WebinarDescription, AboutAuthor } from '../components/Webinar';

const Wrapper = styled(Box)`
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 100%);
    overflow: ${props => props.isShow ? 'hidden' : 'auto'};
`;

const Block = styled(Box)`
    padding: 10px 0 !important;
`;

const HomePage = () => (
     <Wrapper>
        <Header />
        <Block>
            <WebinarDescription />
        </Block>
        <AboutAuthor />
    </Wrapper>
);

export default HomePage;
