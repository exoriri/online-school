import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${props => (props.bold ? 'Roboto-Bold' : 'Roboto-Regular')};
    font-size: 36px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const H2 = styled.h1`
    font-family: ${props => (props.bold ? 'Roboto-Bold' : 'Roboto-Regular')};
    font-size: 30px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const Paragraph = styled.p`
    font-family: ${props => (props.bold ? 'Roboto-Bold' : 'Roboto-Regular')};
`;