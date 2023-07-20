import '../../src/sap-position.scss';

import description from './position.story.description.html?raw'

export default {
    title: 'Position',
    parameters: {
        description,
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
        min-width: 8rem;
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
    }
</style>
`;

export const PositionClasses = () => `${localStyles}
<div class="sap-docs-container">
    <h4>relative position</h4>
    <div class="sap-position-relative sap-position-top-0 sap-position-bottom-0">.sap-position-relative.sap-position-top-0.sap-position-bottom-0</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>static position</h4>
    <div class="sap-position-static">.sap-position-static</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>inherit position</h4>
    <div class="sap-position-inherit">.sap-position-inherit</div>
</div>

<br><br>

<div class="sap-docs-container">
    <h4>absolute position</h4>
    <div class="sap-position-absolute">.sap-position-absolute</div>
</div>
`;

PositionClasses.parameters = {
    docs: {
        description: {
            story: `
        ` }
    }
};


export const PositionMixins = () => `${localStyles}
<div class="sap-docs-container">
    <code><pre>
    .test-position {
        @include sap-position(absolute, $top: 0, $bottom: 2rem);
    }
    </pre></code>

    <code><pre>
    .test-position-relative {
        @include sap-position-relative($top: 0, $bottom: 2rem);
    }
    </pre></code>
    
    <code><pre>
    .test-position-absolute {
        @include sap-position-absolute($top: 0, $right: 4rem, $bottom: 2rem);
    }
    </pre></code>
      
    <code><pre>
    .test-position-fixed {
        @include sap-position-fixed($top: 0, $right: 4rem, $bottom: 2rem, $left: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-sticky {
        @include sap-position-sticky($bottom: 0);
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center {
        @include sap-position-absolute-center();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-horizontally {
        @include sap-position-absolute-center-x();
    }
    </pre></code>

    <code><pre>
    .test-position-absolute-center-vertically {
        @include sap-position-absolute-center-y();
    }
    </pre></code>
</div>

`;

PositionMixins.parameters = {
    docs: {
        description: {
            story: `
        ` }
    }
};
