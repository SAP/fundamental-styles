import { addons } from 'storybook/manager-api';
import fundamentalTheme from '../packages/storybook/src/lib/fundamentals.js';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: fundamentalTheme
});
