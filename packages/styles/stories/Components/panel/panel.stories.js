import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/panel.scss';
import '../../../src/segmented-button.scss';
import '../../../src/toolbar.scss';
export default {
    title: 'Components/Panel',
    parameters: {
        description: `
The panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save additional screen space.

##Usage
**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).


**Do not use the panel in:**

- The content area of a **Dynamic Page**.


##Types
There are two types of panels: fixed and expandable.

  `
    }
};

export const Fixed = () => `<div class="fd-panel fd-panel--fixed">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button is-selected" id="jhqDKYrt" aria-pressed="true">Left</button>
              <button class="fd-button">Middle</button>
              <button class="fd-button">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="jhqDKYrt" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`;

Fixed.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        ` }
    }
};

export const Expandable = () => `<div class="fd-panel">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="fghqwe321">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="asdASD123">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button is-selected" id="jhqDKYdf" aria-pressed="true">Left</button>
              <button class="fd-button">Middle</button>
              <button class="fd-button">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="jhqDKYdf" class="fd-panel__content" aria-hidden="true" id="fghqwe321">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>
<div class="fd-panel">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="fghqwe3214213">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="asdASD1234">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="jhqDKYdf" class="fd-panel__content" aria-hidden="false" id="fghqwe3214213">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>
`;

Expandable.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
        ` }
    }
};

export const Compact = () => `<div class="fd-panel fd-panel--compact">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--compact fd-button--transparent fd-panel__button" aria-expanded="false" aria-haspopup="true" aria-controls="Gekf63a" aria-labelledby="asdASD234">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="asdASD234">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button fd-button--compact is-selected"  id="Gekf63D" aria-pressed="true">Left</button>
              <button class="fd-button fd-button--compact">Middle</button>
              <button class="fd-button fd-button--compact">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="Gekf63D" class="fd-panel__content" aria-hidden="true" id="Gekf63a">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
`;

Compact.parameters = {
    docs: {
        iframeHeight: 200,
        description: {
            story: `Panels can be displayed in compact mode, which decreases the padding and button sizes. To display a compact panel, add the \`fd-panel--compact\` modifier class to the main element.
        ` }
    }
};

export const FixedHeightContent = () => `<div class="fd-panel">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="false" aria-haspopup="true" aria-controls="GJL745SV" aria-labelledby="asdASD345">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="asdASD345">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
              <button class="fd-button is-selected" id="GJL745SD" aria-pressed="true">Left</button>
              <button class="fd-button">Middle</button>
              <button class="fd-button">Right</button>
            </div>
        </div>
    </div>
    <div role="region" id="GJL745SV" aria-labelledby="GJL745SD" class="fd-panel__content" aria-hidden="true" style="height: 100px;">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
            Morbi eget diam vehicula, porttitor orci eu, posuere leo. Sed varius orci id ipsum pharetra feugiat.
            Donec libero mi, vestibulum eget massa non, pretium egestas eros. Aenean quis eros ut augue condimentum faucibus.
            Nam tristique, enim eu volutpat cursus, enim neque pulvinar mauris, nec tempor libero lacus vel lacus. Nunc molestie elit in
            aliquam eleifend. Ut consequat convallis erat, porta egestas lectus sagittis et. Mauris fermentum semper lorem, a sollicitudin nisi sollicitudin nec.
            Duis semper pretium elit ac molestie. Morbi condimentum nisl vitae dolor varius convallis. Donec a molestie ex,
            id condimentum velit. Proin dignissim dolor velit, eu malesuada magna porta vel. Aenean quis feugiat libero, sed pretium libero.
            Nunc ex orci, volutpat in tristique et, accumsan sed ante. Maecenas laoreet egestas iaculis. In quis ligula mauris.
        </span>
    </div>
</div>
`;

FixedHeightContent.storyName = 'Fixed height';

FixedHeightContent.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        ` }
    }
};
