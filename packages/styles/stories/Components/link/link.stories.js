import '../../../src/icon.scss';
import '../../../src/link.scss';
export default {
  title: 'Components/Link',
  parameters: {
    description: `A link (also known as hyperlink) is an interactive text element that allows users to navigate to another page or trigger a certain event.

##Usage

**Use a link if:**

- You want to navigate to another page.
- You want to trigger an event.
- You want to point to an object or person. If so, you can either navigate to the object or person’s details or display them in a quick view after the link is triggered.

** Do not use a link if:**

- You could use a **Button** to trigger the action instead.
- There is no target or reference to be linked to.

##Accessibility
Use a meaningful link text that indicates what will happen when the user interacts with the link i.e. *Open Sales Order*.
Avoid texts such as *Click Here* or *Link*, as these do not make it clear to the user what the purpose of the link is.

<b>IMPORTANT</b> The modifier class <code>fd-link--touch-target</code> adds increased vertical spacing to the link to meet WCAG 2.2 minimum touch target requirements. This modifier sets the line height to 1.5rem (24px), ensuring that links placed inside actionable containers—such as table cells or list items—are easier to tap on touch devices.

**When to use:**

Use this modifier when a link is the primary action inside a container that also responds to click or tap events (e.g., a clickable table row or list item). This helps ensure that the interactive area of the link meets the recommended minimum size for touch targets.

**When not to use:**

Do not apply this modifier in inline text or in dense text areas where increasing the line height would cause visual misalignment or disrupt text flow. In such cases, the container is not typically interactive, so the minimum touch area requirement does not apply.
`
  }
};
const localStyles = `
<style>

    .docs-link-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-link-container > div {
        text-align: center;
    }

    .docs-link-container--inverted {
        background-color:var(--sapShellColor)
    }
</style>
`;
export const Primary = () => `${localStyles}
<div class="docs-link-container">
   <span><b>Regular</b></span>
   <span><b>Hover</b></span>
   <span><b>Active</b></span>
   <span><b>Focus</b></span>
   <span><b>Disabled</b></span>
</div>

<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0" aria-disabled="false" aria-disabled="false">
        <span class="fd-link__content">Regular Link</span>
    </a>

    <a href="#" class="fd-link is-hover" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Regular Link</span>
    </a>

     <a href="#" class="fd-link is-active" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Regular Link</span>
    </a>

    <a href="#" class="fd-link is-focus" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Regular Link</span>
    </a>

    <a href="#" class="fd-link" tabindex="-1" aria-disabled="true">
        <span class="fd-link__content">Regular Link</span>
    </a>
</div>

<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--emphasized" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Emphasized Link</span>
        <span class="fd-link__sr-only">Emphasized</span>
    </a>

    <a href="#" class="fd-link fd-link--emphasized is-hover" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Emphasized Link</span>
        <span class="fd-link__sr-only">Emphasized</span>
    </a>

    <a href="#" class="fd-link fd-link--emphasized is-active" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Emphasized Link</span>
        <span class="fd-link__sr-only">Emphasized</span>
    </a>

    <a href="#" class="fd-link fd-link--emphasized is-focus" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Emphasized Link</span>
        <span class="fd-link__sr-only">Emphasized</span>
    </a>

    <a href="#" class="fd-link fd-link--emphasized" tabindex="-1" aria-disabled="true">
        <span class="fd-link__content">Emphasized Link</span>
        <span class="fd-link__sr-only">Emphasized</span>
    </a>
</div>

<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--subtle" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Subtle Link</span>
        <span class="fd-link__sr-only">Subtle</span>
    </a>

    <a href="#" class="fd-link fd-link--subtle is-hover" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Subtle Link</span>
        <span class="fd-link__sr-only">Subtle</span>
    </a>

    <a href="#" class="fd-link fd-link--subtle is-active" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Subtle Link</span>
        <span class="fd-link__sr-only">Subtle</span>
    </a>

    <a href="#" class="fd-link fd-link--subtle is-focus" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Subtle Link</span>
        <span class="fd-link__sr-only">Subtle</span>
    </a>

    <a href="#" class="fd-link fd-link--subtle" tabindex="-1" aria-disabled="true">
        <span class="fd-link__content">Subtle Link</span>
        <span class="fd-link__sr-only">Subtle</span>
    </a>
</div>

<div class="docs-link-container docs-link-container--inverted">
    <a href="#" class="fd-link fd-link--inverted" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Inverted Link</span>
    </a>

    <a href="#" class="fd-link fd-link--inverted is-hover" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Inverted Link</span>
    </a>

    <a href="#" class="fd-link fd-link--inverted is-active" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Inverted Link</span>
    </a>

    <a href="#" class="fd-link fd-link--inverted is-focus" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Inverted Link</span>
    </a>

    <a href="#" class="fd-link fd-link--inverted" tabindex="-1" aria-disabled="true">
        <span class="fd-link__content">Inverted Link</span>
    </a>
</div>

<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Right Icon Link</span>
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
    </a>

    <a href="#" class="fd-link is-hover" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Right Icon Link</span>
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
    </a>

    <a href="#" class="fd-link is-active" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Right Icon Link</span>
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
    </a>

    <a href="#" class="fd-link is-focus" tabindex="0" aria-disabled="false">
        <span class="fd-link__content">Right Icon Link</span>
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
    </a>

    <a href="#" class="fd-link" tabindex="-1" aria-disabled="true">
        <span class="fd-link__content">Right Icon Link</span>
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
    </a>
</div>

<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0" aria-disabled="false">
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
        <span class="fd-link__content">Left Icon Link</span>
    </a>

    <a href="#" class="fd-link is-hover" tabindex="0" aria-disabled="false">
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
        <span class="fd-link__content">Left Icon Link</span>
    </a>

    <a href="#" class="fd-link is-active" tabindex="0" aria-disabled="false">
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
        <span class="fd-link__content">Left Icon Link</span>
    </a>

    <a href="#" class="fd-link is-focus" tabindex="0" aria-disabled="false">
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
        <span class="fd-link__content">Left Icon Link</span>
    </a>

    <a href="#" class="fd-link" tabindex="-1" aria-disabled="true">
        <span class="sap-icon--delete sap-icon--s" role="presentation" aria-hidden="true"></span>
        <span class="fd-link__content">Left Icon Link</span>
    </a>
</div>
`;
Primary.storyName = 'Types';
Primary.parameters = {
  docs: {
    description: {
      story: `There are different types of links for various use cases.

| Types | Modifier class | Use to... |
| :----| :--------------- | :--------------|
| Default | *n/a* | Display a simple link. |
| Subtle | \`fd-link--subtle\` | Distinguish between important (default) and less important (subtle) links in tables with large data lists. |
| Disabled | \`fd-link--disabled\` | Display a link that a user cannot interactive with. |
| Inverted | \`fd-link--inverted\` | Display a link in a **Shell Bar**. |

###Icons
You can display a link with an icon placed on either side of the link text.

| Icon style | Modifier class |
| :---------- | :-------------|
| Left Arrow | \`sap-icon--slim-arrow-left sap-icon--s\` |
| Right Arrow | \`sap-icon--slim-arrow-right sap-icon--s\` |

###Accessibility
In case of interactive containers, applies increased line height (1.5rem / 24px) to ensure the link meets WCAG 2.2 minimum touch target requirements.

| Type | Modifier class |
| :---------- | :-------------|
| Touch Target | \`fd-link--touch-target\` |
`
    }
  }
};