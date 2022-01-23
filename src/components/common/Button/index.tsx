import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Button = ({ children, className="", onClick }) => (
    <StyledButton onClick={onClick} className={className}>
        {children}
    </StyledButton>
);