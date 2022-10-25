import '../../../src/action-sheet.scss';
import '../../../src/feed-list.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
import '../../../src/link.scss';
export default {
    title: 'Components/Feed List and Item',
    parameters: {
        description: `The feed list displays feed list items that individually consist of a username, a written entry and an optional image. There is also a separate byline below that can contain a time stamp or an attribute in the form of free text.


##Usage
**Use the feed list if:**

-        You expect multiple instances, such as notes or feed entries.
-        The items in the feed list are homogenous.
-        A user needs to input small amounts of text without formatting.

**Do not use feed list if:**

-       The user needs to format the text (rich text editor).
-       You need only a single text box instance. Instead, use **Text Area**.
-       You want to display empty fields for the user to input feed entries. Instead, use **Feed Input**.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Standard = () => `<ul class="fd-feed-list" aria-label="Feed List Item default example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M1.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe">
        </div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

Standard.parameters = {
    docs: {
        description: {
            story: 'The standard feed list item displays a user\'s name and written text, an image and an additional attribute (in this example, it is a time stamp).'
        }
    }
};

export const PlaceHolderImage = () => `<ul class="fd-feed-list" aria-label="Feed List Item placeholder user image example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb"
            role="img"
            aria-label="John Doe"
            title="John Doe">
            <i class="sap-icon--person-placeholder"></i>
        </div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

PlaceHolderImage.storyName = 'Placeholder image';
PlaceHolderImage.parameters = {
    docs: {
        description: {
            story: 'The feed list item will display a placeholder image if the user does not have an image assigned.'
        }
    }
};

export const NoImage = () => `<ul class="fd-feed-list" aria-label="Feed List Item without user image example">
    <li class="fd-feed-list__body">
        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

NoImage.storyName = 'No image';
NoImage.parameters = {
    docs: {
        description: {
            story: 'The feed list item can be displayed without an image by removing the `fd-avatar` element from the container.'
        }
    }
};

export const Linked = () => `<ul class="fd-feed-list" aria-label="Feed List Item with user link example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list--link fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M5.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe"
            tabindex="0"
        ></div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">
                    <a href="#" class="fd-link fd-link--emphasized"><span class="fd-link__content">Joe Doe: </span></a>
                </span>
                Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

Linked.parameters = {
    docs: {
        description: {
            story: 'The feed list item can display linked usernames (and images). To display a linked username, add the `fd-link` class with the `fd-link--emphasized` modifier to the `fd-feed-list__name` element.'
        }
    }
};

export const ShowMore = () => `<ul class="fd-feed-list" aria-label="Feed List Item with show more text example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M6.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe"
        ></div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vi...
                <a class="fd-link fd-feed-list__link--more" tabindex="0"><span class="fd-link__content">More</span></a>
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

ShowMore.storyName = 'Show more';
ShowMore.parameters = {
    docs: {
        description: {
            story: 'Feed list items can display a <i>MORE</i> link that can show more text (when/if it is truncated). Truncation occurs when the text reaches 300 characters. When hovering over the link, the text is highlighted and underlined.'
        }
    }
};

export const ShowLess = () => `<ul class="fd-feed-list" aria-label="Feed List Item with show less text example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M8.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe"
        ></div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vitae elementum elit est malesuada nunc. Maecenas eu risus posuere, volutpat justo in, ultricies sem
                <a class="fd-link fd-feed-list__link--more" tabindex="0"><span class="fd-link__content">Less</span></a>
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

ShowLess.storyName = 'Show less';
ShowLess.parameters = {
    docs: {
        description: {
            story: 'Similarly, feed list items can display a <i>LESS</i> link that will revert the text back to when it was truncated.'
        }
    }
};

export const WithActions = () => `<ul class="fd-feed-list" aria-label="Feed List Item with popover actions example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M7.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe">
        </div>

        <div class="fd-feed-list__content">
            <div class="fd-feed-list__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--compact fd-button--transparent"
                                aria-label="More Options" aria-controls="actionSheetDesktop" aria-expanded="false"
                                aria-haspopup="true" onclick="onPopoverClick('actionSheetDesktop');">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--compact fd-popover__body--right" aria-hidden="true" id="actionSheetDesktop">
                        <ul class="fd-action-sheet fd-action-sheet--compact" role="list" aria-label="List of contextual options">
                            <li class="fd-action-sheet__item" role="listitem">
                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                    <i class="sap-icon--attachment"></i>
                                    <span class="fd-button__text">Button 1</span>
                                </button>
                            </li>
                            <li class="fd-action-sheet__item" role="listitem">
                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                    <i class="sap-icon--add"></i>
                                    <span class="fd-button__text">Button 2</span>
                                </button>
                            </li>
                            <li class="fd-action-sheet__item" role="listitem">
                                <button class="fd-button fd-button--full-width fd-button--compact fd-button--transparent fd-button--text-alignment-left">
                                    <i class="sap-icon--print"></i>
                                    <span class="fd-button__text">Button 3</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                <span>In hac habitasse platea dictumst. Fusce eu dui viverra, dictum justo in, pul aug. Praesent aliquam massa non lectus commodo, id vestibulum lectus auctor. Proin lorem quam, accumsan ac dui et, cursus ornare dui. Nunc ultricies dolor felis, in viverra mi venenatis in. Sed vel nisl a dui posuere ullamcorper. Donec posuere id massa at dictum. Suspendisse potenti.</span>
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`;

WithActions.storyName = 'Actions';
WithActions.parameters = {
    docs: {
        description: {
            story: 'Feed list items can display actions that users can perform on their individual feed posts. These typically include actions like <i>Edit</i> and <i>Delete</i>, however, other actions can be displayed depending on the use case. It is recommended to display a maximum of 5 actions per post.'
        }
    }
};

export const Group = () => ` <ul class="fd-feed-list fd-feed-list--group" aria-label="Feed List Item group example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb"
            role="img"
            aria-label="John Doe"
            title="John Doe">
                <i class="sap-icon--person-placeholder"></i>
        </div>
        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Cruz: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 21, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>

    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M6.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe">
        </div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 22, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>

    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M5.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe"
        ></div>
        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Sanchez: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>
</ul>
`;

Group.parameters = {
    docs: {
        description: {
            story: 'Evidently, feed list items can be displayed in a group. The example below displays a feed list item with a placeholder image and two standard feed list items.'
        }
    }
};

export const Borderless = () => `<ul class="fd-feed-list fd-feed-list--group fd-feed-list--no-border" aria-label="Feed List Item group example">
    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb"
            role="img"
            aria-label="John Doe"
            title="John Doe">
                <i class="sap-icon--person-placeholder"></i>
        </div>
        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Cruz: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 21, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>

    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M4.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe">
        </div>

        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Joe Doe: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 22, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>

    <li class="fd-feed-list__body">
        <div
            class="fd-avatar fd-avatar--circle fd-avatar--s fd-feed-list__thumb"
            style="background-image: url(/assets/images/portraits/XL_Square_112x112_M3.png)"
            role="img"
            aria-label="John Doe"
            title="John Doe"
        ></div>
        <div class="fd-feed-list__content">
            <p class="fd-feed-list__text">
                <span class="fd-feed-list__name">Sanchez: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>
</ul>
`;

Borderless.storyName = 'Borderless group';
Borderless.parameters = {
    docs: {
        description: {
            story: 'When feed list items are displayed in a group, they are usually separated by borders. However, to remove the borders, add the `fd-feed-list--no-border` modifier class to the main element.'
        }
    }
};

export const Mobile = () => `<div style="width: 350px; height: 600px; position: relative">
    <ul class="fd-feed-list fd-feed-list--s" aria-label="Feed List Item small size example">
        <li class="fd-feed-list__body">
            <div class="fd-feed-list__wrapper">
                <div class="fd-feed-list__wrapper fd-feed-list__wrapper--header">
                <div
                    class="fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
                    style="background-image: url(/assets/images/portraits/XL_Square_112x112_M2.png)"
                    role="img"
                    aria-label="John Doe"
                    title="John Doe">
                </div>
                <div>
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    <div class="fd-feed-list__footer">
                        <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                        <small class="fd-feed-list__footer--byline">Reply</small>
                    </div>
                </div>

                </div>
                <div class="fd-feed-list__actions">
                    <button class="fd-button fd-button--transparent"
                            aria-label="More Options" aria-controls="actionSheetPhone" aria-expanded="false"
                            aria-haspopup="true" onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                            <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>

            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
                </p>
            </div>
            <div class="fd-action-sheet__wrapper" id="actionSheetPhone">
                <h6 class="fd-action-sheet__title">Press cancel to hide action sheet</h6>
                <ul class="fd-action-sheet fd-action-sheet--mobile" role="list" aria-label="List of contextual options">
                    <li class="fd-action-sheet__item" role="listitem">
                        <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                            <i class="sap-icon--attachment"></i>
                            <span class="fd-button__text">Button 1</span>
                        </button>
                    </li>
                    <li class="fd-action-sheet__item" role="listitem">
                        <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                            <i class="sap-icon--add"></i>
                            <span class="fd-button__text">Button 2</span>
                        </button>
                    </li>
                    <li class="fd-action-sheet__item" role="listitem">
                        <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                            <i class="sap-icon--print"></i>
                            <span class="fd-button__text">Button 3</span>
                        </button>
                    </li>
                    <li class="fd-action-sheet__item" role="listitem">
                        <button class="fd-button fd-button--full-width fd-button--negative"
                                onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                            <span class="fd-button__text">Cancel</span>
                        </button>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
`;

Mobile.parameters = {
    docs: {
        description: {
            story: 'The feed list item can be mobile responsive by adding the `fd-feed-list--s` modifier class to the main element.'
        }
    }
};
