import '../../dist/busy-indicator.css';

export default {
    title: 'Components/Busy Indicator',
    parameters: {
        description: `A busy indicator informs the user of an ongoing operation. Only one busy indicator should be shown at a time.
        Busy indicators are not visible all the time, only when needed.`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const sizes = () => `
    <div style="text-align: center">
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

sizes.parameters = {
    docs: {
        iframeHeight: 200
    }
};

export const contrastMode = () => `
<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
<div class="fd-busy-indicator--l contrast" aria-hidden="false" aria-label="Loading">
    <div class="fd-busy-indicator--circle-0"></div>
    <div class="fd-busy-indicator--circle-1"></div>
    <div class="fd-busy-indicator--circle-2"></div>
</div>
</div>
`;

contrastMode.parameters = {
    docs: {
        iframeHeight: 300
    }
};
