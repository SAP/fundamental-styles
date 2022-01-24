import React from 'react';
import availableThemes from '../availableThemes';

export const ThemeSelect = ({ selectedTheme, onThemeChange }) => {
    return (
        <>
            <label className="fddocs-header--label" htmlFor="examplesTheme">
                Theme
            </label>
            <select
                id="examplesTheme"
                className="fddocs-select"
                onChange={(e) => onThemeChange(e)}
                value={selectedTheme}
            >
                {availableThemes.map((availableTheme) => {
                    return (
                        <option value={availableTheme.value} key={availableTheme.value}>
                            {availableTheme.title}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
