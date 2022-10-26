import '../../src/sap-display.scss';
import '../../src/sap-sr-only.scss';
import '../../../styles/src/icon.scss';

import description from './display.story.description.html?raw'

export default {
    title: 'Display',
    parameters: {
        description,
        docs: { iframeHeight: 500 }
    }
};

const localStyles = `
<style>
    .sap-docs-container section{
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
<h4>Display Flex</h4>
<div class="sap-docs-container">
    <section class="sap-display-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

<h4>Display Grid</h4>
<div class="sap-docs-container">
    <section class="sap-display-grid">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

<h4>Display Inline-Block</h4>
<div class="sap-docs-container">
    <section>
        <div class="sap-display-inline-block"></div>
        <div class="sap-display-inline-block"></div>
        <div class="sap-display-inline-block"></div>
    </section>
</div>
`;

DisplayHelperClass.storyName = 'Display';

DisplayHelperClass.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
        ` }
    }
};

export const ScreenReaderOnly = () => `${localStyles}
<a href="#">
    <span class="sap-icon sap-icon--account"></span>
    <span class="sap-sr-only">User Account</span>
</a>
`;

ScreenReaderOnly.storyName = 'Screen-reader-only elements';

ScreenReaderOnly.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The <code>.sap-sr-only</code> class will hide the element visually without hiding it from screen readers. <br><br>
            <b>SCSS Mixin: </b>
            <code>@include sap-sr-only();</code>
        ` }
    }
};
