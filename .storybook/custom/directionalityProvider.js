import { makeDecorator } from '@storybook/addons';

export const withDirectionality = makeDecorator({
    name: 'directionalityProvider',
    parameterName: 'directionality',
    wrapper: (storyFn, context) => {
        return `<div dir='${context?.globals?.directionality || 'ltr'}'>${storyFn(context)}</div>`;
    }
});

