import fakeFioriFocusWithinExampleHtml from "./fake-fiori-focus-within.example.html?raw";
import fakeFioriFocusExampleHtml from "./fake-fiori-focus.example.html?raw";
import fioriFocusWithinExampleHtml from "./fiori-focus-within.example.html?raw";
import fioriFocusExampleHtml from "./fiori-focus.example.html?raw";
export default {
  title: 'Focus Visual',
  parameters: {
    description: `Focus Visual is the visual representation of the focus state. When focus visual is shown it is always visible regardless of the other states the control is in (normal, hover, pressed, active, selected, etc). The Focus Visual Element is available in all themes with colors that work on light and dark backgrounds. The usage of focus or contrast focus colors is determined by each control individually and might be different for the light and dark versions of the controls.
      `
  }
};
export const FioriFocus = () => fioriFocusExampleHtml;
FioriFocus.storyName = 'Mixin sap-fiori-focus';
FioriFocus.parameters = {
  docs: {
    description: {
      story: '<code>sap-fiori-focus</code> has 2 optional parameters: <code>$offset</code> and <code>$alternative</code>. By default, the <code>$offset</code> is set to -0.1875rem, and <code>$alternative</code> to false. If <code>$alternative</code> is set to true, the outline color is <code>--sapContent_ContrastFocusColor</code>, instead of <code>--sapContent_FocusColor</code>.'
    }
  }
};
export const FioriFocusWithin = () => fioriFocusWithinExampleHtml;
FioriFocusWithin.storyName = 'Mixin sap-fiori-focus-within';
FioriFocusWithin.parameters = {
  docs: {
    description: {
      story: 'The focus-within applies styling rules to a parent element when any child element receives focus. Use the <code>sap-fiori-focus-within</code> mixin in such cases. The parameters are the same as in <code>sap-fiori-focus</code>'
    }
  }
};
export const FakeFioriFocus = () => fakeFioriFocusExampleHtml;
FakeFioriFocus.storyName = 'Mixin sap-fake-fiori-focus';
FakeFioriFocus.parameters = {
  docs: {
    description: {
      story: `Most modern browsers do not support outline radius. An alternative apporach, using <code>sap-fake-fiori-focus</code> mixin, can be applied to solve this problem. The parameters this mixin accepts are: $offset, $radius and $alternative.`
    }
  }
};
export const FakeFioriFocusWithin = () => fakeFioriFocusWithinExampleHtml;
FakeFioriFocusWithin.storyName = 'Mixin sap-fake-fiori-focus-within';
FakeFioriFocusWithin.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};