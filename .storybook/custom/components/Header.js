import packageJson from '../../../package.json';
import React from 'react';
import availableThemes from '../availableThemes';
import GithubSvg from './GithubSvg';

const Header = ({ onThemeChange, onDirectionalityChange }) => {
    return (
        <header className="fddocs-header">
            <section className="fddocs-header--left">
                <span>Fundamental Styles</span>
            </section>
            <section className="fddocs-header--right">
                <label className="fddocs-header--label" htmlFor="examplesDirectionality">
                    Directionality
                </label>
                <select
                    id="examplesDirectionality"
                    className="fddocs-select"
                    onChange={(e) => onDirectionalityChange(e)}
                >
                    <option value="ltr">Left-to-Right</option>
                    <option value="rtl">Right-to-Left</option>
                </select>
                <label className="fddocs-header--label" htmlFor="examplesTheme">
                    Theme
                </label>
                <select id="examplesTheme" className="fddocs-select" onChange={(e) => onThemeChange(e)}>
                    {availableThemes.map((availableTheme) => {
                        return (
                            <option value={availableTheme.value} key={availableTheme.value}>
                                {availableTheme.title}
                            </option>
                        );
                    })}
                </select>
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
