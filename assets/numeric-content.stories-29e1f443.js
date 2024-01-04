const y=`
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
`,H=`
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
`,I=`
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
`,L=`
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
`,S=`
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
`,M=`
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
`,C={title:"Dev/Numeric Content"},n=()=>M;n.parameters={docs:{disable:!0}};const c=()=>S;c.parameters={docs:{disable:!0}};const e=()=>L;e.parameters={docs:{disable:!0}};const i=()=>I;i.parameters={docs:{disable:!0}};const a=()=>H;a.parameters={docs:{disable:!0}};const t=()=>y;t.parameters={docs:{disable:!0}};var s,d,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"() => largeExampleHtml",...(r=(d=n.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var o,l,m;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:"() => mediumExampleHtml",...(m=(l=c.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,_,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"() => smallExampleHtml",...(v=(_=e.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var p,f,k;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"() => launchIconLargeExampleHtml",...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"() => launchIconMediumExampleHtml",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,w,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"() => launchIconSmallExampleHtml",...(E=(w=t.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const D=["Large","Medium","Small","LaunchIconLarge","LaunchIconMedium","LaunchIconSmall"];export{n as Large,i as LaunchIconLarge,a as LaunchIconMedium,t as LaunchIconSmall,c as Medium,e as Small,D as __namedExportsOrder,C as default};
