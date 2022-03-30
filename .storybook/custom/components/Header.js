import React from 'react';
import packageJson from '../../../package.json';
import DirectionalitySelect from './DirectionalitySelect';
import VersionSelect from './VersionSelect';
import GithubSvg from './GithubSvg';
import { IfBlock } from './IfBlock';
import { ThemeSelect } from './ThemeSelect';

const Header = ({ showSelectors, theme, directionality, onThemeChange, onDirectionalityChange, fioriVersion, setFioriVersion }) => {
    const selectedTheme = theme || 'sap_fiori_3';
    const selectedDirectionality = directionality || 'ltr';
    const handlersPassed = onThemeChange && onDirectionalityChange;
    const hasThemeSupport = fioriVersion !== 'fioriNext';

    return (
        <header className="fddocs-header">
            <section className="fddocs-header--left">
                <span>Fundamental Styles</span>
            </section>
            <section className="fddocs-header--right">
                <IfBlock condition={setFioriVersion}>
                    <VersionSelect selectedFioriVersion={fioriVersion} onVersionSelect={setFioriVersion} />
                </IfBlock>
                <IfBlock condition={!!showSelectors && handlersPassed}>
                    <DirectionalitySelect
                        selectedDirectionality={selectedDirectionality}
                        onDirectionalityChange={onDirectionalityChange}
                    />
                    <IfBlock condition={hasThemeSupport}>
                        <ThemeSelect selectedTheme={selectedTheme} onThemeChange={onThemeChange} />
                    </IfBlock>
                </IfBlock>

                <a className="fddocs-header__anchor" href="https://github.com/SAP/fundamental-styles" target="_blank">
                    <GithubSvg />
                </a>
                <a
                    className="fddocs-header__anchor"
                    href={`https://github.com/SAP/fundamental-styles/tree/v${packageJson.version}`}
                    target="_blank"
                >
                    {`v${packageJson.version}`}
                </a>
            </section>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
