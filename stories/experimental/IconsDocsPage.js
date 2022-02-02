/* eslint-disable no-unused-vars,sort-imports */
import { DocsContext, DocsStory, Heading, Subtitle, Title } from '@storybook/addon-docs';
import React, { useContext, useEffect } from 'react';
import Header from '../../.storybook/custom/components/Header';
import Toc from '../../.storybook/custom/components/Toc';
import visibleStories from '../../.storybook/custom/helpers/visibleStories';
import { SAPContext } from '../../.storybook/custom/hooks/SAPContext';
import useStyles from '../../.storybook/custom/hooks/useStyles';
import useThemedStoryContainers from '../../.storybook/custom/hooks/useThemedStoryContainers';
import themeVariablesManager from '../../.storybook/custom/styleChangers/dev/themeVariablesManager';
import customStyles from '../../.storybook/custom/DocsPage.scss';
import fnSearch from '../../src/fn/fn-search.scss';
import layoutGrid from '../../src/styles/layout-grid.scss';
import layoutPanel from '../../src/styles/layout-panel.scss';
import link from '../../src/styles/link.scss';
import section from '../../src/styles/section.scss';
import AvailableIcons from './AvailableIcons/AvailableIcons';
import Description from './description.md';

const themeManager = themeVariablesManager('IconsDocsPage');

export default () => {
    const docsContext = useContext(DocsContext);
    const sapContext = useContext(SAPContext);

    useStyles(customStyles, fnSearch, section, layoutPanel, layoutGrid, link);
    useEffect(() => {
        themeManager.use('sap_fiori_3');
    }, []);
    useThemedStoryContainers();

    const stories = visibleStories(docsContext);

    return (
        <>
            <Header
                showSelectors={sapContext.showSelectors}
                theme={sapContext.theme}
                directionality={sapContext.directionality}
                onThemeChange={(e) => sapContext.setTheme(e.target.value)}
                onDirectionalityChange={(e) => sapContext.setDirectionality(e.target.value)}
                fioriVersion={sapContext.fioriVersion}
                setFioriVersion={sapContext.setFioriVersion}
            />
            <div className="sb-docs-intro">
                <Title />
                <Toc />
                <Subtitle />
                <Description />
            </div>
            <Heading>Examples</Heading>

            {stories.map((story) => story && <DocsStory key={story.id} {...story} expanded withToolbar />)}
            <AvailableIcons />
        </>
    );
};
