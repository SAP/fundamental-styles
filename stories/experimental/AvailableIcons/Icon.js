// eslint-disable-next-line no-unused-vars
import React from 'react';

const panelStyle = {
    height: '100%'
};

const panelBodyStyle = {
    textAlign: 'center'
};

export default ({ iconName }) => {
    const iconClass = `fn-icon fn-icon--color-default fn-icon--size-40 fn-icon--${iconName}`;
    return (
        <div className="fd-layout-panel" style={panelStyle}>
            <div className="fd-layout-panel__body" style={panelBodyStyle}>
                <span className={iconClass} />
                <p>{iconName}</p>
            </div>
        </div>
    );
};
