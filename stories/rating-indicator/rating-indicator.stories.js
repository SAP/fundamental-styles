import iconRated from './rated.png';
import iconUnrated from './unrated.png';

export default {
    title: 'Components/Rating Indicator',
    parameters: {
        description: `
The rating indicator displays a group of icons or images (usually stars) that indicate a rating.
It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest).
Although the maximum amount is 7 for the icons or images, it is highly recommended to display the default amount of 5.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['rating-indicator']
    }
};

export const Sizes = () => `
    <div class="example-container">
        <span style="min-width: 150px;">Default (Medium):</span>
        <div class="fd-rating-indicator fd-rating-indicator--hide-dynamic-text">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-1" name="rating" value="1">  
                <label class="fd-rating-indicator__label" for="rating-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-2" name="rating" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-2"></label>
    
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-3" name="rating" value="3">
                <label class="fd-rating-indicator__label" for="rating-3"></label>            
    
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-4" name="rating" value="4">
                <label class="fd-rating-indicator__label" for="rating-4"></label>
    
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-5" name="rating" value="5">
                <label class="fd-rating-indicator__label" for="rating-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span style="min-width: 150px;">Extra small:</span>
        <div class="fd-rating-indicator fd-rating-indicator--xs">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-1" name="rating-xs" value="1">  
                <label class="fd-rating-indicator__label" for="rating-xs-1"></label>
    
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-2" name="rating-xs" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-xs-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-3" name="rating-xs" value="3">
                <label class="fd-rating-indicator__label" for="rating-xs-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-4" name="rating-xs" value="4">
                <label class="fd-rating-indicator__label" for="rating-xs-4"></label>
    
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-5" name="rating-xs" value="5">
                <label class="fd-rating-indicator__label" for="rating-xs-5"></label>
            </div>

            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>

    <div class="example-container">
        <span style="min-width: 150px;">Small:</span>
        <div class="fd-rating-indicator fd-rating-indicator--sm">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-s-1" name="rating-s" value="1">  
                <label class="fd-rating-indicator__label" for="rating-s-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-s-2" name="rating-s" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-s-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-s-3" name="rating-s" value="3">
                <label class="fd-rating-indicator__label" for="rating-s-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-s-4" name="rating-s" value="4">
                <label class="fd-rating-indicator__label" for="rating-s-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-s-5" name="rating-s" value="5">
                <label class="fd-rating-indicator__label" for="rating-s-5"></label>
            </div>

            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span style="min-width: 150px;">Large:</span>
        <div class="fd-rating-indicator fd-rating-indicator--lg">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-l-1" name="rating-l" value="1">  
                <label class="fd-rating-indicator__label" for="rating-l-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-l-2" name="rating-l" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-l-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-l-3" name="rating-l" value="3">
                <label class="fd-rating-indicator__label" for="rating-l-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-l-4" name="rating-l" value="4">
                <label class="fd-rating-indicator__label" for="rating-l-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-l-5" name="rating-l" value="5">
                <label class="fd-rating-indicator__label" for="rating-l-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span style="min-width: 150px;">Cozy:</span>
        <div class="fd-rating-indicator fd-rating-indicator--cozy">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-1" name="rating-cozy" value="1">  
                <label class="fd-rating-indicator__label" for="rating-cozy-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-2" name="rating-cozy" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-cozy-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-3" name="rating-cozy" value="3">
                <label class="fd-rating-indicator__label" for="rating-cozy-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-4" name="rating-cozy" value="4">
                <label class="fd-rating-indicator__label" for="rating-cozy-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-5" name="rating-cozy" value="5">
                <label class="fd-rating-indicator__label" for="rating-cozy-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span style="min-width: 150px;">Compact:</span>
        <div class="fd-rating-indicator fd-rating-indicator--compact">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-1" name="rating-compact" value="1">  
                <label class="fd-rating-indicator__label" for="rating-compact-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-2" name="rating-compact" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-compact-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-3" name="rating-compact" value="3">
                <label class="fd-rating-indicator__label" for="rating-compact-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-4" name="rating-compact" value="4">
                <label class="fd-rating-indicator__label" for="rating-compact-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-5" name="rating-compact" value="5">
                <label class="fd-rating-indicator__label" for="rating-compact-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <span style="min-width: 150px;">Condensed:</span>
        <div class="fd-rating-indicator fd-rating-indicator--condensed">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-1" name="rating-condensed" value="1">  
                <label class="fd-rating-indicator__label" for="rating-condensed-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-2" name="rating-condensed" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-condensed-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-3" name="rating-condensed" value="3">
                <label class="fd-rating-indicator__label" for="rating-condensed-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-4" name="rating-condensed" value="4">
                <label class="fd-rating-indicator__label" for="rating-condensed-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-5" name="rating-condensed" value="5">
                <label class="fd-rating-indicator__label" for="rating-condensed-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
`;

Sizes.parameters = {
    docs: {
        storyDescription: `
| **Size**       | **rem**    | **Modifier class**        |
| :----------    | :--------- | -----------------------:  |
| Extra small    | 0.75rem    | <code>--xs</code>         |
| Small          | 1rem       | <code>--sm</code>         |
| Medium/Default | 1.375rem   | _n/a_                     |
| Large          | 2rem       | <code>--lg</code>         |
| Cozy           | 1.5rem     | <code>--cozy</code>       |
| Compact        | 1rem       | <code>--compact</code>    |
| Condensed      | 1rem       | <code>--condensed</code>  |
`
    }
};

export const HalfValues = () => `
<div class="example-container">
    <div class="fd-rating-indicator fd-rating-indicator--half-star">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-05" name="rating-half-sizes" value="0.5">  
            <label class="fd-rating-indicator__label" for="rating-half-sizes-05"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-1" name="rating-half-sizes" value="1">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-1"></label>
            
            <input aria-label="1 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-15" name="rating-half-sizes" value="1.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-15"></label>
            
            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-2" name="rating-half-sizes" value=2">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-2"></label>
            
            <input aria-label="2 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-25" name="rating-half-sizes" value="2.5" checked>
            <label class="fd-rating-indicator__label" for="rating-half-sizes-25"></label>
            
            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-3" name="rating-half-sizes" value="3">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-3"></label>
            
            <input aria-label="3 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-35" name="rating-half-sizes" value="3.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-35"></label>
            
            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-4" name="rating-half-sizes" value="4">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-4"></label>
            
            <input aria-label="4 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-45" name="rating-half-sizes" value="4.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-45"></label>
            
            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-5" name="rating-half-sizes" value="5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>
`;

HalfValues.storyName = 'Half values';
HalfValues.parameters = {
    docs: {
        storyDescription: `
To display half values with the rating indicator i.e 2.5 stars, add the \`fd-rating-indicator--half-star\` 
modifier class together with the \`fd-rating-indicator\` class.
`
    }
};

