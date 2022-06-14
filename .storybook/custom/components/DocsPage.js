import { DocsContext, DocsStory, Heading, Subtitle, Title } from '@storybook/addon-docs';
import React, { useContext } from 'react';
import DocsPageStyles from '../DocsPage.scss';
import visibleStories from '../helpers/visibleStories';
import { SAPContext } from '../hooks/SAPContext';
import useStyles from '../hooks/useStyles';
import useThemedStoryContainers from '../hooks/useThemedStoryContainers';
import Community from './Community';
import Versions from './Versions';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import InfoLabels from './InfoLabels';
import Toc from './Toc';

const DocsPage = () => {
    const docsContext = useContext(DocsContext);
    const sapContext = useContext(SAPContext);

    useStyles(DocsPageStyles);
    useThemedStoryContainers();

    // do not display Dev or Visual stories in docs
    if (docsContext.kind === 'Visual' || /Dev/.test(docsContext.kind)) {
        return null;
    }

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

            {/* wrapping intro content in the sb-docs-intro class for appropriate text color in all themes */}
            <div className="sb-docs-intro">
                <Title />
                <Toc />
                <Subtitle />
                <InfoLabels tags={docsContext?.parameters?.tags} />
                {docsContext?.parameters?.description && <Description desc={docsContext?.parameters?.description} />}
            </div>

            <Heading>Examples</Heading>

            {stories.map((story) => story && <DocsStory key={story.id} {...story} expanded withToolbar />)}

            <Community />
            <Versions />
            <Footer />
        </>
    );
};

DocsPage.displayName = 'DocsPage';

export default DocsPage;
