import '../custom.scss';
import Community from './Community';
import { DocsContext } from '@storybook/addon-docs/blocks';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import Toc from './Toc';
import tocbot from 'tocbot';
import React, { useContext, useEffect, useState, useRef } from 'react';
import {
    Heading,
    Title,
    Subtitle,
    DocsStory,
} from '@storybook/addon-docs/blocks';
import InfoLabel from './InfoLabel';

const DocsPage = () => {
    // setup toc bot
    useEffect(() => {
        tocbot.init(
            {
                tocSelector: '.js-toc',
                contentSelector: '.sbdocs-wrapper',
                headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
                orderedList: true,
                collapseDepth: 3,
                hasInnerContainers: true
            }
        );
        document.querySelectorAll('.toc-link').forEach(x => x.setAttribute('target', '_self'));
    }, []);

    const context = useContext(DocsContext);

    // do not display Dev or Visual stories in docs
    if (context.kind === 'Visual' || /Dev/.test(context.kind)) {
        return null;
    }

    let [themeState, setThemeState] = useState('sap_fiori_3');
    const previousTheme = useRef();

    useEffect(() => {
        if (!previousTheme.current || previousTheme.current !== themeState) {
            let cssArr = context?.parameters?.components || [];
            cssArr.push('info-label');
            cssArr.forEach(component => {
                let stylePath = `${component}-${themeState}.css`;
                let link = document.createElement('link');

                link.type = 'text/css';
                link.rel = 'stylesheet';
                link.href = stylePath;

                document.head.appendChild(link);

                return () => { document.head.removeChild(link); }
            })
            previousTheme.current = themeState;
        }
    }, [themeState]);

    // do not display disabled stories (dev only)
    const stories = context.storyStore?.getStoriesForKind(context.kind)?.filter((s) => !s.parameters?.docs?.disable);

    const renderInfoLabels = (tags) => {
        let infoLabels = []
        tags?.forEach((tag, i) => {
            infoLabels.push(<InfoLabel
                key={i}
                tag={tag}
            />)
        })
        return (
            <>
                {infoLabels}
            </>
        );
    }

    return (
        <>
            <Header onThemeChange={(e) => setThemeState(e.target.value)} />
            <Title />
            <Toc />
            <Subtitle />
            {renderInfoLabels(context?.parameters?.tags)}
            {context?.parameters?.description && <Description desc={context?.parameters?.description} />}
            <Heading>Examples</Heading>
            {stories.map((story) => story && <DocsStory
                key={story.id}
                {...story}
                expanded
                withToolbar />)}
            <Community />
            <Footer />
        </>
    )
}

DocsPage.displayName = 'DocsPage';

export default DocsPage;
