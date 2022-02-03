import addons from '@storybook/addons';
import coreEvents from '@storybook/core-events';
import { useEffect, useState } from 'react';

export const useTheme = (context) => {
    const channel = addons.getChannel();
    const [theme, setTheme] = useState();

    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { theme: newTheme } });
    }, [theme]);

    return [theme, setTheme];
}
