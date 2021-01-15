import React from 'react';
import styled from 'styled-components';
import { Box, Paragraph} from '../../common';

const StyledParagraph = styled(Paragraph)`
    color: #fff;
    font-size: 20px;
`;

export const AboutWebinar = () => {
    return (
        <>
            <Box>
               <StyledParagraph>Привет! Я Лаврик Роман.</StyledParagraph>
               <StyledParagraph>Профессиональный веб разработчик, который работал в разных компаниях, начиная от маленкьких заканчивая компаниями, которые занимаются банковскими системы и криптобиржами</StyledParagraph>
            </Box>
        </>
    );
};