export const CustomIcons = () => `
<div class="example-container">
    <div class="fd-rating-indicator fd-rating-indicator--icon"
    style="--sapRating-indicator-icon-rated: url(${iconRated}); --sapRating-indicator-icon-unrated: url(${iconUnrated})">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-1" name="rating-icon" value="1">
            <label class="fd-rating-indicator__label" for="rating-icon-1"></label>
            
            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-2" name="rating-icon" value=2" checked>
            <label class="fd-rating-indicator__label" for="rating-icon-2"></label>
            
            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-3" name="rating-icon" value="3">
            <label class="fd-rating-indicator__label" for="rating-icon-3"></label>
            
            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-4" name="rating-icon" value="4">
            <label class="fd-rating-indicator__label" for="rating-icon-4"></label>
            
            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-5" name="rating-icon" value="5">
            <label class="fd-rating-indicator__label" for="rating-icon-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
`;

CustomIcons.storyName = 'Custom icons';
CustomIcons.parameters = {
    docs: {
        storyDescription: `
To make the rating indicator to use custom icons needs to be added class \`.fd-rating-indicator--icon\` 
to the \`fd-rating-indicator\` element.
Additionally, needs to set css variables \`--sapRating-indicator-icon-rated: url(...)\` and \`--sapRating-indicator-icon-unrated: url(...)\`
`
    }
};

export const Disabled = () => `
<div class="example-container">
    <div class="fd-rating-indicator" aria-disabled="true">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-1" name="rating-disabled" value="1" disabled>  
            <label class="fd-rating-indicator__label" for="rating-disabled-1"></label>
            
            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-2" name="rating-disabled" value="2" disabled checked>
            <label class="fd-rating-indicator__label" for="rating-disabled-2"></label>
            
            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-3" name="rating-disabled" value="3" disabled>
            <label class="fd-rating-indicator__label" for="rating-disabled-3"></label>
            
            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-4" name="rating-disabled" value="4" disabled>
            <label class="fd-rating-indicator__label" for="rating-disabled-4"></label>
            
            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-5" name="rating-disabled" value="5" disabled>
            <label class="fd-rating-indicator__label" for="rating-disabled-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
`;

