import 'fn/src/fn-textarea.scss';

export default {
  title: 'Textarea',
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
export const Textarea = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal</b></div>
    <div class="fn-textarea">
        <textarea class="fn-textarea__input" id="textarea-1" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
</div>
<div class="docs-fn-container">
    <div><b>:hover</b></div>
    <div class="fn-textarea">
        <textarea class="fn-textarea__input is-hover" id="textarea-2" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:active</b></div>
    <div class="fn-textarea">
        <textarea class="fn-textarea__input is-active" id="textarea-3" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:focus</b></div>
    <div class="fn-textarea">
        <textarea class="fn-textarea__input is-focus" id="textarea-4" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:read-only</b></div>
    <div class="fn-textarea">
        <textarea class="fn-textarea__input is-readonly" readonly id="textarea-5" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
<div class="docs-fn-container">
    <div><b>:disabled</b></div>
    <div class="fn-textarea is-disabled">
        <textarea class="fn-textarea__input" disabled id="textarea-6" placeholder="Write something here"></textarea>
        <div class="fn-textarea__border"></div>
    </div>
</div>
`;
