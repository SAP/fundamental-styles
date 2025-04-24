import{f as n}from"./IntroductionPage-f4c12c9f.js";import{R as t}from"./IntroductionPageWrapper-56d28a04.js";import{aq as o}from"./chunk-NUUEMKO5-d257fb74.js";/* empty css                   */import"./_commonjsHelpers-725317a4.js";import"./chunk-PRSJUHPQ-3cd6d9a8.js";import"./iframe-1bb49ffc.js";import"./index-350215a2.js";import"./index-356e4a49.js";const s=`# Content density

SAP's Content density modes give you ability to render elements in different sizes. Majority of components in library support content density features.

Design system provides three content density modes:

- *Cozy* \\- displays controls with dimensions large enough to enable fingertip interaction. This factor can be used in touch screen devices
- *Compact* \\- reduces the dimensions of the component, focusing more on the information displayed. This factor can be used in devices operated by a mouse or keyboard.
- *Condensed* \\- reduces the dimensions of the components and the space between letters. This factor can be used on small screens

Most of the Components support \`compact\` mode, they can be rendered with smaller sizes, margins and paddings in order to preserve as much space as possible.
To enable compact mode, use the class \`.is-compact\` on the \`body\`, \`html\` or any other relevant region of your application.

More information about the content density can be found in the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/cozy-compact).

## Usage

To render entire page in compact mode, use the class \`.is-compact\` on the \`body\` element.

\`\`\`html
<body class="is-compact">
<button class="fd-button">Button is compact</button>
</body>
\`\`\`

If you want to render only a section of the page in compact mode, use the class \`.is-compact\` on the relevant element.

\`\`\`html
<body>
<div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
    <a class="fd-card__header" tabindex="0">
        <span
            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
            style="background-image: url('/assets/images/backgrounds/city.jpg')"
            role="img"
            aria-label="John Doe"></span>
        <div class="fd-card__header-text">
            <div class="fd-card__title-area">
                <div class="fd-card__title">Card Title</div>
                <span class="fd-object-status fd-card__counter">Counter</span>
            </div>
            <div class="fd-card__subtitle-area">
                <div class="fd-card__subtitle">Card Subtitle</div>
            </div>
        </div>
    </a>
    <div class="fd-card__content" role="group" aria-label="Card Content"></div>
    <div class="fd-card__footer is-compact">
        <!--Everything in this footer is compact-->
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
</body>
\`\`\`

You can also use the class \`.is-cozy\` when you want to render a section of the page with larger sizes, margins and paddings.

\`\`\`html
<body class="is-compact">
<button class="fd-button">Button is compact</button>
<button class="fd-button is-cozy">Button is cozy</button>
</body>
\`\`\`

Some components also support the \`condensed\` mode, but if the component, under the \`is-codensed\` does not support it, they will fall back to
\`compact\` mode.

\`\`\`html
<body class="is-condensed">
<button class="fd-button">Button is visually compact</button>
<table class="fd-table">
    <!--Table is visually condensed, because it supports condensed mode-->
</table>
</body>
\`\`\`
If any element does not have the content density specifier class on it's own, then it will be inherited from the parent element and if it has one, any of it's children,
on any level of nesting will have the same content density mode, if not specified otherwise.

\`\`\`html
<body class="is-compact">
    <div>
        <div>
            <button class="fd-button">Button is compact</button>
        </div>
        <div class="is-cozy">
            <div>
                <button class="fd-button">Button is cozy</button>
            </div>
            <button class="fd-button is-compact">This will be compact</button>
        </div>
    </div>
</body>
\`\`\`
`,b={title:"Docs / Content Density",component:"",parameters:{docs:{container:o,page:t(s),theme:n},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},e={render:()=>"<div></div>",parameters:{title:"Overview",storyshots:{disable:!0},viewMode:"docs",docsOnly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
  },
  parameters: {
    title: 'Overview',
    storyshots: {
      disable: true
    },
    viewMode: 'docs',
    docsOnly: true
  }
}`,...e.parameters?.docs?.source}}};const f=["Overview"];export{e as Overview,f as __namedExportsOrder,b as default};
