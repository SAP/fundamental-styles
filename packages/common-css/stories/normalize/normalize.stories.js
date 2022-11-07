import description from './normalize.story.description.html?raw'

export default {
    title: 'Normalize',
    parameters: {
        description,
        docs: { iframeHeight: 500 }
    }
};

const localStyles = `
<style>
    .sap-docs-container section {
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }
    .sap-docs-container div {
        background: #69ADF8;
        width: 4rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
    }
</style>
`;

export const DisplayHelperClass = () => `${localStyles}
<code>
    <pre>

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    main {
        display: block;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    </pre>
</code>
`;

DisplayHelperClass.storyName = 'Normalize';

DisplayHelperClass.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
        ` }
    }
};
