import Markdown from 'markdown-to-jsx';
import React from 'react';

const Description = (props) => {
    return (
        <Markdown options={{ forceBlock: true}}>{props.desc}</Markdown>
    )
}

Description.displayName = 'Description';

export default Description;
