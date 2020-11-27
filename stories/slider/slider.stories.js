export default {
    title: 'Components/Slider',
    parameters: {
        description: `There are two types of sliders, the **standard slider** and a **range slider**. The standard slider is a control that enables the user to adjust single values within a specified numerical range. The range slider, however, enables the user to select a value range within a predefined numerical interval.

##Usage
**Use the slider if:**
        
-	You want to change values with graphical support.


**Use the range slide if:**

- You want to select a value range within a predefined numerical interval. If you want to specify only a single value within a predefined numerical interval, use the slider instead.


## Accessibility
To ensure that both the standard and range sliders are accessible, a div element with class <code class="docs-code">fd-slider\\_\\_handle</code> must have the following aria attributes: 

- <code class="docs-code">tabindex="0"</code>
- <code class="docs-code">role="slider"</code>
- <code class="docs-code">aria-label</code>: a string that labels the element
- <code class="docs-code">aria-labelledby</code>: an ID reference to a visible element that labels the slider, used if <code class="docs-code">aria-label</code> isn't provided 
- <code class="docs-code">aria-valuemin</code>: the decimal value representing the minimum allowed value of the slider
- <code class="docs-code">aria-valuemax</code>: the decimal value representing the maximum allowed value of the slider
- <code class="docs-code">aria-valuenow</code>: the decimal value representing the current value of the slider
- <code class="docs-code">aria-valuetext</code>: a string representation of the current value if needed (e.g., 20$, 33°C)

**Note:** It should be possible to change slider's value by pressing the arrow keys.

`,
        components: ['slider']
    },
    tags: ['f3', 'theme']
};

export const Standard = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`;

Standard.storyName = 'Standard';

Standard.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The standard slider displays a bar with a circular grip. When the user hovers over the grip, a hand cursor appears. The user can either drag and drop the grip or click on the bar to change the slider setting.
` }
};

export const range = () => `
<div class="slider-container slider-container--range">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 40%"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
            </div>
        </div>
    </div>
</div>
`;

range.storyName = 'Range';

range.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The range slider displays a bar with two circular grips, indicating that a range between two values can be selected. To display a range slider, add the \`fd-slider__track-range\` class to the \`fd-slider__track\` element.

        ` }
};

export const ticks = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
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

ticks.storyName = 'Ticks';
ticks.parameters = {
    docs: {
        storyDescription: `
The slider can display ticks on the bar to help guide the user. Ticks can be displayed with the \`fd-slider__tick\` class. If a tick is in selected range, a \`--in-range\` modifier class should be applied.
        `
    }
};

export const ticksAndLabels = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="slider with ticks and labels" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
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

ticksAndLabels.storyName = 'Ticks and labels';
ticksAndLabels.parameters = {
    docs: {
        storyDescription: `
The slider can display labels that indicate the values of each tick. Labels can be displayed with the \`fd-slider__label\` class. Be advised that this styling does not include the positioning of the labels.
        `
    }
};

export const mobileMode = () => `
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle fd-slider__handle--lg" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`;
mobileMode.storyName = 'Mobile';
mobileMode.parameters = {
    docs: {
        storyDescription: `
By default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider grip and its hit area by adding \`fd-slider__handle--lg\` class to \`fd-slider__handle\` element.
        `
    }
};
