export default {
    title: 'Components/Feed List',
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
        components: ['feed-list', 'avatar', 'icon', 'button', 'menu', 'popover', 'link']
    }
};

export const standard = () => `
    <div class="fd-feed-list" aria-label="Feed List Item default example">
        <div class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb fd-feed-list__thumb--mode" 
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
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

standard.storyName = 'Standard';
standard.parameters = {
    docs: {
        storyDescription: 'The standard feed list item displays a user\'s name and written text, an image and an additional attribute (in this example, it is a time stamp).'
    }
};

export const placeHolderImage = () => `
    <div class="fd-feed-list" aria-label="Feed List Item placeholder user image example">
        <div class="fd-feed-list__body">
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
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

placeHolderImage.storyName = 'Placeholder image';
placeHolderImage.parameters = {
    docs: {
        storyDescription: 'The feed list item will display a placeholder image if the user does not have an image assigned.'
    }
};

export const noImage = () => `
    <div class="fd-feed-list" aria-label="Feed List Item without user image example">
        <div class="fd-feed-list__body">     
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

noImage.storyName = 'No image';
noImage.parameters = {
    docs: {
        storyDescription: 'The feed list item can be displayed without an image by removing the <code class="docs-code">fd-avatar</code> element from the container.'
    }
};

export const linked = () => `
    <div class="fd-feed-list" aria-label="Feed List Item with user link example">
        <div class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list--link fd-feed-list__thumb"  
                style="background-image: url(http://lorempixel.com/460/620/people/7/)"
                role="img" 
                aria-label="John Doe"
                title="John Doe"
            ></div>
                 
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    <span class="fd-feed-list__name">
                        <a href="#" class="fd-link fd-link--emphasized" tabindex="0">Joe Doe: </a> 
                    </span>
                    Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

linked.storyName = 'Linked';
linked.parameters = {
    docs: {
        storyDescription: 'The feed list item can display linked usernames (and images). To display a linked username, add the <code class="docs-code">fd-link</code> class with the <code class="docs-code">fd-link--emphasized</code> modifier to the <code class="docs-code">fd-feed-list__name element.</code>'
    }
};

export const showMore = () => `
    <div class="fd-feed-list" aria-label="Feed List Item with show more text example">
        <div class="fd-feed-list__body">
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
                    <a class="fd-feed-list__more" tabindex="0">More</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

showMore.storyName = 'Show more';
showMore.parameters = {
    docs: {
        storyDescription: 'Feed list items can display a <i>MORE</i> link that can show more text (when/if it is truncated). The link is subtly displayed in grey, and highlights when the user hovers over the feed. When hovering over the link, the text is highlighted and underlined.'
    }
};

export const showLess = () => `
    <div class="fd-feed-list" aria-label="Feed List Item with show less text example">
        <div class="fd-feed-list__body">
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
                    <a class="fd-feed-list__more" tabindex="0">LESS</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

showLess.storyName = 'Show less';
showLess.parameters = {
    docs: {
        storyDescription: 'Similarly, feed list items can display a <i>LESS</i> link that will revert the text back to when it was truncated.'
    }
};

export const withActions = () => `
    <div class="fd-feed-list" aria-label="Feed List Item with popover actions example">
        <div class="fd-feed-list__body">
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
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>          
        </div>
        
        <div class="feed-list__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-controls="pQqQR213" aria-haspopup="true" aria-expanded="true" aria-label="More">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="pQqQR213">
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--edit fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title fd-feed-list__title--icon">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--delete fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title fd-feed-list__title--icon">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--share-2 fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title fd-feed-list__title--icon">Share</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
         </div>
    </div>
`;

withActions.storyName = 'Actions';
withActions.parameters = {
    docs: {
        storyDescription: 'Feed list items can display actions that users can perform on their individual feed posts. These typically include actions like Edit and Delete, however, other actions can be displayed depending on the use case. It is recommended to display a maximum of 5 actions per post.'
    }
};

export const group = () => `
    <div class="fd-feed-list fd-feed-list--group" aria-label="Feed List Item group example">
        <div class="fd-feed-list__body">
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
                    <small class="fd-feed-list__footer--date">Aug 21, 2020</small>
                </div>
            </div>
       </div>
       
        <div class="fd-feed-list__body">
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
                    <small class="fd-feed-list__footer--date">Aug 22, 2020</small>
                </div>
            </div>     
        </div>
        
        <div class="fd-feed-list__body">
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
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
       </div>
    </div>
</div>
`;

group.storyName = 'Group';
group.parameters = {
    docs: {
        storyDescription: 'Evidently, feed list items can be displayed in a group. The example below displays a feed list item with a placeholder image and two standard feed list items.'
    }
};

export const mobile = () => `
    <div class="fd-feed-list fd-feed-list--s" aria-label="Feed List Item small size example">
        <div class="fd-feed-list__body">
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
                        <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                    </div>
                </div>
            </div>    
        
            <div class="fd-feed-list__content">
                <p class="fd-feed-list__text">
                    Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.
                </p>
            </div>
        </div> 
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
    <div class="fd-feed-list" aria-label="Feed List Item with RTL direction example">
        <div class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb" 
                style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
                role="img" 
                aria-label="John Doe"
                title="John Doe">    
            </div>
        
            <div dir="rtl" class="fd-feed-list__content">
                <p dir="rtl" class="fd-feed-list__text">
                    <span class="fd-feed-list__name">Joe Doe: </span>
                    <span>Suspendisse facilisis sed odio in mollis. Donec quis justo aliquam, porta justo a, accumsan lorem.</span>
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>          
        </div>
        
        <div class="feed-list__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent" aria-controls="pQqQR213" aria-haspopup="true" aria-expanded="true" aria-label="More">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="pQqQR213">
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--edit fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title fd-feed-list__title--icon">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--delete fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title fd-feed-list__title--icon">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--share-2 fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__title--icon">Share</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        storyDescription: 'The feed list item can display from right to left on the screen, so that it may be used internationally.'
    }
};
