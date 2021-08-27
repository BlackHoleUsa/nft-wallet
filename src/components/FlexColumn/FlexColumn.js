import React from 'react';

export const FlexColumn = ({ className, children, style }) => {
    return(
        <div className={`app-flex-column ${className}`} style={style}>
            {children}
        </div>
    );
}