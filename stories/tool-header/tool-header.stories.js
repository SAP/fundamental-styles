export default {
    title: 'Components/Tool Header',
    parameters: {
        description: `The ToolsHeader is a control that is found in most SAP Cloud Platform products. Most commonly as a part of the Tool Page Layout. The ToolsHeader inherits its functionality from the OverflowToolbar and its visual design from the ShellBar.
        `,
        tags: ['btp', 'non-f3', 'theme', 'development'],
        components: ['button', 'icon', 'tool-header']
    }
};

export const primary = () => `<div class="fd-tool-header">
    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--transparent fd-tool-header__button">Button</button>
        </div>
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--transparent fd-tool-header__button">
                <i class="sap-icon--cart"></i>
            </button>
        </div>
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--negative"></span>
        </div>
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--critical"></span>
        </div>
    </div>
    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--inverted"></span>
        </div>
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--positive fd-tool-header__icon--inverted"></span>
        </div>
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--negative fd-tool-header__icon--inverted"></span>
        </div>
        <div class="fd-tool-header__element">
            <span class="sap-icon sap-icon--cart fd-tool-header__icon fd-tool-header__icon--critical fd-tool-header__icon--inverted"></span>
        </div>
    </div>
</div>
`;

primary.storyName = 'Primary';
primary.parameters = {
    docs: {
        storyDescription: 'Some description'
    }
};
