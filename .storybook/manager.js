import { addons } from '@storybook/addons';

import fundamentals from './custom/fundamentals';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: fundamentals
});