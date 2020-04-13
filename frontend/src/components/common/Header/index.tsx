import React from 'react';
import styled from 'styled-components';

import { Box, Link, Image, H1 } from '../';

import { links } from './links';

const StyledHeader = styled.header`
    padding: 10px 30px;
`;

const Wrapper = styled(Box)`
        display: flex;
        align-items: center;
`;

const StyledH1 = styled.h1`
    font-family: 'Roboto-Bold';
    font-weight: bold;
    font-size: 36px;
`;

const LeftDesktop = styled(Box)`
    display: flex;
    align-items: center;
    flex: 1;

    a {
        margin-right: 7px;
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    li {
        padding-right: 17px;

        &:last-child {
            padding-right: 0;
        }
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
                <List>
                    { links.map(link => (
                        <li key={link.id}>
                            <StyledListLink href={link.href}>{link.title}</StyledListLink>
                        </li>
                    )) }
                </List>
            </Wrapper>
        </StyledHeader>
    );
};