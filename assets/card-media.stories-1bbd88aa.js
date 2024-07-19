var h=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var o=(i,a,d)=>a in i?h(i,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[a]=d,e=(i,a)=>{for(var d in a||(a={}))x.call(a,d)&&o(i,d,a[d]);if(c)for(var d of c(a))k.call(a,d)&&o(i,d,a[d]);return i},n=(i,a)=>y(i,C(a));/* empty css               *//* empty css               *//* empty css              *//* empty css             *//* empty css                      *//* empty css             *//* empty css             */const w=`<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-2m">
            <div class="fd-card__media fd-card__media--with-padding" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-image-container">
                    <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-2m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-3m">
            <div class="fd-card__media" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-image-container">
                    <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
                </div>
            </div>
            <div class="fd-card__header fd-card__header--interactive" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container is-focus" role="button" tabindex="0" aria-description="Activate for action/navigation" aria-label="Activate for action/navigation" title="Activate for action/navigation">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-3m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: fit-content; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-4m">
            <div class="fd-card__media" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-image-container">
                    <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
                </div>
            </div>
            <div class="fd-card__header fd-card__header--interactive" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container is-focus" role="button" tabindex="0" aria-description="Activate for action/navigation" aria-label="Activate for action/navigation" title="Activate for action/navigation">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-4m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,B=`<h3>Title on Media, Shell Category background colors </h3>
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-5m">
            <div class="fd-card__media fd-card__media--bg-shell-1" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-5m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-1m">
            <div class="fd-card__media fd-card__media--bg-shell-2" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="card-title-6a">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-6a" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-1m">
            <div class="fd-card__media fd-card__media--bg-shell-3" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="card-title-7a">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-7a" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3>Title on Media, Legend background colors </h3>
<div style="display:flex; justify-content:space-around; flex-wrap: wrap">
    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-6m">
            <div class="fd-card__media fd-card__media--bg-legend-1" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-6m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-7m">
            <div class="fd-card__media fd-card__media--bg-legend-2" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-7m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 300px; height: 400px; margin: 1rem;">
        <div class="fd-card" role="region" aria-roledescription="Card" aria-labelledby="card-title-8m">
            <div class="fd-card__media fd-card__media--bg-legend-3" role="group" aria-roledescription="Card Media Block">
                <div class="fd-card__media-content-container">
                    <div class="fd-card__media-heading" role="heading" aria-level="2">Incoming Applications</div>
                </div>
            </div>
            <div class="fd-card__header" role="group" aria-roledescription="Card Header">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                            style="background-image: url('/assets/images/backgrounds/city.jpg')"
                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="card-title-8m" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-card__content" role="group" aria-roledescription="Card content"></div>
            <div class="fd-card__footer">
                <div class="fd-card__footer-actions">
                    <button class="fd-button fd-button--positive">
                        Button
                    </button>
                    <button class="fd-button fd-button--negative">
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

`,M=`<div style="width: 100%;">
   <div class="fd-card fd-card--banner" aria-label="Get Ready for the AI Learning Days!">
        <div class="fd-card__media fd-card__media--bg-shell-13" role="group" aria-roledescription="Card Media Block">
            <div class="fd-card__media-content-container">
                <div class="fd-card__media-heading" role="heading" aria-level="2">Get Ready for the AI Learning Days!</div>
                <p class="fd-card__media-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo delectus deleniti excepturi tempora impedit nobis nulla sint qui quae consequuntur reprehenderit, accusamus amet nihil esse quia doloribus praesentium quidem?
                </p>
                <button class="fd-button">
                    <span class="fd-button__text">Register</span>
                </button>
            </div>
        </div>
    </div>
</div>

<br><br>

<div style="width: 100%; height: 300px;">
   <div class="fd-card fd-card--banner" role="region" aria-label="Get Ready for the AI Learning Days!">
        <div class="fd-card__media fd-card__media--bg-legend-13" role="group" aria-roledescription="Card Media Block">
            <div class="fd-card__media-content-container">
                <div class="fd-card__media-heading" role="heading" aria-level="2">Get Ready for the AI Learning Days!</div>
                <p class="fd-card__media-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo delectus deleniti excepturi tempora impedit nobis nulla sint qui quae consequuntur reprehenderit, accusamus amet nihil esse quia doloribus praesentium quidem?
                </p>
                <button class="fd-button fd-button--emphasized">
                    <span class="fd-button__text">Register</span>
                </button>
            </div>
        </div>
    </div>
</div>

<br><br>

<div style="width: 100%; height: 400px;">
   <div class="fd-card fd-card--banner" role="region" aria-label="Get Ready for the AI Learning Days!">
        <div class="fd-card__media">
            <div class="fd-card__media-content-container fd-card__media-content-container--bg-shell-13">
                <div class="fd-card__media-heading" role="heading" aria-level="2">Get Ready for the AI Learning Days!</div>
                <p class="fd-card__media-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo delectus deleniti excepturi tempora impedit nobis nulla sint qui quae consequuntur reprehenderit, accusamus amet nihil esse quia doloribus praesentium quidem?
                </p>
                <button class="fd-button">
                    <span class="fd-button__text">Register</span>
                </button>
            </div>

            <div class="fd-card__media-image-container">
                <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
            </div>
        </div>
    </div>
</div>

<br><br>
<h3>Media as Banner with content overlay</h3>
<div style="width: 100%; height: 400px;">
   <div class="fd-card fd-card--banner" role="region" aria-label="Get Ready for the AI Learning Days!">
        <div class="fd-card__media">
            <div class="fd-card__media-content-container fd-card__media-content-container--overlay">
                <div class="fd-card__media-heading" role="heading" aria-level="2">Get Ready for the AI Learning Days!</div>
                <p class="fd-card__media-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo delectus deleniti excepturi tempora impedit nobis nulla sint qui quae consequuntur reprehenderit, accusamus amet nihil esse quia doloribus praesentium quidem?
                </p>
                <button class="fd-button">
                    <span class="fd-button__text">Register</span>
                </button>
            </div>

            <div class="fd-card__media-image-container">
                <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
            </div>
        </div>
    </div>
</div>

<br><br>
<div style="width: 100%; height: 400px;">
   <div class="fd-card fd-card--banner" role="region" aria-label="Get Ready for the AI Learning Days!">
        <div class="fd-card__media">
            <div class="fd-card__media-content-container fd-card__media-content-container--overlay fd-card__media-content-container--bg-legend-1">
                <p class="fd-card__media-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo delectus deleniti excepturi tempora impedit nobis nulla sint qui quae consequuntur reprehenderit, accusamus amet nihil esse quia doloribus praesentium quidem?
                </p>
                <button class="fd-button fd-button--emphasized" title="Register">
                    <span class="fd-button__text">Register</span>
                </button>
            </div>

            <div class="fd-card__media-image-container">
                <img class="fd-card__media-image" src="/assets/images/landscape/L1.jpg" role="presentation" />
            </div>
        </div>
    </div>
</div>`,S={title:"Components/Card/Media Card",parameters:{description:`The Media Block is optional and can be hidden if is not desired to be shown. The Media Block feature enables cards to spotlight special content for the user. Adding an image or colored background in combination with bold text, the Media Block can also work as stand-alone banner.
`,tags:["development"]}},r=()=>w;r.storyName="Media on Cards";r.parameters={docs:{description:{story:`The Media Block is flexible in height but fixed in width to the card size. The media can only contain an image / graphic OR solid color plus text.
      The Image can fill the media container or can come with a padding of 1rem (results in 16px) top, left and right. Corner radius 0.5rem (results in 8px). For this option add the modifier class <code>.fd-card__media--with-padding</code> to <code>.fd-card__media</code> base class. <br><br>`}}};const t=()=>B;t.storyName="Title on Media";t.parameters={docs:{description:{story:`A title on Media Block is possible if using a solid colored background an NO image! To ensure legibility and ACC standards in the Media Block / Banner, always make sure a sufficient contrast ratio is achieved. 
Solid background colors can be bright <b>Shell Category Colors</b> or the lighter <b>Legend Background Colors</b>.
      
- For <b>Shell Category Colors</b> add the <code>.fd-card__media--bg-shell-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 16. For example: <code>fd-card__media--bg-shell-5</code>
- For <b>Legend Background Colors</b> add the <code>.fd-card__media--bg-legend-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 20. For example: <code>fd-card__media--bg-legend-7</code>`}}};const s=()=>M;s.storyName="Media as Banner";s.parameters={docs:{description:{story:`To highlight certain content in a crisp and highly visual way, the Media Block offers the flexibility to be designed as a stand-alone banner. Use the <code>.fd-card--banner</code> modifier class to achieve this type of Card. <br>
When the Card is used as a banner, the solid background can be applied on the whole media container or on the content container, in cases where it's used together with an image or as an overlay.

To achieve a banner with a solid background with no image use the <code>.fd-card__media--bg-shell-*</code> or <code>.fd-card__media--bg-legend-*</code> modifer with the <code>.fd-card__media</code> base class.

If you want to apply background on the content container when it's used with an image, use the <code>.fd-card__media-content-container--bg-shell-*</code> or <code>.fd-card__media-content-container--bg-legend-*</code> modifer with the <code>.fd-card__media-content-container</code> base class.

The content container can be displayed as an overlay in case of using an image / a graphic behind. Use the modifier class <code>.fd-card__media-content-container--overlay</code> with the <code>.fd-card__media-content-container</code> base class.`}}};var l,v,_;r.parameters=n(e({},r.parameters),{docs:n(e({},(l=r.parameters)==null?void 0:l.docs),{source:e({originalSource:"() => cardMediaExampleHtml"},(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source)})});var f,u,m;t.parameters=n(e({},t.parameters),{docs:n(e({},(f=t.parameters)==null?void 0:f.docs),{source:e({originalSource:"() => cardMediaTitleExampleHtml"},(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source)})});var g,p,b;s.parameters=n(e({},s.parameters),{docs:n(e({},(g=s.parameters)==null?void 0:g.docs),{source:e({originalSource:"() => cardMediaBannerExampleHtml"},(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source)})});const H=["CardMedia","CardMediaTitle","CardMediaBanner"];export{r as CardMedia,s as CardMediaBanner,t as CardMediaTitle,H as __namedExportsOrder,S as default};
