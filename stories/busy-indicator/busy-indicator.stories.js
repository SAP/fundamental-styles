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
        components: ['busy-indicator', 'message-toast']
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

export const extendedBusyIndicator = () => `<div class="fd-busy-indicator-extended">
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div>
    <div class="fd-busy-indicator-extended__label">loading data...</div>
</div>`;

extendedBusyIndicator.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator <code>fd-busy-indicator-extended</code>. The additional information is wrapped in an element with <code>fd-busy-indicator-extended\\_\\_label</code> class.'
    }
};

export const extendedBusyIndicatorInsideMessageToast = () => `<div class="fd-message-toast fd-busy-indicator-extended fd-busy-indicator-extended--message-toast">
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div>
    <div class="fd-busy-indicator-extended__label">loading data...</div>
</div>`;

extendedBusyIndicatorInsideMessageToast.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription:
            'At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast.'
    }
};
