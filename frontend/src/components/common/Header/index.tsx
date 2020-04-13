import React from 'react';
import styled from 'styled-components';

import { Box, Link, Image } from '../';

import { links } from './links';

const StyledHeader = styled.header`
    position: fixed;
    padding: 10px 0px;
    width: 100%;
    background: #fff;
    z-index: 9999;
`;

const Wrapper = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 0 20px;
    align-items: center;
`;

const StyledH1 = styled.h1`
    font-family: 'Roboto-Bold';
    font-weight: bold;
    font-size: 36px;
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

const RightList = styled.ul`
    display: none;

    li {
        padding-right: 17px;

        &:last-child {
            padding-right: 0;
        }
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }
`;

const StyledListLink = styled(Link)`
    font-family: 'Roboto-Regular';
    font-size: 20px;
    text-transform: uppercase;
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
                        <Image src={'/social-images/instagram.svg'} />
                    </Link>
                    <Link>
                        <Image src={'/social-images/youtube.svg'} />
                    </Link>
                </LeftDesktop>
                <StyledH1>SNG</StyledH1>
                <RightList>
                    { links.map(link => (
                        <li key={link.id} role="button">
                            <StyledListLink href={link.href}>{link.title}</StyledListLink>
                        </li>
                    )) }
                </RightList>
            </Wrapper>
        </StyledHeader>
    );
};