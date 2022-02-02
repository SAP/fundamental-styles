import React from 'react';
import fioriVersions from '../constants/fioriVersions';

export default ({ selectedFioriVersion, onVersionSelect }) => {
    return (
        <>
            <label className="fddocs-header--label" htmlFor="selectVersion">
                UI version
            </label>
            <select
                id="selectVersion"
                className="fddocs-select"
                onChange={(e) => onVersionSelect(e.target.value)}
                value={selectedFioriVersion}
            >
                {fioriVersions.map(({ title, value }) => {
                    return (
                        <option value={value} key={value}>
                            {title}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
