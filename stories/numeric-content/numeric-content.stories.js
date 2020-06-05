
import "./numeric-content-playground.scss";
import "../../dist/numeric-content.css";
import "../../dist/icon.css";

export default {
  title: "Dev/Numeric Content"
};

export const large = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                        <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                        </div>
                </div>
        </div>
</div>
`;

large.story = {
  parameters: { docs: { disable: true } }
};


export const medium = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <span class="fd-numeric-content__scale-arrow sap-icon--up"></span>
                    </div>
                </div>
        </div>
</div>
`;

medium.story = {
  parameters: { docs: { disable: true } }
};


export const small = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">%</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
                </div>
        </div>
</div>
`;

small.story = {
  parameters: { docs: { disable: true } }
};


export const launchIconLarge = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
        </div>
</div>
`;

launchIconLarge.story = {
  parameters: { docs: { disable: true } }
};


export const launchIconMedium = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">-88 88</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--informative">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">milÇ</span>
                    </div>
                </div>
        </div>
</div>
`;

launchIconMedium.story = {
  parameters: { docs: { disable: true } }
};


export const launchIconSmall = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <span class="fd-numeric-content__scale-arrow sap-icon--up"></span>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--s fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
`;

launchIconSmall.story = {
  parameters: { docs: { disable: true } }
};
