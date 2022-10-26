import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/popover.scss';
import '../../../src/action-sheet.scss';
import '../../../src/wizard.scss';
export default {
    title: 'Components/Wizard',
    parameters: {
        description: `The wizard guides a user through a long or unfamiliar task by dividing it into sections, revealing information in an easy and digestible way.
It consists of a walkthrough screen, where the user is prompted to input required information and upon completing a section, the next sections subsequently follow in a prescribed order; and the summary page, where the form is displayed in read-only mode for assessment and final submission.

## Usage

**Use the wizard if:**

- the user has to accomplish a long or unfamiliar task
- the flow consist of a minimum of 3 and a maximum of 8 steps

**Do not use the wizard if:**

- a task has only 2 steps
- a task has more than 8 steps
- the format of the task is familiar to the user

## Types

There are two types of wizard that offer different functionality: **standard** and **branching**.

**Use the standard type if:**

- The total number of steps is known in advance.
- The number of steps does not change during usage.
- There is linear progression from one step to the next.

**Use the branching type if:**

- The total number of steps is not known.
- The number of steps may change during usage.
- There is non-linear progression. In other words, the user’s choice during one step determines which step comes next.
- In both types of wizard you can let users skip steps. Label these steps as “Optional”.


## Layout

The wizard can be used both in a full-screen layout and in the flexible column layout. There is no navigation from the wizard to a next page. After completion or cancellation, the user is always navigated back to the page the wizard was triggered from.

## Responsive paddings

These modifier classes will add horizontal paddings to the content and can be applied on the \`fd-wizard__progress-bar\` level, the \`fd-wizard__content\`, and/or the \`fd-wizard__step-content-container\` level.


|  **rem** |  <div style="margin-left: 2rem;"> **Min-width** </div> |  <div style="margin-left: 2rem;">**Max-width** </div> |  <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :---------- | :---------- | :---------------------------------- |
| 1rem | <span style="margin-left: 2rem;">_n/a_</span> | <span style="margin-left: 2rem;">599px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--sm</code> / <code>fd-wizard__content--sm</code> / <code>fd-wizard__step-content-container--sm</code> |
| 2rem | <span style="margin-left: 2rem;">600px</span> | <span style="margin-left: 2rem;">1023px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--md</code> / <code>fd-wizard__content--md</code> / <code>fd-wizard__step-content-container--md</code> |
| 2rem | <span style="margin-left: 2rem;">1024px</span> | <span style="margin-left: 2rem;">1439px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--lg</code> / <code>fd-wizard__content--lg</code> / <code>fd-wizard__step-content-container--lg</code> |
| 3rem | <span style="margin-left: 2rem;">1440px</span> | <span style="margin-left: 2rem;">_n/a_</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--xl</code> / <code>fd-wizard__content--xl</code> / <code>fd-wizard__step-content-container--xl</code> |

## Modifiers

| **Steps** | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :-------------- |
| Completed | <code style="margin-left: 2rem;">fd-wizard__step--completed</code>    |
| Current | <code style="margin-left: 2rem;">fd-wizard__step--current</code>      |
| Upcoming | <code style="margin-left: 2rem;">fd-wizard__step--upcoming</code>     |
| No-label | <code style="margin-left: 2rem;">fd-wizard__step--no-label</code>     |
| Stacked | <code style="margin-left: 2rem;">fd-wizard__step--stacked</code>      |
| Stacked on top | <code style="margin-left: 2rem;">fd-wizard__step--stacked-top</code>  |
| Active | <code style="margin-left: 2rem;">fd-wizard__step--active</code>       |

## Connector types

There are multiple connector types that can be displayed depending on the steps involved.

| **Connector type** |<div style="margin-left: 2rem;"> **Connection** </div> | <div style="margin-left: 2rem;"> **Class/Modifier** </div> |
| :---- | :-------------- | :-------------- |
| Default | <span style="margin-left: 2rem;"> Inactive step (or Active step) to Inactive step </span> | <code style="margin-left: 2rem;">fd-wizard__connector</code>|
| Active | <span style="margin-left: 2rem;"> Active step to Active step </span> | <code style="margin-left: 2rem;">fd-wizard__connector--active</code>|
| Branching | <span style="margin-left: 2rem;"> Branching step to Inactive step or no step </span> | <code style="margin-left: 2rem;">fd-wizard__connector--branching</code>|

## Truncation rules

| **Type** |  <div style="min-width: 6rem; margin-left: 2rem;">**Max lines**</div>  | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :---------------- | :-------------------------- |
| Label | <span style="margin-left: 2rem;">2</span> |  <span style="margin-left: 2rem;"> Text truncates when it exceeds the maximum space available. When a step has optional text, the label can only accommodate 1 line. </span> |
| Label with optional text | <span style="margin-left: 2rem;">1</span> | <span style="margin-left: 2rem;">Text truncates when it exceeds the maximum space available. The \`fd-wizard__label-container--optional\` modifier class is applied together with \`fd-wizard__label-container\`.</span> |
| Optional text | <span style="margin-left: 2rem;">2</span> | <span style="margin-left: 2rem;">Text truncates when it exceeds the maximum space available.</span> |

## Content background

| **Type** | <span style="margin-left: 2rem;">**Modifier class**</span> |
| :--- | :-------------- |
| Solid |  <code style="margin-left: 2rem;"> fd-wizard__content--solid</code> |
| List | <code style="margin-left: 2rem;"> fd-wizard__content--list</code> |
| Transparent | <code style="margin-left: 2rem;"> fd-wizard__content--transparent</code> |

`,
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development']
    }
};

