
import './numeric-content-playground.scss';
import '../../dist/numeric-content.css';
import '../../dist/icon.css';

export default {
    title: 'Dev/Numeric Content'
};

export const large = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
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
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
        </div>
</div>
`;

large.parameters = { docs: { disable: true } };


export const medium = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
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
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                    </div>
                </div>
        </div>
</div>
`;

medium.parameters = { docs: { disable: true } };


export const small = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
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

small.parameters = { docs: { disable: true } };


export const launchIconLarge = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon" role="presentation">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
        </div>
</div>
`;

launchIconLarge.parameters = { docs: { disable: true } };


export const launchIconMedium = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon" role="presentation">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon" role="presentation">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">-88 88</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--informative">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">milÇ</span>
                    </div>
                </div>
        </div>
</div>
`;

launchIconMedium.parameters = { docs: { disable: true } };


export const launchIconSmall = () => `
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon" role="presentation">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--up"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--s fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon" role="presentation">
                        <i class="sap-icon--line-charts"></i>
                    </span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <span class="fd-numeric-content__scale-arrow" aria-label="decrease">
                            <i class="sap-icon--down"></i>
                        </span>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
`;

launchIconSmall.parameters = { docs: { disable: true } };
