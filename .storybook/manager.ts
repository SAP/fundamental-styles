import { addons } from '@storybook/addons';
import fundamentalTheme from '../packages/storybook/src/lib/fundamentals';

addons.setConfig({
  sidebar: {
    showRoots: false
  },
  theme: fundamentalTheme
});

window.addEventListener('load', () => {
  const sidebarViewport = document.querySelector<HTMLDivElement>('.os-viewport');
  if (sidebarViewport) {
    sidebarViewport.style.overflowY = 'scroll';
  }
})
