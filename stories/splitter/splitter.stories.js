export default {
    title: 'Components/Splitter',
    parameters: {
        description: `
The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed on one screen or across different areas, which may also be off-canvas. This depends on the device class and the requirements and settings of the application.

**Note**: Resizing logic you should implement by yourself.`,
        tags: ['f3'],
        components: ['splitter', 'icon', 'button']
    }
};

export const Vertical = () => `<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <span class='fd-splitter__resizer-grip'>
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </span>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </button>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <span class='fd-splitter__resizer-grip'>
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </span>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </button>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>
`;

Vertical.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'Content split by the vertical areas (columns).'
        }
    }
};

export const Horizontal = () => `<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <span class='fd-splitter__resizer-grip'>
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </span>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </button>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <span class='fd-splitter__resizer-grip'>
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </span>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </button>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>
`;

Horizontal.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'Content split by the horizontal areas (rows).'
        }
    }
};

export const MixedAndNested = () => `<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content, Level 0
        </div>

        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <span class='fd-splitter__resizer-grip'>
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </span>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </button>

        <div class='fd-splitter__split-pane'>
            Content, Level 0
            
            <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
                <div class='fd-splitter__split-pane'>
                    Content, Level 1
                </div>

                <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                    <span class='fd-splitter__resizer-decoration-before'></span>

                    <span class='fd-splitter__resizer-grip'>
                        <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
                    </span>

                    <span class='fd-splitter__resizer-decoration-after'></span>
                </button>

                <div class='fd-splitter__split-pane'>
                    Content, Level 1
                    
                    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
                        <div class='fd-splitter__split-pane'>
                            Content, Level 2
                        </div>
        
                        <button class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                            <span class='fd-splitter__resizer-decoration-before'></span>
        
                            <span class='fd-splitter__resizer-grip'>
                                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
                            </span>
        
                            <span class='fd-splitter__resizer-decoration-after'></span>
                        </button>
        
                        <div class='fd-splitter__split-pane'>
                            Content, Level 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

MixedAndNested.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'Splitter containers may be nested.'
        }
    }
};
