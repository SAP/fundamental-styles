import 'fn/src/fn-link.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Link',
  parameters: {
    description: `
Link has 2 options: regular and emphasized

**Modifier classes for link style:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;     | Modifier class           |
| --------------------------------- | ------------------------ |
| default &nbsp;&nbsp;&nbsp;&nbsp;        | \`none\`                  |
| emphasized &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-link--emphasized\` |

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
    row-gap: 0.1rem;
    padding: 1rem;
    justify-items: center;
    align-items: center;
}

.docs-fn-header-container {
    display: flex;
    align-items: center;
}

.docs-fn-header-container code {
    margin: 0 1rem;
}
</style>
`;
export const Primary = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>Emphasized </b></div>
    <div><b>Default</b></div>
</div>

<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link fn-link--emphasized">Ñagçyfox</a>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link">Ñagçyfox</a>
</div>

<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link fn-link--emphasized is-hover">Ñagçyfox</a>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link is-hover">Ñagçyfox</a>
</div>

<div class="docs-fn-container">
    <div><b>:active</b></div>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link fn-link--emphasized is-active">Ñagçyfox</a>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link is-active">Ñagçyfox</a>
</div>

<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link fn-link--emphasized is-focus">Ñagçyfox</a>
    <a href="https://sap.github.io/fundamental-styles" class="fn-link is-focus">Ñagçyfox</a>
</div>

<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <a role="link" href="https://sap.github.io/fundamental-styles" class="fn-link fn-link--emphasized" aria-disabled="true">Ñagçyfox</a>
    <a role="link" href="https://sap.github.io/fundamental-styles" class="fn-link" aria-disabled="true">Ñagçyfox</a>
</div>

`;
Primary.storyName = 'Links';
Primary.parameters = {
  docs: {
    description: {
      story: 'Link states'
    }
  }
};
