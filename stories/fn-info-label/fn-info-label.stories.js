export default {
    title: 'FN Components/Info Label',
    parameters: {
        description: `
**Modifier classes for Info Label style:**

| Color                             | Modifier class        |
| :-------------------------------- | --------------------- |
| indigo &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-info-label--indigo\` |
| crimson &nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-info-label--crimson\`|
| cyan &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--cyan\`   |
| lime  &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-info-label--lime\`   |
| pink &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--pink\`   |
| yellow &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-info-label--yellow\` |
| teal &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--teal\`   |
| grey &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-info-label--grey\`   |
<br><br><br>
`,
        components: ['fn-info-label']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        background: white;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }
</style>
`;

export const InfoLabel = () => `${localStyles}
    <div class="docs-fn-container">
        <span class="fn-info-label fn-info-label--indigo">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--crimson">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--cyan">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--lime">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--pink">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--yellow">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--teal">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
        <span class="fn-info-label fn-info-label--grey">
            <span class="fn-info-label__circle"></span>
            <span class="fn-info-label__text">State</span>
        </span>
    </div>
`;

InfoLabel.parameters = {
    docs: {
        iframeHeight: 500
    }
};
