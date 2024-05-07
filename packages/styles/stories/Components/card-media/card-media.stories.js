import cardMediaExampleHtml from "./card-media.example.html?raw";
import cardMediaTitleExampleHtml from "./card-media-title.example.html?raw";
import cardMediaBannerExampleHtml from "./card-media-banner.example.html?raw";

import '../../../src/button.scss';
import '../../../src/avatar.scss';
import '../../../src/badge.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/link.scss';
import '../../../src/icon.scss';

export default {
  title: 'Components/Card/Media Card',
  parameters: {
    description: `The Media Block is optional and can be hidden if is not desired to be shown. The Media Block feature enables cards to spotlight special content for the user. Adding an image or colored background in combination with bold text, the Media Block can also work as stand-alone banner.
`,
    tags: ['development']
  }
};

export const CardMedia = () => cardMediaExampleHtml;
CardMedia.storyName = 'Media on Cards';
CardMedia.parameters = {
  docs: {
   description: {
      story: `The Media Block is flexible in height but fixed in width to the card size. The media can only contain an image / graphic OR solid color plus text.
      The Image can fill the media container or can come with a padding of 1rem (results in 16px) top, left and right. Corner radius 0.5rem (results in 8px). For this option add the modifier class <code>.fd-card__media--with-padding</code> to <code>.fd-card__media</code> base class. <br><br>`
    }
  }
};

export const CardMediaTitle = () => cardMediaTitleExampleHtml;
CardMediaTitle.storyName = 'Title on Media';
CardMediaTitle.parameters = {
  docs: {
   description: {
      story: `A title on Media Block is possible if using a solid colored background an NO image! To ensure legibility and ACC standards in the Media Block / Banner, always make sure a sufficient contrast ratio is achieved. 
Solid background colors can be bright <b>Shell Category Colors</b> or the lighter <b>Legend Background Colors</b>.
      
- For <b>Shell Category Colors</b> add the <code>.fd-card__media--bg-shell-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 16. For example: <code>fd-card__media--bg-shell-5</code>
- For <b>Legend Background Colors</b> add the <code>.fd-card__media--bg-legend-*</code> modifier to the <code>.fd-card__media</code> base class, where * can be a number from 1 to 20. For example: <code>fd-card__media--bg-legend-7</code>`
    }
  }
};


export const CardMediaBanner = () => cardMediaBannerExampleHtml;
CardMediaBanner.storyName = 'Media as Banner';
CardMediaBanner.parameters = {
  docs: {
   description: {
      story: `To highlight certain content in a crisp and highly visual way, the Media Block offers the flexibility to be designed as a stand-alone banner. Use the <code>.fd-card--banner</code> modifier class to achieve this type of Card. <br>
When the Card is used as a banner, the solid background can be applied on the whole media container or on the content container, in cases where it's used together with an image or as an overlay.

To achieve a banner with a solid background with no image use the <code>.fd-card__media--bg-shell-*</code> or <code>.fd-card__media--bg-legend-*</code> modifer with the <code>.fd-card__media</code> base class.

If you want to apply background on the content container when it's used with an image, use the <code>.fd-card__media-content-container--bg-shell-*</code> or <code>.fd-card__media-content-container--bg-legend-*</code> modifer with the <code>.fd-card__media-content-container</code> base class.

The content container can be displayed as an overlay in case of using an image / a graphic behind. Use the modifier class <code>.fd-card__media-content-container--overlay</code> with the <code>.fd-card__media-content-container</code> base class.`
    }
  }
};