export const DefaultExample = () => `<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 1">
        <ul class="fd-wizard__progress-bar">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 1: One line">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--accept" role="presentation"></i>
                        </span>
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
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Step 3</button>
            </div>
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
</section>
`;

DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
    docs: {
        iframeHeight: 950,
        description: {
            story: `The default wizard displays a walkthrough screen with forms split into sections. Once the user fills all of the necessary input fields, a button is displayed to go to the next section. A *Cancel* button is displayed in the footer, so the user can exit the wizard at any point during the process. However, if a user exits the wizard after adding their input, they will receive a warning that their information will be lost.
`
        }
    }
};

export const Customized = () => `<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 2">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--md">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Step 1: One line">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--accept" role="presentation"></i>
                        </span>
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
    <section class="fd-wizard__content fd-wizard__content--list fd-wizard__content--md" id="wizard-section-2" style="min-height: 300px;">
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Step 3</button>
            </div>
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
</section>
`;

Customized.parameters = {
    docs: {
        iframeHeight: 950,
        description: {
            story: `The wizard component can be customized with modifier classes. For instance, the example below has several modified elements:

| **Element** | <div style="margin-left: 2rem;"> **Modifier class** </div> | <div style="margin-left: 2rem;"> **Modification** </div> |
| :---- | :---- | :-------------- |
| \`fd-wizard__progress-bar\` | \`fd-wizard__progress-bar--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__content\` | \`fd-wizard__content--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__step-content-container\` | \`fd-wizard__step-content-container--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-bar--page\` | \`fd-bar--page-m_l\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__content\` | \`fd-wizard__content--list\` | <span style="margin-left: 2rem;"> The background of the wizard content is set to list </span> |
| \`fd-wizard__connector\` | \`fd-wizard__connector--branching\` | <span style="margin-left: 2rem;"> Adds a branching step connector </span> |
`
        }
    }
};

export const Responsive = () => `<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 3">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Ship To</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-3" style="min-height: 300px;">
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>

<br><br>

<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 4">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Additional Information</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-4" style="min-height: 300px;">
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>

<br><br>

<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 5">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
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
                                    <span class="fd-wizard__step-indicator">
                                        <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                                    </span>
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
                                            <i class=" sap-icon--money-bills" role="presentation"></i>
                                            <span class="fd-button__text">Payment</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--contacts" role="presentation"></i>
                                            <span class="fd-button__text">Contact</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--person-placeholder" role="presentation"></i>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                        </span>
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
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>
`;

Responsive.parameters = {
    docs: {
        iframeHeight: 950,
        description: {
            story: `If there is sufficient horizontal space, all labels are shown.
However, when the width decreases, the step labels disappear. To hide the labels, add the \`fd-wizard__step--no-label\` modifier class to the step.
The unselected steps should stack on top of each other when there is limited screen space. To stack them, add the \`fd-wizard__step--stacked\` modifier class. The last completed step should display on top, and requires a \`fd-wizard__step--stacked-top\` modifier class. Although they are stacked, upcoming steps do not require the stacked-top modifier class.
`
        }
    }
};

