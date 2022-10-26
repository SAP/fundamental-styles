import './IntroductionPage.scss';
import {Community, Footer, Header, Versions} from 'fundamental-styles/doc-ui';
import Readme from '../../README.md';

export const IntroductionPage = () => {
    return (
        <>
            <Header/>
            <div className="fd-introduction">
                <Readme/>
            </div>
            <Community/>
            <Versions/>
            <Footer/>
        </>
    );
};
