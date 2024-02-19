import '../../src/sap-content-paddings.scss';
import '../../src/sap-container-type.scss';
import homeExampleHtml from './home.example.html?raw';
import containerExampleHtml from './container.example.html?raw';

export default {
    title: 'Content Paddings',
    parameters: {
        description: `Content containers (Page, Dynamic Page, Object Page, Tab Container, Icon Tab Bar, Wizard) can hold any types of controls and layouts that are needed to visualize application content. The content areas of these controls should by default use responsive paddings which value is determined by the container width.
      `,
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
export const HomeExample = () => `
${localStyles}
${homeExampleHtml}
`;
HomeExample.storyName = 'Home (content area)';
HomeExample.parameters = {
    docs: {
        description: {
            story: `
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
        <tr>
            <th style="padding: 0.25rem;">Size</th>
            <th style="padding: 0.25rem;">Container Width</th>
            <th style="padding: 0.25rem;">Container Padding</th>
            <th style="padding: 0.25rem;">Class</th>
            <th style="padding: 0.25rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
        <td style="padding: 0.25rem;">padding-left: 0.5rem; <br>padding-right: 0.5rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-sm</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, sm);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</td>
        <td style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-md</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, md);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</td>
        <td style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-lg</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, lg);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
        <td style="padding: 0.25rem;">padding-left: 3rem; <br>padding-right: 3rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-xl</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, xl);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Default</td>
        <td style="padding: 0.25rem;">responsive</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, default); <br> or @include sap-content-paddings(home);</td>
    </tr>
    </tbody>
</table>`
        }
    }
};

export const ContainerExample = () => `
${localStyles}
${containerExampleHtml}
`;
ContainerExample.storyName = 'Content containers';
ContainerExample.parameters = {
    docs: {
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
