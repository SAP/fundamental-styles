import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/off-screen.scss';
import '../../../src/text.scss';
export default {
  title: 'Dev/Off Screen',
  parameters: {
    description: `For aria-live to read any change in element, we need to place element but it should not be visible to user.
            At the same time, it can not be made \`visibility: hidden\` or \`display: none\`, as screen reader will not be able to pick this element.
            This component will make sure that element is not visible on screen but it can be read by screen reader.`,
    tags: ['a11y']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `For aria-live to read any change in element, we need to place element but it should not be visible to user.
`
    }
  }
};