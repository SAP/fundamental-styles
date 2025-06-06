import overflowExampleHtml from "./overflow.example.html?raw";
import groupTypeInteractionStatesExampleHtml from "./group-type-interaction-states.example.html?raw";
import groupTypeVerticalExampleHtml from "./group-type-vertical.example.html?raw";
import groupTypeExampleHtml from "./group-type.example.html?raw";
import individualTypeVerticalExampleHtml from "./individual-type-vertical.example.html?raw";
import individualTypeExampleHtml from "./individual-type.example.html?raw";
import '../../../src/avatar-group.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/popover.scss';
import '../../../src/bar.scss';
import '../../../src/layout-grid.scss';
import '../../../src/title.scss';
import '../../../src/quick-view.scss';
import '../../../src/title.scss';
import '../../../src/link.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/form-group.scss';
import '../../../src/form-item.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
export default {
  title: 'Components/Avatar Group',
  parameters: {
    description: `The avatar group displays a number of avatars, which act as a digital representation of a user. This control is useful for visualizing a team, project team members, or a group of employees, for example. <br />
        For detailed information check Fiori Design Guidelines for <a target="_blank" href="https://experience.sap.com/internal/fiori-design-web/avatar-group/">Avatar Group</a> component. 

<br />
## Usage

Use the **AvatarGroup** if:

- You want to display a group of avatars (more than two).
- You want to display several avatars which have something in common.

Do not use the **AvatarGroup** if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

<br />
## Sizes and spacings

The spacing between the items depends on the size of the avatars in the group. 

| **Size** | &nbsp;&nbsp; **Group type** | &nbsp;&nbsp; **Individual type** | **Modifier class** |
| :---------: | :----------: | :-----------------------: | :--------------- |
| XS | &nbsp;&nbsp; -0.75rem | &nbsp;&nbsp; 0.0625rem | \`fd-avatar-group--xs\` |
| S | &nbsp;&nbsp; -1.25rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--s\` or \`fd-avatar-group--sm\`|
| M | &nbsp;&nbsp; -1.625rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--m\` or \`fd-avatar-group--md\` |
| L | &nbsp;&nbsp; -2rem | &nbsp;&nbsp; 0.125rem | \`fd-avatar-group--l\` or \`fd-avatar-group--lg\` |
| XL | &nbsp;&nbsp; -2.75rem | &nbsp;&nbsp; 0.25rem | \`fd-avatar-group--xl\` |

<br />
##Types (Interaction Variations)

The **AvatarGroup** control has two group types:

- **Group type**: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
- **Individual type**: The avatars are displayed side-by-side and each avatar has its own click/tap area.

<br />
##Orientation

The **AvatarGroup** is available in two orientations:

- **Horizontal**
- **Vertical**

<br />
##Responsiveness
The avatar group adapts responsively: when there isn't enough space to show all avatars, an overflow button appears, and some avatars move into the overflow popover. A circular overflow button indicates the precise number of avatars that cannot be displayed on the screen. 
By default, an overview of all "overflowed" avatars is shown directly within a popover. Customize the content within the popover to align with the specific requirements of your application.
`,
    docs: {
      story: {
      }
    },
    tags: []
  }
};
export const IndividualType = () => individualTypeExampleHtml;
IndividualType.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `The Avatar Individual Type component features avatars and an overflow shape, each with its own click area, catering to scenarios where users prioritize detailed information about specific group members. Avatars are displayed adjacent to each other without overlap, making it ideal for smaller groups like project teams.<br>
      For Individual type add the \`fd-avatar-group--individual-type\` modifier class to the \`fd-avatar-group\` base class.`
    }
  }
};
export const IndividualTypeVertical = () => individualTypeVerticalExampleHtml;
IndividualTypeVertical.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `For vertical orientation of the Avatar Group add the \`fd-avatar-group--vertical\` modifier class to the \`fd-avatar-group\` base class.`
    }
  }
};
export const GroupType = () => groupTypeExampleHtml;
GroupType.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `The avatar group type is one single click/tap area. This means that the entire control is the click/tap area. <br>For Group type add the \`fd-avatar-group--group-type\` modifier class to the \`fd-avatar-group\` base class.`
    }
  }
};
export const GroupTypeVertical = () => groupTypeVerticalExampleHtml;
GroupTypeVertical.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `For vertical orientation of the Avatar Group add the \`fd-avatar-group--vertical\` modifier class to the \`fd-avatar-group\` base class.`
    }
  }
};
export const GroupTypeInteractionStates = () => groupTypeInteractionStatesExampleHtml;
GroupTypeInteractionStates.parameters = {
  docs: {
    story: {
    },
    description: {
      story: ``
    }
  }
};
export const Overflow = () => overflowExampleHtml;
Overflow.parameters = {
  docs: {
    description: {
      story: `The overflow Avatar inherits the styling of the secondary regular Button control. Applications can also choose to set the background color to a random or specific color from the Avatar. The span element has a \`role="button"\` and \`fd-avatar--overflow\` modifier class. `
    }
  }
};
