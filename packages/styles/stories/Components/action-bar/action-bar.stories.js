import mobileExampleHtml from "./mobile.example.html?raw";
import responsiveXLExampleHtml from "./responsive-xl.example.html?raw";
import responsiveLExampleHtml from "./responsive-l.example.html?raw";
import actionsExampleHtml from "./actions.example.html?raw";
import longTitleDescriptionExampleHtml from "./long-title-description.example.html?raw";
import backBtnNoDescriptionExampleHtml from "./back-btn-no-description.example.html?raw";
import noBackBtnExampleHtml from "./no-back-btn.example.html?raw";
import backBtnExampleHtml from "./back-btn.example.html?raw";
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/action-bar.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
export default {
  title: 'Components/Action Bar',
  parameters: {
    description: `The action bar displays at the top of the page, and includes the page’s title, description, back button and action buttons.

##Usage
**Use action bar if:**

-	You want to control the settings of the UI, which affects all items.
-	You want to display actions at the top of the screen.

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.

**Do not use action bar if:**

-	You want to display finalizing actions at the bottom of the screen. Instead, use the **Bar** component and choose a footer.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \`rtl\` directive to the main element.`,
    tags: ['non-f3', 'a11y', 'theme']
  }
};
export const BackBtn = () => backBtnExampleHtml;
BackBtn.storyName = 'Default';
BackBtn.parameters = {
  docs: {
    description: {
      story: 'The default action bar displays a page title, description, back button and action buttons. To display a back button, add the `fd-action-bar__description--back` modifier class to the description element.'
    }
  }
};
export const NoBackBtn = () => noBackBtnExampleHtml;
NoBackBtn.storyName = 'No back button';
NoBackBtn.parameters = {
  docs: {
    description: {
      story: 'This action bar doesn’t display a back button.'
    }
  }
};
export const BackBtnNoDescription = () => backBtnNoDescriptionExampleHtml;
BackBtnNoDescription.storyName = 'No description';
BackBtnNoDescription.parameters = {
  docs: {
    description: {
      story: 'This action bar doesn’t display a description.'
    }
  }
};
export const LongTitleDescription = () => longTitleDescriptionExampleHtml;
LongTitleDescription.storyName = 'Descriptive';
LongTitleDescription.parameters = {
  docs: {
    description: {
      story: 'The descriptive action bar displays a long page title and description.'
    }
  }
};
export const Actions = () => actionsExampleHtml;
Actions.storyName = 'Contextual';
Actions.parameters = {
  docs: {
    description: {
      story: 'The contextual action bar displays a page title and contextual menu with several main actions. To display a contextual menu, add the `fd-popover` class to the`fd-action-bar__actions` element.'
    }
  }
};
export const ResponsiveL = () => responsiveLExampleHtml;
ResponsiveL.storyName = 'Responsive (M-L)';
ResponsiveL.parameters = {
  docs: {
    description: {
      story: 'This action bar is responsive and fits the M and L sizes required for tablet and small desktop screens. To display this size, add the `fd-action-bar--m\\_l` modifier class to the main element.'
    }
  }
};
export const ResponsiveXL = () => responsiveXLExampleHtml;
ResponsiveXL.storyName = 'Responsive (XL)';
ResponsiveXL.parameters = {
  docs: {
    description: {
      story: 'This action bar is responsive and fits the XL size required for larger screens of 1440px or more. To display this size, add the `fd-action-bar--xl` modifier class to the main element.'
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: 'This action bar is mobile responsive. To display the mobile action bar, add the `fd-action-bar--s` modifier class to the main element.'
    }
  }
};