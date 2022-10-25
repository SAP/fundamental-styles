import '../../../src/toolbar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/popover.scss';
export default {
    title: 'Components/Toolbar',
    parameters: {
        description: `The toolbar enables the user to change the UI or trigger an action. For example, the user can change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. This component is usually paired with buttons, which are always right-aligned.

##Usage
**Toolbar actions can be as follows:**

- They can be independent of the current selection and not related to a specific item or object.
- They can be specific to the current object (user selects one item).
- They can apply to a set of items (user selects two or more items).
- They can control the settings for parts of the UI content. For example, an action can affect all items in a **Table**.

##Sizes
There are two sizes of the toolbar that should be chosen based on the type of device and its screen width.

Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Screen width&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Device
:---- | :-------- | :--------- | :-------
Cozy | \`fd-toolbar--cozy\` | < 599 px | Mobile and small tablets
Compact | Default | 600 px and above | Desktop
<br>

        `,
        tags: ['f3', 'a11y', 'theme', 'design']
    }
};

export const Primary = () => `<div class="fd-toolbar fd-toolbar--cozy">
    <span class="fd-toolbar__spacer"> </span>
    <button class="fd-button fd-button--transparent">New</button>
    <button class="fd-button fd-button--transparent">Open</button>
    <button class="fd-button fd-button--transparent">Edit</button>
    <button class="fd-button fd-button--transparent">Delete</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
`;

Primary.parameters = {
    docs: {
        description: {
            story: `
The primary toolbar displays several actions separated by icon buttons. It is displayed in cozy mode, which is ideal for mobile and small tablet screens.
`
        }
    }
};

export const Overflow = () => `<div style="height:250px">
<h3>Cozy example</h3>
    <div class="fd-toolbar fd-toolbar--cozy">
        <span>Products (34)</span>
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Copy</button>
        <span class="fd-toolbar__separator"></span>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class="fd-button fd-button--transparent"
                aria-controls="wgxzK85912"
                aria-haspopup="true"
                aria-expanded="true"
                id="amr9034qihr"
                onclick="toggleElAttrs('wgxzK85912', ['aria-hidden']);toggleElAttrs('amr9034qihr', ['aria-expanded']);"
                aria-label="More">
                    <i class="sap-icon--overflow"></i>
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                aria-hidden="false"
                id="wgxzK85912">
                <div class="fd-toolbar__overflow">
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Edit</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Delete</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Assign</button>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Exit</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div style="height:300px">
<h3>Compact example</h3>
    <div class="fd-toolbar">
        <span>Products (34)</span>
        <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--compact fd-button--transparent">Save</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Copy</button>
        <span class="fd-toolbar__separator"></span>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button
                class="fd-button fd-button--compact fd-button--transparent"
                aria-controls="mw0daw8d7h"
                aria-haspopup="true"
                aria-expanded="true"
                id="31jr8oaufh"
                onclick="toggleElAttrs('mw0daw8d7h', ['aria-hidden']);toggleElAttrs('31jr8oaufh', ['aria-expanded']);"
                aria-label="More">
                    <i class="sap-icon--overflow"></i>
                </button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                aria-hidden="false"
                id="mw0daw8d7h">
                <div class="fd-toolbar__overflow">
                    <label class="fd-label fd-toolbar__overflow-label">Label</label>
                    <button class="fd-button fd-button--compact fd-button--transparent fd-toolbar__overflow-button">Edit</button>
                    <span class="fd-toolbar__separator"></span>
                    <label class="fd-form-label fd-toolbar__overflow-form-label fd-toolbar__overflow-form-label--text">Form label</label>
                    <button class="fd-button fd-button--compact fd-button--transparent fd-toolbar__overflow-button">Delete</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--compact fd-button--transparent fd-toolbar__overflow-button">Assign</button>
                    <button class="fd-button fd-button--compact fd-button--transparent fd-toolbar__overflow-button">Exit</button>
                    <button class="fd-button fd-button--compact fd-button--transparent fd-button--menu fd-toolbar__overflow-button fd-toolbar__overflow-button--menu">
                        <span class="fd-button__text">Menu Button</span>
                        <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Overflow.parameters = {
    docs: {
        description: {
            story: `The overflow toolbar can display additional elements when space is limited. This can be achieved with a **Button** and/or **Popover** component.

To display an overflow in a button, pass the \`sap-icon--overflow\` in the \`fd-button\` class. Additionally, you can add a popover by passing \`fd-popover\` in the \`fd-toolbar__overflow\` element.
 Add any element inside overflow body with \`fd-toolbar__overflow-button\` , \`fd-toolbar__overflow-button--menu\` \`fd-toolbar__overflow-label \` modifier ,        `
        }
    }
};

export const Types = () => `<div style="padding: 1rem">
    <h3>Solid</h3>
    <div class="fd-toolbar fd-toolbar--solid">
        <span>Products (23)</span>
        <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--compact fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Transparent</h3>
    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
        <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Save</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--compact fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Auto</h3>
    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--auto">
        <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--compact fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Info</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--cozy">3 item selected</div>
    <br>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">3 item selected</div>
    <h3>Title</h3>
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 class="fd-title fd-title--h4 fd-toolbar__title">Products (104)</h4>
        <span class="fd-toolbar__spacer"></span>
        <button class="fd-button fd-button--compact fd-button--transparent">Save</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
    </div>
</div>
`;

export const Separator = () => `
<div class="fd-toolbar fd-toolbar--cozy">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--reject">Reject</button>
    <span class="fd-toolbar__separator"></span>
</div>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--cozy">
    <span class="fd-toolbar__spacer"></span>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
`;

Separator.storyName = 'Separators';
Separator.parameters = {
    docs: {
        description: {
            story: `Separators should be used to visually separate items from each other. To display separators in toolbars, add the \`fd-toolbar__separator\` class after the component you are separating.
`
        }
    }
};

Types.parameters = {
    docs: {
        description: {
            story: `Toolbar can be styled in various ways depending on the use case.

Types | Modifier class | Description
:-------- | :------------- | :---------------
Solid | \`fd-toolbar--solid\` | Displays a solid background color.
Transparent | \`fd-toolbar--transparent\` | Displays a transparent background.
Auto | \` d-toolbar--auto\` | Can inherit the design from the parent component it’s being used with.
Info | \` fd-toolbar--info\` | Commonly used to display information (text or icons) and is slightly smaller than the regular toolbar.
Title | \` fd-toolbar--title\` | Should be used whenever a title is required.
No border-bottom | \`fd-toolbar—clear\` | This is not a type, but it removes the bottom border of each toolbar type.
Active | \` fd-toolbar--active\` | This is also not a type, but it enables active and hover states in each type.

`
        }
    }
};

export const Alignment = () => `<h3>Left and right-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
</div>
<h3>Left-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
</div>
<h3>Centered</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Centered</button>
    <span class="fd-toolbar__spacer"></span>
</div>
<h3>Right-aligned</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right-aligned</button>
</div>
<h3>Left, center, and right-aligned</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Centered</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right-aligned</button>
</div>
<h3>Spacers</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right-aligned</button>
</div>
<h3>Spacers with fixed width</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact fd-button--transparent">Accept</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Reject</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:50px;"></span>
    <button class="fd-button fd-button--compact">Edit</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:150px;"></span>
    <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
</div>
`;

Alignment.parameters = {
    docs: {
        description: {
            story: `Toolbars are typically used for left/right alignment; however, they can be displayed in any way with the \`fd-toolbar__spacer\` class.

**Note:** Spacers share the horizontal space equally; therefore, the content is not centered as precisely as it is in the **Bar** component.
`
        }
    }
};
