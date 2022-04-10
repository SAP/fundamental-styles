import { makeDecorator } from '@storybook/addons';
import { componentsManager } from '../../environment';

const defaultManagersKey = Symbol('Default manager');

const components = {
    [defaultManagersKey.toString()]: componentsManager(defaultManagersKey.toString())
};

function getComponentsManager(managerKey) {
    if (!components[managerKey]) {
        components[managerKey] = componentsManager(managerKey);
    }

    return components[managerKey];
}

export const withComponentStylesProvider = makeDecorator({
    name: 'withComponentStyles',
    parameterName: 'components',
    skipIfNoParametersOrOptions: true,
    wrapper: (storyFn, context) => {
        const forComponents = context?.parameters?.components || [];
        forComponents.indexOf('info-label') === -1 && forComponents.push('info-label');
        getComponentsManager(context.id).use(forComponents);
        return storyFn(context);
    }
});

