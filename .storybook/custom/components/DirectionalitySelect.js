import React from 'react';
import directionalities from '../constants/directionalities';

export default ({ selectedDirectionality, onDirectionalityChange }) => {
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
