const g=`<div class="fd-skeleton" style="width: 100px; height: 50px;">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer">
                </stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite">
    
                    </animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer">
    
                </stop>
            </linearGradient>
            <mask id="fd-skeleton-0">
                <rect x="0" y="0" width="100%" rx="4" height="100%" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-0)">
    
        </rect>
    </svg>
</div>
`,u=`<div class="fd-skeleton" style="width: 50px; height: 50px;">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-2">
                <circle cx="50%" cy="50%" r="50%" class="ng-star-inserted"></circle>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-2)"></rect>
    </svg>
</div>
`,x=`<p>3 lines</p>
<div class="fd-skeleton" style="width: 100px; height: 60px;">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-4">
                <rect x="0" width="100%" rx="4" height="8" y="0" class="ng-star-inserted"></rect>
                <rect x="0" width="100%" rx="4" height="8" y="20" class="ng-star-inserted"></rect>
                <rect x="0" width="60%" rx="4" height="8" y="40" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-4)">
    
        </rect>
    </svg>
</div>

<p>2 lines</p>
<div class="fd-skeleton" style="width: 100px; height: 60px;">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-5">
                <rect x="0" width="100%" rx="4" height="8" y="0" class="ng-star-inserted"></rect>
                <rect x="0" width="60%" rx="4" height="8" y="20" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-5)">
    
        </rect>
    </svg>
</div>
`,_=`<div class="fd-skeleton" style="width: 160px; height: 110px;">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-8">
                <circle cx="25" cy="25" r="25"></circle>
                <rect x="60" y="0" width="100" height="16" rx="4"></rect>
                <rect x="60" y="30" width="60" height="12" rx="4"></rect>
                <rect x="0" y="60" width="160" height="8" rx="4"></rect>
                <rect x="0" y="80" width="160" height="8" rx="4"></rect>
                <rect x="0" y="100" width="100" height="8" rx="4"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-8)"></rect>
    </svg>
</div>
`;const y={title:"Components/Skeleton",parameters:{description:`Placeholder loading is a type of busy indicator that provides the user with a skeleton page as a placeholder while the content is still loading. The aim is to inform the user of the ongoing loading progress.
    \r
A skeleton page shows the frame of the final content without the content being fully loaded. Visually, skeleton pages are grey boxes with animations to indicate loading activity.
    \r
Skeleton pages are used to create an impression of speed and reliability when an app encounters performance barriers. They provide a generic preview of the layout, which makes the app seem to load faster. This improves the overall user experience.
    \r
The Placeholder Skeleton is made up of Placeholder Shapes that aim to give an idea of how the actual content will look like. The placeholders can take various forms, depending on the type of content that is being loaded.`,tags:["f3"]}},e=()=>g;e.storyName="Rectangle";e.parameters={docs:{description:{story:"An example of a rectangular placeholder"}}};const t=()=>u;t.parameters={docs:{description:{story:"An example of a circular placeholder"}}};const s=()=>x;s.parameters={docs:{description:{story:"Examples of lines placeholders (3 and 2 lines)"}}};const n=()=>_;n.parameters={docs:{description:{story:"The library allows setting customly build examples like this one"}}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"() => skeletonExampleHtml",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"() => circleExampleHtml",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"() => linesExampleHtml",...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,m,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"() => complexExampleHtml",...(k=(m=n.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const v=["Skeleton","Circle","Lines","ComplexExamples"];export{t as Circle,n as ComplexExamples,s as Lines,e as Skeleton,v as __namedExportsOrder,y as default};
//# sourceMappingURL=skeleton.stories-22ca2330.js.map
