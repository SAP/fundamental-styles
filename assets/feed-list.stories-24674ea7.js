var Y=Object.defineProperty,G=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var v=(l,a,t)=>a in l?Y(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,e=(l,a)=>{for(var t in a||(a={}))Q.call(a,t)&&v(l,t,a[t]);if(_)for(var t of _(a))V.call(a,t)&&v(l,t,a[t]);return l},s=(l,a)=>G(l,K(a));/* empty css                     *//* empty css               *//* empty css             *//* empty css               *//* empty css             *//* empty css                *//* empty css             */const Z=`<div style="width: 350px; height: 600px; position: relative">
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
`,$=`<ul class="fd-feed-list fd-feed-list--group fd-feed-list--no-border" aria-label="Feed List Item group example">
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.</span>
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.</span>
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.</span>
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>
</ul>
`,ee=` <ul class="fd-feed-list fd-feed-list--group" aria-label="Feed List Item group example">
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. </span>
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. </span>
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus.</span>
            </p>
            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
   </li>
</ul>
`,se=`<ul class="fd-feed-list" aria-label="Feed List Item with popover actions example">
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
                        <button class="fd-button fd-button--transparent"
                                aria-label="More Options" aria-controls="actionSheetDesktop" aria-expanded="false"
                                aria-haspopup="true" onclick="onPopoverClick('actionSheetDesktop');">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="actionSheetDesktop">
                        <ul class="fd-action-sheet" role="list" aria-label="List of contextual options">
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
`,ae=`<ul class="fd-feed-list" aria-label="Feed List Item with show less text example">
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
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vitae elementum elit est malesuada nunc. Maecenas eu risus posuere, volutpat justo in, ultricies sem</span>
                <a class="fd-link fd-feed-list__link--more" tabindex="0"><span class="fd-link__content">Less</span></a>
            </p>

            <div class="fd-feed-list__footer">
                <small class="fd-feed-list__footer--byline">Aug 20, 2020</small>
                <small class="fd-feed-list__footer--byline">Reply</small>
            </div>
        </div>
    </li>
</ul>
`,te=`<ul class='fd-feed-list' aria-label='Feed List Item with show more text example'>
    <li class='fd-feed-list__body'>
        <div
            class='fd-avatar fd-avatar--circle fd-avatar--s fd-avatar--thumbnail fd-feed-list__thumb'
            style='background-image: url(/assets/images/portraits/XL_Square_112x112_M6.png)'
            role='img'
            aria-label='John Doe'
            title='John Doe'
        ></div>

        <div class='fd-feed-list__content'>
            <p class='fd-feed-list__text'>
                <span class='fd-feed-list__name'>Joe Doe: </span>
                <span>Maecenas convallis velit quis felis dictum, in ultrices quam faucibus. Morbi tempor eu elit eu consequat. Sed at lorem a ex consequat pharetra. Etiam convallis odio at vulputate venenatis. In sit amet pharetra urna. Ut nulla nisi, porta at ligula a, elementum ullamcorper lectus. Suspendisse blandit, risus nec vestibulum volutpat, nulla neque rhoncus dolor, vitae rutrum lectus neque nec ligula. Maecenas pulvinar, ligula nec fringilla volutpat, urna quam rutrum tellus, vi...</span>
                <a class='fd-link fd-feed-list__link--more' tabindex='0'><span class='fd-link__content'>More</span></a>
            </p>

            <div class='fd-feed-list__footer'>
                <small class='fd-feed-list__footer--byline'>Aug 20, 2020</small>
                <small class='fd-feed-list__footer--byline'>Reply</small>
            </div>
        </div>
    </li>
</ul>
`,le=`<ul class="fd-feed-list" aria-label="Feed List Item with user link example">
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
`,ne=`<ul class="fd-feed-list" aria-label="Feed List Item without user image example">
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
`,ie=`<ul class="fd-feed-list" aria-label="Feed List Item placeholder user image example">
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
`,de=`<ul class="fd-feed-list" aria-label="Feed List Item default example">
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
`;const ve={title:"Components/Feed List and Item",parameters:{description:`The feed list displays feed list items that individually consist of a username, a written entry and an optional image. There is also a separate byline below that can contain a time stamp or an attribute in the form of free text.


##Usage
**Use the feed list if:**

-        You expect multiple instances, such as notes or feed entries.
-        The items in the feed list are homogenous.
-        A user needs to input small amounts of text without formatting.

**Do not use feed list if:**

-       The user needs to format the text (rich text editor).
-       You need only a single text box instance. Instead, use **Text Area**.
-       You want to display empty fields for the user to input feed entries. Instead, use **Feed Input**.
        `,tags:["f3","a11y","theme"]}},f=()=>de;f.parameters={docs:{description:{story:"The standard feed list item displays a user's name and written text, an image and an additional attribute (in this example, it is a time stamp)."}}};const n=()=>ie;n.storyName="Placeholder image";n.parameters={docs:{description:{story:"The feed list item will display a placeholder image if the user does not have an image assigned."}}};const i=()=>ne;i.storyName="No image";i.parameters={docs:{description:{story:"The feed list item can be displayed without an image by removing the `fd-avatar` element from the container."}}};const m=()=>le;m.parameters={docs:{description:{story:"The feed list item can display linked usernames (and images). To display a linked username, add the `fd-link` class with the `fd-link--emphasized` modifier to the `fd-feed-list__name` element."}}};const d=()=>te;d.storyName="Show more";d.parameters={docs:{description:{story:"Feed list items can display a <i>MORE</i> link that can show more text (when/if it is truncated). Truncation occurs when the text reaches 300 characters. When hovering over the link, the text is highlighted and underlined."}}};const o=()=>ae;o.storyName="Show less";o.parameters={docs:{description:{story:"Similarly, feed list items can display a <i>LESS</i> link that will revert the text back to when it was truncated."}}};const r=()=>se;r.storyName="Actions";r.parameters={docs:{description:{story:"Feed list items can display actions that users can perform on their individual feed posts. These typically include actions like <i>Edit</i> and <i>Delete</i>, however, other actions can be displayed depending on the use case. It is recommended to display a maximum of 5 actions per post."}}};const u=()=>ee;u.parameters={docs:{description:{story:"Evidently, feed list items can be displayed in a group. The example below displays a feed list item with a placeholder image and two standard feed list items."}}};const c=()=>$;c.storyName="Borderless group";c.parameters={docs:{description:{story:"When feed list items are displayed in a group, they are usually separated by borders. However, to remove the borders, add the `fd-feed-list--no-border` modifier class to the main element."}}};const p=()=>Z;p.parameters={docs:{description:{story:"The feed list item can be mobile responsive by adding the `fd-feed-list--s` modifier class to the main element."}}};var b,h,g;f.parameters=s(e({},f.parameters),{docs:s(e({},(b=f.parameters)==null?void 0:b.docs),{source:e({originalSource:"() => standardExampleHtml"},(g=(h=f.parameters)==null?void 0:h.docs)==null?void 0:g.source)})});var y,x,w;n.parameters=s(e({},n.parameters),{docs:s(e({},(y=n.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => placeHolderImageExampleHtml"},(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source)})});var S,q,D;i.parameters=s(e({},i.parameters),{docs:s(e({},(S=i.parameters)==null?void 0:S.docs),{source:e({originalSource:"() => noImageExampleHtml"},(D=(q=i.parameters)==null?void 0:q.docs)==null?void 0:D.source)})});var k,J,L;m.parameters=s(e({},m.parameters),{docs:s(e({},(k=m.parameters)==null?void 0:k.docs),{source:e({originalSource:"() => linkedExampleHtml"},(L=(J=m.parameters)==null?void 0:J.docs)==null?void 0:L.source)})});var M,E,I;d.parameters=s(e({},d.parameters),{docs:s(e({},(M=d.parameters)==null?void 0:M.docs),{source:e({originalSource:"() => showMoreExampleHtml"},(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source)})});var H,A,F;o.parameters=s(e({},o.parameters),{docs:s(e({},(H=o.parameters)==null?void 0:H.docs),{source:e({originalSource:"() => showLessExampleHtml"},(F=(A=o.parameters)==null?void 0:A.docs)==null?void 0:F.source)})});var R,T,j;r.parameters=s(e({},r.parameters),{docs:s(e({},(R=r.parameters)==null?void 0:R.docs),{source:e({originalSource:"() => withActionsExampleHtml"},(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.source)})});var P,N,X;u.parameters=s(e({},u.parameters),{docs:s(e({},(P=u.parameters)==null?void 0:P.docs),{source:e({originalSource:"() => groupExampleHtml"},(X=(N=u.parameters)==null?void 0:N.docs)==null?void 0:X.source)})});var B,z,C;c.parameters=s(e({},c.parameters),{docs:s(e({},(B=c.parameters)==null?void 0:B.docs),{source:e({originalSource:"() => borderlessExampleHtml"},(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source)})});var O,U,W;p.parameters=s(e({},p.parameters),{docs:s(e({},(O=p.parameters)==null?void 0:O.docs),{source:e({originalSource:"() => mobileExampleHtml"},(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source)})});const be=["Standard","PlaceHolderImage","NoImage","Linked","ShowMore","ShowLess","WithActions","Group","Borderless","Mobile"];export{c as Borderless,u as Group,m as Linked,p as Mobile,i as NoImage,n as PlaceHolderImage,o as ShowLess,d as ShowMore,f as Standard,r as WithActions,be as __namedExportsOrder,ve as default};
