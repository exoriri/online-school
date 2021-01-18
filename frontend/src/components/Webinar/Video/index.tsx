import React from 'react';
import { Box, H1, H2 } from '../../../components/common';
import styled from 'styled-components';

const Wrapper = styled(Box)`
    position: relative;
    object-fit: cover !important;
`;

const StyledVideo = styled.video`
    width: 100%;
    height: 70% !important;
`;

const Description = styled(Box)`
    text-align: center;
`; 

const Title = styled(H1)`
    color: #fff;
    letter-spacing: 3px;
    font-size: 30px;
`;

const Text = styled(H2)`
    font-size: 20px;
    color: #fff;
    letter-spacing: 3px;
`;

export const Video = () => (
    <Wrapper>
        <Description>
            <Title>Узнай все о web-разработке</Title>
            <Text>Уверен, ты удивишься, когда узнаешь, что можно делать крутые вещи не выходя из дома или из своего номера на острове</Text>
        </Description>
    </Wrapper>
);