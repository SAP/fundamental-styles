import '../../dist/rating-indicator.css';
import './custom.scss';

export default {
    title: 'Components/Rating Indicator',
    parameters: {
        description: `
The rating indicator can be used to rate content or to indicate.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.
        `
    },
    tags: ['f3', 'a11y', 'theme']
};

export const customIconSizes = () => `
    <div class="example-container">
        <span>Default:</span>
        <div class="fd-rating-indicator fd-rating-indicator--hide-dynamic-text">
            <input type="radio" class="fd-rating-indicator__input" id="rating-1" name="rating" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-2" name="rating" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-2"></label>

            <input type="radio" class="fd-rating-indicator__input" id="rating-3" name="rating" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-3"></label>            

            <input type="radio" class="fd-rating-indicator__input" id="rating-4" name="rating" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-4"></label>

            <input type="radio" class="fd-rating-indicator__input" id="rating-5" name="rating" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>XS:</span>
        <div class="fd-rating-indicator fd-rating-indicator--xs">
            <input type="radio" class="fd-rating-indicator__input" id="rating-xs-1" name="rating-xs" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-xs-1"></label>

            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-xs-2"></label>
            <input type="radio" class="fd-rating-indicator__input" id="rating-xs-2" name="rating-xs" value="2" checked>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-xs-3" name="rating-xs" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-xs-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-xs-4" name="rating-xs" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-xs-4"></label>

            <input type="radio" class="fd-rating-indicator__input" id="rating-xs-5" name="rating-xs" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-xs-5"></label>

            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>

    <div class="example-container">
        <span>S:</span>
        <div class="fd-rating-indicator fd-rating-indicator--s">
            <input type="radio" class="fd-rating-indicator__input" id="rating-s-1" name="rating-s" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-s-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-s-2" name="rating-s" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-s-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-s-3" name="rating-s" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-s-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-s-4" name="rating-s" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-s-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-s-5" name="rating-s" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-s-5"></label>

            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>

    <div class="example-container">
        <span>M:</span>
        <div class="fd-rating-indicator fd-rating-indicator--m">
            <input type="radio" class="fd-rating-indicator__input" id="rating-m-1" name="rating-m" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-m-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-m-2" name="rating-m" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-m-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-m-3" name="rating-m" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-m-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-m-4" name="rating-m" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-m-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-m-5" name="rating-m" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-m-5"></label>

            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>L:</span>
        <div class="fd-rating-indicator fd-rating-indicator--l">
            <input type="radio" class="fd-rating-indicator__input" id="rating-l-1" name="rating-l" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-l-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-l-2" name="rating-l" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-l-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-l-3" name="rating-l" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-l-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-l-4" name="rating-l" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-l-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-l-5" name="rating-l" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-l-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>Cozy:</span>
        <div class="fd-rating-indicator fd-rating-indicator--cozy">
            <input type="radio" class="fd-rating-indicator__input" id="rating-cozy-1" name="rating-cozy" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-cozy-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-cozy-2" name="rating-cozy" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-cozy-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-cozy-3" name="rating-cozy" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-cozy-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-cozy-4" name="rating-cozy" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-cozy-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-cozy-5" name="rating-cozy" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-cozy-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>Compact:</span>
        <div class="fd-rating-indicator fd-rating-indicator--compact">
            <input type="radio" class="fd-rating-indicator__input" id="rating-compact-1" name="rating-compact" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-compact-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-compact-2" name="rating-compact" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-compact-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-compact-3" name="rating-compact" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-compact-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-compact-4" name="rating-compact" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-compact-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-compact-5" name="rating-compact" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-compact-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>Condensed:</span>
        <div class="fd-rating-indicator fd-rating-indicator--condensed">
            <input type="radio" class="fd-rating-indicator__input" id="rating-condensed-1" name="rating-condensed" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-condensed-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-condensed-2" name="rating-condensed" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-condensed-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-condensed-3" name="rating-condensed" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-condensed-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-condensed-4" name="rating-condensed" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-condensed-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-condensed-5" name="rating-condensed" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-condensed-5"></label>

            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
`;

customIconSizes.parameters = {
    docs: {
        storyDescription: `
| **Size**    | **rem**    | **Modifier class**       |
| :---------- | :--------- | -----------------------: |
| XS          | 0.75 rem   | <code>--xs</code>        |
| S           | 1 rem      | <code>--s</code>         |
| M/Default   | 1.375 rem  | <code>--m</code>         |
| L           | 2 rem      | <code>--l</code>         |
| Cozy        | 1.5 rem    | <code>--cozy</code>      |
| Compact     | 1 rem      | <code>--compact</code>   |
| Condensed   | 1 rem      | <code>--condensed</code>         |
`
    }
};

export const States = () => `
    <div class="example-container">
        <span>ReadOnly:</span>
        <div class="fd-rating-indicator" aria-readonly="true">
            <input type="radio" class="fd-rating-indicator__input" id="rating-readonly-1" name="rating-readonly" value="1" disabled>  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-readonly-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-readonly-2" name="rating-readonly" value="2" disabled checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-readonly-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-readonly-3" name="rating-readonly" value="3" disabled>
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-readonly-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-readonly-4" name="rating-readonly" value=4" disabled>
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-readonly-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-readonly-5" name="rating-readonly" value="5" disabled>
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-readonly-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span>Disabled:</span>
        <div class="fd-rating-indicator" aria-disabled="true">
            <input type="radio" class="fd-rating-indicator__input" id="rating-disabled-1" name="rating-disabled" value="1" disabled>  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-disabled-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-disabled-2" name="rating-disabled" value="2" disabled checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-disabled-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-disabled-3" name="rating-disabled" value="3" disabled>
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-disabled-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-disabled-4" name="rating-disabled" value=4" disabled>
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-disabled-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-disabled-5" name="rating-disabled" value="5" disabled>
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-disabled-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
`;

States.parameters = {
    docs: {
        storyDescription: `These Rating indicator types indicate two states: read-only and disabled.

To disable a \`Rating Indicator\` component, the disabled attribute needs to be added to the \`fd-rating-indicator\` elements.
The disabled state can also be achieved by adding the \`.is-disable\` class or the \`aria-disabled="true"\` attribute.

To make the \`Rating Indicator\` component read-only, the readonly attribute needs to be added to the \`fd-rating-indicator\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.`
    }
};

export const Rtl = () => `
    <div class="example-container" dir="rtl">
        <span>Rtl:</span>
        <div class="fd-rating-indicator">
            <input type="radio" class="fd-rating-indicator__input" id="rating-rtl-1" name="rating-rtl" value="1">  
            <label aria-label="1 star" class="fd-rating-indicator__label" for="rating-rtl-1"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-rtl-2" name="rating-rtl" value="2" checked>
            <label aria-label="2 star" class="fd-rating-indicator__label" for="rating-rtl-2"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-rtl-3" name="rating-rtl" value="3">
            <label aria-label="3 star" class="fd-rating-indicator__label" for="rating-rtl-3"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-rtl-4" name="rating-rtl" value=4">
            <label aria-label="4 star" class="fd-rating-indicator__label" for="rating-rtl-4"></label>
            
            <input type="radio" class="fd-rating-indicator__input" id="rating-rtl-5" name="rating-rtl" value="5">
            <label aria-label="5 star" class="fd-rating-indicator__label" for="rating-rtl-5"></label>
            
            <span class="dynamic-text">(2 of 5)</span>
        </div>
    </div>
`;

Rtl.parameters = {
    docs: {
        storyDescription: 'This rating indicator is displayed from right-to-left on the screen..'
    }
};
