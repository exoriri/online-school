import React from 'react';
import styled from 'styled-components';

import { Link, Image, Paragraph } from '../../common';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #929292;
    height: 200px;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
    padding-top: 10px;
`;

export const Footer = () => (
    <Container>
        <List>
            <Link>
                <Image src={'/social-images/vk.svg'} />
            </Link>
            <Link>
                <Image width={49} height={50} src={'/social-images/instagram.svg'} />
            </Link>
            <Link>
                <Image width={49} height={40} src={'/social-images/youtube.svg'} />
            </Link>
        </List>
        <StyledParagraph>
            ИП Лаврик Роман
        </StyledParagraph>
        <StyledParagraph>
            Хочешь украсть права - выходи в октагон
        </StyledParagraph>
    </Container>
);