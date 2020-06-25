import '../../dist/layout-panel.css';
import '../../dist/layout.css';
import '../../dist/section.css';
import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Layout Grid',
    parameters: {
        description: 'Testing Part only'
    }
};

export const threeColumnGrid = () => `
<div class="fd-layout-grid">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

threeColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const oneColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-1">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

oneColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const twoColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-2">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

twoColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const fourColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-4">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

fourColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const fiveColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-5">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

fiveColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const sixColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-6">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

sixColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const threeGridRowHelperColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-3">
        <div class="fdsb-layout-panel-playground fd-layout-grid__span-row-2">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

threeGridRowHelperColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const sixGridRowHelperColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-6">
        <div class="fdsb-layout-panel-playground fd-layout-grid__span-column-3">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

sixGridRowHelperColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const threeGridGutterHelperColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-3 fd-layout-grid--no-gap">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

threeGridGutterHelperColumnGrid.parameters = {
    docs: {
        disable: true
    }
};

export const threeGridGutterHelperGapColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-3 fd-layout-grid--gap-1">
        <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
    <div class="fdsb-layout-panel-playground">Placeholder div</div>
</div>
`;

threeGridGutterHelperGapColumnGrid.parameters = {
    docs: {
        disable: true
    }
};
