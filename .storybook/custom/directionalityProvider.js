import { makeDecorator } from '@storybook/addons';

export const withDirectionality = makeDecorator({
    name: 'directionalityProvider',
    parameterName: 'directionality',
    wrapper: (storyFn, context) => {
        const newDirectionality = context?.globals?.directionality;
        changeDirectionality(newDirectionality);
        return storyFn(context);
    }
});

export const changeDirectionality = (newDirectionality) => {
    document
        .querySelectorAll('.sbdocs-preview .docs-story')
        .forEach((item) => item.setAttribute('dir', newDirectionality));
};
