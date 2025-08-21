import '../../src/sap-shadow.scss';
import shadowExampleHtml from './shadow.example.html?raw';
import shadowExampleDescriptionHtml from './shadow.example-description.html?raw';

export default {
  title: 'Shadow',
  parameters: {
    description: shadowExampleDescriptionHtml
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
