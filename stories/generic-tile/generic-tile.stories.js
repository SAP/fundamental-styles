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
\`sap-icon--down\` or \`sap-icon--up\` | To display deviation arrows in the scale factor container area.

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

genericTileSizes.storyName = 'Sizes';

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

genericTileLayout.storyName = 'Layout';

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

genericTileContentColumns.storyName = 'Columns';

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

export const launchTile = () => `<h4>Launch Tile With Numeric Content and Launch Icon</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile With Combined Header and Content</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile (Profile)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/ImageContent/images/ProfileImage_LargeGenTile.png')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/ImageContent/images/ProfileImage_LargeGenTile.png')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
</div>
</div>
<br>
<br>
<h4>Launch Tile (Logo)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>`;

launchTile.storyName = 'Launch tile';

launchTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `As the name suggests, the launch tile is used for when users need to launch an application from the launchpad. It can display several elements, such as a header, subtitle, refresh button, footer, KPIs and images. The header can contain a maximum of 3 lines; all 3 lines can be used for the title or one of the lines can be used for a subtitle. If a fourth line title or an optional subtitle line is required, the \`fd-tile_header-content\` can be added to represent a header, which will merge the content containers into one tile. To display a launch tile, add the \`fd-tile--launch\` modifier class to the main element.
        ` }
};

export const kpiTile = () => `<h4>KPI Tile with L-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>
<br>
<br>
<h4>KPI Tile with M-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text eiusmod tempor incididunt ut labore </div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title Text eiusmod tempor incididunt</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--up"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>KPI Tile with S-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">CAD, Current Quarter</span>
        </div>
    </div>
</div>
`;

kpiTile.storyName = 'KPI tile';

kpiTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
A KPI tile displays key performance indicators that are used to measure and monitor a company’s performance at a strategic and operational level. The KPI tile supports a limited number of digits, which varies depending on the tile size. The tile displays the KPI values as large, easy-to-recognize digits. In addition, you can show deviation arrows, semantic values, and scaling factors. The number of digits is limited by the size of the tiles. To display a KPI tile, add the \`fd-tile--kpi\` modifier class to the main element.
        ` }
};

export const feedTile = () => `<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>`;

feedTile.storyName = 'Feed tile';

feedTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The feed tile displays a news feed with a news headline, the source, and a time stamp. It shows new notifications in 10-second intervals, and tile content is updated every five minutes. If there are no new notifications, the most recent notifications are displayed. The feed tile’s headline uses the full width of the container and does not contain an icon. To display a feed tile, add the \`fd-tile--feed\` modifier class to the main element.
        ` }
};

export const badgeTile = () => `<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-badge">Badge</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://loremflickr.com/cache/resized/65535_50178620828_b62a994cb0_q_80_80_nofilter.jpg')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://loremflickr.com/cache/resized/65535_50178620828_b62a994cb0_q_80_80_nofilter.jpg')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-badge">New</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>`;

badgeTile.storyName = 'Badge tile';

badgeTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The badge tile displays very short and important information at the top right corner of the tile. It's recommended to add a badge to a tile when it has been newly added. Badges are not displayed when in action/edit mode.
        ` }
};

export const slideTile = () => `<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide fd-tile--s">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>`;

slideTile.storyName = 'Slide tile';

slideTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The Slide Tile contains a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed by hovering the mouse over the tile on desktop devices. The dots on the bottom of each tile identify the number of pages they contain.
To create a Slide Tile, use the \`fd-tile--slide\` modifier class.
        ` }
};

export const linkTile = () => `<h4>Line Tile - Floating Behaviour, Cozy Mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy Mode</h4>
<div class="fd-tile-container fd-tile-container--list">
            <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Compact Mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Compact Mode</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cozy Mode, With Badge</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia voluptas</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title accusamus dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle facilis distinctio</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy Mode, With Badge</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title accusamus et iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle facilis est et expedita distinctio</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
            </div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cozy and Action Mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Disabled Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy and Action Mode</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Disabled Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
            <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </div>
</div>`;

linkTile.storyName = 'Link tile';

linkTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The link tile displays links in a separate area below the tiles area and comprise a title and optional subtitle. They can be in list format, or they can float above the content. Line tiles can also be viewed in action mode, displaying a close button at the top and an action button on the bottom. To display a line tile, add the \`fd-tile--line\` modifier class to the main element.

####Sizes
Link tiles are displayed in two modes depending on the screen width.
        
Size | Screen width | Modifier class | Behaviour
----- | :----------------- | :------------------ | :----------
M – XL | >= 450px | Default | Floating: If there is insufficient space, the content wraps into two rows. (This behaviour is not provided by Fundamental Styles and requires JavaScript).
S | < 450px | \`fd-tile-container--list\` | List: The tile grows vertically and the text wraps into two rows, placing the title in the first row and the subtitle in the second.

The line tile can be displayed in cozy (default) and compact mode. To display line tile in compact mode, add the \`fd-tile--compact\` to the main element.
        
Note: The compact mode should only be applied to link tiles and should not be applied to the other types.
        
####List states

- Regular
- Hover
- Pressed
- Disabled


####Action mode
When in action mode, default (floating) link tiles display the actions and close button immediately after the text. However, when they are in list format, link tiles display the actions and close button along the right side of the container. To display link tile in action mode, add \`fd-tile__action-container\` after the header element. Gradient masking is also supported in edit mode.
        

        ` }
};

export const tileInActionMode = () => `<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/ImageContent/images/ProfileImage_LargeGenTile.png')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/ImageContent/images/ProfileImage_LargeGenTile.png')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/SlideTile/images/NewsImage1.png')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>`;

tileInActionMode.storyName = 'Action mode';

tileInActionMode.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
In action mode view, the close button is displayed on the top right-hand corner of the Tile. The action icon is only an indicator and is displayed on the bottom right-hand corner. The click/touch area fills the entire Tile, excluding the click/touch area reserved for the close button. For Action Mode use the \`fd-tile--action\` modifier class.
        ` }
};
