import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${props => (props.bold ? 'Roboto, sans-serif;' : 'Roboto-Regular, sans-serif;')};
    font-size: ${props => (props.size ? `${props.size}px` : '36px')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const H2 = styled.h1`
    font-family: ${props => (props.bold ? 'Roboto, sans-serif;' : 'Roboto-Regular, sans-serif;')};
    font-size: ${props => (props.size ? props.size : '36px')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;