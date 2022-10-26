import 'fn/src/fn-info-label.scss';

export default {
  title: 'Info Label',
  parameters: {
    description: `
**Modifier classes for Info Label style:**

| Color                             | Modifier class              |
| :-------------------------------- | --------------------------- |
| mango &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-info-label--mango\`    |
| red &nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-info-label--red\`      |
| raspberry &nbsp;&nbsp;&nbsp;&nbsp;| \`fn-info-label--raspberry\`|
| pink &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--pink\`     |
| indigo &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-info-label--indigo\`   |
| blue &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--blue\`     |
| teal &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--teal\`     |
| green &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-info-label--green\`    |
| cyan &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--cyan\`     |
| grey &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--grey\`     |
| display &nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-info-label--display\`  |
<br><br><br>
`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }
</style>
`;
export const InfoLabel = () => `${localStyles}
    <div class="docs-fn-container">
        <span class="fn-info-label fn-info-label--mango">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Mango</span>
        </span>
        <span class="fn-info-label fn-info-label--red">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Red</span>
        </span>
        <span class="fn-info-label fn-info-label--raspberry">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Raspberry</span>
        </span>
        <span class="fn-info-label fn-info-label--pink">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Pink</span>
        </span>
        <span class="fn-info-label fn-info-label--indigo">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Indigo</span>
        </span>
        <span class="fn-info-label fn-info-label--blue">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Blue</span>
        </span>
        <span class="fn-info-label fn-info-label--teal">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Teal</span>
        </span>
        <span class="fn-info-label fn-info-label--green">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Green</span>
        </span>
        <span class="fn-info-label fn-info-label--cyan">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Cyan</span>
        </span>
        <span class="fn-info-label fn-info-label--grey">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Grey</span>
        </span>
        <span class="fn-info-label fn-info-label--display">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">Display</span>
        </span>
    </div>
`;
InfoLabel.parameters = {
  docs: {
    iframeHeight: 500
  }
};
