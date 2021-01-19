import React from 'react';
import styled from 'styled-components';
import { Box, H1 } from '../../components/common';

const CoverWrapper = styled(Box)`
    background: #3e2b94;
    font-weight: bold;
    padding: 15px 0;
`;

const CoverTitle = styled(H1)`
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 24px;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
    }
`;

export const Cover = ({ text }) => (
    <CoverWrapper>
        <CoverTitle>{text}</CoverTitle>
    </CoverWrapper>
);