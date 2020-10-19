import { makeDecorator } from '@storybook/addons';

export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        let links = [].slice.call(document.getElementsByTagName('link'));
        let toRemove = [];
        links.forEach(item => {
            if (item.attributes['data-theme-id']) {
                toRemove.push(item);
            }
        });
        let cssArr = context?.parameters?.components || [];
        cssArr.indexOf('info-label') === -1 && cssArr.push('info-label');

        const styleLinkTag = (stylePath) => {
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylePath;
            link.setAttribute('data-theme-id', context?.parameters?.theme);
            return link;
        };

        cssArr.forEach(component => {
            let stylePath = `${component}-${context?.parameters?.theme}.css`;
            document.head.appendChild(styleLinkTag(stylePath));
        });

        toRemove.forEach(item => {
            item.parentNode.removeChild(item);
        });
        document.head.appendChild(styleLinkTag(`theming-base-content/content/Base/baseLib/${context?.parameters?.theme}/css_variables.css`));

        return storyFn(context);
    }
});
