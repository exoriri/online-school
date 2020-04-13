import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Button = ({ children, className="" }) => (
    <StyledButton className={className}>
        {children}
    </StyledButton>
);