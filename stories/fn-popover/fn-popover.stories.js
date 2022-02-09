export default {
    title: 'FN Components/Popover',
    parameters: {
        components: ['fn-popover', 'icon', 'fn-button'],
        description: `

`
    }
};

export const Popover = () => `
    <div class="fn-popover" style="height: 300px; width: 300px;">
        <h1 class="fn-popover__title">Popover Title</h1>
        <div class="fn-popover__body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
        </div>
        <div class="fn-popover__button-container">
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--save"></span>
                <span class="fn-button__text">Save</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Cancel</span>
            </button>
        </div>
    </div>
`;

Popover.parameters = {
    docs: {
        storyDescription: 'This is a container (default) popover component.'
    }
};
