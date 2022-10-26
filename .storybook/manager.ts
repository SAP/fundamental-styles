import { addons } from '@storybook/addons';

import fundamentals from './custom/constants/fundamentals';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: fundamentals
});

window.addEventListener('load', () => {
  const sidebarViewport = document.querySelector<HTMLDivElement>('.os-viewport');
  if (sidebarViewport) {
    sidebarViewport.style.overflowY = 'scroll';
  }
})
