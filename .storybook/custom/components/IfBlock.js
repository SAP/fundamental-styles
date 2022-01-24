import React from 'react';

export const IfBlock = ({condition, children}) => {
    if (condition) {
        return <>{children}</>
    }
    return <></>;
}
