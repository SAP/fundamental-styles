import {Subtitle, Title, Stories} from '@storybook/addon-docs';
import {useContext} from 'react';
import './DocsPage.scss';
import {useThemedStoryContainers} from '../../hooks/useThemedStoryContainers';
import Community from '../Community';
import Versions from '../Versions';
import Description from '../Description';
import Footer from '../Footer';
import Header from '../Header';
import InfoLabels from '../InfoLabels';
import Toc from '../Toc/Toc';
import {SAPContext} from "../../contexts/SAPContext";

const DocsPage = () => {
    const {storyContext} = useContext(SAPContext);

    useThemedStoryContainers();

    // do not display Dev or Visual stories in docs
    if (storyContext.kind === 'Visual' || /Dev/.test(storyContext.title)) {
        return null;
    }

    return (
        <>
            <Header/>

            {/* wrapping intro content in the sb-docs-intro class for appropriate text color in all themes */}
            <div className="sb-docs-intro">
                <Title/>
                <Toc/>
                <Subtitle/>
                <InfoLabels/>
                <Description desc={storyContext.parameters['description']}/>
            </div>

            <Stories title={"Examples"}/>
            <Community/>
            <Versions/>
            <Footer/>
        </>
    );
};

DocsPage.displayName = 'DocsPage';

export default DocsPage;
