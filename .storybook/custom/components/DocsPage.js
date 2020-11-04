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
import { changeDocumentTheme } from '../themeProvider';

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

    // make story containers themed by adding appropriate class
    useEffect(() => {
        document.getElementsByClassName('sbdocs-preview').forEach(storyPreview => {
            const previewBody = storyPreview?.childNodes[1];
            previewBody?.classList.add('themed-container');
        });
    }, []);

    const context = useContext(DocsContext);

    // do not display Dev or Visual stories in docs
    if (context.kind === 'Visual' || 'Dev' || /Dev/.test(context.kind)) {
        return null;
    }

    let [themeState, setThemeState] = useState('sap_fiori_3');
    const previousTheme = useRef();

    let [directionalityState, setDirectionalityState] = useState('ltr');
    const previousDirectionality = useRef();

    useEffect(() => {
        if(!previousDirectionality.current || previousDirectionality.current !== directionalityState){
            document.getElementsByClassName('sbdocs-preview').forEach(item => {
                item.childNodes[1].setAttribute('dir', directionalityState);
            });
            previousDirectionality.current = directionalityState;
        }
        
        if (!previousTheme.current || previousTheme.current !== themeState) {
            changeDocumentTheme(themeState, context?.parameters?.components || [])
        }
    }, [themeState, directionalityState]);

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
            <Header onThemeChange={(e) => setThemeState(e.target.value)} onDirectionalityChange={(e) => setDirectionalityState(e.target.value)} />
            {/* wrapping intro content in the sb-docs-intro class for appropriate text color in all themes */}
            <div className="sb-docs-intro">
                <Title />
                <Toc />
                <Subtitle />
                {renderInfoLabels(context?.parameters?.tags)}
                {context?.parameters?.description && <Description desc={context?.parameters?.description} />}
            </div>
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
