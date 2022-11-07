import '../../../src/slider.scss';
export default {
    title: 'Components/Slider',
    parameters: {
        description: `There are two types of sliders, <a href="https://experience.sap.com/internal/fiori-design-web/slider/">Standard Slider</a> and  <a href="https://experience.sap.com/internal/fiori-design-web/range-slider/">Range Slider</a>. The standard slider is a control that enables the user to adjust single values within a specified numerical range. The range slider enables the user to select a value range within a predefined numerical interval.

##Usage
**Use the slider if:**

-	you want to change values with graphical support.


**Use the range slide if:**

- you want to select a value range within a predefined numerical interval. If you want to specify only a single value within a predefined numerical interval, use the slider instead.

## Responsiveness
The slider itself is not responsive. It adjusts to the responsiveness of its parent container by recalculating and resizing the width of the control.

## Components
- **Track: ** a horizontal bar which visually represents the range between a minimum and maximum value. A portion of the slider represents the current value or a range.
- **Tick Marks:** vertical elements that allow the slider to snap to predefined values
- **Handles:**	interactive elements which can be dragged horizontally to change the current slider value or range
- **Labels:**	the text or numeric representation of a tick mark value
- **Helper Area:**	the area where the input and the tooltip are shown.


## Accessibility
To ensure that both the standard and range sliders are accessible, a div element with class \`fd-slider__handle\` must have the following aria attributes:

- \`tabindex="0"\`
- \`role="slider"\`
- \`aria-label\`: a string that labels the element
- \`aria-labelledby\`: an ID reference to a visible element that labels the slider, used if \`aria-label\` isn't provided
- \`aria-valuemin\`: the decimal value representing the minimum allowed value of the slider
- \`aria-valuemax\`: the decimal value representing the maximum allowed value of the slider
- \`aria-valuenow\`: the decimal value representing the current value of the slider
- \`aria-valuetext\`: a string representation of the current value if needed (e.g., 20$, 33°C)

**Note:** It should be possible to change slider's value by pressing the arrow keys.

`
    },
    tags: ['f3', 'theme']
};

export const Standard = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
        <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`;

Standard.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
The standard slider displays a track with a handle. When the user hovers over the handle, a hand cursor appears. The user can either drag and drop the handle or click on the bar to change the slider setting.
` }
    }
};

export const Range = () => `
<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 40%"></div>
            </div>
        </div>
    </div>
</div>
`;

Range.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
The range slider displays a track with two handles, indicating that a range between two values can be selected. To display a range slider, add the \`fd-slider__track-range\` class to the \`fd-slider__track\` element.

        ` }
    }
};

export const Ticks = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
            <div class="fd-slider__tick-wrapper">
                <div class="fd-slider__ticks">
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Ticks.parameters = {
    docs: {
        description: {
            story: `
The slider can display ticks on the bar to help guide the user. If a tick is in selected range (Active Area), the \`fd-slider__tick--in-range\` modifier class should be applied to the \`fd-slider__tick\` base class.
        `
        }
    }
};

export const TicksAndLabels = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks and labels" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
            <div class="fd-slider__tick-wrapper">
                <div class="fd-slider__ticks">
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick fd-slider__tick--in-range"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                    <div class="fd-slider__tick"></div>
                </div>
                <div class="fd-slider__labels">
                    <div class="fd-slider__label">0</div>
                    <div class="fd-slider__label">10</div>
                    <div class="fd-slider__label">20</div>
                    <div class="fd-slider__label">30</div>
                    <div class="fd-slider__label">40</div>
                    <div class="fd-slider__label">50</div>
                    <div class="fd-slider__label">60</div>
                    <div class="fd-slider__label">70</div>
                    <div class="fd-slider__label">80</div>
                    <div class="fd-slider__label">90</div>
                    <div class="fd-slider__label">100</div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

TicksAndLabels.storyName = 'Ticks and labels';
TicksAndLabels.parameters = {
    docs: {
        description: {
            story: `
The slider can display labels that indicate the values of each tick. Labels can be displayed with the \`fd-slider__label\` class. Be advised that this styling does not include the positioning of the labels.
        `
        }
    }
};

export const MobileMode = () => `
<div class="slider-container">
    <div class="fd-slider fd-slider--lg">
        <div class="fd-slider__inner">
            <div class="fd-slider__handle fd-slider__handle--lg" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`;
MobileMode.storyName = 'Mobile';
MobileMode.parameters = {
    docs: {
        description: {
            story: `
By default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider handle and its hit area by adding \`fd-slider__handle--lg\` class to \`fd-slider__handle\` element.
To add horizontal paddings of \`0.8125rem\` use the \`fd-slider--lg\` modifier class
        `
        }
    }
};
