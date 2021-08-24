import React from 'react';

export const Element = ({ className, children }) => {
    return(
        <div className={className}>
            {children}
        </div>
    );
}