import React from 'react';
import styled from 'styled-components';

import { Box, Link, Image, Button, H1 } from '../';
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
    return (
        <StyledHeader>
            <Wrapper>
                <LeftDesktop>
                    <Link>
                        <Image src={'/social-images/vk.svg'} />
                    </Link>
                    <Link>
                        <Image width={49} height={50} src={'/social-images/instagram.svg'} />
                    </Link>
                    <Link>
                        <Image width={53} height={50} src={'/social-images/youtube.svg'} />
                    </Link>
                </LeftDesktop>
                <IconButton>
                    <Image src={'/hamburger.svg'} />
                </IconButton>
                <LinksListDesktop links={links} />
            </Wrapper>
        </StyledHeader>
    );
};

export const MobileHeader = ({ setShow, isShow }) => (
    <StyledMobileHeader isShow={isShow}>
        <CloseBtn onClick={() => setShow(false)}>
            <Image width={30} height={30} src={'/close.svg'} />
        </CloseBtn>
        <LinksListMobile links={links} />
    </StyledMobileHeader>
);