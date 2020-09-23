import '../../dist/search-field.css';
import '../../dist/input-group.css';

export default {
    title: 'Components/Search Field',
    parameters: {
        description: 'Search Field Description goes here...',
        tags: ['f3', 'development', 'theme']
    }
};

export const example1 = () => `
<div class="fd-input-group fd-search-field">
    <input 
        class="fd-input fd-input-group__input fd-search-field__input" 
        type="text" 
        id="aqwsde121"
        placeholder="Field placeholder text">
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button 
            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search"> 
            <i class="sap-icon--search"></i>
        </button>
    </span>
</div>

<br><br>

<div class="fd-input-group fd-search-field">
    <input 
        class="fd-input fd-input-group__input fd-search-field__input" 
        type="text" 
        id="aqwsde121"
        placeholder="Field placeholder text">
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button 
            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search"> 
            <i class="sap-icon--decline"></i>
        </button>
    </span>
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button 
            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search"> 
            <i class="sap-icon--search"></i>
        </button>
    </span>
</div>

<br><br>

<div class="fd-input-group fd-search-field">
    <input 
        class="fd-input fd-input-group__input fd-search-field__input" 
        type="text" 
        id="aqwsde121"
        placeholder="Field placeholder text">
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button 
            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search"> 
            <i class="sap-icon--decline"></i>
        </button>
    </span>
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button 
            class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search"> 
            <i class="sap-icon--synchronize"></i>
        </button>
    </span>
</div>
`;

example1.storyName = 'Example 1 Title';
example1.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Example 1 Description'
    }
};
