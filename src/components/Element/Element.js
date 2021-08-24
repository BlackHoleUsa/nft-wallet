import React from 'react';

export const Element = ({ className, children, style }) => {
    return(
        <div className={className} style={style}>
            {children}
        </div>
    );
}