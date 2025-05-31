import DirectionalitySelect from './DirectionalitySelect';
import ThemeSelect from './ThemeSelect';
import GithubLink from './GithubLink';
import Versions from './Versions';
import { IfBlock } from './IfBlock';
import { useContext } from 'react';
import { SAPContext } from '../contexts/SAPContext';
import ContentDensitySelect from './ContentDensitySelect';
import { styled } from 'storybook/theming';

const spacing = 10;

const HeaderSectionButton = styled.div(({ theme }) => ({
    display: 'inline-block',
    marginLeft: spacing / 2,
    marginRight: spacing / 2
}));

const Header = () => {
    const { storyPackage, storyContext } = useContext(SAPContext);
    const isVisualStory = storyContext?.parameters['fileName']?.match(/\.visual\.ts$/);

    return (
        <header className="fddocs-header">
            <Versions/>
            <IfBlock condition={!isVisualStory}>
                <HeaderSectionButton><DirectionalitySelect /></HeaderSectionButton>
                <HeaderSectionButton><ContentDensitySelect /></HeaderSectionButton>
                {(storyPackage?.themes || []).length > 0 &&
                    <HeaderSectionButton><ThemeSelect /></HeaderSectionButton>}
            </IfBlock>
            <GithubLink />
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
