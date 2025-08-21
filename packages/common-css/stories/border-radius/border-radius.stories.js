import '../../src/sap-border-radius.scss';
import borderRadiusExampleHtml from './border-radius.example.html?raw'
export default {
  title: 'Border Radius',
  parameters: {
    description: `Provides CSS classes and SCSS mixins for controlling the corner rounding of elements. Classes apply predefined theme-based border-radius values, while the sap-border-radius mixin lets you define custom values for one or multiple corners.

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
        <tr>
            <th style="padding: 0.25rem 0.75rem;">Type</th>
            <th style="padding: 0.25rem 0.75rem;">CSS variable</th>
            <th style="padding: 0.25rem 0.75rem;">Class</th>
            <th style="padding: 0.25rem 0.75rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Element</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapElement_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-element</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(element)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Button</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapButton_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-button</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(button)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Field</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapField_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-field</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(field)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Group</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapGroup_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-group</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(group)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Popover</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapPopover_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-popover</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(popover)</td>
        </tr>
        <tr>
            <td style="padding: 0.25rem 0.75rem;">Tile</td>
            <td style="padding: 0.25rem 0.75rem;">var(--sapTile_BorderCornerRadius)</td>
            <td style="padding: 0.25rem 0.75rem;">.sap-border-radius-tile</td>
            <td style="padding: 0.25rem 0.75rem;">@include sap-border-radius(tile)</td>
        </tr>
    </tbody>
</table>
<br><br>
<b>SCSS mixin: </b><code>@include sap-border-radius($value...)</code><br>
Example: <br>
<code>@include sap-border-radius(1rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem 0.25rem)</code><br>
<code>@include sap-border-radius(1rem 0.5rem 0.25rem 0.25rem)</code><br>
      `
  }
};

export const BorderRadius = () => borderRadiusExampleHtml;
BorderRadius.storyName = 'Border Radius Types';
