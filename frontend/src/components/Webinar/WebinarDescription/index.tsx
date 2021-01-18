import React from 'react';
import { Box, H1, H2 } from '../../../components/common';
import styled from 'styled-components';

import { ContactBtn } from '../';

const Wrapper = styled(Box)`
    position: relative;
    object-fit: cover !important;
`;

const Description = styled(Box)`
    text-align: center;
    margin: 0 auto;  
    padding: 20px 0;

    @media screen and (min-width: 1024px) {
        max-width: 550px;
    }
`;

const Title = styled(H1)`
    color: #fff;
    font-size: 27px;
    font-weight: bold !important;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
    }
`;

const Text = styled(H2)`
    font-size: 20px;
    color: #fff;
    letter-spacing: 3px;
`;

const Cover = styled(Box)`
    background: #3e2b94;
    font-weight: bold;
    padding: 10px 0;
`;

const CoverTitle = styled(H1)`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

// TODO: make it just for ContactBtn
const ApplicBtn = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const WebinarDescription = () => (
    <Wrapper>
        <Description>
            <Title>Узнай все о web-разработке</Title>
            <Text>Уверен, ты удивишься, когда узнаешь, что можно делать крутые вещи не выходя из дома или из своего номера на острове</Text>
        </Description>
        <Cover>
            <CoverTitle>Что ты узнаешь?</CoverTitle>
        </Cover>
        <ApplicBtn>
            <ContactBtn />
        </ApplicBtn>
    </Wrapper>
);