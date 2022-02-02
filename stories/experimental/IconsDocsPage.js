/* eslint-disable no-unused-vars,sort-imports */
import { DocsContext, DocsStory, Heading, Subtitle, Title } from '@storybook/addon-docs';
import React, { useContext, useEffect } from 'react';
import tocbot from 'tocbot';
import Description from '../../.storybook/custom/components/Description';
import Toc from '../../.storybook/custom/components/Toc';
import themeVariablesManager from '../../.storybook/custom/styleChangers/dev/themeVariablesManager';
import fnSearch from '../../src/fn/fn-search.scss';
import layoutGrid from '../../src/styles/layout-grid.scss';
import layoutPanel from '../../src/styles/layout-panel.scss';
import link from '../../src/styles/link.scss';
import section from '../../src/styles/section.scss';
import AvailableIcons from './AvailableIcons/AvailableIcons';

const themeManager = themeVariablesManager('IconsDocsPage');

export default () => {
    useEffect(() => {
        themeManager.use('sap_fiori_3');
        const styles = [fnSearch, section, layoutPanel, layoutGrid, link];
        styles.forEach((style) => style.use());
        return () => {
            styles.forEach((style) => style.unuse());
        };
    }, []);
    useEffect(() => {
        tocbot.init({
            tocSelector: '.js-toc',
            contentSelector: '.sbdocs-wrapper',
            headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
            orderedList: true,
            collapseDepth: 3,
            hasInnerContainers: true
        });
        document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));
    }, []);
    useEffect(() => {
        const _t = Array.from(document.getElementsByClassName('sbdocs-preview'));

        _t.forEach((storyPreview) => {
            const previewBody = storyPreview?.childNodes[1];
            previewBody?.classList.add('themed-container');
        });
    }, []);
    const docsContext = useContext(DocsContext);
    // do not display disabled stories (dev only)
    const stories = docsContext
        .componentStories()
        .filter((story) => story.kind === docsContext.kind && !story.parameters?.docs?.disable);

    return (
        <>
            <div className="sb-docs-intro">
                <Title />
                <Toc />
                <Subtitle />
                {docsContext?.parameters?.description && <Description desc={docsContext?.parameters?.description} />}
            </div>
            <Heading>Examples</Heading>

            {stories.map((story) => story && <DocsStory key={story.id} {...story} expanded withToolbar />)}
            <AvailableIcons />
        </>
    );
};
