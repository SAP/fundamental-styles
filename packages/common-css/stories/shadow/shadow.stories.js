import '../../src/sap-shadow.scss';
import shadowExampleHtml from './shadow.example.html?raw';
import shadowExampleDescriptionHtml from './shadow.example-description.html?raw';

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
<code><b>$type</b></code> can be one of the following: <code>level-0 | level-1 | level-2 | level-3 | text | contrast-text | group-title-text | emphasized-text | header | shell | interaction | selected | negative | critical | positive | informative | neutral | none</code>

      `
  }
};
const localStyles = `
<style>
    .demo > div {
        height: 10rem;
        width: 10rem;
        border-radius: 1rem;
        background: #fff;
    }
</style>
`;
export const ShadowExample = () => `${localStyles}${shadowExampleHtml}`;
ShadowExample.storyName = 'Shadow Types';
ShadowExample.parameters = {
  docs: {
    description: {
      story: shadowExampleDescriptionHtml
    }
  }
};
