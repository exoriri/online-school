import React from 'react';

interface IBox {
    id?: string;
    children: any;
    className: string;
}

export const Box = ({ children, className="", ...rest }): React.FunctionComponentElement<IBox> => (
    <div {...rest} className={className}>
        {children}
    </div>
);