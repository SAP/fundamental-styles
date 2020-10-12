export default {
    title: 'Components/Slider',
    parameters: {
        description: `A slider is a control that enables the user to adjust single values within a specified numerical range. A range slider is a user interface control that enables the user to select a value range within a predefined numerical
interval.`,
        components: ['slider']
    },
    tags: ['f3', 'theme']
};

/**
 * Basic slider
 */

export const basic = () => `
<div style="width: 50%">
    <div class="fd-slider" role="slider">
        <div class="fd-slider__wrapper">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" style="left: 50%;"></div>
            </div>
        </div>
    </div>
</div>
`;

/**
 * Range slider
 */

export const range = () => `
<div style="width: 50%">
    <div class="fd-slider" role="slider">
        <div class="fd-slider__wrapper">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 40%;left: 40%"></div>
                <div class="fd-slider__handle" style="left: 40%;"></div>
                <div class="fd-slider__handle" style="left: 80%;"></div>
            </div>
        </div>
    </div>
</div>
`;

export const ticks = () => `
<div style="width: 50%">
    <div class="fd-slider" role="slider">
        <div class="fd-slider__wrapper">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" style="left: 50%;"></div>
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

ticks.storyName = 'Slider with ticks';
ticks.parameters = {
    docs: {
        storyDescription: 'Slider with ticks. A tick is an element with class <code>fd-slider\\_\\_tick</code> If a tick is in selected range, a modifier class <code>--in-range</code> should be applied.'
    }
};

export const ticksAndLabels = () => `
<div style="width: 50%">
    <div class="fd-slider" role="slider">
        <div class="fd-slider__wrapper">
            <div class="fd-slider__track">
                <div class="fd-slider__track-range" style="width: 50%;"></div>
                <div class="fd-slider__handle" style="left: 50%;"></div>
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
ticksAndLabels.storyName = 'Slider with ticks and labels';
ticksAndLabels.parameters = {
    docs: {
        storyDescription: 'Slider with ticks and labels. A label is an element with class <code>fd-slider\\_\\_label</code>  Please be aware that labels positioning mechanism should be implemented by application developer.'
    }
};
