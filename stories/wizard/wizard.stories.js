import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/wizard.css';

export default {
    title: 'Components/Wizard',
    parameters: {
        description: `Some description


### USE THE TREE IF:
- case 1
- case 2
- case 3

`,
        docs: { iframeHeight: 400 },
        tags: ['f3', 'theme', 'development']
    }
};

export const example1 = () => `
<nav class="fd-wizard" role="navigation">
    <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--m">
        <li class="fd-wizard__step fd-wizard__step--completed">
            <div class="fd-wizard__test-wrapper">
                <a class="fd-wizard__step-container" tabindex="0">
                    <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                    <div class="fd-wizard__label-container">
                        <span class="fd-wizard__label">Step 1: One line</span>
                    </div>
                </a>
                <span class="fd-wizard__connector fd-wizard__connector--active"></span>
            </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--current">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                    <span class="fd-wizard__label">Step 2: One line truncates</span>
                    <span class="fd-wizard__optional-text">(Optional)</span>
                </div>
            </a>
            <span class="fd-wizard__connector"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">3</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 3: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">4</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 4: Future Step</span>
                </div>
            </a>
        </li>
    </div>
    </ul>
</nav>
<div class="fd-wizard__content" aria-expanded="false"></div>

<br><br>
<nav class="fd-wizard" role="navigation">
    <ul class="fd-wizard__progress-bar fd-wizard__progress-bar--s">
        <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 1: One line</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator sap-icon--accept"></span>
                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                    <span class="fd-wizard__label">Step 2: One line truncates</span>
                    <span class="fd-wizard__optional-text">(Optional)</span>
                </div>
            </a>
            <span class="fd-wizard__connector"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--completed fd-wizard__step--stacked fd-wizard__step--no-label">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">3</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 3: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--active"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--current">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">4</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 4: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">5</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 5: Future Step</span>
                </div>
            </a>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">6</span>
                <div class="fd-wizard__label-container fd-wizard__label-container--optional">
                    <span class="fd-wizard__label">Step 6: Future Step</span>
                    <span class="fd-wizard__optional-text">(Optional)</span>
                </div>
            </a>
            <span class="fd-wizard__connector"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">7</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 7: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">8</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 8: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">9</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 9: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">10</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 10: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--upcoming fd-wizard__step--stacked">
        <div class="fd-wizard__test-wrapper">
            <a class="fd-wizard__step-container" tabindex="0">
                <span class="fd-wizard__step-indicator">11</span>
                <div class="fd-wizard__label-container">
                    <span class="fd-wizard__label">Step 11: Future Step</span>
                </div>
            </a>
            <span class="fd-wizard__connector fd-wizard__connector--branching"></span>
        </div>
        </li>
    </ul>
</nav>
`;

example1.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `Example 1 <code class="docs-code">class*</code> bla bla bla
`
    }
};
