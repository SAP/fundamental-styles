import semanticSwitchExampleHtml from "./semantic-switch.example.html?raw";
import withTextExampleHtml from "./with-text.example.html?raw";
import basicExampleHtml from "./basic.example.html?raw";
import '../../../src/form-label.scss';
import '../../../src/switch.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Switch',
  parameters: {
    description: `
The switch mimics a physical switch, allowing users to set individual features (such as personalization or display settings) to either active or inactive. What the switch controls should be clarified with an inline label, while the state it’s currently in should be displayed on the switch itself.


##Usage
**Use the switch if:**

-	You want to enable users to set something as active or inactive (for example, within a **Dialog**).
-	You need to clearly show the mode or state of a setting.
-	The change takes immediate effect.


**Do not use the switch if:**

-	The user has to choose several options or perform extra steps for changes to become effective.
-	The setting requires a confirmation action or _Submit_ button before it can take effect. In this case, use a **Checkbox** instead.
-	It’s not clear if the control is showing a state or an action. In this case, use a **Checkbox** instead.

  `
  }
};
export const Basic = () => basicExampleHtml;
Basic.storyName = 'Default';
Basic.parameters = {
  docs: {
    description: {
      story: `The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.
        `
    }
  }
};
export const WithText = () => withTextExampleHtml;
WithText.storyName = 'Optional text';
WithText.parameters = {
  docs: {
    description: {
      story: 'As mentioned in the previous example, a switch should always be accompanied by a label.'
    }
  }
};
export const SemanticSwitch = () => semanticSwitchExampleHtml;
SemanticSwitch.storyName = 'States';
SemanticSwitch.parameters = {
  docs: {
    description: {
      story: `The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the \`fd-switch—semantic\` modifier class to the main element.
        `
    }
  }
};