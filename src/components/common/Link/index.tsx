import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    text-decoration: none;
    color: #000;
`;

export const Link = ({ children, href="#", className="" }) => (
    <StyledLink href={href} className={className}>
        {children}
    </StyledLink>
);