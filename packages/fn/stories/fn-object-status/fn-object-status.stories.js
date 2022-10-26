import 'fn/src/fn-object-status.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Object Status',
  parameters: {
    description: `
**Modifier classes for Object Status:**

| State                                | Modifier class                   |
| :----------------------------------- | :------------------------------: |
| positive &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-object-status--positive\`   |
| critical &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-object-status--critical\`   |
| negative &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-object-status--negative\`   |
| info  &nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-object-status--info\`       |

<br><br>
| Type                                     | Modifier class                    |
| :--------------------------------------- | :-------------------------------: |
| non-interactive &nbsp;&nbsp;&nbsp;&nbsp; |  none                             |
| interactive &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-object-status--interactive\` |

<br><br>
| Size (for non-interactive)      | Modifier class               |
| :------------------------------ | :--------------------------: |
| normal &nbsp;&nbsp;&nbsp;&nbsp; |  none                        |
| byline &nbsp;&nbsp;&nbsp;&nbsp; | \`fn-object-status--byline\` |

<br><br>

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
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }
</style>
`;
export const NonInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div>normal</div>
    <div class="fn-object-status fn-object-status--positive">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--critical">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--negative">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--info">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>

<div class="docs-fn-container">
    <div>byline</div>
    <div class="fn-object-status fn-object-status--byline fn-object-status--positive">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--byline fn-object-status--critical">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--byline fn-object-status--negative">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--byline fn-object-status--info">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>
`;
NonInteractive.storyName = 'Non-Interactive Object Status';
export const Interactive = () => `${localStyles}
<div class="docs-fn-container">
    <div>:normal</div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--positive" tabindex="0">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--critical" tabindex="0">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--negative" tabindex="0">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--info" tabindex="0">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>

<div class="docs-fn-container">
    <div>:hover</div>  
    <div class="fn-object-status fn-object-status--interactive fn-object-status--positive is-hover" tabindex="0">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--critical is-hover" tabindex="0">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--negative is-hover" tabindex="0">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--info is-hover" tabindex="0">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>

<div class="docs-fn-container">
    <div>:active</div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--positive is-active" tabindex="0">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--critical is-active" tabindex="0">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--negative is-active" tabindex="0">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--info is-active" tabindex="0">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>

<div class="docs-fn-container">
    <div>:focus</div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--positive is-focus" tabindex="0">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--critical is-focus" tabindex="0">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--negative is-focus" tabindex="0">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--info is-focus" tabindex="0">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>


<div class="docs-fn-container">
    <div>:disabled</div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--positive is-disabled" tabindex="-1">
        <span class="sap-icon sap-icon--status-positive"></span>
        <div class="fn-object-status__text">Positive</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--critical is-disabled" tabindex="-1">
        <span class="sap-icon sap-icon--status-critical"></span>
        <div class="fn-object-status__text">Critical</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--negative is-disabled" tabindex="-1">
        <span class="sap-icon sap-icon--status-negative"></span>
        <div class="fn-object-status__text">Negative</div>
    </div>
    <div class="fn-object-status fn-object-status--interactive fn-object-status--info is-disabled" tabindex="-1">
        <span class="sap-icon sap-icon--information"></span>
        <div class="fn-object-status__text">Info</div>
    </div>
</div>
`;
Interactive.storyName = 'Interactive Object Status';
Interactive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'For interactive Object Status add the `.fn-object-status--interactive` modifier class to the `.fn-object-status` base class and the modifier class for state.'
    }
  }
};
