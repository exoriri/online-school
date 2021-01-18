import React, { useState } from 'react';
import styled from 'styled-components';

import { ModalForm } from '../';

import { List, Button, Icon } from 'semantic-ui-react';


const Image = styled.img`
    width: ${props => props.width};
    heigth: ${props => props.height};
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10px;
`;

const HeaderLinks = styled(List)`
    margin: 15px 0 0 auto !important;
    display: none !important;

    @media screen and (min-width: 1024px) {
        margin-left: 0 !important;
    }
`;

const ListItem = styled(List.Item)`
    font-size: 15px;
    color: #e1e2e6;
    margin-right: 15px;
    cursor: pointer;
    font-size: 16px !important;

    &:last-child {
        margin-right: 0 !important;
    }

    &:hover {
        color: #3963e6 !important;
    }
`;

const StyledButton = styled(Button)`
    margin: 0 !important;
    color: #fff !important;
    background: #1c439c !important;
    font-size: 16px !important;
    font-weight: 500 !important;

    &:hover {
        background: #3963e6 !important;
    }
`;

const HamburgerButton = styled(Button)`
    background: none !important;
    margin: 5px 0 0 auto !important;
    padding: 0 !important;
`;

const HamburgerIcon = styled(Icon)`
    color: #fff;
    margin: 5px 0 0 0 !important;
`;

export const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const onRequestBtnClick = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <StyledHeader>
                <Image width={120} heigth={120} src={"logo.png"} alt="logo" />
                <HeaderLinks inverted horizontal link>
                    <ListItem as="a" href="#author">Об авторе</ListItem>
                    <ListItem as="a" href="#webinar">О вебинаре</ListItem>
                    <ListItem>
                        <StyledButton primary onClick={onRequestBtnClick}>
                            Оставить заявку
                        </StyledButton>
                    </ListItem>
                </HeaderLinks>
                <HamburgerButton>
                    <HamburgerIcon size="big" name="content" />
                </HamburgerButton>
            </StyledHeader>
            <ModalForm onClose={() => setModalOpen(false)} open={isModalOpen} setOpen={setModalOpen} />
        </>
    );
};