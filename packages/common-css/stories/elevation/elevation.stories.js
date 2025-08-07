import '../../src/sap-elevation.scss';
import elevationExampleHtml from './elevation.example.html?raw';

export default {
  title: 'Elevation',
  parameters: {
    description: `The z-index property specifies the stack order of an element. In order for z-index to work the elements need to be positioned: relative (default), absolute, fixed, sticky.
        <br><br>
        <b>CSS Class: </b>
        <code>.sap-elevation-<i style="color: red;">index</i></code><br><br>
        <b>SCSS Mixin: </b>
        <code>@include sap-elevation(<i style="color: red;">index</i>, <i style="color: red;">position</i>);</code><br><br>
        where: <br><br>
        <code style="color: red;">-index</code>: is an integer from 0 to 20 <br><br>
        <code style="color: red;">-position</code>: (optional) is one of the following : relative, absolute, fixed, sticky. If the property is omitted, the default value (relative) is applied.<br>
      `
  }
};

export const Elevation = () => elevationExampleHtml;
Elevation.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
