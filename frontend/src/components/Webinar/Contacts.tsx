import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Box, H1, Paragraph } from '../common';

const Wrapper = styled(Box)`
    padding: 20px;
    background: #062433;
    color: #fff;
`;

const Title = styled(H1)`
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

const ListIcons = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

export const Contacts = () => {
    return (
        <Wrapper id="contacts">
            <Title>Контакты</Title>
            <ListIcons>
                <ListItem>
                    <Icon 
                        name="envelope"
                        size="big"
                    />
                    <a style={{ fontSize: 17, marginLeft: 5, color: '#fff' }} href="mailto:lavrikrom2@gmail.com">
                        lavrikrom2@gmail.com
                    </a>
                </ListItem>
                <ListItem>

                </ListItem>
            </ListIcons>
        </Wrapper>
    );
}