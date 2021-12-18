export default {
    title: 'Experimental/Avatar',
    parameters: {
        description: `
**Modifier classes for Avatar:**

| Size                          | Modifier class     |
| :---------------------------- | ------------------ |
| xl &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--xl\`  |
| l &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-avatar--l\`   |
| m &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-avatar--m\`   |
| s  &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--s\`   |
| xs &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--xs\`  |

<br><br>

| Type                                     | Modifier class              |
| :--------------------------------------- | --------------------------- |
| decorative &nbsp;&nbsp;&nbsp;&nbsp;      | none                        |
| rounded &nbsp;&nbsp;&nbsp;&nbsp;         | none                        |
| interactive &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--interactive\`  |
| circle &nbsp;&nbsp;&nbsp;&nbsp;          | \`fn-avatar--circle\`       |
| thumbnail &nbsp;&nbsp;&nbsp;&nbsp;       | \`fn-avatar--thumbnail\`    |

<br><br>

| Color                             | Modifier class        |
| :-------------------------------- | --------------------- |
| indigo &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--indigo\` |
| crimson &nbsp;&nbsp;&nbsp;&nbsp;  | \`fn-avatar--crimson\`|
| cyan &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--cyan\`   |
| lime  &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-avatar--lime\`   |
| pink &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--pink\`   |
| yellow &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--yellow\` |
| teal &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--teal\`   |

<br><br>

| State                              | Modifier class  |
| :--------------------------------  | --------------- |
| normal &nbsp;&nbsp;&nbsp;&nbsp;    | none |
| hover &nbsp;&nbsp;&nbsp;&nbsp;     | \`is-hover\`    |
| active &nbsp;&nbsp;&nbsp;&nbsp;    | \`is-active\`   |
| focus  &nbsp;&nbsp;&nbsp;&nbsp;    | \`is-focus\`    |
| disabled &nbsp;&nbsp;&nbsp;&nbsp;  | \`is-disabled\` |

<br><br>

        `,
        components: ['fn-avatar', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        background: white;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }
</style>
`;

export const roundedInitialsDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--indigo">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--indigo">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--indigo">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--indigo">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--indigo">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--crimson">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--crimson">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--crimson">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--crimson">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--crimson">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--cyan">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--cyan">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--cyan">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--cyan">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--cyan">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--lime">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--lime">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--lime">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--lime">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--lime">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--pink">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--pink">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--pink">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--pink">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--pink">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--yellow">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--yellow">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--yellow">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--yellow">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--yellow">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--teal">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--teal">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--teal">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--teal">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--teal">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

`;

roundedInitialsDecorative.storyName = 'Rounded Decorative Avatar with Initials';
roundedInitialsDecorative.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Modifier classes are added to the base class only for the size and the color. Rounded Decorative Avatar is the default type for avatar.'
    }
};


export const circleInitialsDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--indigo">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--indigo">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--indigo">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--indigo">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--indigo">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--crimson">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--crimson">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--crimson">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--crimson">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--crimson">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--cyan">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--cyan">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--cyan">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--cyan">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--cyan">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--lime">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--lime">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--lime">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--lime">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--lime">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--pink">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--pink">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--pink">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--pink">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--pink">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--yellow">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--yellow">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--yellow">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--yellow">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--yellow">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--teal">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--teal">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--teal">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--teal">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--teal">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

`;

circleInitialsDecorative.storyName = 'Circle Decorative Avatar with Initials';
circleInitialsDecorative.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'For Circle Decorative Avatar add the `.fn-avatar--circle` modifier classes to the base class and the modifier classes for size and color.'
    }
};


export const roundedIconDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

`;

roundedIconDecorative.storyName = 'Rounded Decorative Avatar with Icon';


export const circleIconDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--indigo">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--crimson">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--cyan">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--lime">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--pink">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--yellow">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--teal">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

`;

circleIconDecorative.storyName = 'Circle Decorative Avatar with Icon';

export const circleThumbnailDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>   
</div>
<div class="docs-fn-container">
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--xl">
        <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
   
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--l" style="background-image: url('/assets/images/backgrounds/city.jpg')">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--m" style="background-image: url('/assets/images/backgrounds/city.jpg')">
        <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--s" style="background-image: url('/assets/images/backgrounds/city.jpg')">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--xs" style="background-image: url('/assets/images/backgrounds/city.jpg')">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
</div>
`;

circleThumbnailDecorative.storyName = 'Circle Decorative Avatar with Thumbnail';
circleThumbnailDecorative.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'An additional modifier class `.fn-avatar--thumbnail` is needed if you want to achieve an avatar with thumbnail.'
    }
};

export const roundedInitialsInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>:normal</b></div>
    <div><b>:hover</b></div>
    <div><b>:active</b></div>
    <div><b>:focus</b></div>
    <div><b>:disabled</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--indigo is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--indigo is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--indigo is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--indigo is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--crimson is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--crimson is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--crimson is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--crimson is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--cyan is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--cyan is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--cyan is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--cyan is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--lime is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--lime is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--lime is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--lime is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--pink is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--pink is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--pink is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--pink is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--yellow is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--yellow is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--yellow is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--yellow is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--teal is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--teal is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--teal is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--teal is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

`;

roundedInitialsInteractive.storyName = 'Rounded Interactive Avatar with Initials';
roundedInitialsInteractive.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Interactive Avatars have hover, active, focus and disabled states. You can turn a decorative avatar to interactive by adding the `fn-avatar--interactive` modifier class to the other classes.'
    }
};

export const circleInitialsInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>:normal</b></div>
    <div><b>:hover</b></div>
    <div><b>:active</b></div>
    <div><b>:focus</b></div>
    <div><b>:disabled</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--indigo is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--indigo is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--indigo is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--indigo is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--crimson is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--crimson is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--crimson is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--crimson is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--cyan is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--cyan is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--cyan is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--cyan is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--lime is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--lime is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--lime is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--lime is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--pink is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--pink is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--pink is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--pink is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--yellow is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--yellow is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--yellow is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--yellow is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--teal is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--teal is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--teal is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--teal is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

`;

circleInitialsInteractive.storyName = 'Circle Interactive Avatar with Initials';
circleInitialsInteractive.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: ''
    }
};


export const roundedIconInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

`;

roundedIconInteractive.storyName = 'Rounded Interactive Avatar with Icon';
roundedIconInteractive.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: ''
    }
};

export const circleIconInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>   
</div>
<div class="docs-fn-container">
    <div><b>Indigo</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--indigo" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Crimson</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--crimson" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Cyan</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--cyan" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Lime</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--lime" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Pink</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--pink" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Yellow</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--yellow" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Teal</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--teal" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

`;

circleIconInteractive.storyName = 'Circle Interactive Avatar with Icon';
circleIconInteractive.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: ''
    }
};

export const circleThumbnailInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>:normal XL</b></div>
    <div><b>:hover L</b></div>
    <div><b>:active M</b></div>
    <div><b>:focus S</b></div>
    <div><b>:disabled XS</b></div>   
</div>
<div class="docs-fn-container">
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--xl" tabindex="0">
        <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
   
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--l is-hover" tabindex="0"">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--m is-active" tabindex="0">
        <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--s is-focus" tabindex="0">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
    
    <div class="fn-avatar fn-avatar--circle fn-avatar--thumbnail fn-avatar--interactive fn-avatar--xs is-disabled" tabindex="-1">
        <div class=" fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
    </div>
</div>
`;

circleThumbnailInteractive.storyName = 'Circle Interactive Avatar with Thumbnail';
