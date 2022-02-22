export default {
    title: 'FN Components/Popover',
    parameters: {
        components: ['fn-popover', 'icon', 'fn-button'],
        description: `

        `
    }
};

export const Popover = () => `
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with bottom arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with bottom-start arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom-start"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with bottom-end arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom-end"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with top arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--top"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with top-start arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--top-start"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with top-end arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--top-end"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with start arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--start"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with start-top arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--start-top"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with start-bottom arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--start-bottom"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with end arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--end"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with end-top arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--end-top"></div>
    </div>
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text">Popover with end-bottom arrow.</div>
        </div>
        <div class="fn-popover__content">
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
        <div class="fn-popover__arrow fn-popover__arrow--end-bottom"></div>
    </div>
</div>
`;

Popover.parameters = {
    docs: {
        storyDescription: 'This is a container (default) popover component.'
    }
};
