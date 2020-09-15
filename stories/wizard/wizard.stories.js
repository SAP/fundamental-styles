import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/wizard.css';

export default {
    title: 'Components/Wizard',
    parameters: {
        description: `The Wizard component divides into sections a long or unfamiliar task and guides the user through it. 
The Wizard consists of the walkthrough screen, where the form sections are revealed subsequently after completing, and the summary page, where the form is displayed in read only mode for assessment and final submission.


## Usage

**Use the wizard if:**

- the user has to accomplish a long or unfamiliar task
- the flow consist of a minimum of 3 and a maximum of 8 steps

**Do not use the wizard if:**

- a task has only 2 steps
- a task has more than 8 steps
- the format of the task is familiar to the user

## Layout
The wizard can be used both in a full-screen layout as well as in the flexible column layout. There is no navigation from the wizard to a next page. After completion or cancellation, the user is always navigated to the page the wizard was triggered from.

## Responsive paddings

These modifier classes will add horizontal paddings to the content and can be applied on the <code>fd-wizard\\_\\_progress-bar</code> level and/or on the <code>fd-wizard\\_\\_content</code> level.


|  &nbsp;&nbsp;**rem** &nbsp;&nbsp; |  &nbsp;&nbsp;**min-width** &nbsp;&nbsp; |  &nbsp;&nbsp;**max width** &nbsp;&nbsp; |  &nbsp;&nbsp;**modifier class** &nbsp;&nbsp; |
| :----: | :----------: | :----------: | :----------------------------------: |
| 1rem | _n/a_ | 599px | <code>fd-wizard\\_\\_progress-bar--s</code> / <code>fd-wizard\\_\\_content--s</code> |
| 2rem | 600px | 1023px | <code>fd-wizard\\_\\_progress-bar--m</code> / <code>fd-wizard\\_\\_content--m</code> |
| 2rem | 1024px | 1439px | <code>fd-wizard\\_\\_progress-bar--l</code> / <code>fd-wizard\\_\\_content--l</code> |
| 3rem | 1440px | _n/a_ | <code>fd-wizard\\_\\_progress-bar--xl</code> / <code>fd-wizard\\_\\_content--xl</code> |


## Step types

Use the following modifier classes to change the type of the wizard step:


| **Type** | **Modifier class** |
| :---- | :--------------: |
| completed     |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--completed</code>     |
| current       |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--current</code>       |
| upcoming      |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--upcoming</code>      |
| no-label      |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--no-label</code>      |
| stacked       |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--stacked</code>       |
| stacked-top   |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--stacked-top</code>   |
| active        |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_step--active</code>        |

## Connector types

When connecting Inactive steps, or Active and Inactive steps, use the default <code>fd-wizard\\_\\_connector</code> class. For connecting Active steps the <code>fd-wizard\\_\\_connector--active</code> modifier class should be applied together with <code>fd-wizard\\_\\_connector</code>. For branching step connector use <code>fd-wizard\\_\\_connector--branching</code> modifier class.

## Truncation rules

- **Label **- Maximum number of lines: 2. Text truncates when it exceeds the maximum space available. When a step has an optional text, the label takes only 1 line. 
- **Label with optional text **- Maximum number of lines: 1. Text truncates when it exceeds the maximum space available. The <code>fd-wizard\\_\\_label-container--optional</code> modifier class is applied together with <code>fd-wizard\\_\\_label-container</code>.
- **Optional text **- Maximum number of lines: 1. Text truncates when it exceeds the maximum space available.


## Content background

| **Type** | **Modifier class** |
| :---- | :--------------: |
| solid |  &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_content--solid</code> |
| list | &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_content--list</code> |
| transparent | &nbsp;&nbsp; &nbsp;&nbsp; <code>fd-wizard\\_\\_content--transparent</code> |

`,
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development']
    }
};

export const defaultExample = () => `
<div class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 1">
        <ul class="fd-wizard__progress-bar">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 1: One line">
                        <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Step 1: One line</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 2: Very long label that truncates on the second line" aria-current="step">
                        <span class="fd-wizard__step-indicator">2</span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">
                                Step 2: Very long label that truncates on the second line
                            </span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 3: One line truncates" aria-disabled="true">
                        <span class="fd-wizard__step-indicator">3</span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Step 3: One line truncates</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 4: Future Step" aria-disabled="true">
                        <span class="fd-wizard__step-indicator">4</span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Step 4: Future Step</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content" id="wizard-section-1" style="min-height: 300px;">
        <div>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
        </div>
        <div class="fd-wizard__next-step">
            <button class="fd-button fd-button--compact fd-button--emphasized">Step 3</button>
        </div>
    </section>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</div>
`;

defaultExample.storyName = 'Default';
defaultExample.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `When the wizard is triggered, the user is presented a walkthrough screen, which shows only a part of the long form. After all necessary fields are filled out, a button appears in the Wizard content that allows the user to move to the next step. A Cancel button situated in the footer can exit the wizard. If the form fields have been modified, a data loss message can be prompted to the user. 
`
    }
};




