import React from 'react';
import styled from 'styled-components';

import { Link } from '../../';

const StyledListLink = styled(Link)`
    font-family: 'Roboto-Regular';
    font-size: 20px;
    text-transform: uppercase;
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


const MobileList = styled.ul`
    li {
        margin-bottom: 20px;
    }
`;

export const LinksListDesktop = ({ links }) => (
    <RightList>
        {
            links.map(link => (
                <li key={link.id} role="button">
                    <StyledListLink href={link.href}>{link.title}</StyledListLink>
                </li>
            ))
        }
    </RightList>
);

export const LinksListMobile = ({ links }) => (
    <MobileList>
        {
            links.map(link => (
                <li key={link.id} role="button">
                    <StyledListLink href={link.href}>{link.title}</StyledListLink>
                </li>
            ))
        }
    </MobileList>
);