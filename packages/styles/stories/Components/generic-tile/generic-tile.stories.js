import tileInActionModeExampleHtml from "./tile-in-action-mode.example.html?raw";
import linkTileExampleHtml from "./link-tile.example.html?raw";
import slideTileExampleHtml from "./slide-tile.example.html?raw";
import badgeTileExampleHtml from "./badge-tile.example.html?raw";
import feedTileExampleHtml from "./feed-tile.example.html?raw";
import kpiTileExampleHtml from "./kpi-tile.example.html?raw";
import launchTileExampleHtml from "./launch-tile.example.html?raw";
import genericTileContentColumnsExampleHtml from "./generic-tile-content-columns.example.html?raw";
import genericTileLayoutExampleHtml from "./generic-tile-layout.example.html?raw";
import genericTileSizesExampleHtml from "./generic-tile-sizes.example.html?raw";
import '../../../src/tile.scss';
import '../../../src/badge.scss';
import '../../../src/button.scss';
import '../../../src/numeric-content.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Generic Tiles',
  parameters: {
    description: `
The generic tile is a container that represents an app on the SAP Fiori launchpad home page. They can display types of content based on the data supplied from the app. In addition, they can contain an icon, information text, a title, KPIs, counters and charts. Tiles move to the next row if there is insufficient horizontal screen space to display them all.

##Guidelines

**Do’s**

- Only use tiles on the launchpad home page. Don’t use them anywhere else.
- In the content area, only show content types described on this page. For example, don’t play videos, animations, or gifs in the tiles.
- If you are not showing a KPI or a chart, try to show an icon instead to help users to distinguish the tiles.
- Use short tile names.

**Don’ts**

- Do not use the status area for error messages.
- Do not use the tile subtitle for explanations. Use the subtitle only if you need a differentiator (such as a specific view on the data).
- Do not use icons on KPI tiles; only use icons on basic launch tiles or monitoring tiles.
- Do not show icons next to a counter when you expect 5 digits or more.
- Do not develop your own icons or use custom icons.

##Modifiers

Generic tiles can display different elements and/or semantic states depending on the type of content being shown.

Modifier class | Description
:-------- | :-------------------
\`fd-numeric-content__scale--text\` | To display text in the numeric content area.
\`fd-tile--feed\` | To display a feed tile.
\`fd-tile--double\` | To double the layout dimensions. See the layout section below for more details.
\`fd-tile--container—list\` | To display a list within a link tile.
\`sap-icon--down\` or \`sap-icon--up\` | To display deviation arrows in the scale factor container area.

**To display different states for numeric content (KPIs):**

States | Modifier class
:-------- | :-------------------
Neutral | (default)
Positive | \`fd-numeric-content__kpi--positive\`
Negative | \`fd-numeric-content__kpi--negative\`
Critical | \`fd-numeric-content__kpi--critical\`
Informative | \`fd-numeric-content__kpi—-informative\`

**To display different states for the scale container (icons/text beside numeric content):**

States | Modifier class
:-------- | :-------------------
Neutral | (default)
Positive | \`fd-numeric-content__scale--positive\`
Negative | \`fd-numeric-content__scale--negative\`
Critical | \`fd-numeric-content__scale--critical\`
Informative | \`fd-numeric-content__scale—-informative\`
<br>
      `,
    tags: []
  }
};
export const GenericTileSizes = () => genericTileSizesExampleHtml;
GenericTileSizes.storyName = 'Sizes';
GenericTileSizes.parameters = {
  docs: {
    description: {
      story: `
Generic tiles can be displayed in two tile dimensions: the default 1x1, and 2x1 (with the addition of a \`fd-tile--double\` modifier class).

**The typical generic tile sizes are:**

- Large tile (1 x 1) - 11 x 11rem
- Large tile (2 x 1) - 22.5 x 11rem
- Small tile (1 x 1) - 9.25 x 9.25rem
- Small tile (2 x 1) - 19 x 9.25rem
        `
    }
  }
};
export const GenericTileLayout = () => genericTileLayoutExampleHtml;
GenericTileLayout.storyName = 'Layout';
GenericTileLayout.parameters = {
  docs: {
    description: {
      story: `
The layout of the generic tile is fixed with designated areas for the header, content area and footer.

**The common elements displayed in generic tiles are:**

| Element | Class | Description |
| :------ | :------------- | :----------- |
| Header (mandatory) | \`fd-tile__header\` | The tile displays a title and an optional subtitle.
| Title (mandatory) | \`fd-tile__title\` | The title can display up to two lines of text before it truncates (or three lines if there is no subtitle).
| Subtitle (optional) | \`fd-tile__subtitle\` | The subtitle can display one line of text before it truncates.
| Content (optional) | \`fd-tile__content\` | Generic tile can display content if necessary.
| Footer (optional) | \`fd-tile__footer\` | The footer can contain a refresh icon \`sap-icon--refresh\` and/or status.

**Note:** In the example below, the background color (and class names) illustrate the placement of elements within tiles.
        `
    }
  }
};
export const GenericTileContentColumns = () => genericTileContentColumnsExampleHtml;
GenericTileContentColumns.storyName = 'Columns';
GenericTileContentColumns.parameters = {
  docs: {
    description: {
      story: `
The header, content and footer of generic tile can be split into two columns with a 0.25rem vertical padding. Use the (\`*--2-col\`) modifier classes to achieve the 2-column design.

- Header \`fd-tile__header fd-tile__header--2-col\`
    - Section \`fd-tile__section\`
    - Section \`fd-tile__section\`
- Content \`fd-tile__content fd-tile__content--2-col\`
    - Section \`fd-tile__section\`
    - Section \`fd-tile__section\`
- Footer \`fd-tile__footer fd-tile__footer--2-col\`
    - Section \`fd-tile__section\`
    - Section \`fd-tile__section\`

**Note:** In the example below, the background color illustrates the column sections for generic tiles.
        `
    }
  }
};
export const LaunchTile = () => launchTileExampleHtml;
LaunchTile.storyName = 'Launch tile';
LaunchTile.parameters = {
  docs: {
    description: {
      story: `As the name suggests, the launch tile is used for when users need to launch an application from the launchpad. It can display several elements, such as a header, subtitle, refresh button, footer, KPIs and images. The header can contain a maximum of 3 lines; all 3 lines can be used for the title or one of the lines can be used for a subtitle. If a fourth line title or an optional subtitle line is required, the \`fd-tile_header-content\` can be added to represent a header, which will merge the content containers into one tile. To display a launch tile, add the \`fd-tile--launch\` modifier class to the main element.

**Note:** Because the examples are displaying numeric content, it is important to note how many characters a tile can support depending on its size. For instance, when a large tile displays numeric content, the text size is 2.25rem (36px). Due to the large text, the tile can only support a maximum of 4 characters.

| Tile size | Maximum...
| :--------: | :---------------
| S | 8 characters can be displayed within numeric content.
| M | 6 characters can be displayed within numeric content.
| L | 4 characters can be displayed within numeric content.
        `
    }
  }
};
export const KpiTile = () => kpiTileExampleHtml;
KpiTile.storyName = 'KPI tile';
KpiTile.parameters = {
  docs: {
    description: {
      story: `
A KPI tile displays key performance indicators that are used to measure and monitor a company’s performance at a strategic and operational level. The tile displays the KPI values as large, easy-to-recognize digits. In addition, you can show deviation arrows, semantic values, and scaling factors. The number of digits is limited by the size of the tiles. To display a KPI tile, add the \`fd-tile--kpi\` modifier class to the main element.

**Note:** The KPI tile supports a limited number of characters, which varies depending on the tile size (see launch tile above for more details).
        `
    }
  }
};
export const FeedTile = () => feedTileExampleHtml;
FeedTile.storyName = 'Feed tile';
FeedTile.parameters = {
  docs: {
    description: {
      story: `The feed tile displays a news feed with a news headline, the source, and a time stamp. It shows new notifications in 10-second intervals, and tile content is updated every five minutes. If there are no new notifications, the most recent notifications are displayed. The feed tile’s headline uses the full width of the container and does not contain an icon. To display a feed tile, add the \`fd-tile--feed\` modifier class to the main element.
        `
    }
  }
};
export const BadgeTile = () => badgeTileExampleHtml;
BadgeTile.storyName = 'Badge tile';
BadgeTile.parameters = {
  docs: {
    description: {
      story: `The badge tile displays very short and important information at the top right corner of the tile. It's recommended to add a badge to a tile when it has been newly added. Badges are not displayed when in action/edit mode.
        `
    }
  }
};
export const SlideTile = () => slideTileExampleHtml;
SlideTile.storyName = 'Slide tile';
SlideTile.parameters = {
  docs: {
    description: {
      story: `
The slide tile displays a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed on desktops by hovering the mouse over the tile. The dots on the bottom of each tile identify the number of pages they contain.
To display a slide tile, add the \`fd-tile--slide\` modifier class to the main element.
        `
    }
  }
};
export const LinkTile = () => linkTileExampleHtml;
LinkTile.storyName = 'Link tile';
LinkTile.parameters = {
  docs: {
    description: {
      story: `The link tile displays links in a separate area below the tiles area and comprise a title and optional subtitle. They can be in list format or they can float above the content. Link tiles can also be viewed in action mode, displaying a close button at the top and an actions button on the bottom. To display a link tile, add the \`fd-tile--line\` modifier class to the main element.

####Sizes
Link tiles are displayed in two modes depending on the screen width.

|  Size &nbsp; | Screen width | Modifier class | Behaviour
| :----- | :----------------- | :------------------ | :----------
| M-XL | >= 450px | Default | Floating: If there is insufficient space, the content wraps into two rows. (This behaviour is not provided by Fundamental Styles and requires JavaScript).
| S | < 450px | \`fd-tile-container--list\` | List: The tile grows vertically and the text wraps into two rows, placing the title in the first row and the subtitle in the second.

The link tile can be displayed in cozy (default) and compact mode. To display link tile in compact mode, add the \`is-compact\` to the main element.

**Note:** The compact mode should only be applied to link tiles and should not be applied to the other types.

####List states

- Regular
- Hover
- Pressed
- Disabled


####Action mode
When in action mode, default (floating) link tiles display the actions and close button immediately after the text. However, when they are in list format, link tiles display the actions and close button along the right side of the container. To display link tile in action mode, add \`fd-tile__action-container\` after the header element. Gradient masking is also supported in edit mode.

        `
    }
  }
};
export const TileInActionMode = () => tileInActionModeExampleHtml;
TileInActionMode.storyName = 'Action mode';
TileInActionMode.parameters = {
  docs: {
    description: {
      story: `
While a tile is in action mode, a close button is displayed on the top right-hand corner of the tile. The action icon is displayed on the bottom right-hand corner, and is only an indicator. The click/touch area fills the entire tile, excluding the area reserved for the close button. To display generic tile in action mode, add the \`fd-tile--action\` modifier class to the main element.
        `
    }
  }
};