// eslint-disable-next-line no-unused-vars
import React from 'react';

export default ({ searchTerm, setSearchTerm }) => {
    return (
        <>
            <div className="fn-search">
                <span className="fn-icon fn-icon--search" />
                <input
                    type="search"
                    className="fn-search__input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search icon"
                />
                <span className="fn-icon fn-icon--navigation-right-arrow" />
            </div>
        </>
    );
};
