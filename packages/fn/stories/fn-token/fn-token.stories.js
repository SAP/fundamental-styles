import 'fn/src/fn-token.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Token',
  parameters: {
    description: `

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
    grid-template-columns: 150px 3fr;
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
export const Token = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <div class="fn-token" tabindex="0">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <div class="fn-token is-hover" tabindex="0">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <div class="fn-token is-focus" tabindex="0">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:selected</b></div>
    <div class="fn-token is-selected" tabindex="0">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:selected :focus</b></div>
    <div class="fn-token is-selected is-focus" tabindex="0">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <div class="fn-token is-disabled">
        <div class="fn-token__text">Token</div>
        <div class="fn-token__icon">
            <span class="sap-icon sap-icon--decline"></span>
        </div>
    </div>
</div>
`;
