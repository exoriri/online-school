import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../common';

import { List, Button, Icon } from 'semantic-ui-react';

import { ContactBtn } from '../../Webinar';

import { webinarLinks } from './links';

//@TODO: Remake

const Image = styled.img`
    width: ${props => props.width};
    heigth: ${props => props.height};
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 10px 0 10px;
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
    top: 35px;
    transform: translateX(-50%);
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

const HeaderWrapper = styled(Box)`
position: fixed;
top: 0;
`;

export const Links = ({ onClick }) => (
    <>
        { webinarLinks.map(link => {
            return <ListItem key={link.id}><Link as="a" onClick={onClick} href={link.href}>{link.title}</Link></ListItem>
        })}
    </>
);

export const Header = () => {
    const headerRef = useRef(null);
    const [isMobileOpened, setIsMobileOpened] = useState(false);
    const [sticky, setSticky] = useState(false);


    const handleLinkClick = (e) => {
        setIsMobileOpened(false);
    }

    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset);
      console.log(new Date().getTime());
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });

    return (
        <>
            <StyledHeader isMobileOpened={isMobileOpened}>
                <a href="#">
                    <Image width={150} height={60} src={"log.png"} alt="logo" />
                </a>
                <HeaderLinks inverted link>
                    <Links onClick={handleLinkClick} />
                    <ContactBtnListItem />
                </HeaderLinks>
                {!isMobileOpened ? <HamburgerButton onClick={() => { setIsMobileOpened(!isMobileOpened) }}>
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
                    <ContactBtnListItem />
                </MobileLinks>
            }

        </>
    );
};