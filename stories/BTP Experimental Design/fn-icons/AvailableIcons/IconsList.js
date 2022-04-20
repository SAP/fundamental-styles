/* eslint-disable no-unused-vars */
import Icon from './Icon';
import iconStyles from '../../../../src/icons/fn-icons-independent.scss';
import { IfBlock } from '../../../../.storybook/custom/components/IfBlock';
import React, { useEffect, useMemo, useState } from 'react';

const colStyle = {
    minHeight: '150px'
};

export default ({ icons }) => {
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        iconStyles.use();
        return () => {
            iconStyles.unuse();
        };
    }, []);
    useEffect(() => setShowAll(false), [icons]);
    const visibleIcons = useMemo(() => {
        if (showAll) {
            return icons;
        }
        return icons.slice(0, 11);
    }, [icons, showAll]);
    return (
        <div className="fd-row">
            <IfBlock condition={visibleIcons.length > 0}>
                {visibleIcons.map((iconName) => {
                    return (
                        <div className="fd-col fd-col--2" key={iconName} style={colStyle}>
                            <Icon iconName={iconName} />
                        </div>
                    );
                })}
                <IfBlock condition={!showAll && visibleIcons.length !== icons.length}>
                    <div className="fd-col fd-col--2" style={colStyle}>
                        <div className="fd-layout-panel" style={{ height: '100%' }}>
                            <div
                                className="fd-layout-panel__body"
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <a onClick={() => setShowAll(true)} className="fd-link" style={{ cursor: 'pointer' }}>
                                    Show all {icons.length} icons
                                </a>
                            </div>
                        </div>
                    </div>
                </IfBlock>
            </IfBlock>
            <IfBlock condition={visibleIcons.length === 0}>Nothing found</IfBlock>
        </div>
    );
};
