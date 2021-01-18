import React from 'react';
import styled from 'styled-components';
import { Box, Paragraph } from '../../common';

const StyledParagraph = styled(Paragraph)`
    color: #fff;
    font-size: 20px;
    line-height: 1.5em;
`;

const Description = styled(Box)`
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        margin-left: 20px;
    }
`;

const WebinarWrapper = styled(Box)`
    display: flex;
    justify-content: center;
`;

const WebinarContent = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const ImageMe = styled.img`
    max-width: 100%;
    height: auto;

    @media screen and (min-width: 560px) and (max-width: 768px) {
        max-width: 70%;
    }

    @media screen and (min-width: 768px) {
        max-width: 50%;
    }
`;

export const AboutAuthor = () => {
    return (
        <>
            <WebinarWrapper>
                <WebinarContent>
                    <ImageMe src="me.jpg" alt="Roma" />
                    <Description>
                        <StyledParagraph>Привет! Я Лаврик Роман.</StyledParagraph>
                        <StyledParagraph>
                            Профессиональный веб разработчик, который работал в разных компаниях, начиная от маленкьких заканчивая компаниями, которые занимаются банковскими системы как Альфа-Банк. 
                            Работал на удаленке, до того как это стало мейнстримом.
                        </StyledParagraph>
                        <StyledParagraph>
                            Сейчас занялся ютуб каналом и снимаю ролики про путешествия.
                        </StyledParagraph>
                    </Description>
                </WebinarContent>
            </WebinarWrapper>
        </>
    );
};