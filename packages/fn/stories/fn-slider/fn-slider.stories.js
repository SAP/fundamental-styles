import 'fn/src/fn-slider.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Slider',
  parameters: {
    description: `**Modifier classes for slider style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| default&nbsp;&nbsp;&nbsp;&nbsp;| \`none\`                 |
| range&nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-slider--range\`  |
<br><br><br>
`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }
</style>
`;
export const Slider = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-slider">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 0%;">
                <div class="fn-slider__handle" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="0">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-slider">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 25%;">
                <div class="fn-slider__handle is-hover" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="25">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-slider">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 50%;">
                <div class="fn-slider__handle is-active" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="50">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-slider">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 75%;">
                <div class="fn-slider__handle is-focus" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="75">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-slider is-disabled">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 100%;">
                <div class="fn-slider__handle is-hover" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="100">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
            </div>
        </div>
    </div>
</div>
`;
Slider.parameters = {
  docs: {
    iframeHeight: 500
  }
};
export const RangeSlider = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-slider fn-slider--range">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 30%; left: 0">
                <div class="fn-slider__handle" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="0">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
                <div class="fn-slider__handle" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="30">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-slider fn-slider--range">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 30%; left: 30%">
                <div class="fn-slider__handle is-hover" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="30">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
                <div class="fn-slider__handle is-hover" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="60">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-slider fn-slider--range">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 20%; left: 60%">
                <div class="fn-slider__handle" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="60">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
                <div class="fn-slider__handle" role="slider" tabindex="0" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="80" >
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-slider fn-slider--range">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 70%; left: 30%">
                <div class="fn-slider__handle is-focus" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="30">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
                <div class="fn-slider__handle is-focus" tabindex="0" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="100" >
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-slider fn-slider--range is-disabled">
        <div class="fn-slider__wrapper">
            <div class="fn-slider__track" style="width: 100%; left: 0%">
                <div class="fn-slider__handle" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="0">
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
                <div class="fn-slider__track-range"></div>
                <div class="fn-slider__handle" role="slider" aria-label="slider handle" aria-valuemin="1" aria-valuemax="100" aria-valuenow="100" >
                    <span class="sap-icon sap-icon--megamenu"></span>
                    <span class="sap-icon sap-icon--megamenu"></span>
                </div>
            </div>
        </div>
    </div>
</div>
`;
RangeSlider.parameters = {
  docs: {
    iframeHeight: 500
  }
};
