import React from 'react';

interface IBox {
    children: any;
    className?: string;
}

export const Box = ({ children, className="" }): React.FunctionComponentElement<IBox> => (
    <div className={className}>
        {children}
    </div>
);