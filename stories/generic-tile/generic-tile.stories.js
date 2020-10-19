export default {
    title: 'Components/Tile/Generic',
    parameters: {
        description: `
Generic Tiles can be used to represent an app similar to the SAP Fiori launchpad home page. They can display different
types of content, which are based on the data supplied by the app. They can contain an icon, a title, an informative
text, KPIs, counters and charts.
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
The large (default) tiles are designed for screens larger than 374px. For smaller screens use the small tiles \`fd-tile--s\`.
-   Large Tile - 11 x 11rem
-   Small Tile - 9.25 x 9.25rem
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
