export default {
    title: 'Component Reset',
    parameters: {
        description: `
      `,
        docs: { iframeHeight: 500 }
    }
};

export const Reset = () => `<div>
<pre>
@mixin sap-reset {
  font-family: "72", "72full", Arial, Helvetica, sans-serif;
  font-size: var(--sapFontSize);
  line-height: normal;
  color: var(--sapTextColor);
  font-weight: normal;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  text-indent: 0;
  list-style-type: none;
  
  &::before,
  &::after {
    box-sizing: inherit;
    font-size: inherit;
  }
}
</pre>


</div>`;
Reset.storyName = 'Mixin sap-reset';
Reset.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. `
        }
    }
};

