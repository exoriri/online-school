import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { List, Button, Icon } from 'semantic-ui-react';
import Image from 'next/image';

import { Box } from '../../common';


import { ContactBtn } from '../../Webinar';

import { webinarLinks } from './links';

//@TODO: Remake

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    background: #000;
    z-index: 9999;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
`;

const Link = styled(List.Item)`
    color: #e1e2e6;
    cursor: pointer;
    font-size: 16px !important;

    &:hover {
        color: #3963e6 !important;
    }

`;

const HeaderLinks = styled(Box)`
    margin: 15px 0 0 auto;
    display: none;
    flex-direction: row;
    z-index: 9999;

    @media screen and (min-width: 1024px) {
        margin-left: auto !important;
        display: flex !important;
        align-items: center;
    }
`;

const HamburgerButton = styled(Button)`
    background: none !important;
    margin: 0px 0 0 auto !important;
    padding: 0 !important;
    z-index: 9999;

    @media screen and (min-width: 1024px) {
        display: none !important;
    }
`;

const HamburgerIcon = styled(Icon)`
    color: #fff;
    margin: 0!important;
`;

const MobileMenu = styled(Box)`
    position: fixed;
    background: #01455c;
    width: 100%;
    z-index: 999;
    top: 0;
    transition: all .4s;
    height: ${props => props.isMenuOpened ? '100vh' : '0vh'};
`;

const ContactBtnListItem = styled(ContactBtn)`
    display: none !important;
`;

const MobileLinks = styled.ul`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 8888;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const ListItem = styled.li`
    margin-bottom: 30px;
    list-style-type: none;
        &:last-child {
        margin-bottom: 0;
    }

    ${Link} {
        font-size: 26px!important;
    }

    @media screen and (min-width: 1024px) {
        margin-right: 25px;

        ${Link} {
            font-size: 17px!important;
        }
        margin-bottom: 0px;
    }

`;

export const Links = ({ onClick }) => (
    <>
        { webinarLinks.map(link => {
            return <ListItem key={link.id}>
                <Link as="a" onClick={onClick} href={link.href}>{link.title}</Link>
            </ListItem>
        })}
    </>
);

export const Header = ({ isModalOpen, onRequestBtnClick }) => {
    const [isMobileOpened, setIsMobileOpened] = useState(false);

    const handleLinkClick = () => {
        setIsMobileOpened(false);
    };

    return (
        <>
            <StyledHeader isMobileOpened={isMobileOpened}>
                <a href="#">
                    <Image width={150} height={60} src={"/log.webp"} alt="logo" />
                </a>
                <HeaderLinks inverted link>
                    <Links onClick={handleLinkClick} />
                    <ContactBtnListItem 
                       onRequestBtnClick={onRequestBtnClick}
                    />
                </HeaderLinks>
                {!isMobileOpened ? <HamburgerButton aria-label="hambuger" onClick={() => { setIsMobileOpened(!isMobileOpened) }}>
                    <HamburgerIcon size="big" name="content" />
                </HamburgerButton> :
                    <HamburgerButton onClick={() => { setIsMobileOpened(!isMobileOpened) }}>
                        <HamburgerIcon size="big" name="close" />
                    </HamburgerButton>
                }
            </StyledHeader>
            <MobileMenu
                isMenuOpened={isMobileOpened}
            />
            {
                isMobileOpened && <MobileLinks>
                    <Links onClick={handleLinkClick} />
                    {!isModalOpen && <ContactBtnListItem  onRequestBtnClick={onRequestBtnClick}/>}
                </MobileLinks>
            }

        </>
    );
};