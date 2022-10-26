import '../../../src/splitter.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
export default {
    title: 'Components/Splitter',
    parameters: {
        description: `
The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed on one screen or across different areas, which may also be off-canvas. This depends on the device class and the requirements and settings of the application.

**Note**: Resizing logic you should implement yourself.

Elements structure:
* \`fd-splitter\` Component
  * \`fd-splitter__pane-container\` Container for panes that has the same orientation.
  * \`fd-splitter__pane-container--vertical\` Modifier class for the container to set panes orientation to vertical (align in columns).
  * \`fd-splitter__pane-container--horizontal\` Modifier class for the container to set panes orientation to horizontal (align in rows).
    * \`fd-splitter__split-pane\` Pane that can be resized.
    * \`fd-splitter__resizer\` Resizer element.
    * \`fd-splitter__resizer--translucent\` Modifier class for the resizer to change its look.
    * \`fd-splitter__resizer--transparent\` Modifier class for the resizer to change its look.
      * \`fd-splitter__resizer-decoration-before\` Resizer decoration element.
      * \`fd-splitter__resizer-grip\` Resizer grip element.
      * \`fd-splitter__resizer-decoration-after\` Resizer decoration element.
    * \`fd-splitter__pagination\` Pagination element.
      * \`fd-splitter__pagination-item\` Pagination item element.
      * \`fd-splitter__pagination-item--active\` Modifier class for the active pagination item.
        * \`fd-splitter__pagination-item-dot\` Pagination item dot element.
`,
        tags: ['non-f3']
    }
};

export const Default = () => `<h2>Vertical</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>

<h2>Horizontal</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>
`;

Default.parameters = {
    docs: {
        description: {
            story: `
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`
        }
    }
};

export const MixedAndNested = () => `
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content, Level 0
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
                <div class='fd-splitter__split-pane'>
                    Content, Level 1
                </div>

                <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                    <span class='fd-splitter__resizer-decoration-before'></span>

                    <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex='-1'>
                        <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
                    </button>

                    <span class='fd-splitter__resizer-decoration-after'></span>
                </div>

                <div class='fd-splitter__split-pane'>
                    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
                        <div class='fd-splitter__split-pane'>
                            Content, Level 2
                        </div>
        
                        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                            <span class='fd-splitter__resizer-decoration-before'></span>
        
                            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex='-1'>
                                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
                            </button>
        
                            <span class='fd-splitter__resizer-decoration-after'></span>
                        </div>
        
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
        description: {
            story: `
Splitter may contain nested containers with different orientations.
`
        }
    }
};

export const Pagination = () => `<h2>One root pane</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div class='fd-splitter__pagination'>
            <button class="fd-button fd-button--transparent fd-splitter__pagination-item fd-splitter__pagination-item--active">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--transparent fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>
        </div>
    </div>
</div>

<h2>Two root panes</h2>

<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
            <div class='fd-splitter__split-pane'>
                Content
            </div>

            <div class='fd-splitter__pagination'>
                <button class="fd-button fd-button--transparent fd-splitter__pagination-item fd-splitter__pagination-item--active">
                    <span class="fd-splitter__pagination-item-dot"></span>
                </button>

                <button class="fd-button fd-button--transparent fd-splitter__pagination-item">
                    <span class="fd-splitter__pagination-item-dot"></span>
                </button>
            </div>
        </div>
    </div>
</div>`;

Pagination.parameters = {
    docs: {
        description: {
            story: `
Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.
`
        }
    }
};

export const ResizerAppearance = () => `
<div class="fd-splitter" style="height: 160px; background: #cccccc;">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Next resizer has default appearance.
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Next resizer has translucent appearance.
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Next resizer has transparent appearance.
        </div>
        
        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--transparent" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>`;

ResizerAppearance.parameters = {
    docs: {
        description: {
            story: `
While panes have transparent background resizer has its own by default
but it's possible to pick one from several options. To do that apply modifier class to the resizer element:
* \`fd-splitter__resizer--translucent\` Translucent appearance
* \`fd-splitter__resizer--transparent\` Transparent appearance
`
        }
    }
};
