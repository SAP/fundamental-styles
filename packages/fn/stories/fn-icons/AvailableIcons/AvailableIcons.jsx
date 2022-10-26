/* eslint-disable sort-imports,no-unused-vars */
import { iconNamesMap } from 'icons/src/icons.json';
import IconsList from './IconsList';
import SearchField from './SearchField';
import React, { useMemo, useState } from 'react';
import { Anchor, Subheading } from '@storybook/addon-docs';

const icons = iconNamesMap.map(([iconName]) => iconName);

export default () => {
    const [searchTerm, setSearchTerm] = useState('');
    const visibleIcons = useMemo(() => {
        return icons.filter((iconName) => iconName.includes(searchTerm));
    }, [searchTerm]);

    return (
        <>
            <Anchor storyId="available-stories">
                <Subheading>Available icons</Subheading>
                <div className="fd-layout-panel">
                    <div className="fd-layout-panel__body">
                        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <IconsList icons={visibleIcons} />
                    </div>
                </div>
            </Anchor>
        </>
    );
};
