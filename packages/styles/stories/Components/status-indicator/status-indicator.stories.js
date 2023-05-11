import statusIndicatorAngularFillingExampleHtml from "./status-indicator-angular-filling.example.html?raw";
import statusIndicatorRadialFillingExampleHtml from "./status-indicator-radial-filling.example.html?raw";
import statusIndicatorCoreoGraphyExampleHtml from "./status-indicator-coreo-graphy.example.html?raw";
import statusIndicatorLinearFillingExampleHtml from "./status-indicator-linear-filling.example.html?raw";
import statusIndicatorLabelsExampleHtml from "./status-indicator-labels.example.html?raw";
import fillValuesExampleHtml from "./fill-values.example.html?raw";
import sizesExampleHtml from "./sizes.example.html?raw";
import '../../../src/status-indicator.scss';
import '../../../src/form-label.scss';
export default {
  title: 'Components/Status Indicator',
  parameters: {
    description: `
The status indicator displays a SVG images that indicate a pictorial representation of an object.
It allows users to fill the content on a numeric scale, typically from 1 (lowest) to 100 (highest) as percentage.

##Usage
Use the status indicator in Grids, tables, or in a dialog box.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: `
| **Size**       | **rem**    | **Modifier class**        |
| :----------    | :--------- | -----------------------:  |
| Small          | 0.75rem    | \`--sm\`         |
| Medium/Default | 0.875rem   | \`--md\`         |
| Large          | 1.125rem   | \`--lg\`         |
| Extra Large    | 1.875rem   | \`--xl\`         |
`
    }
  }
};
export const FillValues = () => fillValuesExampleHtml;
FillValues.storyName = 'Fill values';
FillValues.parameters = {
  docs: {
    description: {
      story: `
To display fill values with the status indicator i.e 'critical,negative,positive', add the \`fd-status-indicator--negative\`
modifier class together with the \`fd-status-indicator\` class.
`
    }
  }
};
export const StatusIndicatorLabels = () => statusIndicatorLabelsExampleHtml;
StatusIndicatorLabels.storyName = 'Status Indicator With Label';
StatusIndicatorLabels.parameters = {
  docs: {
    description: {
      story: `
To display label values with the Status indicator i.e label and indicator image, add the \`fd-status-indicator--lg__text \` and \`fd-status-indicator--positive__text \`
modifier class for defining the font size and colour of the Label together with the \`fd-status-indicator--htext\` for horizontal positioning of the label.
`
    }
  }
};
export const StatusIndicatorLinearFilling = () => statusIndicatorLinearFillingExampleHtml;
StatusIndicatorLinearFilling.storyName = 'Status Indicator With Linear filling';
StatusIndicatorLinearFilling.parameters = {
  docs: {
    description: {
      story: `
To display Linear filling from left to right instead default bottom to top approach type of the status indicator Object, The object can be filled based on changing the value of  \`<linearGradient>\` property  \`x1,Y1,x2,y2\`. Filling can be done either clockwise or counterclockwise.
`
    }
  }
};
export const StatusIndicatorCoreoGraphy = () => statusIndicatorCoreoGraphyExampleHtml;
StatusIndicatorCoreoGraphy.storyName = 'Status Indicator With Coreographed filling';
StatusIndicatorCoreoGraphy.parameters = {
  docs: {
    description: {
      story: `
		Example to demonstrate the order dispatch from the manufacturing unit
		`
    }
  }
};
export const StatusIndicatorRadialFilling = () => statusIndicatorRadialFillingExampleHtml;
StatusIndicatorRadialFilling.storyName = 'Status Indicator With Radial filling';
StatusIndicatorRadialFilling.parameters = {
  docs: {
    description: {
      story: `
To display Radial filling instead of default bottom to top approach type of status indicator Object, The object can be filled based on changing the value of  \`<radialGradient>\` property  \`cx,cy,r,fx,fy\`. Filling can be done either clockwise or counterclockwise.
`
    }
  }
};
export const StatusIndicatorAngularFilling = () => statusIndicatorAngularFillingExampleHtml;
StatusIndicatorAngularFilling.storyName = 'Status Indicator With Angular filling';
StatusIndicatorAngularFilling.parameters = {
  docs: {
    description: {
      story: `
To display Angular filling instead of default bottom to top approach type of status indicator Object, The object can be filled based on changing the value of  \`<linearGradient>\` property  \`x1,Y1,x2,y2\`. Filling can be done either clockwise or counterclockwise.
`
    }
  }
};