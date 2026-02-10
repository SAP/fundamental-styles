import baseExampleHtml from "./base.example.html?raw";
import xsmallExampleHtml from "./xsmall.example.html?raw";
import smallExampleHtml from "./small.example.html?raw";
import mediumExampleHtml from "./medium.example.html?raw";
import largeExampleHtml from "./large.example.html?raw";
import '../../../src/illustrated-message.scss';
import '../../../src/button.scss';
import '../../../src/message-strip.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Illustrated Message',
  parameters: {
    description: `Illustrated messages for SAP Fiori are a simple yet powerful way to engage users and add personality to the experience.

## Structure
**Illustration** - \`.fd-illustrated-message__illustration\`
Helps clarify the situation. Must always be paired with a message.
To set the Illustration you need to provide a svg.
Generalley, illustration from SAP Fiori Moments library intended to use.

**Message** - \`.fd-illustrated-message__figcaption\`<br>
Consists of:
<ul>
    <li>heading: \`.fd-illustrated-message__title\`- the headline explains the reason for the empty state, preferably in a single line.</li>
    <li>description: \`.fd-illustrated-message__text\`- the description adds details and, where appropriate, tells the user what to do next, in three lines or less.</li>
</ul>

**Call to Action (optional but recommended)** - \`.fd-illustrated-message__actions\`
Include a call to action (CTA) button if there is a clear next step.

## Types and sizing

<div 
  role="note" 
  aria-labelledby="message-strip-hidden-text-2 message-strip-text-2"
  class="fd-message-strip fd-message-strip--information">
  <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-2">Information Bar Closable</span>
  
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-information" role="presentation" aria-hidden="true"></span>
  </div>

  <p class="fd-message-strip__text" style="margin: 0; padding: 0; line-height: normal;" id="message-strip-text-2">Illustrated Message Update: The illustration types have been renamed from scene, dialog, spot, and dot to large, medium, small, and extra small for clarity and consistency. Legacy type values and modifier classes (e.g., fd-illustrated-message--scene) are still supported for backward compatibility.
  </p>
</div>


* Large (default) - \`.fd-illustrated-message\`
* Medium - \`.fd-illustrated-message--medium\`
* Small - \`.fd-illustrated-message--small\`
* Extra Small - \`.fd-illustrated-message--xsmall\`
* Base - \`.fd-illustrated-message--base\` no illustration.

<b>Legacy modifier classes:</b>

* Scene (now Large) - \`.fd-illustrated-message\`
* Dialog (now Medium) - \`.fd-illustrated-message--dialog\` 
* Spot (now Small) - \`.fd-illustrated-message--spot\`
* Dot (now Extra Small) - \`.fd-illustrated-message--dot\` 
* Base - \`.fd-illustrated-message--base\` no illustration.

## Responsiveness and Adaptiveness
For Scene (Large) Message Illustration only you can apply a container with class <code>.fd-illustrated-message-responsive-container</code> that will handle the responsiveness with inline content query (<code>container-type: inline-size;</code>).

## Illustrations Disclaimer
<div 
  role="note" 
  style="width: fit-content;"
  aria-labelledby="message-strip-hidden-text-2a message-strip-text-2a"
  class="fd-message-strip fd-message-strip--information">
  <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-2a">Information Bar Closable</span>
  
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-information" role="presentation" aria-hidden="true"></span>
  </div>

  <p class="fd-message-strip__text" id="message-strip-text-2a" style="margin: 0; padding: 0; line-height: normal;">The following illustrations are meant to be humorous examples only. Do not use the text or the illustrations in real SAP products!
  </p>
</div>

`,
    tags: []
  }
};
export const Large = () => largeExampleHtml;
Large.parameters = {
  docs: {
    description: {
      story: `The default and largest size variant, ideal for full-page empty states, onboarding screens, or error pages where maximum visual impact is needed.
        `
    }
  }
};
export const Medium = () => mediumExampleHtml;
Medium.parameters = {
  docs: {
    description: {
      story: `A balanced size variant suitable for dialogs, panels, or section-level empty states. Apply the <code>.fd-illustrated-message--medium</code> modifier class.
      `
    }
  }
};
export const Small = () => smallExampleHtml;
Small.parameters = {
  docs: {
    description: {
      story: `A compact size designed for narrow panels, sidebars, or smaller dialog windows. Apply the <code>.fd-illustrated-message--small</code> modifier class.
      `
    }
  }
};
export const XSmall = () => xsmallExampleHtml;
XSmall.storyName = 'Extra Small';
XSmall.parameters = {
  docs: {
    description: {
      story: `The most compact illustrated version featuring a minimal icon and condensed spacing, ideal for inline messages, mobile interfaces, or narrow cards. Apply the <code>.fd-illustrated-message--xsmall</code> modifier class.
      `
    }
  }
};
export const Base = () => baseExampleHtml;
Base.parameters = {
  docs: {
    description: {
      story: `Text-only variant without illustration, providing a minimal presentation for extremely constrained spaces. Apply the <code>.fd-illustrated-message--base</code> modifier class.
      `
    }
  }
};