export const RevertedSteps = () => `<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 3">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Payment">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Payment</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--upcoming">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Ship To</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-3" style="min-height: 300px;">
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>

<br><br>

<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 4">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Payment">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Payment</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--upcoming fd-wizard__step--no-label">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Additional Information</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <section class="fd-wizard__content fd-wizard__content--xl" id="wizard-section-4" style="min-height: 300px;">
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>

<br><br>

<section class="fd-wizard">
    <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 5">
        <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--xl">
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container">
                            <span class="fd-wizard__label">Customer</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked fd-wizard__step--stacked-top">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Contact">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                        </span>
                        <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                            <span class="fd-wizard__label">Contact</span>
                            <span class="fd-wizard__optional-text">(Optional)</span>
                        </div>
                    </a>
                    <span class="fd-wizard__connector"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--current">
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
                                    <span class="fd-wizard__step-indicator">
                                        <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                                    </span>
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
                                            <i class=" sap-icon--money-bills" role="presentation"></i>
                                            <span class="fd-button__text">Payment</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--contacts" role="presentation"></i>
                                            <span class="fd-button__text">Contact</span>
                                        </button>
                                    </li>
                                    <li class="fd-action-sheet__item" role="listitem">
                                        <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                            <i class="sap-icon--person-placeholder" role="presentation"></i>
                                            <span class="fd-button__text">Customer</span>
                                        </button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <span class="fd-wizard__connector fd-wizard__connector--active"></span>
                </div>
            </li>
            <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--upcoming fd-wizard__step--stacked">
                <div class="fd-wizard__step-wrapper">
                    <a class="fd-wizard__step-container" tabindex="0" aria-label="Bill To">
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                        </span>
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
                        <span class="fd-wizard__step-indicator">
                            <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                        </span>
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
        <div class="fd-wizard__step-content-container">
            <div>
                Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
            </div>
            <div class="fd-wizard__next-step">
                <button class="fd-button fd-button--compact fd-button--emphasized">Next Step</button>
            </div>
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
</section>
`;

RevertedSteps.parameters = {
    docs: {
        iframeHeight: 950,
        description: {
            story: 'To indicate reverted steps, use combination of `fd-wizard__step--completed` and `fd-wizard__step--upcoming` classes.'
        }
    }
};

export const Mobile = () => `<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <div style="margin: 1rem;">
        <h4>Next Step button after content</h4>
        <section class="fd-wizard" style="max-width: 300px;">
            <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 6">
                <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--sm">
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--contacts" role="presentation"></i>
                                </span>
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
                                            <span class="fd-wizard__step-indicator">
                                                <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                                            </span>
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
                                                    <i class=" sap-icon--money-bills" role="presentation"></i>
                                                    <span class="fd-button__text">Payment</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--contacts" role="presentation"></i>
                                                    <span class="fd-button__text">Contact</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--person-placeholder" role="presentation"></i>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                                </span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Additional Information</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                </ul>
            </nav>
            <section class="fd-wizard__content fd-wizard__content--sm" id="wizard-section-6" style="min-height: 500px;">
                <div class="fd-wizard__step-content-container">
                    <div>
                        Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis.
                    </div>
                    <div class="fd-wizard__next-step">
                        <button class="fd-button fd-button--emphasized">Next Step</button>
                    </div>
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
        </section>
    </div>

    <div style="margin: 1rem;">
        <h4>Next Step button above the floating footer</h4>
        <section class="fd-wizard" style="max-width: 300px;">
            <nav class="fd-wizard__navigation" aria-label="Wizard Navigation 7">
                <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--sm">
                    <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
                        <div class="fd-wizard__step-wrapper">
                            <a class="fd-wizard__step-container" tabindex="0" aria-label="Customer">
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--person-placeholder" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--contatcs" role="presentation"></i>
                                </span>
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
                                            <span class="fd-wizard__step-indicator">
                                                <i class="fd-wizard__icon sap-icon--money-bills" role="presentation"></i>
                                            </span>
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
                                                    <i class=" sap-icon--money-bills" role="presentation"></i>
                                                    <span class="fd-button__text">Payment</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--contacts" role="presentation"></i>
                                                    <span class="fd-button__text">Contact</span>
                                                </button>
                                            </li>
                                            <li class="fd-action-sheet__item" role="listitem">
                                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                                    <i class="sap-icon--person-placeholder" role="presentation"></i>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--batch-payments" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--shipping-status" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--product" role="presentation"></i>
                                </span>
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
                                <span class="fd-wizard__step-indicator">
                                    <i class="fd-wizard__icon sap-icon--course-program" role="presentation"></i>
                                </span>
                                <div class="fd-wizard__label-container">
                                    <span class="fd-wizard__label">Additional Information</span>
                                </div>
                            </a>
                            <span class="fd-wizard__connector"></span>
                        </div>
                    </li>
                </ul>
            </nav>
            <section class="fd-wizard__content fd-wizard__content--sm" id="wizard-section-7" style="min-height: 300px;">
                <div class="fd-wizard__step-content-container">
                    <div
                    style="
                        width:100%;
                        background-image: url(assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg);
                        height: 300px;
                        background-size:cover;"
                    role="img"
                    aria-label="Image 4" />
                    <div class="fd-wizard__next-step fd-wizard__next-step--floating">
                        <button class="fd-button fd-button--emphasized">Next Step</button>
                    </div>
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
        </section>
    </div>
</div>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 950,
        description: {
            story: `For mobile devices, add the \`fd-bar--floating-footer\` modifier class to achieve a floating footer. modifier class to display a floating footer. The *Next Step* button is placed after the content whenever possible. However, it can be placed above the floating footer by adding the \`fd-wizard__next-step--floating\` modifier class.
`
        }
    }
};
