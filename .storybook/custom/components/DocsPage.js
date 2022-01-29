import { DocsContext, DocsStory, Heading, Subtitle, Title } from '@storybook/addon-docs';
import React, { useContext, useEffect } from 'react';
import tocbot from 'tocbot';
import '../custom.scss';
import { initToc } from '../hooks/initToc';
import { SAPContext } from '../hooks/SAPContext';
import Community from './Community';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import InfoLabel from './InfoLabel';
import Toc from './Toc';

const DocsPage = () => {
    // setup toc bot
    initToc([]);
    // make story containers themed by adding appropriate class
    useEffect(() => {
        const _t = Array.from(document.getElementsByClassName('sbdocs-preview'));

        _t.forEach((storyPreview) => {
            const previewBody = storyPreview?.childNodes[1];
            previewBody?.classList.add('themed-container');
        });
    }, []);

    const docsContext = useContext(DocsContext);
    const sapContext = useContext(SAPContext);
    // do not display Dev or Visual stories in docs
    if (docsContext.kind === 'Visual' || /Dev/.test(docsContext.kind)) {
        return null;
    }

    // do not display disabled stories (dev only)
    const stories = docsContext
        .componentStories()
        .filter((story) => story.kind === docsContext.kind && !story.parameters?.docs?.disable);

    const renderInfoLabels = (tags) => {
        let infoLabels = [];
        tags?.forEach((tag, i) => {
            infoLabels.push(<InfoLabel key={i} tag={tag} />);
        });
        return <>{infoLabels}</>;
    };

    return (
        <>
            <Header
                showSelectors={sapContext.showSelectors}
                theme={sapContext.theme}
                directionality={sapContext.directionality}
                onThemeChange={(e) => sapContext.setTheme(e.target.value)}
                onDirectionalityChange={(e) => sapContext.setDirectionality(e.target.value)}
            />

            {/* wrapping intro content in the sb-docs-intro class for appropriate text color in all themes */}
            <div className="sb-docs-intro">
                <Title />
                <Toc />
                <Subtitle />
                {renderInfoLabels(docsContext?.parameters?.tags)}
                {docsContext?.parameters?.description && <Description desc={docsContext?.parameters?.description} />}
            </div>

            <Heading>Examples</Heading>

            {stories.map((story) => story && <DocsStory key={story.id} {...story} expanded withToolbar />)}

            <Community />
            <Footer />
        </>
    );
};

DocsPage.displayName = 'DocsPage';

export default DocsPage;
