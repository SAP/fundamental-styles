export default {
    title: 'Components/Tile/Specific',
    parameters: {
        description: `
Based on Generic Tiles there are some specific implementations that can display different
types of content, which are based on the data supplied by the app. They can contain an icon, a title, an informative
text, KPIs, counters and charts.
      `,
        tags: ['f3', 'a11y', 'theme'],
        docs: { iframeHeight: 500 },
        components: ['tile', 'badge', 'numeric-content', 'button', 'icon', 'generic-tile']
    }
};

export const launchTile = () => `<h4>Launch tile with numeric content and launch icon</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
<h4>Launch tile with combined header and content</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Title: Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title: Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
<h4>Launch tile (profile)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://ui5.sap.com/test-resources/sap/m/demokit/sample/ImageContent/images/ProfileImage_LargeGenTile.png')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
<h4>Launch tile (logo)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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

**Note:** Because the examples are displaying numeric content, it is important to note how many characters a tile can support depending on its size. For instance, when a large tile displays numeric content, the text size is 2.25rem (36px). Due to the large text, the tile can only support a maximum of 4 characters.

Tile size | Maximum...
--------: | :---------------
S | 8 characters can be displayed within numeric content.
M | 6 characters can be displayed within numeric content.
L | 4 characters can be displayed within numeric content.
        ` }
};

export const kpiTile = () => `<h4>KPI tile with numeric content (size L)</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
<h4>KPI tile with numeric content (size M)</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Eiusmod tempor incididunt ut labore </div>
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
            <div class="fd-tile__title">Title: Eiusmod tempor incididunt</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
<h4>KPI tile with numeric content (size S)</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">CAD, Current quarter</span>
        </div>
    </div>
</div>
`;

kpiTile.storyName = 'KPI tile';

kpiTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
A KPI tile displays key performance indicators that are used to measure and monitor a company’s performance at a strategic and operational level. The tile displays the KPI values as large, easy-to-recognize digits. In addition, you can show deviation arrows, semantic values, and scaling factors. The number of digits is limited by the size of the tiles. To display a KPI tile, add the \`fd-tile--kpi\` modifier class to the main element.

**Note:** The KPI tile supports a limited number of characters, which varies depending on the tile size (see launch tile above for more details). 
        ` }
};

export const feedTile = () => `<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago</div>
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
            <div class="fd-tile__title">Title: Sed do eiusmod</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago</div>
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
            <div class="fd-tile__title">Launch tile title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://loremflickr.com/cache/resized/65535_50178620828_b62a994cb0_q_80_80_nofilter.jpg')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-badge">Badge with very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch tile title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Feed tile title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago</div>
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
        <div class="fd-badge">Badge with very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed tile title: Sed do eiusmod</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago</div>
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
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
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
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
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
The slide tile displays a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed on desktops by hovering the mouse over the tile. The dots on the bottom of each tile identify the number of pages they contain.
To display a slide tile, add the \`fd-tile--slide\` modifier class to the main element.
        ` }
};

export const linkTile = () => `<h4>Link tile: Floating behaviour in cozy mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Perspiciatis unde omnis iste natus error sit voluptatem</div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: List behaviour in cozy mode</h4>
<div class="fd-tile-container fd-tile-container--list">
            <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: Floating behaviour in compact mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Perspiciatis unde omnis iste natus error sit voluptatem</div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: List behaviour in compact mode</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Praesentium voluptatum deleniti atque</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: Floating behaviour in cozy mode (with badge)</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title with very very very very very very long text</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Perspiciatis unde omnis iste natus error</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem quia voluptas</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Accusamus dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Facilis distinctio</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: List behaviour in cozy mode (with badge)</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            </div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Accusamus et iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Facilis est et expedita distinctio</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Praesentium voluptatum deleniti atque</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit</div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Link tile: Floating behaviour in cozy and action mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
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
            <div class="fd-tile__title">Disabled title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem quia</div>
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
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
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
<h4>Link tile: List behaviour in cozy and action mode</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Disabled title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
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
            <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
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
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
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
        storyDescription: `The link tile displays links in a separate area below the tiles area and comprise a title and optional subtitle. They can be in list format or they can float above the content. Link tiles can also be viewed in action mode, displaying a close button at the top and an actions button on the bottom. To display a link tile, add the \`fd-tile--line\` modifier class to the main element.

####Sizes
Link tiles are displayed in two modes depending on the screen width.
        
&nbsp;&nbsp;&nbsp; Size &nbsp; | Screen width | Modifier class | Behaviour
:----- | :----------------- | :------------------ | :----------
M-XL | >= 450px | Default | Floating: If there is insufficient space, the content wraps into two rows. (This behaviour is not provided by Fundamental Styles and requires JavaScript).
S | < 450px | \`fd-tile-container--list\` | List: The tile grows vertically and the text wraps into two rows, placing the title in the first row and the subtitle in the second.

The link tile can be displayed in cozy (default) and compact mode. To display link tile in compact mode, add the \`fd-tile--compact\` to the main element.
        
**Note:** The compact mode should only be applied to link tiles and should not be applied to the other types.
        
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
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
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
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
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
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
While a tile is in action mode, a close button is displayed on the top right-hand corner of the tile. The action icon is displayed on the bottom right-hand corner, and is only an indicator. The click/touch area fills the entire tile, excluding the area reserved for the close button. To display generic tile in action mode, add the \`fd-tile--action\` modifier class to the main element.
        ` }
};
