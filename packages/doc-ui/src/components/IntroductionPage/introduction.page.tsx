import './IntroductionPage.scss';
import Header from '../Header';
import Community from '../Community';
import Versions from '../Versions';
import Footer from '../Footer';

export const IntroductionPage = ({content}) => {
    return (
        <>
            <Header/>
            <div className="fd-introduction">
                {content}
            </div>
            <Community/>
            <Versions/>
            <Footer/>
        </>
    );
};
