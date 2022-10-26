import '../../../../common-css/src/sap-content-paddings.scss';
export default {
    title: 'Helpers/Content Paddings',
    parameters: {
        description: `Content containers (Page, Dynamic Page, Object Page, Tab Container, Icon Tab Bar, Wizard) can hold any types of controls and layouts that are needed to visualize application content. The content areas of these controls should by default use responsive paddings which value is determined by the container width.
      `,
        docs: { iframeHeight: 500 }
    }
};

const localStyles = `
<style>
    div.demo {
        height: 2rem;
        max-width: 100%;
        background: #69ADF8;
    }
    .demo div {
        height: 100%;
        width: 100%;
        background: #E2EEFF;
    }
</style>
`;
export const HomeExample = () => `${localStyles}
<h3>Responsive</h3>
<div class="demo sap-content-paddings-home">
    <div></div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-home-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-home-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-home-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-home-xl">
    <div></div>
</div>
`;
HomeExample.storyName = 'Home (content area)';
HomeExample.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Size</th>
        <th style="padding: 0.25rem;">Container Width</th>
        <th style="padding: 0.25rem;">Container Padding</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">SM</th>
        <th style="padding: 0.25rem;">max-width: 599px</th>
        <th style="padding: 0.25rem;">padding-left: 0.5rem; <br>padding-right: 0.5rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-home-sm</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(home, sm);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">MD</th>
        <th style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-home-md</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(home, md);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">LG</th>
        <th style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-home-lg</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(home, lg);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">XL</th>
        <th style="padding: 0.25rem;">min-width: 1440px</th>
        <th style="padding: 0.25rem;">padding-left: 3rem; <br>padding-right: 3rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-home-xl</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(home, xl);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Default</th>
        <th style="padding: 0.25rem;">responsive</th>
        <th style="padding: 0.25rem;">based on screen size</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-home</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(home, default); <br> or @include sap-content-paddings(home);</th>
    </tr>
</table>`
        }
    }
};

export const ContainerExample = () => `${localStyles}
<h3>Responsive</h3>
<div class="demo sap-content-paddings-container">
    <div></div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-container-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-container-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-container-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-container-xl">
    <div></div>
</div>
`;
ContainerExample.storyName = 'Content containers';
ContainerExample.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Size</th>
        <th style="padding: 0.25rem;">Container Width</th>
        <th style="padding: 0.25rem;">Container Padding</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">SM</th>
        <th style="padding: 0.25rem;">max-width: 599px</th>
        <th style="padding: 0.25rem;">padding-left: 1rem; <br>padding-right: 1rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-sm</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, sm);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">MD</th>
        <th style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-md</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, md);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">LG</th>
        <th style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-lg</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, lg);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">XL</th>
        <th style="padding: 0.25rem;">min-width: 1440px</th>
        <th style="padding: 0.25rem;">padding-left: 3rem; <br>padding-right: 3rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-xl</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, xl);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Default</th>
        <th style="padding: 0.25rem;">responsive</th>
        <th style="padding: 0.25rem;">based on screen size</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, default); <br> or @include sap-content-paddings(container);</th>
    </tr>
</table>`
        }
    }
};
