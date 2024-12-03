import defaultExampleHtml from "./default.example.html?raw";
import mobileExampleHtml from "./mobile.example.html?raw";

import '../../../src/user-menu.scss';
import '../../../src/shellbar.scss';
import '../../../src/popover.scss';
import '../../../src/notification.scss';
import '../../../src/tabs.scss';
import '../../../src/avatar.scss';
import '../../../src/list.scss';
import '../../../src/input.scss';
import '../../../src/bar.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/badge.scss';
import '../../../src/navigation-list.scss';
import '../../../src/input-group.scss';
import '../../../src/panel.scss';
import '../../../src/toolbar.scss';

export default {
  title: 'Components/User Menu',
  parameters: {
    description: `The User Menu is an integral part of the Shell Bar, accessible by clicking the avatar located at its far-right end. It provides user-specific options and remains available across all screens. In addition to standard options, the User Menu can include product-specific functionality.
    <br>
    The User Menu can display the following:
<ul>
    <li>Current user information</li>
    <li>Switch between accounts</li>
    <li>User Menu items</li>
</ul>

### When to use
<ul>
    <li>To present user-specific information, settings, and actions.</li>
    <li>To enable account switching.</li>
    <li>To display product-related and legal information.</li>
    <li>To facilitate Sign In or Sign Out actions.</li>
</ul>

### When not to use
<ul>
    <li>Navigation: Avoid including navigational elements.</li>
    <li>Home Page Customization: Exclude items related to customizing the home page.</li>
    <li>Inactive Items: Hide inactive items instead of displaying them as disabled.</li>
    <li>Content Overload: Keep the menu concise by limiting links to essential items only.</li>
    <li>Dynamic Content: Avoid altering the menu content within the product.</li>
</ul>
    
### Anatomy
The User Menu popover is composed of the following components:

<b>Custom Popover Header</b><br>
Represents the current user and includes:

<ul>
    <li>Popover: Contains the entire User Menu content.</li>
    <li>Avatar: A key visual element displaying the user's profile picture. If no profile picture is available, it shows the user's initials. If the user is not signed in, an icon is displayed.</li>
    <li>Title: A required UI element showing the user's First and Last names.</li>
    <li>Subtitle 1 (subline): An optional secondary identifier, such as user ID or email.</li>
    <li>Subtitle 2 (subline): An optional tertiary identifier, such as role, position, organization, or unit.</li>
    <li>Manage Account Button: Links to account settings.</li>
</ul>

<b>Content Container</b><br>
Holds user account and menu items:

<ul>
  <li>
    Panel
    <ul>
      <li>Includes a header with an Add Account button and a list of accounts.</li>
      <li>The Other Accounts section (optional) allows users to sign in with or switch between accounts.</li>
    </ul>
  </li>
  <li>
    List
    <ul>
      <li>Displays List Items for user accounts.</li>
      <li>Hosts mandatory menu items (e.g., Settings, Legal Information, About, Sign In/Out) and custom items.</li>
    </ul>
  </li>
</ul>
    `,
    tags: ['uxc']
  }
};

export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Mobile = () =>mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};