import footerWithDiffrentSizeExampleHtml from "./footer-with-diffrent-size.example.html?raw";
import imageAndIconLinkExampleHtml from "./image-and-icon-link.example.html?raw";
import multiLineLinkExampleHtml from "./multi-line-link.example.html?raw";
import singleLineLinkExampleHtml from "./single-line-link.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/icon.scss';
import '../../../src/form-label.scss';
import '../../../src/link.scss';
import '../../../src/page-footer.scss';
export default {
  title: 'Layouts/Page Footer',
  parameters: {
    description: `The Page Footer displays at the bottom of the page, and includes the links, icons and copy Right string.

##Usage
**Use Page Footer if:**

-	You want to add the page footer of the UI, which defines the bottom of the page.
-	You want to display list of action at the bottom of the screen.

**Do not use Page footer if:**

-	You want to display collection of links for menu listing actions at the bottom of the screen.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \`rtl\` directive to the main element.`,
    tags: ['non-f3', 'a11y', 'theme']
  }
};
export const SingleLineLink = () => singleLineLinkExampleHtml;
SingleLineLink.parameters = {
  docs: {
    description: {
      story: 'The Page Footer contains Image/logo, And list of links in the footer. It is responsive to tablet and mobile screen sizes.'
    }
  }
};
export const MultiLineLink = () => multiLineLinkExampleHtml;
MultiLineLink.parameters = {
  docs: {
    description: {
      story: 'The Page Footer contains Image/logo, And list of links in the footer. To apply multiline link, add the `fd-page-footer__row` modifier class to the container element.'
    }
  }
};
export const ImageAndIconLink = () => imageAndIconLinkExampleHtml;
ImageAndIconLink.parameters = {
  docs: {
    description: {
      story: 'Example of The Page Footer representing multiline link,and adding images in the code to represent the clickable images and multiline is achived by adding the `fd-page-footer__row` modifier class to the container element.'
    }
  }
};
export const FooterWithDiffrentSize = () => footerWithDiffrentSizeExampleHtml;
FooterWithDiffrentSize.parameters = {
  docs: {
    description: {
      story: 'Example of The Page Footer representing multiline lin, add the `--xl` `--lg` `--md` `--sm` size modifier class to the container element.'
    }
  }
};