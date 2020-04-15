import React from 'react';
import styled from 'styled-components';

import { Box, Link, Image, Button } from '../';
import { LinksListDesktop, LinksListMobile } from './LinksList';

import { links } from './links';

const StyledHeader = styled.header`
    position: fixed;
    padding: 10px 0px;
    width: 100%;
    background: #fff;
    z-index: 999;
    display: block;
`;

const StyledMobileHeader = styled(Box)`
    position: fixed;
    background: #fff;
    transition: left .4s;
    left: ${props => props.isShow ? '0' : '-170px'};
    animation-iteration-count: 1;
    height: 100vh;
    padding: 30px;
    background: grey;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const Wrapper = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 0px 20px;
    align-items: center;
`;

const StyledH1 = styled.h1`
    font-family: 'Roboto-Bold';
    font-weight: bold;
    font-size: 36px;
    padding-left: 20px;

    @media screen and (min-width: 1024px) {
        padding-left: 0;
    }
`;

const LeftDesktop = styled(Box)`
    display: none;

    a {
        margin-right: 7px;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        flex: 1;
    }
`;

const HamburgerButton = styled.button`
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const Header = ({ setShow, isShow }) => {
    return (
        <StyledHeader>
            <Wrapper isShow={isShow}>
                <LeftDesktop>
                    <Link>
                        <Image src={'/social-images/vk.svg'} />
                    </Link>
                    <Link>
                        <Image src={'/social-images/instagram.svg'} />
                    </Link>
                    <Link>
                        <Image src={'/social-images/youtube.svg'} />
                    </Link>
                </LeftDesktop>
                <HamburgerButton onClick={() => setShow(!isShow)}>
                    <Image src={'/hamburger.svg'} />
                </HamburgerButton>
                <StyledH1>SNG</StyledH1>
                <LinksListDesktop links={links} />
            </Wrapper>
        </StyledHeader>
    );
};

export const MobileHeader = ({ isShow }) => (
    <StyledMobileHeader isShow={isShow}>
        <LinksListMobile links={links} />
    </StyledMobileHeader>
);