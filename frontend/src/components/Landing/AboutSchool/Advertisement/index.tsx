import React from 'react';
import styled from 'styled-components';

import { Box, H1, Paragraph } from '../../../common';

const Container = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.isReversed ? 'row-reverse' : 'row'};

    @media screen and (min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

const VideoBox = styled(Box)`
    width: 100%;
    height: 400px;

    @media screen and (min-width: 1024px) {
        width: 50%;
        height: auto;
    }
`;

const TextBlock = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 60px 20px 30px;
    background: #888888;

    h1 {
        padding-bottom: 20px;
    }

    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`;

const StyledH1 = styled(H1)`
    text-transform: uppercase;
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 20px;
    padding-top: 10px;
    line-height: 30px;
`;

export const Advertisement = ({ isReversed = false }) => (
    <Container isReversed={isReversed}>
        <VideoBox>
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/z97MvXxHXgY" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </VideoBox>
        <TextBlock>
            <StyledH1 bold>Sng</StyledH1>
            <StyledParagraph>
                School of new generation - люди, которые неравнодушны к изменениям в сфере образования.
                Все мы уже не раз слышали, что программы в государственных университетах быстро
                устаревают и сильно разнятся с требованиями современного рынка.
                Все мы знаем — чтобы зарабатывать деньги в 21 веке, не обязательно сидеть в офисе, таскать тяжелые камни, одевать строгие костюмы. Понятие “офисный клерк” с каждым годом размывается все сильнее и сильнее.
                Однако, как же быть тем, кто еще не знает как это делать. Выход один - переучиваться.
            </StyledParagraph>
            <StyledParagraph>
                Наша цель - дать возможность быть гибкими к изменениям и выпускать конкурентоспособных специалистов в современных профессиях.
            </StyledParagraph>
        </TextBlock>
    </Container>
);