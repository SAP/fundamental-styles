import description from './meta-queries.story.description.html?raw';

export default {
    title: 'Media Queries',
    parameters: {
        description,
        docs: { iframeHeight: 500 }
    }
};

export const CustomMediaQueries = () => `<pre>
@include sap-media-min-width(400px) {
    div.example {
        font-size: 0.75 rem;
    }
}

@include sap-media-range-width(600px, 1023px) {
    div.example {
        font-size: 1rem;
    }
}

@include sap-media-range-width(1024px, 1439px) {
    div.example {
        font-size: 2rem;
    }
}
</pre>`;
CustomMediaQueries.storyName = ' ';