export const customized = () => `
<div class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 2">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--m">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 1: One line">
                        <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Step 1: One line</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 2: Very long label that truncates on the second line" aria-current="step">
                        <span class="fd-wizard__step-indicator">2</span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">
                                Step 2: Very long label that truncates on the second line
                            </span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 3: Branching" aria-disabled="true">
                        <span class="fd-wizard__step-indicator">3</span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Step 3: Branching</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--list fd-wizard__content--m" id="wizard-section-2" style="min-height: 300px;">
        <div>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
        </div>
        <div class="fd-wizard__next-step">
            <button class="fd-button fd-button--compact fd-button--emphasized">Step 3</button>
        </div>
    </section>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</div>
`;

customized.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `Modifier classes can be applied to customize the Wizard's elements. In the example below responsive paddings are added to the progress bar (<code class="docs-code">fd-wizard\\_\\_progress-bar--m</code>), the wizard content (<code class="docs-code">fd-wizard\\_\\_content--m</code>) and the footer (<code class="docs-code">fd-bar--page-m_l</code>). The background of the wizard content is set to list (<code class="docs-code">fd-wizard\\_\\_content--list</code>).

In certain use cases, the steps in the wizard depend on the choices the user makes along the way. The user’s entries for one step determine the follow-on steps (“branching”). Use the <code class="docs-code">fd-wizard\\_\\_connector--branching</code> applied on the step connector to indicate a branching step.
`
    }
};


export const responsive = () => `

<div class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 3">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator sap-icon--person-placeholder"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Customer</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                        <span class="fd-wizard__step-indicator sap-icon--contacts"></span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Payment">
                        <span class="fd-wizard__step-indicator sap-icon--money-bills"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Payment</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator sap-icon--batch-payments"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Bill To</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Ship To" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--shipping-status"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Ship To</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-3" style="min-height: 300px;">
        <div>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
        </div>
        <div class="fd-wizard__next-step">
            <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
        </div>
    </section>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</div>

<br><br>

<div class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 4">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator sap-icon--person-placeholder"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Customer</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                        <span class="fd-wizard__step-indicator sap-icon--contacts"></span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Payment">
                        <span class="fd-wizard__step-indicator sap-icon--money-bills"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Payment</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator sap-icon--batch-payments"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Bill To</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Ship To" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--shipping-status"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Ship To</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Products" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--product"></span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Products</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Additional Information" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--course-program"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Additional Information</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-4" style="min-height: 300px;">
        <div>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
        </div>
        <div class="fd-wizard__next-step">
            <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
        </div>
    </section>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</div>

<br><br>

<div class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 5">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator sap-icon--person-placeholder"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Customer</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                        <span class="fd-wizard__step-indicator sap-icon--contacts"></span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked fd-wizard__step--stacked-top">
                <div class="fd-wizard__step-wrapper">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <a 
                                class="fd-wizard__step-container" 
                                tabindex="0" 
                                aria-label="Payment" 
                                aria-controls="actionSheetDesktop" 
                                aria-expanded="false" 
                                aria-haspopup="true" 
                                onclick="onPopoverClick('actionSheetDesktop');">
                                    <span class="fd-wizard__step-indicator sap-icon--money-bills"></span>
                                    <div class="fd-wizard__label-container">
                                        <span class="fd-wizard__label">Payment</span>
                                    </div>
                            </a>
                        </div>
                        <div class="fd-popover__body" aria-hidden="true" id="actionSheetDesktop">
                            <ul 
                                class="fd-action-sheet fd-action-sheet--compact" 
                                role="list" 
                                aria-label="List of completed stacked steps">
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class=" sap-icon--money-bills"></i>
                                            <span class="fd-button__text">Payment</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--contacts"></i>
                                            <span class="fd-button__text">Contact</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--person-placeholder"></i>
                                            <span class="fd-button__text">Customer</span>
                                        </button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator sap-icon--batch-payments"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Bill To</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Ship To" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--shipping-status"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Ship To</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Products" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--product"></span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Products</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Additional Information" aria-disabled="true">
                        <span class="fd-wizard__step-indicator sap-icon--course-program"></span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Additional Information</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-5" style="min-height: 300px;">
        <div>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
        </div>
        <div class="fd-wizard__next-step">
            <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
        </div>
    </section>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</div>
`;

responsive.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `If there is enough horizontal space, all labels are shown. 

As the width is reduced, the steps outside the currently selected one do not show labels. Use the <code class="docs-code">fd-wizard\\_\\_step--no-label</code> modifier class to hide the labels.

Finally, the unselected and outermost steps are stacked on top of each other to further accommodate the reduced space. Use the <code class="docs-code">fd-wizard\\_\\_step--stacked</code> modifier class to stack the steps. The last completed stacked step has an additional modifier class <code class="docs-code">fd-wizard\\_\\_step--stacked-top</code>. No such modifier class is required for the upcoming stacked steps.
`
    }
};

