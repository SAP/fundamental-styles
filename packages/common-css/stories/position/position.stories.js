import '../../src/sap-position.scss';
import description from './position.story.description.html?raw';
import positionClassesExampleHtml from './position-classes.example.html?raw';
import positionMixinsExampleHtml from './position-mixins.example.html?raw';

export default {
  title: 'Position',
  parameters: {
    description
  }
};
const localStyles = `
<style>
    .sap-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }
    .sap-docs-container div {
        background: #69ADF8;
        min-width: 8rem;
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
    }
</style>
`;
export const PositionClasses = () => `${localStyles}${positionClassesExampleHtml}`;
PositionClasses.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const PositionMixins = () => `${localStyles}${positionMixinsExampleHtml}`;
PositionMixins.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
