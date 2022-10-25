/* eslint-disable no-unused-vars,sort-imports */
import {Heading, Subtitle, Title} from '@storybook/addon-docs';
import React from 'react';
import AvailableIcons from './AvailableIcons/AvailableIcons';
import Description from './description.md';

import 'fn/src/fn-search.scss';
import 'styles/src/layout-grid.scss';
import 'styles/src/layout-panel.scss';
import 'styles/src/link.scss';
import 'styles/src/section.scss';
import 'fn/src/fn-button.scss';
import {Header, Toc, useThemedStoryContainers, VisibleStories} from "fundamental-styles/doc-ui";

export default () => {
    useThemedStoryContainers();

    return (
        <>
            <Header/>
            <div className="sb-docs-intro">
                <Title/>
                <Toc/>
                <Subtitle/>
                <Description/>
            </div>
            <Heading>Examples</Heading>

            <VisibleStories/>
            <AvailableIcons/>
        </>
    );
};
