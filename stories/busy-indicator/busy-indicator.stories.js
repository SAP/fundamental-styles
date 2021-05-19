export default {
    title: 'Components/Busy Indicator',
    parameters: {
        description: `The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

## Sizes

| **Size** | &nbsp;&nbsp; **rem** &nbsp;&nbsp; | **Modifier class** |
| :------- | :-------------------------------- | -----------------: |
| Default  | &nbsp;&nbsp; 0 rem                | none               |
| M        | &nbsp;&nbsp; 1 rem                | <code>--m</code>   |
| L        | &nbsp;&nbsp; 2 rem                | <code>--l</code>   |

##Usage
**Use the busy indicator if:**
        
The ongoing operation only covers part of a screen that has multiple controls, and:

- You need to display additional information, or
- The user needs to be able to cancel the operation.


**Do not use the busy indicator if:**

- The operation takes less than one second.
- You need to block the screen because the user is not supposed to start another operation. In this case, use the **Busy Dialog** component.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['busy-indicator']
    }
};

export const Standard = () => `<div style="text-align: center">
    <div class="fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div><br /><br />
    <div class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div><br /><br />
    <div class="fd-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div>
    </div>
`;

Standard.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the <code>fd-busy-indicator</code> class. If you want to display a certain size, add the modifier class of the desired size i.e. <code>--m</code> to the element.'
    }
};

export const contrastMode = () => `<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
<div class="fd-busy-indicator--l contrast" aria-hidden="false" aria-label="Loading">
    <div class="fd-busy-indicator--circle-0"></div>
    <div class="fd-busy-indicator--circle-1"></div>
    <div class="fd-busy-indicator--circle-2"></div>
</div>
</div>
`;

contrastMode.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add <code>contrast</code> into the element i.e. <code>fd-busy-indicator--m contrast</code>.'
    }
};
export const LabelledIndicator = () => `<div>
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
		<span class="fd-busy-indicator__label">loading data...</span>
    </div>`;

LabelledIndicator.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes with a label/message to be displayed when the data is being loaded. <code>fd-busy-indicator__label</code> is used to display the message.'
    }
};
export const ExtendedIndicator = () => `<div>
    <div class="fd-busy-indicator fd-busy-indicator--l fd-busy-indicator--extended fd-padding" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
		<span class="fd-busy-indicator__label">loading data...</span>
    </div>`;

ExtendedIndicator.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component has a label to be displayed when the data is being loaded. <code>fd-busy-indicator--extended</code> is used to wrap the busy indicator.'
    }
};
