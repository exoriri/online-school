import React from 'react';
import styled from 'styled-components';
import { Box, H1, Paragraph } from '../common';

const Wrapper = styled(Box)`
    padding: 20px;
    background: #062433;
    color: #fff;
`;

const Title = styled(H1)`
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
`;

const IntstagramText = styled(Paragraph)`
    font-size: 20px;
`;

const ListIcons = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 10px;
`;

export const Contacts = () => {
    return (
        <Wrapper id="contacts">
            <Title>Контакты</Title>
            <IntstagramText>Пока ты можешь написать нам только в инстаграмме &#129402;</IntstagramText>
            <ListIcons>
                <ListItem>
                    <a href="http://www.instagram.com/essential_skillset">
                        <img width={30} height={30} src="instagram-copy.svg" alt="instagram"/>
                    </a>
                </ListItem>
            </ListIcons>
        </Wrapper>
    );
}