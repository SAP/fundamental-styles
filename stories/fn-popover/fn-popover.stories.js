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
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with bottom arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with bottom-left arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom-left"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with bottom-right arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--bottom-right"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with top arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--top"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with top-left arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--top-left"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with top-right arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--top-right"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with left arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--left"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with left-top arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--left-top"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with left-bottom arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--left-bottom"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with right arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--right"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with right-top arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--right-top"></div>
    </div>
    <div class="fn-popover" style="height: 300px; width: 300px; margin-bottom: 2rem;">
        <h1 class="fn-popover__title">Popover with right-bottom arrow.</h1>
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
        <div class="fn-popover__arrow fn-popover__arrow--right-bottom"></div>
    </div>
</div>
`;

Popover.parameters = {
    docs: {
        storyDescription: 'This is a container (default) popover component.'
    }
};
