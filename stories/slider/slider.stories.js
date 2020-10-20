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

/**
 * Range slider
 */

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

ticks.storyName = 'Slider with ticks';
ticks.parameters = {
    docs: {
        storyDescription: 'Slider with ticks. A tick is an element with class <code>fd-slider\\_\\_tick</code> If a tick is in selected range, a modifier class <code>--in-range</code> should be applied.'
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
ticksAndLabels.storyName = 'Slider with ticks and labels';
ticksAndLabels.parameters = {
    docs: {
        storyDescription: 'Slider with ticks and labels. A label is an element with class <code>fd-slider\\_\\_label</code>  Please be aware that labels positioning mechanism should be implemented by application developer.'
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
mobileMode.storyName = 'Mobile mode';
mobileMode.parameters = {
    docs: {
        storyDescription: 'The slider itself is not responsive. You can enlarge slider thumb and its hit area by adding <code>fd-slider\\_\\_handle--lg</code> class to <code>fd-slider\\_\\_handle</code> element.'
    }
};
