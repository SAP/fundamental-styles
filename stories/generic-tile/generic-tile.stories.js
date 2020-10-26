export default {
    title: 'Components/Tile/Generic',
    parameters: {
        description: `
The generic tile is a container that represents an app on the SAP Fiori launchpad home page. They can display types of content based on the data supplied from the app. They can additionally contain an icon, information text, a title, KPIs, counters and charts. Tiles move to the next row if there is insufficient horizontal screen space to display them all.

##Guidelines

**Do’s**

- Only use tiles on the launchpad home page. Don’t use them anywhere else.
- In the content area, only show content types described in this guideline. For example, don’t play videos, animations, or gifs in the tiles.
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
-------- | -------------------
\`fd-numeric-content__scale--text\` | To display text in the numeric content area.
\`fd-tile--feed\` | To display a feed tile.
\`fd-tile--double\` | To double the layout dimensions. See the layout section below for more details.
\`fd-tile--container—list\` | To display a list within a line tile.
\`fd-tile--compact\` | Used only with the line tile.
\`sap-icon--down\` or \`sap-icon--up\` | To display deviation arrows in the scale container area.

**To display different states for numeric content (KPIs):**

States | Modifier class
-------- | -------------------
Neutral | (default)
Positive | \`fd-numeric-content__kpi--positive\`
Negative | \`fd-numeric-content__kpi--negative\`
Critical | \`fd-numeric-content__kpi--critical\`
Informative | \`fd-numeric-content__kpi—informative\`

**To display different states for the scale container (icons/text beside numeric content):**

States | Modifier class
-------- | -------------------
Neutral | (default)
Positive | \`fd-numeric-content__scale--positive\`
Negative | \`fd-numeric-content__scale--negative\`
Critical | \`fd-numeric-content__scale--critical\`
Informative | \`fd-numeric-content__scale—informative\`
      `,
        tags: ['f3', 'a11y', 'theme'],
        docs: { iframeHeight: 500 },
        components: ['tile', 'badge', 'generic-tile', 'button', 'numeric-content', 'icon']
    }
};

export const genericTileSizes = () => `<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content">11 x 11rem</div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content">9.25 x 9.25rem</div>
        <div class="fd-tile__footer"></div>
    </div>
</div>`;

genericTileSizes.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Generic tiles can be displayed in two tile dimensions: the default 1x1, and 2x1 by adding the \`fd-tile--double\` modifier class. 

The typical generic tile dimensions include:
        
- Large tile (1 x 1) - 11 x 11rem
- Large tile (2 x 1) - 22.5 x 11rem
- Small tile (1 x 1) - 9.25 x 9.25rem
- Small tile (2 x 1) - 19 x 9.25rem
  
 

The layout of the generic tile is fixed, with designated areas for the header, content area and footer. Below are the elements usually displayed in generic tiles:

Element | Class | Description
:------ | :------------- | :-----------
Header (mandatory) | \`fd-tile__header\` | The tile displays a title and an optional subtitle.
Title (mandatory) | \`fd-tile__title\` | The title can display up to two lines of text before it truncates (or three lines if there is no subtitle).
Subtitle (optional) | \`fd-tile__subtitle\` | The subtitle can display one line of text before it truncates.
Content (optional) | \`fd-tile__content\` | Generic tile can display content if necessary.
Footer (optional) | \`fd-tile__footer\` | The footer can contain a refresh icon \`sap-icon--refresh\` and/or status.
        
        ` }
};

export const genericTileLayout = () => `<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header" style="background-color: #C0E0FA">
            <div class="fd-tile__title">.fd-tile__title</div>
            <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
        </div>
        <div class="fd-tile__content" style="background-color: #C0E0FA">.fd-tile__content</div>
        <div class="fd-tile__footer" style="background-color: #C0E0FA">.fd-tile__footer</div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header" style="background-color: #C0E0FA">
            <div class="fd-tile__title">.fd-tile__title</div>
            <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
        </div>
        <div class="fd-tile__content" style="background-color: #C0E0FA">.fd-tile__content</div>
        <div class="fd-tile__footer" style="background-color: #C0E0FA">.fd-tile__footer</div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header" style="background-color: #C0E0FA">
            <div class="fd-tile__title">.fd-tile__title</div>
            <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
        </div>
        <div class="fd-tile__content" style="background-color: #C0E0FA">.fd-tile__content</div>
        <div class="fd-tile__footer" style="background-color: #C0E0FA">.fd-tile__footer</div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header" style="background-color: #C0E0FA">
            <div class="fd-tile__title">.fd-tile__title</div>
            <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
        </div>
        <div class="fd-tile__content" style="background-color: #C0E0FA">.fd-tile__content</div>
        <div class="fd-tile__footer" style="background-color: #C0E0FA">.fd-tile__footer</div>
    </div>
</div>
            `;
genericTileLayout.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The generic tile control supports two tile dimensions - 1×1 (default) and 2×1 (\`fd-tile--double\`).

-   Large Tile (1 x 1) - 11 x 11rem
-   Large Tile (2 x 1) - 22.5 x 11rem
-   Small Tile (1 x 1) - 9.25 x 9.25rem
-   Small Tile (2 x 1) - 19 x 9.25rem

The layout of the generic tile is fixed, with designated areas for the header, content area, and footer.

-   Header \`fd-tile__header\`: **required**. It contains a title and an (optional) subtitle.
-   Title \`fd-tile__title\`: **required**. Can have up to two lines of text before it is truncated (or three lines if there is no subtitle).
-   Subtitle \`fd-tile__subtitle\`: **optional**. Can have one line of text before it is truncated.
-   Content \`fd-tile__content\`: **optional**.
-   Footer \`fd-tile__footer\`: **optional**. Can contain a refresh icon \`sap-icon--refresh\` and status.
        ` }
};

export const genericTileContentColumns = () => `<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
</div>
`;

genericTileContentColumns.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The tiles header, content and footer can be split into two columns with a 0.25rem vertical padding. Use the (\`*--2-col\`) modifier classes to achieve the 2-col design.

- Header \`fd-tile__header fd-tile__header--2-col\`
    - Section \`fd-tile__section\`
    - Section \`fd-tile__section\`
- Content \`fd-tile__content fd-tile__content--2-col\`
    - Section \`fd-tile__section\`
    -Section \`fd-tile__section\`
- Footer \`fd-tile__footer fd-tile__footer--2-col\`
    - Section \`fd-tile__section\`.
    - Section \`fd-tile__section\`.

The background color is used to illustrate the column sections in the documentation page.
        ` }
};
