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
            <th style="padding: 0.25rem;">Container Padding Values</th>
            <th style="padding: 0.25rem;">Class</th>
            <th style="padding: 0.25rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapShell\\_Space\\_S);</code><br>
            <code>padding-inline-end: var(--sapShell\\_Space\\_S);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 0.5rem;</code><br>
            <code>padding-inline-end: 0.5rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-home-sm</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(home, sm);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapShell\\_Space\\_M);</code><br>
            <code>padding-inline-end: var(--sapShell\\_Space\\_M);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 2rem;</code><br>
            <code>padding-inline-end: 2rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-home-md</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(home, md);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapShell\\_Space\\_L);</code><br>
            <code>padding-inline-end: var(--sapShell\\_Space\\_L);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 2rem;</code><br>
            <code>padding-inline-end: 2rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-home-lg</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(home, lg);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapShell\\_Space\\_XL);</code><br>
            <code>padding-inline-end: var(--sapShell\\_Space\\_XL);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 3rem;</code><br>
            <code>padding-inline-end: 3rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-home-xl</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(home, xl);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Default</td>
        <td style="padding: 0.25rem;">responsive</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-home</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(home, default);</code> <br> or 
        <code>@include sap-content-paddings(home);</code></td>
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
    <thead>
        <tr>
            <th style="padding: 0.25rem;">Size</th>
            <th style="padding: 0.25rem;">Container Width</th>
            <th style="padding: 0.25rem;">Container Padding</th>
            <th style="padding: 0.25rem;">Container Padding Values</th>
            <th style="padding: 0.25rem;">Class</th>
            <th style="padding: 0.25rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapContent\\_Space\\_S);</code><br>
            <code>padding-inline-end: var(--sapContent\\_Space\\_S);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 1rem;</code><br>
            <code>padding-inline-end: 1rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-container-sm</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(container, sm);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapContent\\_Space\\_M);</code><br>
            <code>padding-inline-end: var(--sapContent\\_Space\\_M);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 2rem;</code><br>
            <code>padding-inline-end: 2rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-container-md</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(container, md);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapContent\\_Space\\_L);</code><br>
            <code>padding-inline-end: var(--sapContent\\_Space\\_L);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 2rem;</code><br>
            <code>padding-inline-end: 2rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-container-lg</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(container, lg);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: var(--sapContent\\_Space\\_XL);</code><br>
            <code>padding-inline-end: var(--sapContent\\_Space\\_XL);</code>
        </td>
        <td style="padding: 0.25rem;">
            <code>padding-inline-start: 3rem;</code><br>
            <code>padding-inline-end: 3rem;</code>
        </td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-container-xl</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(container, xl);</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Default</td>
        <td style="padding: 0.25rem;">responsive</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;"><code>.sap-content-paddings-container</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-content-paddings(container, default);</code> <br> or 
        <code>@include sap-content-paddings(container);</code></td>
    </tr>
    </tbody>
</table>`
        }
    }
};
