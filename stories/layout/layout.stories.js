import '../../dist/layout-panel.css';
import '../../dist/layout.css';
import '../../dist/section.css';
import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Column Layouts',
    parameters: {
        description: `Layout containers used to arrange content on a 12-column grid. Can be used inside other layout containers like sections and panels.

Columns must be wrapper with this container. Some modifiers are provided to give you better control over your layout.`
    }
};

export const defaultContainer = () => `
<div class="fd-container fddocs">fd-container</div>
`;

defaultContainer.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Default container has a letterbox max-width of <code>1290px</code>.'
    }
};

export const fluidContainer = () => `
<div class="fd-container fd-container--fluid fddocs">
    fd-container--fluid
</div>
`;

fluidContainer.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: '<code>.fd-container--fluid</code> modifier overrides the max-width for a fluid layout with 100%.'
    }
};
export const centeredContainer = () => `
<div class="fd-container fd-container--centered fddocs">
    fd-container--centered
</div>
`;

centeredContainer.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: '<code>.fd-container--centered</code> modifier for aligning the wrapper in the of the parent container.'
    }
};
export const flexContainer = () => `
<div class="fd-container fd-container--flex fddocs">
    <code>.fd-container--flex</code>
</div>
`;

flexContainer.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: '<code>.fd-container--flex</code> modifier for using flexbox option with the columns.'
    }
};

export const columns12 = () => `
<div class="fd-container  fd-container--fluid fddocs">
    <div class="fd-col--1">1</div>
    <div class="fd-col--1">2</div>
    <div class="fd-col--1">3</div>
    <div class="fd-col--1">4</div>
    <div class="fd-col--1">5</div>
    <div class="fd-col--1">6</div>
    <div class="fd-col--1">7</div>
    <div class="fd-col--1">8</div>
    <div class="fd-col--1">9</div>
    <div class="fd-col--1">10</div>
    <div class="fd-col--1">11</div>
    <div class="fd-col--1">12</div>
</div>
`;

columns12.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'This component use <code>.fd-col--1</code> to illustrate the how the grid works with the spacing.'
    }
};
export const sixColumnLayout = () => `
<div class="fd-container fddocs">
    <div class="fd-col--2">1</div>
    <div class="fd-col--2">2</div>
    <div class="fd-col--2">3</div>
    <div class="fd-col--2">4</div>
    <div class="fd-col--2">5</div>
    <div class="fd-col--2">6</div>
</div>
`;

sixColumnLayout.parameters = {
    docs: {
        iframeHeight: 300
    }
};
export const fourColumnLayout = () => `
<div class="fd-container fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--3">2</div>
    <div class="fd-col--3">3</div>
    <div class="fd-col--3">4</div>
</div>
`;

fourColumnLayout.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const threeColumnLayout = () => `
<div class="fd-container fddocs">
    <div class="fd-col--4">1</div>
    <div class="fd-col--4">2</div>
    <div class="fd-col--4">3</div>
</div>
`;

threeColumnLayout.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const twoColumns = () => `
<div class="fd-container fd-has-align-items-center fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--9">2</div>
</div>
`;

twoColumns.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const threeColumns = () => `
<div class="fd-container fddocs">
    <div class="fd-col--3">1</div>
    <div class="fd-col--6">2</div>
    <div class="fd-col--3">3</div>
</div>
`;

threeColumns.parameters = {
    docs: {
        iframeHeight: 300
    }
};

export const twelve = () => `
<div class="fd-container fddocs">
    <div class="fd-col--9 fd-col--shift-3">1</div>
</div>
`;
twelve.storyName = 'One column, shifted by three columns';
twelve.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'In the following component we have only one columns that is shifted by 3 columns.'
    }
};

export const thirteen = () => `
<div class="fd-container fd-container--centered fd-container--flex fddocs">
    <div class="fd-col--9">fix col</div>
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
</div>
`;

thirteen.storyName = 'Four columns and Three flex columns';
thirteen.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Inside flex containers, use .fd-col to evenly fill the left over space. The columns leave without a given size will adjust the size according to the CSS Flexbox rules.'
    }
};

export const forteen = () => `
<div class="fd-container fd-container--flex fddocs">
    <div class="fd-col">1</div>
    <div class="fd-col">2</div>
    <div class="fd-col">3</div>
</div>
`;

forteen.storyName = 'Three columns using flexbox';
forteen.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Inside flex containers, use <code>.fd-col</code> to distribute space with no margin.'
    }
};
