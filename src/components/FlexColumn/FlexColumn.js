import React from 'react';

export const FlexColumn = ({ className, children }) => {
    return(
        <div className={`app-flex-column ${className}`}>
            {children}
        </div>
    );
}