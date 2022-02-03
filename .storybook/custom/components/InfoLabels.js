import React from 'react';
import InfoLabel from './InfoLabel';

export default ({ tags }) => {
    if (!tags) return null;
    return (
        <>
            {tags?.map((tag, i) => (
                <InfoLabel key={i} tag={tag} />
            ))}
        </>
    );
};
