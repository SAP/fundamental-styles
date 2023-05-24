import primaryExampleHtml from './primary.example.html?raw';
import '../../../src/icon.scss';
import '../../../src/generic-tag.scss';
export default {
  title: 'Components/Generic Tag',
  parameters: {
    description: `The generic tag control displays complementary information related to the current page, such as key performance indicators (KPI) and situations.

Type/State | &nbsp;&nbsp;&nbsp;&nbsp;Modifier class
:--------- |:-----------
Neutral/None | &nbsp;&nbsp;&nbsp;&nbsp;default
Error | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--error\`
Success | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--success\`
Warning | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--warning\`
Information | &nbsp;&nbsp;&nbsp;&nbsp;\`.fd-generic-tag--information\`

In cozy mode the Generic Tag has margin top and bottom of 0.5625rem. In compact mode the margin value is 0.1875rem
`
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Types';
Primary.parameters = {
  docs: {
    iframeHeight: 300,
    description: {
      story: ``
    }
  }
};
