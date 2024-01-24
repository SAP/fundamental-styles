import borderExampleHtml from "./border.example.html?raw";
export default {
    title: 'Border',
    parameters: {
        description: `
      `,
    }
};
export const Border = () => borderExampleHtml;
Border.storyName = 'Mixin sap-border';
Border.parameters = {
  docs: {
    description: {
      story: 'The <code>sap-border</code> helper mixin allows you to specify the width, style, and color of an element\'s border. This is achieved by providing values to the <code>sap-border</code> parameters: <code>$width</code>, <code>$style</code>, <code>$color</code>, and <code>$pos</code>.<br><br> The <code>$pos</code> value can be one of the following: <code>all | top | bottom | left | right | x | y</code>. The default value is <code>all</code>, which will apply borders on all sides. <code>x</code> will set borders on left and right of the element, and <code>y</code> on top and bottom of the element.'
    }
  }
};
