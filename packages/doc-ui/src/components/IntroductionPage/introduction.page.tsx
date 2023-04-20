import './IntroductionPage.scss';
import Header from '../Header';
import Community from '../Community';
import Versions from '../Versions';
import Footer from '../Footer';

export const IntroductionPage = ({children}) => {
    return (
        <>
            <Header/>
            <div className="fd-introduction">
                {children}
            </div>
            <Community/>
            <Versions/>
            <Footer/>
        </>
    );
};
