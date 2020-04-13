import React from 'react';
import styled from 'styled-components';

import { H1 } from '../../common';

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background: #888888;
`;

export const Main = () => (
    <StyledMain>
        <H1 bold>
            SNG - ШКОЛА СОВРЕМЕННОГО ОБРАЗОВАНИЯ
        </H1>
    </StyledMain>
);