import '../../dist/layout-panel.css';
import '../../dist/layout.css';
import '../../dist/section.css';
import '../../dist/layout-grid.css';

export default {
    title: 'Layouts/Layout Grid',
    parameters: {
        description: 'Use a layout grid to arrange components evenly in a grid layout.'
    }
};

export const defaultLayoutGrid3Columns = () => `
<div class="fd-layout-grid">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

defaultLayoutGrid3Columns.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const oneColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-1">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

oneColumnGrid.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const twoColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-2">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

twoColumnGrid.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const fourColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-4">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

fourColumnGrid.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const fiveColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-5">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

fiveColumnGrid.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const sixColumnGrid = () => `
<div class="fd-layout-grid fd-layout-grid--col-6">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

sixColumnGrid.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const layoutGridNoGap = () => `
<div class="fd-layout-grid fd-layout-grid--no-gap">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

layoutGridNoGap.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The <code>.fd-layout-grid-no-gap</code> modifier will remove margins between the panels.'
    }
};

export const layoutGridGrap1 = () => `
<div class="fd-layout-grid fd-layout-grid--gap-1">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
</div>
`;

layoutGridGrap1.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'The <code>.fd-layout-grid-gap-1</code> modifier will leave <code>1px</code> margins between the panels.'
    }
};

export const layoutGridWithColumnSpan = () => `
<div class="fd-layout-grid fd-layout-grid--col-6">
    <div class="fd-layout-panel fd-layout-grid__span-column-2">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-grid__span-column-2 </p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel fd-layout-grid__span-column-3">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-grid__span-column-3</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel fd-layout-grid__span-column-4">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-grid__span-column-4</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel fd-layout-grid__span-column-5">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-grid__span-column-5</p>
        </div>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            <p>.fd-layout-panel</p>
        </div>
    </div>
    <div class="fd-layout-panel fd-layout-grid__span-column-6">
        <div class="fd-layout-panel__body">
            <p>fd-layout-grid__span-column-6</p>
        </div>
    </div>
</div>
`;

layoutGridWithColumnSpan.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: 'The <code>.fd-layout-grid__span-column-[num]</code>. <code>[num]</code> option ranges from 2 to 6.'
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
