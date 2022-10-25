import React, {useContext} from 'react';
import InfoLabel from './InfoLabel';
import {SAPContext} from "fundamental-styles/doc-ui";

export default () => {
    const {storyContext} = useContext(SAPContext);

    return (
        <>
            {storyContext.parameters?.['tags']?.map((tag, i) => (
                <InfoLabel key={i} tag={tag}/>
            ))}
        </>
    );
};
