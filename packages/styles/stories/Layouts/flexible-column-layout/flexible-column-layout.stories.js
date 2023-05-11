import oneColumnsLayoutExampleHtml from "./one-columns-layout.example.html?raw";
import twoColumnsLayoutExampleHtml from "./two-columns-layout.example.html?raw";
import threeColumnsLayoutExampleHtml from "./three-columns-layout.example.html?raw";
import '../../../src/button.scss';
import '../../../src/flexible-column-layout.scss';
import '../../../src/icon.scss';
export default {
  title: 'Layouts/Flexible Column',
  parameters: {
    description: `
The flexible column layout is a layout control that displays multiple floorplans on a single page.
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation.
The flexible column layout offers different layouts with up to three columns.
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- \`fd-flexible-column-layout\`: solid (default)
- \`fd-flexible-column-layout--translucent\`: translucent
- \`fd-flexible-column-layout--transparent\`: transparent
`,
    tags: ['f3', 'theme', 'development']
  }
};
export const ThreeColumnsLayout = () => threeColumnsLayoutExampleHtml;
ThreeColumnsLayout.parameters = {
  docs: {
    description: {
      story: `
- Minimum width of the device: \`1281px\`
- Wide column width: \`50%\`
- Narrow columns width: \`25%\`
`
    }
  }
};
export const TwoColumnsLayout = () => twoColumnsLayoutExampleHtml;
TwoColumnsLayout.parameters = {
  docs: {
    description: {
      story: `
Flexible Column with transparent separators
- Width of the device: Max: \`1280px\`, Min: 961px
- Wide column width: \`67%\`
- Narrow column width: \`33%\`
`
    }
  }
};
export const OneColumnsLayout = () => oneColumnsLayoutExampleHtml;
OneColumnsLayout.parameters = {
  docs: {
    description: {
      story: `
Flexible Column Layout with translucent separators
- Max width of the device: \`960px\`
- Column width: \`100%\`
`
    }
  }
};