import anatomyExampleHtml from "./anatomy.example.html?raw";


import '../../../src/icon.scss';
import '../../../src/card.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';
import '../../../src/info-label.scss';

export default {
  title: 'BTP/Featured Card',
  parameters: {
    description: `Featured cards are special types of cards that are used to display new or highlighted content that is of interest to the user. These cards serve the function of providing high-level news or information about a new capability in the product or highlights useful content within the product. The intention of these cards is to show the highlighted and featured information and motivate users to explore those. That’s why they can also be used as banner substitutes. These cards can be used to show new features, functionalities, services, information and are applicable for use in product and web environments.
    <br>
    <b>Note: The featured card is only a concept not a fully developed component.</b>
    <br><br>
    The abstract visual elements and the colorful backgrounds of the cards should use the BTP Reference Colors. The illustrations used in the featured card should not be theme-able so unlike the Illustrations that change colors in every theme, the illustrations used here should always maintain the same colors in all themes. Use hex values in the .svg file as opposed to color variables. 
<br><br><br>
`,
    tags: ['btp','horizon-only']
  }
};


export const Anatomy = () => anatomyExampleHtml;
Anatomy.parameters = {
  docs: {
    story: {
    },
    description: {
      story: ''
    }
  }
};