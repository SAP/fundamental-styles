export default {
    title: 'Dev/Drag and Drop Icon Tab Bar',
    parameters: {
        description: `
The Drag and Drop Icon Tab Bar can be used for styling state for drag and drop actions.


<br><br><br>
      `,
        tags: ['f3', 'theme', 'development'],
        components: ['icon', 'icon-tab-bar', 'popover', 'menu', 'button', 'list']
    }
};


export const hoveredTab = () => `<div class='fddocs-icon-tab-container' style="min-height: 800px;">
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview" style="position: absolute; left: 20px; top: 10px;">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
    </ul> 
</div>
</div>
`;
hoveredTab.storyName = 'Hovered tab state';
hoveredTab.parameters = {
    docs: {
        storyDescription: ''
    }
};


export const separatorHoveredTab = () => `<div class='fddocs-icon-tab-container' style="min-height: 800px;">
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">  
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview" style="position: absolute; left: 128px; top: 10px">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
    </ul> 
</div>
</div>
`;
separatorHoveredTab.storyName = 'Separator hovered tab state';
separatorHoveredTab.parameters = {
    docs: {
        storyDescription: ''
    }
};
