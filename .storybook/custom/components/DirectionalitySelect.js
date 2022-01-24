import React from 'react';
import directionalities from '../directionalities';

export const DirectionalitySelect = ({ selectedDirectionality, onDirectionalityChange }) => {
    return (
        <>
            <label className="fddocs-header--label" htmlFor="examplesDirectionality">
                Directionality
            </label>
            <select
                id="examplesDirectionality"
                className="fddocs-select"
                onChange={(e) => onDirectionalityChange(e)}
                value={selectedDirectionality}
            >
                {directionalities.map((directionality) => {
                    return (
                        <option value={directionality.value} key={directionality.value}>
                            {directionality.title}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
