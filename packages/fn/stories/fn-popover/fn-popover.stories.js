import 'fn/src/fn-popover.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-button.scss';

export default {
  title: 'Popover',
  parameters: {
    description: `
Elements | Class | Description
:------------ | :------- | :------------
Popover (mandatory) | \`fn-popover\` | The outer wrapper for the popover component.
Popover No Padding | \`fn-popover--no-padding\` | Modifier to remove padding from the popover.
Popover Title | \`fn-popover__title\` | The wrapper for the popover title.
Popover Text | \`fn-popover__text\` | Popover text used within the title.
Popover Content (mandatory) | \`fn-popover__content\` | Container for the main contents of the popover.
Popover Button Container | \`fn-popover__button-container\` | Container for the buttons for the popover.
Popover Arrow | \`fn-popover__arrow\` | The arrow for the popover. By default the arrow is placed in the bottom center.
Popover Arrow Bottom | \`fn-popover__arrow--bottom\` | Modifier to place the popover arrow in the bottom center.
Popover Arrow Bottom Start | \`fn-popover__arrow--bottom-start\` | Modifier to place the popover arrow in the bottom start.
Popover Arrow Bottom End | \`fn-popover__arrow--bottom-end\` | Modifier to place the popover arrow in the bottom end.
Popover Arrow Top | \`fn-popover__arrow--top\` | Modifier to place the popover arrow in the top center.
Popover Arrow Top Start | \`fn-popover__arrow--top-start\` | Modifier to place the popover arrow in the top start.
Popover Arrow Top End | \`fn-popover__arrow--top-end\` | Modifier to place the popover arrow in the top end.
Popover Arrow Start | \`fn-popover__arrow--start\` | Modifier to place the popover arrow in the start.
Popover Arrow Start Top | \`fn-popover__arrow--start-top\` | Modifier to place the popover arrow in the start top.
Popover Arrow Start Bottom | \`fn-popover__arrow--start-bottom\` | Modifier to place the popover arrow in the start bottom.
Popover Arrow End | \`fn-popover__arrow--end\` | Modifier to place the popover arrow in the end.
Popover Arrow End Top | \`fn-popover__arrow--end-top\` | Modifier to place the popover arrow in the end top.
Popover Arrow End Bottom | \`fn-popover__arrow--end-bottom\` | Modifier to place the popover arrow in the end bottom.
<br>
        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        padding: 5vw;
        display:flex; 
        gap: 2vw;
        flex-wrap: wrap;
    }
</style>
`;
export const Popover = () => `${localStyles}
<div class="docs-fn-container">
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
export const NoPaddingPopover = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-popover fn-popover--no-padding" style="width: 320px; height: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__content" style="background-image: url('/assets/images/backgrounds/city.jpg')">

        </div>
        <div class="fn-popover__arrow fn-popover__arrow--bottom"></div>
    </div>
</div>
`;
NoPaddingPopover.parameters = {
  docs: {
    storyDescription: 'Padding can be removed from the popover to allow for the content to fit the entire popover.'
  }
};
export const TruncatePopover = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-popover" style="width: 320px; margin-bottom: 2rem;">
        <div class="fn-popover__title">
            <div class="fn-popover__text fn-popover__text--truncate">Popover with bottom arrow and some very, very long title text.</div>
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
</div>
`;
TruncatePopover.parameters = {
  docs: {
    storyDescription: 'Long text in the title can be truncated to prevent text wrapping.'
  }
};
