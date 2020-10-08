import '../../dist/feed-list.css';
import '../../dist/avatar.css';

export default {
    title: 'Components/Feed List',
    parameters: {
        description: 'The feed list item control displays unformatted text accompanied by an optional user image.',
        tags: ['f3', 'a11y', 'theme']
    }
};

export const standard = () => `
    <div class="fd-feed-list" aria-label="Feed List Item default example">
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
    </div>
`;

standard.storyName = 'Standard';
standard.parameters = {
    docs: {
        storyDescription: 'The standard feed list item'
    }
};

export const placeHolderImage = () => `
    <div class="fd-feed-list" aria-label="Feed List Item placeholder user image example">
        <div class="fd-feed-list__body">
            <div 
                class="fd-avatar fd-avatar--s fd-avatar--placeholder sap-icon--person-placeholder fd-feed-list__thumb" 
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

placeHolderImage.storyName = 'Placeholder User Image';
placeHolderImage.parameters = {
    docs: {
        storyDescription: 'The Feed list item with placeholder user image'
    }
};

export const withoutUserImage = () => `
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

withoutUserImage.storyName = 'Without User Image';
withoutUserImage.parameters = {
    docs: {
        storyDescription: 'The Feed list item without user image'
    }
};

export const withUserLink = () => `
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

withUserLink.storyName = 'With User link';
withUserLink.parameters = {
    docs: {
        storyDescription: 'The Feed list item with link'
    }
};

export const showMoreButton = () => `
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
                    <a class="fd-link fd-feed-list__more" tabindex="0">More</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

showMoreButton.storyName = 'Show More Button';
showMoreButton.parameters = {
    docs: {
        storyDescription: 'More Button'
    }
};

export const showLessButton = () => `
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
                    <a class="fd-link fd-feed-list__more" tabindex="0">LESS</a>        
                </p>
                
                <div class="fd-feed-list__footer">
                    <small class="fd-feed-list__footer--date">Aug 20, 2020</small>
                </div>
            </div>
        </div>
    </div>
`;

showLessButton.storyName = 'Show Less Button';
showLessButton.parameters = {
    docs: {
        storyDescription: 'Less Button'
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
                                    <i class="sap-icon sap-icon--edit fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--delete fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--share-2 fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Share</span>
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
        storyDescription: 'feed list item with actions'
    }
};

export const feedListGroup = () => `
    <div class="fd-feed-list fd-feed-list--group" aria-label="Feed List Item group example">
        <div class="fd-feed-list__body">
            <div
                class="fd-avatar fd-avatar--s fd-avatar--placeholder sap-icon--person-placeholder fd-feed-list__thumb" 
                role="img" 
                aria-label="John Doe"
                title="John Doe"
            ></div> 
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

feedListGroup.storyName = 'Group';
feedListGroup.parameters = {
    docs: {
        storyDescription: 'Group'
    }
};

export const small = () => `
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

small.storyName = 'Small';
small.parameters = {
    docs: {
        storyDescription: 'Mobile Responsive'
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
                                    <i class="sap-icon sap-icon--edit fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--delete fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a href="#" class="fd-menu__link">
                                    <i class="sap-icon sap-icon--share-2 fd-feed-list__thumb fd-feed-list__icon"></i>
                                    <span class="fd-menu__title fd-feed-list__icon-title">Share</span>
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
        storyDescription: 'RTL'
    }
};
