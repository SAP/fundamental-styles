import fontAwesomeButton from './font-awesome-button.example.html?raw';
import fontAwesomeShellbar from './font-awesome-shellbar.example.html?raw';
import fontAwesomeToolbar from './font-awesome-toolbar.example.html?raw';
import fontAwesomeSlider from './font-awesome-slider.example.html?raw';
import fontAwesomePopover from './font-awesome-popover.example.html?raw';
import fontAwesomeCard from './font-awesome-card.example.html?raw';

import '../../src/avatar.scss';
import '../../src/bar.scss';
import '../../src/button.scss';
import '../../src/segmented-button.scss';
import '../../src/dialog.scss';
import '../../src/icon.scss';
import '../../src/menu.scss';
import '../../src/title.scss';
import '../../src/input.scss';
import '../../src/shellbar.scss';
import '../../src/toolbar.scss';
import '../../src/card.scss';
import '../../src/popover.scss';
import '../../src/slider.scss';
import '../../src/badge.scss';
import '../../src/list.scss';
import '../../src/link.scss';
import '../../src/icon.scss';
import '../../src/object-status.scss';
import '../../src/bar.scss';
import '../../src/select.scss';
import '../../src/input-group.scss';
import '../../src/calendar.scss';

export default {
    title: 'Font Awesome',
    parameters: {
        tags: ['theme'],
        description: `
      
        
## What is Font Awesome ?

Font awesome is an icon libarary, that allows the users to add a large variety of icons to their projects. 
This allows user to improve the clarity and ease of navigation of their website.


<br />
## How to add Font Awesome to your project

The most simple way you can utilize Font Awesome is through the use of a CDN:

<br />

\`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />\`

<br />
For other versions you can check <a href="https://cdnjs.com/libraries/font-awesome" target="_blank">CDNJ</a>. <br />
Alternatively you can add Font Awesome through one of the other methods recommended on their <a href="https://fontawesome.com/" target="_blank">website</a>.

`
    }
};

export const FAButton = () => fontAwesomeButton;
FAButton.storyName = 'Extra Functionality';
FAButton.parameters = {
    docs: {
        description: {
            story: 'Font Awesome can be used to add buttons with more unique properties.'
        }
    }
};

export const FAShellbar = () => fontAwesomeShellbar;
FAShellbar.storyName = 'Improved Clarity';
FAShellbar.parameters = {
    docs: {
        description: {
            story: 'Icons can be used to improve the readability of user settings.'
        }
    }
};

export const FACard = () => fontAwesomeCard;
FACard.storyName = 'More Options';
FACard.parameters = {
    docs: {
        description: {
            story: 'Font Awesome allows a large variety of icons to be used with the SAP components, allowing for very versatile combinations.'
        }
    }
};

export const FAPopover = () => fontAwesomePopover;
FAPopover.storyName = 'Visual cue';
FAPopover.parameters = {
    docs: {
        description: {
            story: 'Font Awesome can aid with visual cues for smaller components like the popover .'
        }
    }
};

export const FAPToolbar = () => fontAwesomeToolbar;
FAPToolbar.storyName = 'Replace Text';
FAPToolbar.parameters = {
    docs: {
        description: {
            story: 'Using Font Awesome and SAP components, users can create applications without the use of text.'
        }
    }
};

export const Alternatives = () => fontAwesomeSlider;
Alternatives.storyName = 'Adding visual cues to tools';
Alternatives.parameters = {
    docs: {
        description: {
            story: 'Using SAP components like the slider and Font Awesome, can be used to more clearly convey visual information.'
        }
    }
};
