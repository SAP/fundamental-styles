/* eslint-disable no-unused-vars,sort-imports */
import React, { useContext } from 'react';
import Community from '../../.storybook/custom/components/Community';
import Versions from '../../.storybook/custom/components/Versions';
import Footer from '../../.storybook/custom/components/Footer';
import Header from '../../.storybook/custom/components/Header';
import { SAPContext } from '../../.storybook/custom/hooks/SAPContext';
import useStyles from '../../.storybook/custom/hooks/useStyles';
import Readme from '../../README.md';
import IntroductionPageStyles from '../../.storybook/custom/IntroductionPage.scss';

export const IntroductionPage = () => {
    const sapContext = useContext(SAPContext);
    useStyles(IntroductionPageStyles);

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
            <div className="fd-introduction">
                <Readme />
            </div>
            <Community />
            <Versions />
            <Footer />
        </>
    );
};
