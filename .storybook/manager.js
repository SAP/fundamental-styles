import { addons } from '@storybook/addons';

import fundamentals from './custom/constants/fundamentals';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: fundamentals
});