export const mobile = () => `
<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <div style="margin: 1rem;">
        <h4>Next Step button after content</h4>
        <div class="fd-wizard" style="max-width: 300px;">
            <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 6">
                <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--s">
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                                <span class="fd-wizard__step-indicator sap-icon--person-placeholder"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Customer</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                                <span class="fd-wizard__step-indicator sap-icon--contacts"></span>
                                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                                    <span class="fd-wizard__label">Contact</span>
                                    <span class="fd-wizard__optional-text">(Optional)</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked fd-wizard__step--stacked-top">
                        <div class="fd-wizard__step-wrapper">
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <a 
                                        class="fd-wizard__step-container" 
                                        tabindex="0" 
                                        aria-label="Payment" 
                                        aria-controls="actionSheetMobile1" 
                                        aria-expanded="false" 
                                        aria-haspopup="true" 
                                        onclick="onPopoverClick('actionSheetMobile1');">
                                            <span class="fd-wizard__step-indicator sap-icon--money-bills"></span>
                                            <div class="fd-wizard__label-container">
                                                <span class="fd-wizard__label">Payment</span>
                                            </div>
                                    </a>
                                </div>
                                <div class="fd-popover__body" aria-hidden="true" id="actionSheetMobile1">
                                    <ul 
                                        class="fd-action-sheet fd-action-sheet--compact" 
                                        role="list" 
                                        aria-label="List of completed stacked steps">
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class=" sap-icon--money-bills"></i>
                                                    <span class="fd-button__text">Payment</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--contacts"></i>
                                                    <span class="fd-button__text">Contact</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--person-placeholder"></i>
                                                    <span class="fd-button__text">Customer</span>
                                                </button>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--current">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                                <span class="fd-wizard__step-indicator sap-icon--batch-payments"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Bill To</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Ship To" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--shipping-status"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Ship To</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Products" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--product"></span>
                                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                                    <span class="fd-wizard__label">Products</span>
                                    <span class="fd-wizard__optional-text">(Optional)</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Additional Information" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--course-program"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Additional Information</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                </ul>
            </nav>
            <section class="fd-wizard__content fd-wizard__content--s" id="wizard-section-6" style="min-height: 500px;">
                <div>
                    Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
                </div>
                <div class="fd-wizard__next-step">
                    <button class="fd-button fd-button--emphasized">Next Step</button>
                </div>
            </section>
            <footer>
                <div class="fd-bar fd-bar--page-s fd-bar--floating-footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>

    <div style="margin: 1rem;">
        <h4>Next Step button above the floating footer</h4>
        <div class="fd-wizard" style="max-width: 300px;">
            <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 7">
                <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--s">
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                                <span class="fd-wizard__step-indicator sap-icon--person-placeholder"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Customer</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                                <span class="fd-wizard__step-indicator sap-icon--contacts"></span>
                                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                                    <span class="fd-wizard__label">Contact</span>
                                    <span class="fd-wizard__optional-text">(Optional)</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked fd-wizard__step--stacked-top">
                        <div class="fd-wizard__step-wrapper">
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <a 
                                        class="fd-wizard__step-container" 
                                        tabindex="0" 
                                        aria-label="Payment" 
                                        aria-controls="actionSheetMobile2" 
                                        aria-expanded="false" 
                                        aria-haspopup="true" 
                                        onclick="onPopoverClick('actionSheetMobile2');">
                                            <span class="fd-wizard__step-indicator sap-icon--money-bills"></span>
                                            <div class="fd-wizard__label-container">
                                                <span class="fd-wizard__label">Payment</span>
                                            </div>
                                    </a>
                                </div>
                                <div class="fd-popover__body" aria-hidden="true" id="actionSheetMobile2">
                                    <ul 
                                        class="fd-action-sheet fd-action-sheet--compact" 
                                        role="list" 
                                        aria-label="List of completed stacked steps">
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class=" sap-icon--money-bills"></i>
                                                    <span class="fd-button__text">Payment</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--contacts"></i>
                                                    <span class="fd-button__text">Contact</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--person-placeholder"></i>
                                                    <span class="fd-button__text">Customer</span>
                                                </button>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--current">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                                <span class="fd-wizard__step-indicator sap-icon--batch-payments"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Bill To</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Ship To" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--shipping-status"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Ship To</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Products" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--product"></span>
                                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                                    <span class="fd-wizard__label">Products</span>
                                    <span class="fd-wizard__optional-text">(Optional)</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                    <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Additional Information" aria-disabled="true">
                                <span class="fd-wizard__step-indicator sap-icon--course-program"></span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Additional Information</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                </ul>
            </nav>
            <section class="fd-wizard__content fd-wizard__content--s" id="wizard-section-7" style="min-height: 300px;">
                <img class="" src='http://lorempixel.com/220/220/nature/4/' role="presentation" aria-label="John Doe" />
                <div class="fd-wizard__next-step fd-wizard__next-step--floating">
                    <button class="fd-button fd-button--emphasized">Next Step</button>
                </div>
            </section>
            <footer>
                <div class="fd-bar fd-bar--page-s fd-bar--floating-footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>
`;

mobile.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `In mobile mode use the <code class="docs-code">fd-bar--floating-footer</code> modifier class to achieve a floating footer. The Next Step button is placed after the content when possible. It can be placed above the floating footer by applying the <code class="docs-code">fd-wizard\\_\\_next-step--floating</code> modifier class.
`
    }
};
