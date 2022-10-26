import DirectionalitySelect from './DirectionalitySelect';
import PackageSelect from './PackageSelect';
import ThemeSelect from './ThemeSelect';
import GithubLink from "./GithubLink";
import {IfBlock} from "./IfBlock";
import {useContext} from "react";
import {SAPContext} from "../contexts/SAPContext";

const Header = () => {
    const {storyContext} = useContext(SAPContext);

    return (
        <header className="fddocs-header">
            <section className="fddocs-header--section">
                <PackageSelect/>
            </section>
            <section className="fddocs-header--section">
                <IfBlock condition={!storyContext?.parameters['fileName']?.match(/\.visual\.ts$/)}>
                    <DirectionalitySelect/>
                    <ThemeSelect/>
                </IfBlock>
                <GithubLink/>
            </section>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
