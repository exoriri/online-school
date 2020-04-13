import React from 'react';
import styled from 'styled-components';

import { H1, Image } from '../../common';

interface ICoursesList {
    courses: object[]
}

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li {
        padding-right: 35px;
        padding-bottom: 30px;

        &:last-child {
            padding-right: 0;
        }
    }
`;

const StyledImage = styled(Image)`
    max-width: 350px;
    min-width: 300px;
    width: 100%;
    height: 250px;
    margin-top:20px;
`;

export const CoursesList = ({ courses }): React.FunctionComponentElement<ICoursesList> => (
    <List>
        {courses.map(course => (
            <li key={course.id}>
                <H1>{course.title}</H1>
                <StyledImage
                    src={`http://picsum.photos/248/152?r=${Math.random()}`} 
                />
            </li>
        ))}
    </List>
);