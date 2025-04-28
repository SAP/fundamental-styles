/* empty css             *//* empty css                *//* empty css             */const e=`<div style="width: 400px; margin: auto;">
    <div class="fd-progress-indicator fd-popover" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="70" aria-valuemax="100" aria-valuetext="In cases where the label is being truncated a small popover appears on click." aria-label="Progress Indicator">
        <div class="fd-progress-indicator__container fd-popover__control" onclick="onPopoverClick('popoverF0')">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 70%; width: 70%;">
                <span class="fd-progress-indicator__label">In cases where the label is being truncated a small popover appears on click.</span>
            </div>
            <div class="fd-progress-indicator__remaining" ></div>
            <div class="fd-popover__body fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF0">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__overflow">
                        <span>In cases where the label is being truncated a small popover appears on click.</span>
                        <span class="fd-progress-indicator__overflow-close">
                            <i class="sap-icon sap-icon--decline"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="margin-bottom: 5rem"></div>

    <div class="fd-progress-indicator fd-popover" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="70" aria-valuemax="100" aria-valuetext="In cases where the label is being truncated a small popover appears on click." aria-label="Progress Indicator">
        <div class="fd-progress-indicator__container fd-popover__control" onclick="onPopoverClick('popoverF1')">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 30%; width: 30%;">
            </div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__label">In cases where the label is being truncated a small popover appears on click.</span>
            </div>
            <div class="fd-popover__body fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__overflow">
                        <span>In cases where the label is being truncated a small popover appears on click.</span>
                        <span class="fd-progress-indicator__overflow-close">
                            <i class="sap-icon sap-icon--decline"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="margin-bottom: 5rem"></div>
</div>
`,i=`
     <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator fd-progress-indicator--informative" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__icon"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator fd-progress-indicator--positive" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__icon"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator fd-progress-indicator--critical" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__icon"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator fd-progress-indicator--negative" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__icon"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>
`,n=`
    <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="0%" aria-label="0%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 0%; width: 0%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__label">0%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 42%; width: 42%;"></div>
            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="69" aria-valuemax="100" aria-valuetext="69%" aria-label="69%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 69%; width: 69%;">
                <span class="fd-progress-indicator__label">69%</span>
            </div>
            <div class="fd-progress-indicator__remaining"></div>
        </div>
    </div>

    <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="100" aria-valuemax="100" aria-valuetext="100%" aria-label="100%">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 100%; width: 100%">
                <span class="fd-progress-indicator__label">100%</span>
            </div>
            <div class="fd-progress-indicator__remaining"></div>
        </div>
    </div>

    <div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="80 of 100 MB" aria-label="80 of 100 MB">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="min-width: 80%; width: 80%">
                <span class="fd-progress-indicator__label">80 of 100 MB</span>
            </div>
            <div class="fd-progress-indicator__remaining"></div>
        </div>
    </div>
`;const l={title:"Components/Progress Indicator",parameters:{description:`The progress indicator visualizes the current advancement of a process or a degree of accomplishment. The inside of the progress indicator is filled with color to indicate the state of progress. The advancement depends on the specific process. The progress is shown either using absolute numbers or the current percentage of completion together with a progress bar.

##Usage
**Use the progress indicator if:**

- You need to visually show a current status.
- You need to visually strengthen a current status.
- You need to make different states comparable to each other at a higher level.
- You want to show custom values as well as percentages.

**Do not use the progress indicator if:**

- Visual feedback is needed for an ongoing operation. Use a busy indicator instead.
- The progress is indeterminate. Use a busy indicator instead.
- You want to display a single value in the form of a fillable shape or a group of shapes that describe their context. Use the status indicator instead.

##Modifier classes
State | Modifier class
:------------- | :-----------------
Mobile | \`fd-progress-indicator--mobile\`
Display | \`fd-progress-indicator--display\`
Informative &nbsp;&nbsp;&nbsp;&nbsp; | \`fd-progress-indicator--informative\`
Positive | \`fd-progress-indicator--positive\`
Critical | \`fd-progress-indicator--critical\`
Negative | \`fd-progress-indicator--negative\`
        `,components:["progress-indicator","menu","popover","icon"],tags:["f3","a11y","theme","development"]}},s=()=>n;s.parameters={docs:{description:{story:`
Show the current progress as a percentage value between 0% and 100%.
Alternatively, you can show the current progress as text in addition to the bar.
In this case, the text is shown on the right of the bar if the progress is 50% or less. In all other cases, the progress is shown right-aligned on the bar itself
You also have the option of showing any application-specific text instead of a percentage.
        `}}};const a=()=>i;a.storyName="States";a.parameters={docs:{description:{story:"The progress indicator can visualize different value states that are represented by various theme-dependent semantic colors. The states are: normal, success, warning, error, and information."}}};const r=()=>e;r.storyName="Truncation Behaviour";r.parameters={docs:{description:{story:"If the length of the text exceeds the available space in the progress indicator, the text truncates. In this case, clicking the progress indicator displays an information popover with the full text."}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => layoutExampleHtml",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => valueStatesExampleHtml",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => truncationExampleHtml",...r.parameters?.docs?.source}}};const c=["Layout","ValueStates","Truncation"];export{s as Layout,r as Truncation,a as ValueStates,c as __namedExportsOrder,l as default};
