export default {
    title: 'Layouts/Page Footer',
    parameters: {
        description: `The Page Footer displays at the bottom of the page, and includes the links, icons and copy Right string.
        
##Usage
**Use Page Footer if:**

-	You want to add the page footer of the UI, which defines the bottom of the page.
-	You want to display list of action at the bottom of the screen.

**Do not use Page footer if:**

-	You want to display collection of links for menu listing actions at the bottom of the screen.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the <code>rtl</code> directive to the main element.`,
        tags: ['non-f3', 'a11y', 'theme'],
        components: ['bar', 'icon', 'form-label', 'link', 'page-footer']
    }
};

export const singleLineLink = () => `
<div class="fd-page-footer fd-page-footer--xl">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-1" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-2" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-link fd-page-footer__row--item" id="fd-link-3" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-link fd-page-footer__row--item" id="fd-link-4" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-link fd-page-footer__row--item" id="fd-link-5" href="/" title="Participant Team">Participant Team</a>
        </div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>
`;

singleLineLink.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription:
            'The Page Footer contains Image/logo, And list of links in the footer. It is responsive to tablet and mobile screen sizes.'
    }
};

export const MultiLineLink = () => `
<div class="fd-page-footer fd-page-footer--xl">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
		<div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-6" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-7" href="/" title="Security Disclosure">Security Disclosure</a>
		</div>
		<div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-8" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-9" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-10" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-11" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-12" href="/" title="Participant Team">Participant Team</a>
		</div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>
`;

MultiLineLink.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription:
            'The Page Footer contains Image/logo, And list of links in the footer. To apply multiline link, add the <code class="docs-code">fd-page-footer__row</code> modifier class to the container element.'
    }
};

export const ImageAndIconLink = () => `
<div class="fd-page-footer fd-page-footer--xl">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
		<div class="fd-page-footer__row">
			<a href="#" id="fd-link-13"  class="fd-page-footer__row--item fd-link" tabindex="0">
			<span class="sap-icon--download sap-icon--s"></span>
			 icon and link
			</a>
		</div>
		<div class="fd-page-footer__row">
			<a href="#" id="fd-link-14" class="fd-page-footer__row--item fd-page-footer__row--item--image fd-link" tabindex="0">
			<img src="https://picsum.photos/id/1021/50/50" alt="page footer clickable image link"/>
			image link
			</a>
			<a href="#" id="fd-link-15" class="fd-page-footer__row--item fd-page-footer__row--item--image fd-link" tabindex="0">
			<img src="https://picsum.photos/id/1021/50/50" alt="page footer clickable image link" />
			image link
			</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-16" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-17" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-18" href="/" title="Participant Team">Participant Team</a>
		</div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>
`;

ImageAndIconLink.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription:
            'Example of The Page Footer representing multiline link,and adding images in the code to represent the clickable images and multiline is achived by adding the <code class="docs-code">fd-page-footer__row</code> modifier class to the container element.'
    }
};

export const FooterWithDiffrentSize = () => `
<br>
<label class="fd-form-label">Page footer with 'xl' (Extra Large) size</label><br /><br />

<div class="fd-page-footer fd-page-footer--xl">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-19" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-20" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-21" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-22" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-23" href="/" title="Participant Team">Participant Team</a>
        </div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>

<br>
<label class="fd-form-label">Page footer with 'lg' (Large) size</label><br /><br />

<div class="fd-page-footer fd-page-footer--lg">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-24" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-25" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-26" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-27" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-28" href="/" title="Participant Team">Participant Team</a>
        </div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>


<br>
<label class="fd-form-label">Page footer with 'md' (Medium) size</label><br /><br />

<div class="fd-page-footer fd-page-footer--md">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-29" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-30" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-31" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-32" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-33" href="/" title="Participant Team">Participant Team</a>
        </div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>


<br>
<label class="fd-form-label">Page footer with 'sm' (Small) size</label><br /><br />
<div class="fd-page-footer fd-page-footer--sm">
	<div class="fd-page-footer__logo">	
		<img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"></img>
	</div>
	<div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
			<a class="fd-page-footer__row--item fd-link" id="fd-link-34" href="/" title="Supported Browser">Supported Browser</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-35" href="/" title="Security Disclosure">Security Disclosure</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-36" href="/" title="Privacy Statement">Privacy Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-37" href="/" title="Cookie Statement">Cookie Statement</a>
			<a class="fd-page-footer__row--item fd-link" id="fd-link-38" href="/" title="Participant Team">Participant Team</a>
        </div>
		<div class="fd-page-footer__text">
			<span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
		</div>
	</div>
</div>
`;

FooterWithDiffrentSize.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription:
            'Example of The Page Footer representing multiline lin, add the <code class="docs-code">--xl</code> <code class="docs-code">--lg</code> <code class="docs-code">--md</code> <code class="docs-code">--sm</code> size modifier class to the container element.'
    }
};
