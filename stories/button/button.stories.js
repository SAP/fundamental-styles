import "../../dist/button.css";
import "../../dist/icon.css";

export default {
    title: 'Components/Button',
    parameters: {
        description: `Buttons allow users to perform actions.
        All the buttons require the fd-button base class and an additional modifier
        for each of the types.`
    },
};

export const primary = () => `
    <button class="fd-button">Create</button>
    <button class="fd-button sap-icon--cart"></button>
    <button class="fd-button fd-button--emphasized ">Save</button>
`;

export const types = () => `
    <button class="fd-button">Default Button</button>
    <button class="fd-button fd-button--emphasized">Emphasized Button</button>
    <button class="fd-button fd-button--ghost">Ghost Button</button>
    <button class="fd-button fd-button--positive">Positive Button</button>
    <button class="fd-button fd-button--negative">Negative Button</button>
    <button class="fd-button fd-button--attention">Attention Button</button>
    <button class="fd-button fd-button--transparent">Transparent Button</button>
`;

types.story = {
    name: 'Design Types',
    parameters: {
        docs: {
            storyDescription: `
* **Default Button** or Standard Button for neutral or informative (secondary) actions
* **Emphasized Button** Used for primary action
* **Ghost Button**  Used for secondary actions or primary button in cases where there is already a primary button on the page
* **Positive Button** Used for positive (secondary) actions
* **Negative Button** Used for negative (secondary) actions
* **Attention Button**
* **Transparent Button** Used for secondary or negative path actions
            `
        }
    }
};

export const segmentedButton = () => `
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button sap-icon--survey"></button>
        <button class="fd-button sap-icon--pie-chart is-selected" aria-pressed="true"></button>
        <button class="fd-button sap-icon--pool"></button>
    </div>

    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact is-selected" aria-pressed="true">Left</button>
        <button class="fd-button fd-button--compact">Middle</button>
        <button class="fd-button fd-button--compact">Right</button>
    </div>
`;

segmentedButton.story = {
    name: 'Segmented Button (previously known as Button Group)',
    parameters: {
        docs: {
            storyDescription: `
Group a series of buttons together on a single line with the segmented button.
Only one of the options can be active at a time, the others remain or become inactive.
The option can be activated by clicking on it. This type of button is comparable to a radio button group.

            `
        }
    }
};
