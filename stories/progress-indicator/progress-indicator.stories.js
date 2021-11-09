export default {
    title: 'Components/Progress Indicator',
    parameters: {
        description: `The progress indicator visualizes the current advancement of a process or a degree of accomplishment. The inside of the progress indicator is filled with color to indicate the state of progress. The advancement depends on the specific process. The progress is shown either using absolute numbers or the current percentage of completion together with a progress bar.
            
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

        `,
        components: ['progress-indicator', 'menu', 'popover', 'icon'],
        tags: ['f3', 'a11y', 'theme']
    }
};

export const layout = () => `
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__label">0%</span>
            </div>  
        </div>
    </div>
    
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__label">42%</span>
            </div>  
        </div>
    </div>
    
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="flex-basis: 69%">
                <span class="fd-progress-indicator__label fd-progress-indicator__label--left">69%</span>
            </div>
        </div>
    </div>
    
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="flex-basis: 100%">
                <span class="fd-progress-indicator__label fd-progress-indicator__label--left">100%</span>
            </div>
        </div>
    </div>
    
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="flex-basis: 80%">
                <span class="fd-progress-indicator__label fd-progress-indicator__label--left">80 of 100 MB</span>
            </div>
        </div>
    </div>
`;

layout.storyName = 'Layout';
layout.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: ` 
            Show the current progress as a percentage value between 0% and 100%.
            Alternatively, you can show the current progress as text in addition to the bar. 
            In this case, the text is shown on the right of the bar if the progress is 50% or less. In all other cases, the progress is shown right-aligned on the bar itself
            You also have the option of showing any application-specific text instead of a percentage
        `
    }
};

export const valueStates = () => `
     <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area"><span class="fd-progress-indicator__label">42%</span></div>  
        </div>
    </div>
   
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar fd-progress-indicator__progress-bar--informative" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__icon fd-progress-indicator__icon--informative"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>
   
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar fd-progress-indicator__progress-bar--positive" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__icon fd-progress-indicator__icon--positive"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>
    
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar fd-progress-indicator__progress-bar--critical" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__icon fd-progress-indicator__icon--critical"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>  
        </div>
    </div>
   
    <div class="fd-progress-indicator">
        <div class="fd-progress-indicator__container">
            <div class="fd-progress-indicator__progress-bar fd-progress-indicator__progress-bar--negative" style="flex-basis: 42%"></div>
            <div class="fd-progress-indicator__remain-area">
                <span class="fd-progress-indicator__icon fd-progress-indicator__icon--negative"></span>
                <span class="fd-progress-indicator__label">42%</span>
            </div>
        </div>
    </div>
`;

valueStates.storyName = 'Value States';
valueStates.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: 'The progress indicator can visualize different value states that are represented by various theme-dependent semantic colors. The states are: normal, success, warning, error, and information. The icons showing depends on theme value'
    }
};

export const truncation = () => `
    <div class="example-container" style="margin-bottom: 50px">
        <div class="fd-popover" style="width: 60%">
            <div class="fd-popover__control">
                <div class="fd-progress-indicator">
                    <div class="fd-progress-indicator__container">
                        <div class="fd-progress-indicator__progress-bar" style="flex-basis: 69%" onclick="onPopoverClick('popoverF0')">
                            <span class="fd-progress-indicator__label fd-progress-indicator__label--left">69% Reduce container width until this text is truncated, then press the ProgressIndicator ProgressIndicator ProgressIndicator</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body" aria-hidden="false" id="popoverF0">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__truncate-popover">
                        <span>69% Reduce container width until this text is truncated, then press the ProgressIndicator</span>
                        <button class="close-popover">
                            <i class="sap-icon sap-icon--decline"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   <div class="example-container" style="margin-bottom: 50px">
        <div class="fd-popover" style="width: 60%">
            <div class="fd-popover__control">
                <div class="fd-progress-indicator">
                    <div class="fd-progress-indicator__container" onclick="onPopoverClick('popoverF1')">
                        <div class="fd-progress-indicator__progress-bar" style="flex-basis: 45%"></div>
                        <span class="fd-progress-indicator__label">45% Reduce container width until this text is truncated, then press the ProgressIndicator</span>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverF1">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__truncate-popover">
                        <span>Reduce container width until this text is truncated, then press the ProgressIndicator</span>
                        <button class="close-popover">
                            <i class="sap-icon sap-icon--decline"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

truncation.storyName = 'Text Truncation';
truncation.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: 'If the length of the text exceeds the available space in the progress indicator, the text truncates. In this case, clicking the progress indicator displays an information popover with the full text. The close popover button should be focused when it is opened'
    }
};
