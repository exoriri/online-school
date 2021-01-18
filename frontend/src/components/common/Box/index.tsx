import React, { FunctionComponent } from 'react';

export interface Props {
    id?: string;
    className?: string;
}

export const Box: FunctionComponent<Props> = ({ children, className, id }) => (
    <div id={id} className={className}>
        {children}
    </div>
);