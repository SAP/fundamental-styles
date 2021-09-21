export default {
    title: 'Experimental/Tag',
    parameters: {
        description: `
**Modifier classes for tag style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;  | Modifier class     |
| ------------------------------ | ------------------ |
| grey&nbsp;&nbsp;&nbsp;&nbsp;   | \`fd-tag--grey\`   |
| blue&nbsp;&nbsp;&nbsp;&nbsp;   | \`fd-tag--blue\`   |
| teal&nbsp;&nbsp;&nbsp;&nbsp;   | \`fd-tag--teal\`   |
| green&nbsp;&nbsp;&nbsp;&nbsp;  | \`fd-tag--green\`  |
| mango&nbsp;&nbsp;&nbsp;&nbsp;  | \`fd-tag--mango\`  |
| red&nbsp;&nbsp;&nbsp;&nbsp;    | \`fd-tag--red\`    |
| pink&nbsp;&nbsp;&nbsp;&nbsp;   | \`fd-tag--pink\`   |
| indigo&nbsp;&nbsp;&nbsp;&nbsp; | \`fd-tag--indigo\` |

<br><br>
        `,
        components: ['fn-tag']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        column-gap: 0.5rem;
        row-gap: 0.5rem;
        background: white;
        padding: 1.5rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

</style>
`;

export const primary = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>Rest</b></div>
    <div><b>Hover</b></div>
    <div><b>Press</b></div>
    <div><b>Focus</b></div>
    <div><b>Disabled</b></div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--grey" role="button" tabindex="0">Grey</div>
    <div class="fn-tag fn-tag--grey is-hover" role="button" tabindex="0">Grey</div>
    <div class="fn-tag fn-tag--grey is-pressed" role="button" tabindex="0">Grey</div>
    <div class="fn-tag fn-tag--grey is-focus" role="button" tabindex="0">Grey</div>
    <div class="fn-tag fn-tag--grey is-disabled" role="button">Grey</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--blue" role="button" tabindex="0">Blue</div>
    <div class="fn-tag fn-tag--blue is-hover" role="button" tabindex="0">Blue</div>
    <div class="fn-tag fn-tag--blue is-pressed" role="button" tabindex="0">Blue</div>
    <div class="fn-tag fn-tag--blue is-focus" role="button" tabindex="0">Blue</div>
    <div class="fn-tag fn-tag--blue is-disabled" role="button">Blue</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--teal" role="button" tabindex="0">Teal</div>
    <div class="fn-tag fn-tag--teal is-hover" role="button" tabindex="0">Teal</div>
    <div class="fn-tag fn-tag--teal is-pressed" role="button" tabindex="0">Teal</div>
    <div class="fn-tag fn-tag--teal is-focus" role="button" tabindex="0">Teal</div>
    <div class="fn-tag fn-tag--teal is-disabled" role="button">Teal</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--green" role="button" tabindex="0">Green</div>
    <div class="fn-tag fn-tag--green is-hover" role="button" tabindex="0">Green</div>
    <div class="fn-tag fn-tag--green is-pressed" role="button" tabindex="0">Green</div>
    <div class="fn-tag fn-tag--green is-focus" role="button" tabindex="0">Green</div>
    <div class="fn-tag fn-tag--green is-disabled" role="button">Green</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--mango" role="button" tabindex="0">Mango</div>
    <div class="fn-tag fn-tag--mango is-hover" role="button" tabindex="0">Mango</div>
    <div class="fn-tag fn-tag--mango is-pressed" role="button" tabindex="0">Mango</div>
    <div class="fn-tag fn-tag--mango is-focus" role="button" tabindex="0">Mango</div>
    <div class="fn-tag fn-tag--mango is-disabled" role="button">Mango</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--red" role="button" tabindex="0">Red</div>
    <div class="fn-tag fn-tag--red is-hover" role="button" tabindex="0">Red</div>
    <div class="fn-tag fn-tag--red is-pressed" role="button" tabindex="0">Red</div>
    <div class="fn-tag fn-tag--red is-focus" role="button" tabindex="0">Red</div>
    <div class="fn-tag fn-tag--red is-disabled" role="button">Red</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--pink" role="button" tabindex="0">Pink</div>
    <div class="fn-tag fn-tag--pink is-hover" role="button" tabindex="0">Pink</div>
    <div class="fn-tag fn-tag--pink is-pressed" role="button" tabindex="0">Pink</div>
    <div class="fn-tag fn-tag--pink is-focus" role="button" tabindex="0">Pink</div>
    <div class="fn-tag fn-tag--pink is-disabled" role="button">Pink</div>
</div>

<div class="docs-fn-container">
    <div class="fn-tag fn-tag--indigo" role="button" tabindex="0">Indigo</div>
    <div class="fn-tag fn-tag--indigo is-hover" role="button" tabindex="0">Indigo</div>
    <div class="fn-tag fn-tag--indigo is-pressed" role="button" tabindex="0">Indigo</div>
    <div class="fn-tag fn-tag--indigo is-focus" role="button" tabindex="0">Indigo</div>
    <div class="fn-tag fn-tag--indigo is-disabled" role="button">Indigo</div>
</div>
`;

primary.storyName = 'Types';

primary.parameters = {
    docs: {
        iframeHeight: 500
    }
};
