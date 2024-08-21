var G=Object.defineProperty,b=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var c=(n,t,s)=>t in n?G(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,e=(n,t)=>{for(var s in t||(t={}))C.call(t,s)&&c(n,s,t[s]);if(d)for(var s of d(t))S.call(t,s)&&c(n,s,t[s]);return n},a=(n,t)=>b(n,E(t));const H=`<div class="fd-skeleton" style="width: 100px; height: 50px;">
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
`,N=`<div class="fd-skeleton" style="width: 50px; height: 50px;">
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
`,T=`<p>3 lines</p>
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
`,A=`<div class="fd-skeleton" style="width: 160px; height: 110px;">
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
`;const L={title:"Components/Skeleton",parameters:{description:`Placeholder loading is a type of busy indicator that provides the user with a skeleton page as a placeholder while the content is still loading. The aim is to inform the user of the ongoing loading progress.
    \r
A skeleton page shows the frame of the final content without the content being fully loaded. Visually, skeleton pages are grey boxes with animations to indicate loading activity.
    \r
Skeleton pages are used to create an impression of speed and reliability when an app encounters performance barriers. They provide a generic preview of the layout, which makes the app seem to load faster. This improves the overall user experience.
    \r
The Placeholder Skeleton is made up of Placeholder Shapes that aim to give an idea of how the actual content will look like. The placeholders can take various forms, depending on the type of content that is being loaded.`,tags:["f3"]}},r=()=>H;r.storyName="Rectangle";r.parameters={docs:{description:{story:"An example of a rectangular placeholder"}}};const o=()=>N;o.parameters={docs:{description:{story:"An example of a circular placeholder"}}};const i=()=>T;i.parameters={docs:{description:{story:"Examples of lines placeholders (3 and 2 lines)"}}};const l=()=>A;l.parameters={docs:{description:{story:"The library allows setting customly build examples like this one"}}};var p,h,f;r.parameters=a(e({},r.parameters),{docs:a(e({},(p=r.parameters)==null?void 0:p.docs),{source:e({originalSource:"() => skeletonExampleHtml"},(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source)})});var m,k,g;o.parameters=a(e({},o.parameters),{docs:a(e({},(m=o.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => circleExampleHtml"},(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source)})});var u,x,_;i.parameters=a(e({},i.parameters),{docs:a(e({},(u=i.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => linesExampleHtml"},(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source)})});var y,v,w;l.parameters=a(e({},l.parameters),{docs:a(e({},(y=l.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => complexExampleHtml"},(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source)})});const O=["Skeleton","Circle","Lines","ComplexExamples"];export{o as Circle,l as ComplexExamples,i as Lines,r as Skeleton,O as __namedExportsOrder,L as default};
