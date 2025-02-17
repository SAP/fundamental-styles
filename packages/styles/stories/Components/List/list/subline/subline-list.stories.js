import standardExampleHtml from "./standard.example.html?raw";

import '../../../../../src/avatar.scss';
import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/link.scss';
import '../../../../../src/button.scss';
import '../../../../../src/info-label.scss';

export default {
  title: 'Components/List/Subline'
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Custom List Item with Subline';
Standard.parameters = {
  docs: {
    description: {
      story: `This is structure of the custom list item is being used to display the accounts in USer Menu. 
    `
    }
  }
}