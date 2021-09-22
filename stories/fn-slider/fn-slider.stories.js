export default {
    title: 'Experimental/Slider',
    parameters: {
        description: `**Modifier classes for slider style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| horizontal&nbsp;&nbsp;&nbsp;&nbsp;| \`none\`                 |
| vertical&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-slider--vertical\`  |
<br><br><br>
`,
        components: ['fn-input', 'fn-slider', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        background: white;
        padding: 1.5rem;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
    }

    .docs-fn-container-vertical {
        height: 400px;
        flex-direction: row;
    }
</style>
`;

export const horizontalSlider = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-slider">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 50%;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>

    <br><br><br>
    <div class="fn-slider">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 0;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="0" style="left: 0;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>

    <br><br><br>

    <div class="fn-slider">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 100%;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="100" style="left: 100%;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>
</div>
`;

horizontalSlider.storyName = 'Horizontal Slider';
horizontalSlider.parameters = {
    docs: {
        iframeHeight: 500
    }
};


export const verticalSlider = () => `${localStyles}
<div class="docs-fn-container docs-fn-container-vertical">
    <div class="fn-slider fn-slider--vertical">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 50%;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50" style="left: 50%;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>

    <br><br><br>
    <div class="fn-slider fn-slider--vertical">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 0;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="0" style="left: 0;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>

    <br><br><br>

    <div class="fn-slider fn-slider--vertical">
        <div class="fn-slider__dot fn-slider__dot--active"></div>
        <div class="fn-slider__track">
            <div class="fn-slider__track-range" style="width: 100%;"></div>
        </div>
        <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider" aria-valuemin="1" aria-valuemax="100" aria-valuenow="100" style="left: 100%;">
            <span class="sap-icon sap-icon--megamenu"></span>
            <span class="sap-icon sap-icon--megamenu"></span>
        </div>
        <div class="fn-slider__dot"></div>
    </div>
</div>
`;

verticalSlider.storyName = 'Vertical Slider';
verticalSlider.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-slider--vertical` modifier class to `.fn-slider` for Vertical Slider.'
    }
};
