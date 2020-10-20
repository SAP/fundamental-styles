export default {
    title: 'Components/Toolbar',
    parameters: {
        description: 'The toolbar enables the user to change the UI or trigger an action. For example, the toolbar allows the user to change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. It is most commonly used to display buttons, labels, selects and various other input controls.',
        tags: ['f3', 'a11y', 'theme', 'design'],
        components: ['toolbar', 'button', 'icon', 'popover']
    }
};

export const basic = () => `<div class="fd-toolbar fd-toolbar--cozy">
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

export const types = () => `<div style="background-color: #ccc;background-color:var(--sapContent_ImagePlaceholde, #ccc); padding: 1rem">
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
    <div class="fd-toolbar fd-toolbar--info">3 item selected</div>
    <br>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">3 item selected</div>
    <h3>Title</h3>
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 >Producs (104)</h4>
        <span class="fd-toolbar__spacer "></span>
        <button class="fd-button fd-button--compact fd-button--transparent">Save</button>
        <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
    </div>
</div>
`;

types.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription: `A variety of toolbars exist for different use cases (see examples below). The following types are used:

- **Solid** - has a solid background

- **Transparent** - a transparent background which can be achieved by passing \`transparent\`to the \`fd-toolbar\` class.

- **Auto** - this type toolbar can be inserted into other controls and can inherit the design from the parent control by passing \`auto\` to the \`fd-toolbar\` class.

- **Info** - this toolbar is commonly used to show information (text or icons) and is slightly smaller than the regular toolbar in size. It can be achieved by passing \`info\` to the \`fd-toolbar\` class. \`fd-toolbar--active\` class can be added to have active and hover states.

- **Title** - it should be used whenever a title needs to be included. It can be achieved by passing <code>title</code> to the <code>fd-toolbar</code> class.`
    }
};

export const alignment = () => `<h3>Left and Right Aligned Content</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
</div>
<h3>Left Aligned Content</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
</div>
<h3>Centered Content</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Centered Content</button>
    <span class="fd-toolbar__spacer"></span>
</div>
<h3>Right Aligned Content</h3>
<div class="fd-toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right Content</button>
</div>
<h3>Left, Centered, Right Aliged Content</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact">Left Content</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Centered Content</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right Content</button>
</div>
<h3>Spacers share the free horizontal space equally, thus content centering is not as precise as in Bar</h3>
<div class="fd-toolbar">
    <button class="fd-button fd-button--compact">Left Content</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Inside Content</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Inside Content</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact">Right Content</button>
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

alignment.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: 'Toolbars are often used for left/right alignment. This is easily achieved with the spacer.'
    }
};

export const separator = () => `<h3></h3>
<div class="fd-toolbar fd-toolbar--info fd-toolbar--cozy">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--reject">Reject</button>
    <span class="fd-toolbar__separator"></span>
</div>
<h3></h3>
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

separator.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Separators should be used to visually separate items from each other. The class for the separator is \`fd-toolbar__separator\``
    }
};

export const sizes = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--cozy">
    <span>Products (420)</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--positive">Accept</button>
    <button class="fd-button fd-button--reject">Reject</button>
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
`;

sizes.parameters = {
    docs: {
        storyDescription: `
The default size of the toolbar is compact but this can be changed by passing the \`fd-toolbar--cozy\` modifier class.`
    }
};

export const overflow = () => `<div style="height:250px">
    <h3>Cozy example</h3>
    <div class="fd-toolbar fd-toolbar--cozy">
        <span>Products (34)</span>
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Copy</button>
        <span class="fd-toolbar__separator"></span>
        <div class="fd-popover fd-toolbar__overflow">
        <div class="fd-popover__control">
            <button class="fd-button fd-button--transparent"
            aria-controls="wgxzK85912"
            aria-haspopup="true"
            aria-expanded="true"
            aria-label="More">
                <i class="sap-icon--overflow"></i>    
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
            aria-hidden="false"
            id="wgxzK85912">
            <div class="fd-toolbar__overflow__body">
                <button class="fd-button fd-button--transparent">Edit</button>
                <span class="fd-toolbar__separator"></span>
                <button class="fd-button fd-button--transparent">Delete</button>
                <span class="fd-toolbar__separator"></span>
                <button class="fd-button fd-button--transparent">Assign</button>
                <button class="fd-button fd-button--transparent">Exit</button>
            </div>
        </div>
        </div>
    </div>
</div>
<h3>Compact example</h3>
<div class="fd-toolbar">
    <span>Products (34)</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Create</button>
    <span class="fd-toolbar__spacer "> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Save</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Copy</button>
    <span class="fd-toolbar__separator"></span>
    <div class="fd-popover fd-toolbar__overflow">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--compact fd-button--transparent"
        aria-controls="wgxzK859122"
        aria-haspopup="true"
        aria-expanded="true"
        aria-label="More">
            <i class="sap-icon--overflow"></i>    
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
        aria-hidden="false"
        id="wgxzK859122">
        <div class="fd-toolbar__overflow__body">
            <label class="fd-label fd-toolbar__overflow__label">Label</label>
            <button class="fd-button fd-button--compact fd-button--transparent">Edit</button>
            <span class="fd-toolbar__separator"></span>
            <label class="fd-form-label fd-toolbar__overflow__form-label">Form label</label>
            <button class="fd-button fd-button--compact fd-button--transparent">Delete</button>
            <span class="fd-toolbar__separator"></span>
            <button class="fd-button fd-button--compact fd-button--transparent">Assign</button>
            <button class="fd-button fd-button--compact fd-button--transparent">Exit</button>
        </div>
    </div>
    </div>
</div>
`;

overflow.parameters = {
    docs: {
        iframeHeight: 600,
        storyDescription: `
The Overflow toolbar can be used to add additional elements when extra space is required. It can be achieved in a popover by passing \`fd-popover\`, \`fd-toolbar__overflow\` or in a button by passing \`sap-icon--overflow\` in the \`fd-button\` class.`
    }
};
