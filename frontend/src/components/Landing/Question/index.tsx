import React from 'react';
import styled from 'styled-components';

import { Box, H2, Paragraph } from '../../common';

const Container = styled(Box)`
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    height: 400px;
`;

const StyledButton = styled.a`
    font-family: 'Roboto-Bold';
    font-weight: bold;
    background: #c4c4c4;
    font-size: 24px;
    width: 50%;
    padding: 10px 0;
    text-transform: uppercase;
    margin: 10px auto;
    cursor: pointer;
`;

export const Question = () => (
    <Container id="question">
        <H2>
            Появились вопросы
            по программе?
        </H2>
        <Paragraph>
            Напиши свой вопрос в нашу группу в VK. Мы свяжемся ,
            чтобы ответить него
        </Paragraph>
        <StyledButton>
            Написать
        </StyledButton>
    </Container>
);