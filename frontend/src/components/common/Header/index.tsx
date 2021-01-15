import React, { useState } from 'react';
import styled from 'styled-components';

import { Box, Link, H1, ModalForm } from '../';

import { links } from './links';
import { List, Button } from 'semantic-ui-react';


const Image = styled.img`
    width: ${props => props.width};
    heigth: ${props => props.height};
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 10px 20px 10px;

    @media screen and (max-width: 400px) {
        padding: 10px 0px 20px 0px;
        justify-content: center;
    }
`;

const HeaderLinks = styled(List)`
    margin: 15px 0 0 auto !important;
    @media screen and (max-width: 400px) {
        margin-left: 0 !important;
    }
`;

const ListItem = styled(List.Item)`
    font-size: 15px;
    color: rgba(255,255,255,.5);
    margin-right: 5px;
    cursor: pointer;

    &:last-child {
        margin-right: 0 !important;
    }
`;

const StyledButton = styled(Button)`
    margin: 0 !important;
`;

const Wrapper = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 0px 20px;
    align-items: center;
`;

const StyledH1 = styled(H1)`
    font-size: 36px;
    padding-left: 20px;
    align-self: center;

    @media screen and (min-width: 1024px) {
        padding-left: 0;
    }
`;

const LeftDesktop = styled(Box)`
    display: none;

    a {
        margin-right: 5px;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        flex: 1;
    }
`;

const IconButton = styled(Button)`
    align-self: center;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const CloseBtn = styled(IconButton)`
    position: relative;
    bottom: 15px;
    right: 5px;
    margin-bottom: 30px;
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
                    <ListItem as="a">О вебинаре</ListItem>
                    <ListItem>
                        <StyledButton onClick={onRequestBtnClick} primary>
                            Оставить заявку
                    </StyledButton>
                    </ListItem>
                </HeaderLinks>
            </StyledHeader>
            <ModalForm onClose={() => setModalOpen(false)} open={isModalOpen} setOpen={setModalOpen} />
        </>
    );
};