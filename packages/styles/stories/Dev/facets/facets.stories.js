import objectPageMobileExampleHtml from "./object-page-mobile.example.html?raw";
import objectPageExampleHtml from "./object-page.example.html?raw";
import imageFacetExampleHtml from "./image-facet.example.html?raw";
import formFacetLinkExampleHtml from "./form-facet-link.example.html?raw";
import formFacetExampleHtml from "./form-facet.example.html?raw";
import keyValueExampleHtml from "./key-value.example.html?raw";
import combinedExampleHtml from "./combined.example.html?raw";
import '../../../src/facet.scss';
import '../../../src/form-label.scss';
import '../../../src/object-status.scss';
import '../../../src/title.scss';
import '../../../src/text.scss';
import '../../../src/object-number.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/rating-indicator.scss';
import '../../../src/avatar.scss';
import '../../../src/link.scss';
import '../../../src/bar.scss';
import '../../../src/breadcrumb.scss';
import '../../../src/tabs.scss';
import '../../../src/popover.scss';
import '../../../src/toolbar.scss';
import '../../../src/margins.scss';
import '../../../src/paddings.scss';
import '../../../src/dynamic-page.scss';
export default {
  title: 'Dev/Facets',
  parameters: {
    description: `Facets can be used as a standalone component or linked to another component. Facets are usually a part of the *Object Page* header content.
        Each facet adapts its size to the content and makes optimal use of the space without truncating the texts. If the facets do not all fit on one line, those on the right wrap to the line below. `
  }
};
export const Combined = () => combinedExampleHtml;
Combined.storyName = 'Combination of facets';
Combined.parameters = {
  docs: {
    description: {
      story: 'Facet types(image, form, and key-value) used together.'
    }
  }
};
export const KeyValue = () => keyValueExampleHtml;
KeyValue.storyName = 'Key-Value Facet';
KeyValue.parameters = {
  docs: {
    description: {
      story: `Key-Value facet is used to highlight important data or KPIs. It consists of a mandatory title
        and a text or number in a larger font size(**Object Status** or **Object Number**). The value can also have an icon to its left.
        `
    }
  }
};
export const FormFacet = () => formFacetExampleHtml;
FormFacet.parameters = {
  docs: {
    description: {
      story: `Form facet is used to display datasets. It consists of an optional title and label-value pair.
        Note that the labels can be icons, but need to have a text for accessibility purposes.
        `
    }
  }
};
export const FormFacetLink = () => formFacetLinkExampleHtml;
FormFacetLink.storyName = 'Form Facet with Link';
FormFacetLink.parameters = {
  docs: {
    description: {
      story: 'Text in a form facet can also hold a link by using the Link component.'
    }
  }
};
export const ImageFacet = () => imageFacetExampleHtml;
ImageFacet.storyName = 'Image/Avatar Facet';
ImageFacet.parameters = {
  docs: {
    description: {
      story: 'Counter added to a tab'
    }
  }
};
export const ObjectPage = () => objectPageExampleHtml;
ObjectPage.storyName = 'Facets in Object Page';
ObjectPage.parameters = {
  docs: {
    description: {
      story: `All facet types used together in the context of a dynamic page. To have the image from the image facet appear next to the title, add the class
        \`fd-facet\` and apply the modifiers \`fd-facet--image\` and \`fd-facet--image-header-title\` to the
        \`fd-dynamic-page__title-container\` class. Note that the dynamic page title and subtitle should be placed in the \`fd-dynamic-page__title-subtitle-container\` class
        for proper alignment with the image.

The final structure of a collapsed header with image next to the title is shown below with changes marked in bold:

- \`fd-dynamic-page__title-area\` The area holding title, KPI content, subtitle, and actions
  - \`fd-dynamic-page__main-container\` Main container that holds Breadcrumb, image, title, title content and actions
    - \`fd-dynamic-page__breadcrumb-title-container\` Container that holds breadcrumb, title, and title content
        - \`fd-dynamic-page__breadcrumb-container\` Breadcrumbs Container, can contain toolbar container
            - \`fd-dynamic-page__breadcrumb\` Breadcrumbs
        - **\`fd-dynamic-page__title-container\` The container for image, title, subtitle and toolbar**
            - **\`fd-facet fd-facet--image fd-facet--image-header-title\` The image facet**
            - **\`fd-facet__title-subtitle-container\` The container for title and subtitle**
                - \`fd-dynamic-page__title\` Dynamic page title
                - **\`fd-dynamic-page__subtitle\` Dynamic page subtitle**
            - \`fd-dynamic-page__title-content\` The KPI content
            - \`fd-dynamic-page__toolbar-container\` Container that holds toolbar-related actions
                - \`fd-dynamic-page__toolbar\` Toolbar container for actions
                - \`fd-dynamic-page__toolbar--actions\` Navigation actions
`
    }
  }
};
export const ObjectPageMobile = () => objectPageMobileExampleHtml;
ObjectPageMobile.storyName = 'Facets in Object Page Mobile';