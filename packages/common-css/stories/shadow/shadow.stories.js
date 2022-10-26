import '../../src/sap-shadow.scss';

export default {
    title: 'Shadow',
    parameters: {
        description: `Helper mixins for shadow:
        <ul>
            <li>to set <b>box-shadow: </b><code>@include sap-set-box-shadow($value)</code></li>
            <li>to set <b>text-shadow: </b><code>@include sap-set-text-shadow($value)</code></li>
            <li><b>box-shadow: </b><code>@include sap-shadow($type)</code></li>
        </ul><br>
        <code><b>$value</b></code> can be a css variable or any value specified by the user. For example:
<code>@include sap-set-box-shadow(var(--sapContent_Shadow0))</code><br><br>
<code><b>$type</b></code> can be one of the following: <code>level-0 | level-1 | level-2 | level-3 | text | contrast-text | group-title-text | emphasized-text | header | shell | none</code>

      `,
        docs: { iframeHeight: 500 }
    }
};

const localStyles = `
<style>
    div.demo {
        height: 10rem;
        width: 10rem;
        border-radius: 1rem;
        background: #fff;
    }
</style>
`;
export const ShadowExample = () => `${localStyles}
<h3>Level 0 Shadow</h3>
<div class="demo sap-has-shadow-level-0"></div>
<br>
<h3>Level 1 Shadow</h3>
<div class="demo sap-has-shadow-level-1"></div>
<br>
<h3>Level 2 Shadow</h3>
<div class="demo sap-has-shadow-level-2"></div>
<br>
<h3>Level 3 Shadow</h3>
<div class="demo sap-has-shadow-level-3"></div>
<br>
<h3>Header Shadow</h3>
<div class="demo sap-has-shadow-header"></div>
<br>
<h3>Shell Shadow</h3>
<div class="demo sap-has-shadow-shell"></div>
<br>
<h3>Shadow None</h3>
<div class="demo sap-has-shadow-none"></div>
<br>
<h3 class="sap-has-shadow-text">Text Shadow</h3>
<br>
<h3 class="sap-has-shadow-contrast-text">Contrast Text Shadow</h3>
<br>
<h3 class="sap-has-shadow-group-title-text">Group Title Text Shadow</h3>
<br>
<h3 class="sap-has-shadow-emphasized-text">Emphasized Text Shadow</h3>
`;
ShadowExample.storyName = 'Shadow Types';
ShadowExample.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Level 0</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-level-0</th>
        <th style="padding: 0.25rem;">@include sap-shadow(level-0)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Level 1</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-level-1</th>
        <th style="padding: 0.25rem;">@include sap-shadow(level-1)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Level 2</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-level-3</th>
        <th style="padding: 0.25rem;">@include sap-shadow(level-3)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Level 3</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-level-3</th>
        <th style="padding: 0.25rem;">@include sap-shadow(level-3)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Header</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-header</th>
        <th style="padding: 0.25rem;">@include sap-shadow(header)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Shell</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-shell</th>
        <th style="padding: 0.25rem;">@include sap-shadow(shell)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">None</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-none</th>
        <th style="padding: 0.25rem;">@include sap-shadow(none)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Contrast Text</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-contrast-text</th>
        <th style="padding: 0.25rem;">@include sap-shadow(contrast-text)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Group Title Text</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-group-title-text</th>
        <th style="padding: 0.25rem;">@include sap-shadow(group-title-text)</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Emphasized Text</th>
        <th style="padding: 0.25rem;">.sap-has-shadow-emphasized-text</th>
        <th style="padding: 0.25rem;">@include sap-shadow(emphasized-text)</th>
    </tr>
</table>`
        }
    }
};
