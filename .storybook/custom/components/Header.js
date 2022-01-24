import React from 'react';
import packageJson from '../../../package.json';
import { DirectionalitySelect } from './DirectionalitySelect';
import GithubSvg from './GithubSvg';
import { IfBlock } from './IfBlock';
import { ThemeSelect } from './ThemeSelect';
import { useStorybookState } from '@storybook/api';

const Header = ({ showSelectors, theme, directionality, onThemeChange, onDirectionalityChange }) => {
    const managerContext = useStorybookState();
    console.log({ managerContext });
    const selectedTheme = theme || 'sap_fiori_3';
    const selectedDirectionality = directionality || 'ltr';
    const handlersPassed = onThemeChange && onDirectionalityChange;

    return (
        <header className="fddocs-header">
            <section className="fddocs-header--left">
                <span>Fundamental Styles</span>
            </section>
            <section className="fddocs-header--right">
                <IfBlock condition={!!showSelectors && handlersPassed}>
                    <DirectionalitySelect
                        selectedDirectionality={selectedDirectionality}
                        onDirectionalityChange={onDirectionalityChange}
                    />
                    <ThemeSelect selectedTheme={selectedTheme} onThemeChange={onThemeChange} />
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
