import '../../dist/form-label.css';
import '../../dist/form-layout-grid.css';

export default {
    title: 'Components/Forms/Form Grid',
    parameters: {
        tags: ['f3', 'a11y']
    }
};

export const fourSevenOneLayout = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" for="input-1-layout">Default Input:</label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input" type="text" id="input-1-layout" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label fd-form-label--required" for="input-1c-layout">Required Input: </label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input" type="text" id="input-1c-layout" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" id="groupLabel" for="input-2">2 Inputs: </label>
        </div>
        <div class="fd-col fd-col--7">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input1-of-2" aria-label="input1-of-2" placeholder="Field placeholder text">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input2-of-2" aria-label="input2-of-2" placeholder="Field placeholder text">
                  </div>
              </div>
          </div>
    </div>
</div>
`;

fourSevenOneLayout.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `To display the form using a 4-7-1 layout, use 3 div elements. The first containing the <code class="docs-code">fd-container fd-form-layout-grid-container</code> class.
The second containing the <code class="docs-code">fd-row</code> class. For the most inner element , use the <code class="docs-code">fd-col fd-col--x></code> ,where x is the appropriate column size and <code class="docs-code">fd-form-layout-grid-flex fd-form-layout-grid-flex--right</code> classes.`
    }
};

export const fourSevenOneCompactLayout = () => `
<div class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label" for="input-1-compact">Default Input:</label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label fd-form-label--required" for="input-1b-compact">Required Input: </label>
        </div>
        <div class="fd-col fd-col--7">
            <input class="fd-input fd-input--compact" type="text" id="input-1b-compact" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel-compact">
        <div class="fd-col fd-col--4 fd-form-layout-grid-flex fd-form-layout-grid-flex--right">
          <label class="fd-form-label"  id="groupLabel-compact">2 Inputs: </label>
        </div>
        <div class="fd-col fd-col--7">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input fd-input--compact" type="text" id="input1-of-2-compact" aria-label="input1-of-2-compact" placeholder="Field placeholder text">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input fd-input--compact" type="text" id="input2-of-2-compact" aria-label="input2-of-2-compact" placeholder="Field placeholder text">
                  </div>
              </div>
          </div>
      </div>
</div>
`;

fourSevenOneCompactLayout.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display the form using a 4-7-1 compact layout, add the <code class="docs-code>--compact</code> modifier on the <code class="docs-code>fd-inpu</code> class.'
    }
};

export const vertical12ColumnLayout = () => `
<div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical">
    <div class="fd-row">
        <div class="fd-col fd-col--12">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" for="input-1-horiztonal">Default Input:</label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <input class="fd-input" type="text" id="input-1-horiztonal" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row">
        <div class="fd-col fd-col--12">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label fd-form-label--required" for="input-1-horizontal">Required Input: </label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <input class="fd-input" type="text" id="input-1-horizontal" placeholder="Field placeholder text">
        </div>
    </div>
    <div class="fd-row" role="group" aria-labelledby="groupLabel-horizontal">
        <div class="fd-col fd-col--4">
            <div class="fd-form-layout-grid-flex">
                <label class="fd-form-label" id="groupLabel-horizontal">2 Inputs: </label>
            </div>
        </div>
        <div class="fd-col fd-col--12">
            <div class="fd-row">
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input-2-horizontal" aria-label="input1-of-2-horizontal" placeholder="Field placeholder text">
                  </div>
                  <div class="fd-col fd-col--6">
                      <input class="fd-input" type="text" id="input-3-horizontal" aria-label="input2-of-2-horizontal" placeholder="Field placeholder text">
                  </div>
              </div>
          </div>
    </div>
</div>
`;

vertical12ColumnLayout.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: `To display the 12 column grid, apply the <code class="docs-code">--vertical</code> modifier on the <code class="docs-code">fd-form-layout-grid-container</code> class.
For the inner columns, only use the <code class="docs-code>fd-col fd-col--12</code> class.`
    }
};
