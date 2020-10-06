import React from 'react';
import tagData from './tags.json';

const InfoLabel = ({ tag }) => {
    return (
        tagData[tag] && <span title={tagData[tag]?.title} className={`fddocs fd-info-label fd-info-label--accent-color-${tagData[tag]?.color}`}>{tagData[tag]?.name}</span>
    )
}

InfoLabel.displayName = 'InfoLabel';

export default InfoLabel;
