import resetExampleHtml from "./reset.example.html?raw";
export default {
  title: 'Component Reset',
  parameters: {
    description: `
      `
  }
};
export const Reset = () => resetExampleHtml;
Reset.storyName = 'Mixin sap-reset';
Reset.parameters = {
  docs: {
    description: {
      story: `The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. `
    }
  }
};