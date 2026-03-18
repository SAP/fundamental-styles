const s=`
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <i class="fd-numeric-content__scale-arrow sap-icon--up" aria-label="increase"></i>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--s fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                        <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
                    </div>
                </div>
        </div>
</div>
`,d=`
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">-88 88</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--informative">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                        <span class="fd-numeric-content__scale-text">milÇ</span>
                    </div>
                </div>
        </div>
</div>
`,r=`
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
        </div>
</div>
<br>
<div class="tile-content-small-playground">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
        </div>
</div>
`,o=`
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
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
`,l=`
<div class="tile-content-playground">
        <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
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
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                    </div>
                </div>
        </div>
</div>
`,m=`
<div class="tile-content-playground">
        <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
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
                        <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
        </div>
</div>
`,u={title:"Dev/Numeric Content"},n=()=>m;n.parameters={docs:{disable:!0}};const c=()=>l;c.parameters={docs:{disable:!0}};const e=()=>o;e.parameters={docs:{disable:!0}};const i=()=>r;i.parameters={docs:{disable:!0}};const a=()=>d;a.parameters={docs:{disable:!0}};const t=()=>s;t.parameters={docs:{disable:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => largeExampleHtml",...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => mediumExampleHtml",...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => smallExampleHtml",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => launchIconLargeExampleHtml",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => launchIconMediumExampleHtml",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => launchIconSmallExampleHtml",...t.parameters?.docs?.source}}};const _=["Large","Medium","Small","LaunchIconLarge","LaunchIconMedium","LaunchIconSmall"];export{n as Large,i as LaunchIconLarge,a as LaunchIconMedium,t as LaunchIconSmall,c as Medium,e as Small,_ as __namedExportsOrder,u as default};