Disabled.parameters = {
    docs: {
        storyDescription: `
To disable rating indicator, the \`[disable]\` attribute needs to be added to all inputs. 
Additionally, one of the selectors listed below needs to be added to the \`fd-rating-indicator\` element:

- \`.is-disable\`
- \`aria-disable="true"\`
- \`[disable]\`
`
    }
};

export const DisplayMode = () => `    
    <div class="example-container">
        <div class="fd-rating-indicator is-display-mode">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-1" name="rating-display-mode" value="1" disabled>  
                <label class="fd-rating-indicator__label" for="rating-display-mode-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-2" name="rating-display-mode" value="2" disabled checked>
                <label class="fd-rating-indicator__label" for="rating-display-mode-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-3" name="rating-display-mode" value="3" disabled>
                <label class="fd-rating-indicator__label" for="rating-display-mode-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-4" name="rating-display-mode" value="4" disabled>
                <label class="fd-rating-indicator__label" for="rating-display-mode-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-5" name="rating-display-mode" value="5" disabled>
                <label class="fd-rating-indicator__label" for="rating-display-mode-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
`;

DisplayMode.storyName = 'Display mode';
DisplayMode.parameters = {
    docs: {
        storyDescription: `
Data can be presented as label-value field pairs without editable fields in display-only forms, 
see <a href="form-grid.html">Form Grid</a> for more details. If you want to include a rating indicator in a display-only form, 
add the \`.is-display-mode\` to the \`fd-rating-indicator\` element.
`
    }
};

export const DifferentValues = () => `
    <div class="example-container">
        <div class="fd-rating-indicator">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-1" name="rating-max-value-5" value="1">  
                <label class="fd-rating-indicator__label" for="rating-max-value-5-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-2" name="rating-max-value-5" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-max-value-5-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-3" name="rating-max-value-5" value="3">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-4" name="rating-max-value-5" value="4">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-5" name="rating-max-value-5" value="5">
                <label class="fd-rating-indicator__label" for="rating-max-value-5-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    
    <div class="example-container">
        <div class="fd-rating-indicator">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-1" name="rating-max-value-6" value="1">  
                <label class="fd-rating-indicator__label" for="rating-max-value-6-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-2" name="rating-max-value-6" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-max-value-6-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-3" name="rating-max-value-6" value="3">
                <label class="fd-rating-indicator__label" for="rating-max-value-6-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-4" name="rating-max-value-6" value="4">
                <label class="fd-rating-indicator__label" for="rating-max-value-6-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-5" name="rating-max-value-6" value="5">
                <label class="fd-rating-indicator__label" for="rating-max-value-6-5"></label>
                
                <input aria-label="6 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-6" name="rating-max-value-6" value="6">
                <label class="fd-rating-indicator__label" for="rating-max-value-6-6"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 6)</span>
        </div>
    </div>
    
    <div class="example-container">
        <div class="fd-rating-indicator">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-1" name="rating-max-value-7" value="1">  
                <label class="fd-rating-indicator__label" for="rating-max-value-7-1"></label>
                
                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-2" name="rating-max-value-7" value="2" checked>
                <label class="fd-rating-indicator__label" for="rating-max-value-7-2"></label>
                
                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-3" name="rating-max-value-7" value="3">
                <label class="fd-rating-indicator__label" for="rating-max-value-7-3"></label>
                
                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-4" name="rating-max-value-7" value="4">
                <label class="fd-rating-indicator__label" for="rating-max-value-7-4"></label>
                
                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-5" name="rating-max-value-7" value="5">
                <label class="fd-rating-indicator__label" for="rating-max-value-7-5"></label>
                
                <input aria-label="6 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-6" name="rating-max-value-7" value="6">
                <label class="fd-rating-indicator__label" for="rating-max-value-7-6"></label>
                
                <input aria-label="7 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-7" name="rating-max-value-7" value="7">
                <label class="fd-rating-indicator__label" for="rating-max-value-7-7"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 7)</span>
        </div>
    </div>
`;

DifferentValues.storyName = 'Different values';
DifferentValues.parameters = {
    docs: {
        storyDescription: `
It is possible to display the rating indicator with a different number of values. 
It is highly recommended to use 5 as the maximum value, however you can go up to 7 
if it is ideal for your use case.
`
    }
};
