import primaryExampleHtml from './primary.example.html?raw';
import '../../../src/icon.scss';
import '../../../src/generic-tag.scss';
export default {
  title: 'Components/Generic Tag',
  parameters: {
    description: `The generic tag control displays complementary information related to the current page, such as key performance indicators (KPI) and situations.

| Type/State | Modifier class |
| :--------- | :----------- |
| Neutral/None | default |
| Error | \`.fd-generic-tag--error\` |
| Success | \`.fd-generic-tag--success\` |
| Warning | \`.fd-generic-tag--warning\` |
| Information | \`.fd-generic-tag--information\` |

In cozy mode the Generic Tag has margin top and bottom of 0.5625rem. In compact mode the margin value is 0.1875rem
`
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Types';
Primary.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};
