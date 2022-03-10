import { makeDecorator } from '@storybook/addons';
import { componentsManager } from '../../environment';

const defaultManagersKey = Symbol('Default manager');

const components = componentsManager(defaultManagersKey.toString());

export const withComponentStylesProvider = makeDecorator({
    name: 'withComponentStyles',
    parameterName: 'components',
    skipIfNoParametersOrOptions: true,
    wrapper: (storyFn, context) => {
        const forComponents = context?.parameters?.components || [];
        forComponents.indexOf('info-label') === -1 && forComponents.push('info-label');
        components.use(forComponents);
        return storyFn(context);
    }
});

