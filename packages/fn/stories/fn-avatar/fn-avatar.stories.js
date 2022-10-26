import 'fn/src/fn-avatar.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Avatar',
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

| Color                             | Modifier class          |
| :-------------------------------- | ----------------------- |
| mango &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-avatar--mango\`    |
| red &nbsp;&nbsp;&nbsp;&nbsp;      | \`fn-avatar--red\`      |
| raspberry &nbsp;&nbsp;&nbsp;&nbsp;| \`fn-avatar--raspberry\`|
| pink &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--pink\`     |
| indigo &nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-avatar--indigo\`   |
| blue &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--blue\`     |
| teal &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--teal\`     |
| green &nbsp;&nbsp;&nbsp;&nbsp;    | \`fn-avatar--green\`    |
| cyan &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--cyan\`     |
| grey &nbsp;&nbsp;&nbsp;&nbsp;     | \`fn-avatar--grey\`     |


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
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
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
export const RoundedInitialsDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--mango">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--mango">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--mango">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--mango">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--mango">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--red">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--red">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--red">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--red">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--red">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--raspberry">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--raspberry">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--raspberry">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--raspberry">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--raspberry">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--blue">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--blue">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--blue">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--blue">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--blue">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--green">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--green">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--green">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--green">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--green">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--grey">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--grey">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--grey">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--grey">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--grey">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>
`;
RoundedInitialsDecorative.storyName = 'Rounded Decorative Avatar with Initials';
RoundedInitialsDecorative.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Modifier classes are added to the base class only for the size and the color. Rounded Decorative Avatar is the default type for avatar.'
    }
  }
};
export const CircleInitialsDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--mango">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--mango">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--mango">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--mango">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--mango">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--red">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--red">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--red">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--red">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--red">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--raspberry">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--raspberry">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--raspberry">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--raspberry">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--raspberry">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--blue">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--blue">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--blue">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--blue">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--blue">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--green">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--green">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--green">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--green">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--green">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--grey">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--grey">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--grey">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--grey">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--grey">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>
`;
CircleInitialsDecorative.storyName = 'Circle Decorative Avatar with Initials';
CircleInitialsDecorative.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'For Circle Decorative Avatar add the `.fn-avatar--circle` modifier classes to the base class and the modifier classes for size and color.'
    }
  }
};
export const RoundedIconDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>
</div>

<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--raspberry">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--blue">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--green">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--xl fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--l fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--m fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--s fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--xs fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>
`;
RoundedIconDecorative.storyName = 'Rounded Decorative Avatar with Icon';
export const CircleIconDecorative = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>
</div>
<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--mango">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--red">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--raspberry">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--raspberry">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--blue">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--blue">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--green">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--green">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xl fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--l fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--s fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--circle fn-avatar--xs fn-avatar--grey">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>
`;
CircleIconDecorative.storyName = 'Circle Decorative Avatar with Icon';
export const CircleThumbnailDecorative = () => `${localStyles}
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
CircleThumbnailDecorative.storyName = 'Circle Decorative Avatar with Thumbnail';
CircleThumbnailDecorative.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'An additional modifier class `.fn-avatar--thumbnail` is needed if you want to achieve an avatar with thumbnail.'
    }
  }
};
export const RoundedInitialsInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>:normal</b></div>
    <div><b>:hover</b></div>
    <div><b>:active</b></div>
    <div><b>:focus</b></div>
    <div><b>:disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--mango is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--mango is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--mango is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--mango is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--red" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--red is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--red is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--red is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--red is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--raspberry is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--raspberry is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--raspberry is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--raspberry is-disabled" tabindex="-1">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--blue is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--blue is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--blue is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--blue is-disabled" tabindex="-1">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--green" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--green is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--green is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--green is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--green is-disabled" tabindex="-1">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--grey is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--grey is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--grey is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--grey is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>
`;
RoundedInitialsInteractive.storyName = 'Rounded Interactive Avatar with Initials';
RoundedInitialsInteractive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: 'Interactive Avatars have hover, active, focus and disabled states. You can turn a decorative avatar to interactive by adding the `fn-avatar--interactive` modifier class to the other classes.'
    }
  }
};
export const CircleInitialsInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div></div>
    <div><b>:normal</b></div>
    <div><b>:hover</b></div>
    <div><b>:active</b></div>
    <div><b>:focus</b></div>
    <div><b>:disabled</b></div>
</div>

<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--mango is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--mango is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--mango is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--mango is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--red" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--red is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--red is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--red is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--red is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--raspberry is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--raspberry is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--raspberry is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--raspberry is-disabled" tabindex="-1">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--blue is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--blue is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--blue is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--blue is-disabled" tabindex="-1">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--green" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--green is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--green is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--green is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--green is-disabled" tabindex="-1">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__initials">XL</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--grey is-hover" tabindex="0">
        <div class="fn-avatar__initials">L</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--grey is-active" tabindex="0">
        <div class="fn-avatar__initials">M</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--grey is-focus" tabindex="0">
        <div class="fn-avatar__initials">S</div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--grey is-disabled" tabindex="-1">
        <div class="fn-avatar__initials">XS</div>
    </div>
</div>

`;
CircleInitialsInteractive.storyName = 'Circle Interactive Avatar with Initials';
CircleInitialsInteractive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: ''
    }
  }
};
export const RoundedIconInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>
</div>

<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--raspberry" tabindex="0">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--blue" tabindex="0">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--green" tabindex="0">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xl fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--l fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--m fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--s fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--xs fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--person-placeholder"></span>
        </div>
    </div>
</div>
`;
RoundedIconInteractive.storyName = 'Rounded Interactive Avatar with Icon';
RoundedIconInteractive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: ''
    }
  }
};
export const CircleIconInteractive = () => `${localStyles}
<div class="docs-fn-container">
    <div><b></b></div>
    <div><b>XL</b></div>
    <div><b>L</b></div>
    <div><b>M</b></div>
    <div><b>S</b></div>
    <div><b>XS</b></div>
</div>

<div class="docs-fn-container">
    <div><b>Mango</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--mango" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Red</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--red" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>Raspberry</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--raspberry" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--raspberry" tabindex="0">
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
    <div><b>Blue</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--blue" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--blue" tabindex="0">
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

<div class="docs-fn-container">
    <div><b>Green</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--green" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--green" tabindex="0">
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
    <div><b>Grey</b></div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xl fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--l fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--m fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--s fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
    <div class="fn-avatar fn-avatar--interactive fn-avatar--circle fn-avatar--xs fn-avatar--grey" tabindex="0">
        <div class="fn-avatar__icon" role="presentation">
            <span class="sap-icon sap-icon--bell"></span>
        </div>
    </div>
</div>



`;
CircleIconInteractive.storyName = 'Circle Interactive Avatar with Icon';
CircleIconInteractive.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: ''
    }
  }
};
export const CircleThumbnailInteractive = () => `${localStyles}
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
CircleThumbnailInteractive.storyName = 'Circle Interactive Avatar with Thumbnail';
