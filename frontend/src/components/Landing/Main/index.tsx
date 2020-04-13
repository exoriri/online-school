import React from 'react';
import styled from 'styled-components';

import { H1 } from '../../common';

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background: #888888;
    text-align: center;
`;

const StyledH1 = styled(H1)`
    font-size: 30px;
    padding: 0 20px;

    @media screen and (min-width: 1024px) {
        font-size: 36px;
    }
`;

export const Main = () => (
    <StyledMain>
        <StyledH1 bold>
            SNG - ШКОЛА СОВРЕМЕННОГО ОБРАЗОВАНИЯ
        </StyledH1>
    </StyledMain>
);