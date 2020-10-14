import fundamentals from './custom/fundamentals';
import { withCssResources } from "@storybook/addon-cssresources";
import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsPage from './custom/components/DocsPage';
import { makeDecorator } from '@storybook/addons';

export const parameters = {
  options: {
    showRoots: true,
    theme: fundamentals
  },
  cssresources: [
    {
      id: "normalize",
      code: `<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"></link>`,
      picked: false,
    },
    {
      id: "unnormalize",
      code: `<link rel="stylesheet" type="text/css" href="./unnormalize.css"></link>`,
      picked: false,
    },
    {
      id: "theme-ugly",
      code: `<link rel="stylesheet" type="text/css" href="./theme-ugly.css"></link>`,
      picked: false,
    },
    {
        id: 'windows-hcm-1',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-1.css"></link>',
        picked: false
    },
    {
        id: 'windows-hcm-2',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-2.css"></link>',
        picked: false
    },
    {
        id: 'windows-hcm-black',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-black.css"></link>',
        picked: false
    },
    {
        id: 'windows-hcm-white',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-white.css"></link>',
        picked: false
    },
    {
      id: 'css_variables',
      code: `
            <link rel="stylesheet" type="text/css" href="./theming/sap_fiori_3.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css"></link>
    `,
      picked: false
    }
  ],
  docs: {
      container: DocsContainer,
      page: DocsPage,
      theme: fundamentals
  },
};


export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'sap_fiori_3',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'sap_fiori_3', title: 'Light' },
        { value: 'sap_fiori_3_dark', title: 'Dark' },
        { value: 'sap_fiori_3_light_dark', title: 'Light Dark' },
        { value: 'sap_fiori_3_hcw', title: 'High Contrast White' },
        { value: 'sap_fiori_3_hcb', title: 'High Contrast Dark' },
      ],
    },
  },
};
const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themes',
  wrapper: (storyFn, context, { parameters }) => {
    let links = [].slice.call(document.getElementsByTagName('link'));
    let toRemove = [];
    links.forEach(item => {
        if(item.attributes['data-theme-id']) {
            toRemove.push(item);
        }
    });
    let cssArr = context?.parameters?.components || [];
    cssArr.indexOf('info-label') === -1 && cssArr.push('info-label');

    const styleLinkTag = (stylePath) => {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylePath;
      link.setAttribute('data-theme-id', context?.globals?.theme);
      return link;
    };

    cssArr.forEach(component => {
        let stylePath = `${component}-${context?.globals?.theme}.css`;
        document.head.appendChild(styleLinkTag(stylePath));
    })

    toRemove.forEach(item => {
      item.parentNode.removeChild(item);
    })
    document.head.append(styleLinkTag(`theming-base-content/content/Base/baseLib/${context?.globals?.theme}/css_variables.css`));

    return storyFn(context);
  }
})

export const decorators = [
  withThemeProvider,
  withCssResources,
];
