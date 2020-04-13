import React from 'react';

export const Image = ({ src, width=36, height=36, className="" }) => (
    <img src={src} width={width} height={height} className={className} />
);