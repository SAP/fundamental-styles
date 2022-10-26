import 'fn/src/fn-progress-bar.scss';

export default {
  title: 'Progress Bar',
  parameters: {
    description: `**Modifier classes for Progress Bar added to \`.fn-progress-bar\` base class:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class                 |
| --------------------------------- | ------------------------------ |
| default&nbsp;&nbsp;&nbsp;&nbsp;   | \`none\`                       |
| positive&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-progress-bar--positive\`  |
| critical&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-progress-bar--critical\`  |
| negative&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-progress-bar--negative\`  |
<br><br><br>
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
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }
</style>
`;
export const ProgressBar = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-progress-bar" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="20%" aria-label="20%">
        <div class="fn-progress-bar__track" style="min-width: 20%; width: 20%;"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>positive</b></div>
    <div class="fn-progress-bar fn-progress-bar--positive" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="40%" aria-label="40%">
        <div class="fn-progress-bar__track" style="min-width: 40%; width: 40%;"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>critical</b></div>
    <div class="fn-progress-bar fn-progress-bar--critical" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="60%" aria-label="60%">
        <div class="fn-progress-bar__track" style="min-width: 60%; width: 60%;"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>negative</b></div>
    <div class="fn-progress-bar fn-progress-bar--negative" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="80%" aria-label="80%">
        <div class="fn-progress-bar__track" style="min-width: 80%; width: 80%;"></div>
    </div>
</div>

`;
ProgressBar.parameters = {
  docs: {
    iframeHeight: 500
  }
};
