import '../custom.scss';
import Community from './Community';
import { DocsContext } from '@storybook/addon-docs/blocks';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import Toc from './Toc';
import tocbot from 'tocbot';
import React, { useContext, useEffect } from 'react';
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

    // do not display disabled stories (dev only)
    const stories = context.storyStore?.getStoriesForKind(context.kind)?.filter((s) => !s.parameters?.docs?.disable);

    const renderInfoLabels = (tags) => {
        let infoLabels = []
        tags?.forEach((tag) => {
            infoLabels.push(<InfoLabel
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
            <Header />
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
