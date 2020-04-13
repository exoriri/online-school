import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: ${props => (props.bold ? 'Roboto-Bold' : 'Roboto-Regular')};
    font-size: 36px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const H1 = ({ children, bold=false, className="" }) => (
    <StyledH1 bold={bold} className={className}>
        {children}
    </StyledH1>
);

export const Paragraph = styled.p`
    font-family: ${props => (props.bold ? 'Roboto-Bold' : 'Roboto-Regular')};
`;