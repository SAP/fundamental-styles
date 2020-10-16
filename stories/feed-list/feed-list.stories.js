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
        tags: ['f3', 'a11y', 'theme'],
        components: ['action-sheet', 'feed-list', 'avatar', 'icon', 'button', 'menu', 'popover', 'link']
    }
};

export const standard = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item default example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb"
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
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

standard.storyName = 'Standard';
standard.parameters = {
    docs: {
        storyDescription: 'The standard feed list item displays a user\'s name and written text, an image and an additional attribute (in this example, it is a time stamp).'
    }
};

export const placeHolderImage = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item placeholder user image example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb" 
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

placeHolderImage.storyName = 'Placeholder image';
placeHolderImage.parameters = {
    docs: {
        storyDescription: 'The feed list item will display a placeholder image if the user does not have an image assigned.'
    }
};

export const noImage = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item without user image example">
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

noImage.storyName = 'No image';
noImage.parameters = {
    docs: {
        storyDescription: 'The feed list item can be displayed without an image by removing the <code class="docs-code">fd-avatar</code> element from the container.'
    }
};

export const linked = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item with user link example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list--link fd-feed-list__thumb"  
                style="background-image: url(http://lorempixel.com/460/620/people/7/)"
                role="img" 
                aria-label="John Doe"
                title="John Doe"
                tabindex="0"
            ></div>
                 
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    <span class="fd-feed-list__name">
                        <a href="#" class="fd-link fd-link--emphasized">Joe Doe: </a> 
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

linked.storyName = 'Linked';
linked.parameters = {
    docs: {
        storyDescription: 'The feed list item can display linked usernames (and images). To display a linked username, add the <code class="docs-code">fd-link</code> class with the <code class="docs-code">fd-link--emphasized</code> modifier to the <code class="docs-code">fd-feed-list__name element.</code>'
    }
};

export const showMore = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item with show more text example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
                role="img" 
                aria-label="John Doe"
                title="John Doe"
            ></div>
                 
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vi...
                    <a class="fd-link fd-feed-list__link--more" tabindex="0">More</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                    <small class="fd-feed-list__footer--byline">Reply</small>
                </div>
            </div>
        </li>
    </ul>
`;

showMore.storyName = 'Show more';
showMore.parameters = {
    docs: {
        storyDescription: 'Feed list items can display a <i>MORE</i> link that can show more text (when/if it is truncated). When hovering over the link, the text is highlighted and underlined.'
    }
};

export const showLess = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item with show less text example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
                role="img" 
                aria-label="John Doe"
                title="John Doe"
            ></div>
                 
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vitae elementum elit est malesuada nunc. Maecenas eu risus posuere, volutpat justo in, ultricies sem
                    <a class="fd-link fd-feed-list__link--more" tabindex="0">Less</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                    <small class="fd-feed-list__footer--byline">Reply</small>
                </div>
            </div>
        </li>
    </ul>
`;

showLess.storyName = 'Show less';
showLess.parameters = {
    docs: {
        storyDescription: 'Similarly, feed list items can display a <i>LESS</i> link that will revert the text back to when it was truncated.'
    }
};

export const withActions = () => `
    <ul class="fd-feed-list" aria-label="Feed List Item with popover actions example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
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
                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="actionSheetDesktop">
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

withActions.storyName = 'Actions';
withActions.parameters = {
    docs: {
        storyDescription: 'Feed list items can display actions that users can perform on their individual feed posts. These typically include actions like Edit and Delete, however, other actions can be displayed depending on the use case. It is recommended to display a maximum of 5 actions per post.'
    }
};

export const group = () => `
    <ul class="fd-feed-list fd-feed-list--group" aria-label="Feed List Item group example">
        <li class="fd-feed-list__body">
            <div
                class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb" 
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
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
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
                class="fd-avatar fd-avatar--s fd-feed-list__thumb"
                style="background-image: url(http://lorempixel.com/460/620/people/9/)" 
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
</div>
`;

group.storyName = 'Group';
group.parameters = {
    docs: {
        storyDescription: 'Evidently, feed list items can be displayed in a group. The example below displays a feed list item with a placeholder image and two standard feed list items.'
    }
};

export const borderless = () => `
    <ul class="fd-feed-list fd-feed-list--group fd-feed-list--no-border" aria-label="Feed List Item group example">
        <li class="fd-feed-list__body">
            <div
                class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-list__thumb" 
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
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
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
                class="fd-avatar fd-avatar--s fd-feed-list__thumb"
                style="background-image: url(http://lorempixel.com/460/620/people/9/)" 
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
</div>
`;

borderless.storyName = 'Borderless group';
borderless.parameters = {
    docs: {
        storyDescription: 'The example below displays a feed list item without a separated border'
    }
};

export const mobile = () => `
<div style="width: 350px; height: 600px; position: relative">
    <ul class="fd-feed-list fd-feed-list--s" aria-label="Feed List Item small size example">
        <li class="fd-feed-list__body">
            <div style="display: flex; justify-content: space-between">
                <div style="display: flex">
                <div
                    class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                    style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
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
                <div class="fd-feed-list__action">
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

mobile.storyName = 'Mobile';
mobile.parameters = {
    docs: {
        storyDescription: 'The feed list item can be mobile responsive by adding the <code class="docs-code">fd-feed-list--s</code> modifier class to the main element.'
    }
};

export const rtl = () => `
<div dir="rtl">
    <ul class="fd-feed-list" aria-label="Feed List Item with RTL direction example">
        <li class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
                role="img" 
                aria-label="John Doe"
                title="John Doe">    
            </div>
        
            <div dir="rtl" class="fd-feed-list__content">
                <div class="fd-feed-list__actions">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <button class="fd-button fd-button--compact fd-button--transparent" 
                                    aria-label="More Options" aria-controls="actionSheetDesktop" aria-expanded="false" 
                                    aria-haspopup="true" onclick="onPopoverClick('actionSheetDesktop');">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="actionSheetDesktop">
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
            
                <p dir="rtl" class="fd-feed-list__text">
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    <span>Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.</span>
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                    <small class="fd-feed-list__footer--byline">Reply</small>
                </div>
            </div>          
        </li>
        
        
    </ul>
</div>
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        storyDescription: 'The feed list item can display from right to left on the screen, so that it may be used internationally.'
    }
};
