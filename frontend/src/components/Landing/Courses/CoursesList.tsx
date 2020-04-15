import React from 'react';
import styled from 'styled-components';

import { H2, Image } from '../../common';

interface ICoursesList {
    courses: object[]
}

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li {
        max-width: 300px;
        margin: 0 auto;
        padding-bottom: 30px;

        &:last-child {
        }
    }

    @media screen and (min-width: 700px) {
        justify-content: center;
        li {
            margin: 0 20px;
        }
    }
`;

const StyledImage = styled(Image)`
    max-width: 300px;
    min-width: 270px;
    width: 100%;
    height: 200px;
    margin-top:20px;
`;

export const CoursesList = ({ courses }): React.FunctionComponentElement<ICoursesList> => (
    <List>
        {courses.map(course => (
            <li key={course.id}>
                <H2 bold>{course.title}</H2>
                <StyledImage
                    src={`http://picsum.photos/248/152?r=${Math.random()}`} 
                />
            </li>
        ))}
    </List>
);