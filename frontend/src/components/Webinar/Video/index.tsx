import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
    object-fit: cover !important;
    background: black;
    opacity: .7;
`;

export const Video = () => (
    <StyledVideo width="100%" autoPlay loop muted>
        <source type="video/mp4" src="code.mov" />
    </StyledVideo>
);