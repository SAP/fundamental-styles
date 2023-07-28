import displayModeInfoLabelExampleHtml from "./display-only-info-label.example.html?raw";
import infoLabelWithIconExampleHtml from "./info-label-with-icon.example.html?raw";
import colorFlavorsExampleHtml from "./color-flavors.example.html?raw";
import '../../../src/info-label.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Info Label',
  parameters: {
    description: `
Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object.
Use the Info Label base class with following modifiers:

| **Accent** | **Modifier class** |
| :--------- | :---------------: |
| Accent 1 - Mango | \`fd-info-label--accent-color-1\`|
| Accent 2 - Red | \`fd-info-label--accent-color-2\`|
| Accent 3 - Raspberry | \`fd-info-label--accent-color-3\`|
| Accent 4 - Pink | \`fd-info-label--accent-color-4\`|
| Accent 5 - Indigo | \`fd-info-label--accent-color-5\`|
| Accent 6 - Blue | \`fd-info-label--accent-color-6\`|
| Accent 7 - Teal (Default) | \`fd-info-label--accent-color-7\`|
| Accent 8 - Green | \`fd-info-label--accent-color-8\`|
| Accent 9 - Cyan | \`fd-info-label--accent-color-9\`|
| Accent 10 - Grey | \`fd-info-label--accent-color-10\`|

<br><br>
For <code>Display</code> mode add the <code>fd-info-label--display</code> modifier class.
      `,
    tags: ['btp']
  }
};
export const ColorFlavors = () => colorFlavorsExampleHtml;

export const InfoLabelWithIcon = () => infoLabelWithIconExampleHtml;

export const DisplayModeInfoLabel = () => displayModeInfoLabelExampleHtml;
