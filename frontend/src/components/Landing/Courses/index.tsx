import React from 'react';
import styled from 'styled-components';

import { Box, H1 } from '../../common';
import { CoursesList } from './CoursesList';

const courses = [
    {
        id: 1,
        title: 'FRONTEND ДЛЯ ЧАЙНИКОВ',
    },
    {
        id: 2,
        title: 'ОСНОВЫ ОСНОВ JavaScript',
    },
    {
        id: 3,
        title: 'ОСНОВЫ ОСНОВ JavaScript',
    },
];

const StyledH1 = styled(H1)`
    text-transform: uppercase;
    padding-bottom: 50px;
    text-align: center;
`;

const Container = styled(Box)`
    max-width: 980px;
    margin: 0 auto;
    padding: 28px;
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const Courses = () => (
    <Container>
        <Wrapper>
            <StyledH1 bold>Наши курсы</StyledH1>
            <CoursesList courses={courses} />
        </Wrapper>
    </Container>
);