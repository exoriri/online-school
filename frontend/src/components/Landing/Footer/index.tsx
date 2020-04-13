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
`;

const StyledImage = styled(Image)`
    width: 50px;
    height: 50px;
`;

const StyledParagraph = styled(Paragraph)`
    padding-top: 10px;
`;

export const Footer = () => (
    <Container>
        <List>
            <li>
                <Link>
                    <StyledImage src={'/social-images/vk.svg'} />
                </Link>
            </li>
            <li>
                <Link>
                    <StyledImage src={'/social-images/instagram.svg'} />
                </Link>
            </li>
            <li>
                <Link>
                    <StyledImage src={'/social-images/youtube.svg'} />
                </Link>
            </li>
        </List>
        <StyledParagraph>
            ИП Лаврик Роман
        </StyledParagraph>
        <StyledParagraph>
            Хочешь украсть права - выходи в октагон
        </StyledParagraph>
    </Container>
);