export default {
    title: 'Patterns/Rich Text Editor',
    parameters: {
        description: `The rich-text-editor component is an opinionated composition of the **Toolbar**, **Toggle Button**, **Menu Button**, **Split Button**, **Select**, **Icon**, **Popover**, **Menu**, **List** and **Textarea** components.
	**Rich Text Editor (RTE)** The rich text editor  is a complex control for data input and editing. 
	It allows users to format the text and insert different types of elements within the text, such as images and hyperlinks.
	`,
        tags: ['f3', 'a11y', 'theme'],
        components: ['toolbar', 'button', 'button-split', 'menu', 'icon', 'list', 'popover', 'select', 'textarea']
    }
};
export const cozyMode = () => `
<div style="height:450px;overflow-y:hidden">
	  <div>
		<div class="fd-toolbar fd-toolbar--title fd-toolbar-active fd-toolbar--cozy">
		  <h4>RTE Title</h4>
		</div>
		<div class="fd-toolbar fd-toolbar--cozy">
		  <button class="fd-button " aria-label="bold text">
		  <i class="sap-icon--bold-text"></i>
		  </button>
		  <button class="fd-button fd-button--transparent" aria-label="italic text">
		  <i class="sap-icon--italic-text"></i>
		  </button>
		  <button class="fd-button fd-button--transparent" aria-label="underline text">
		  <i class="sap-icon--underline-text"></i>
		  </button>
		  <button class="fd-button fd-button--transparent" aria-label="text format">
		  <i class="sap-icon--text-formatting"></i>
		  </button>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <button aria-expanded="false" aria-haspopup="true" aria-label="allign-button"
				class="fd-button fd-button--menu fd-button--transparent"
				id="cozyAlign"
				aria-controls="h0C6A324" 
				toggleElAttrs('h0C6A324', ['aria-hidden']);
				toggleElAttrs('cozyAlign', ['aria-expanded']);
				tabindex="0" >
			  <i class="sap-icon--text-align-left"></i>
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </button>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A324">
			  <ul aria-activedescendant="cozySelectRTE-currentlyFocusedItem"  class="fd-list fd-list--dropdown" role="listbox">
				<li id="cozySelectRTE-currentlyFocusedItem" class="fd-list__item is-selected" role="option" aria-selected="true" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-left"></i>
				  <span class="fd-list__title"> Left Align</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-center"></i>
				  <span class="fd-list__title"> Center Align</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-right"></i>
				  <span class="fd-list__title"> Right Align</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="Paragraph" class="fd-select__control" id="cozyRTEParagraph" onclick="
				  toggleElAttrs('h0C6A325', ['aria-hidden']);
				  toggleElAttrs('cozyRTEParagraph', ['aria-expanded']);
				  " value="List Item " tabindex="0">
				<span class="fd-select__text-content">Paragraph</span>
				<span class="fd-button fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A325">
			  <ul aria-activedescendant="cozyRTEParagraph-currentlyFocusedItem" aria-label="Paragraph" class="fd-list fd-list--dropdown" role="listbox">
				<li id="cozyRTEParagraph-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 1</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 2</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 3</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 4</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 5</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 6 </span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="cozySelectCombobox" onclick="
				  toggleElAttrs('h0C6A326', ['aria-hidden']);
				  toggleElAttrs('cozySelectCombobox', ['aria-expanded']);
				  " value="Times New Roman" tabindex="0">
				<span class="fd-select__text-content">Times New Roman</span>
				<span class="fd-button fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A326">
			  <ul aria-activedescendant="cozySelectCombobox-currentlyFocusedItem" aria-label="select option" class="fd-list fd-list--dropdown" role="listbox">
				<li id="cozySelectCombobox-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Andale Mona</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial Black</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Book Antiqua</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Comic Sans MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Courier New</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Georgia</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Helvetica</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Impact</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Symbol</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Tahoma</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Terminal</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Times New Roman</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Trebuchet MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Verdana</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Webdings</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Wingdings</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="cozyRTEFontSize" onclick="
				  toggleElAttrs('h0C6A327', ['aria-hidden']);
				  toggleElAttrs('cozyRTEFontSize', ['aria-expanded']);
				  " value="List Item 1" tabindex="0">
				<span class="fd-select__text-content">10 pt</span>
				<span class="fd-button fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A327">
			  <ul aria-activedescendant="cozyRTEFontSize-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--dropdown" role="listbox">
				<li id="cozyRTEFontSize-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">8 pt</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">10 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">12 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">14 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">16 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">18 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">20 pt</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="cozyFontcolor" class="fd-button fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-label="button" aria-controls="t4c0o273" toggleElAttrs('t4c0o273', ['aria-hidden']);
			toggleElAttrs('cozyFontcolor', ['aria-expanded']);>
			  <svg xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 16 16" >
				<path d="M662.477,379.355h3.038l.806,2.7h1.163l-2.729-9h-1.518l-2.753,9h1.21Zm1.519-5.4,1.281,4.5h-2.586Z" transform="translate(-656.047 -373.055)" style="fill:var(--sapButton_IconColor)"/>
				<rect class="outline" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
				<rect class="fill" fill="red" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
			  </svg>
			</button>
			<button class="fd-button fd-button--transparent" aria-controls="t4c0o273" id="cozyFontcoloricon" toggleElAttrs('t4c0o273', ['aria-hidden']);
			toggleElAttrs('cozyFontcoloricon', ['aria-expanded']);  aria-haspopup="true" aria-expanded="false" aria-label="More"><i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o273">
			  <nav class="fd-menu">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="cozyBackgroundcolor" class="fd-button fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-controls="t4c0o274" toggleElAttrs('t4c0o274', ['aria-hidden']);
			toggleElAttrs('cozyBackgroundcolor', ['aria-expanded']); aria-label="button">
			<i class="sap-icon--color-fill"></i> 
			</button>
			<button class="fd-button fd-button--transparent" id="cozyBackgroundcoloricon" aria-controls="t4c0o274" toggleElAttrs('t4c0o274', ['aria-hidden']);
			toggleElAttrs('cozyBackgroundcoloricon', ['aria-expanded']); aria-haspopup="true" aria-expanded="false" aria-label="More"><i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o274">
			  <nav class="fd-menu">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <button class="fd-button fd-button--transparent" aria-label="bullet text">
		  <i class="sap-icon--bullet-text"></i>
		  </button>
		  <button class="fd-button fd-button--transparent" aria-label="numbered text">
		  <i class="sap-icon--numbered-text"></i>
		  </button>
		</div>
		<textarea aria-label="enter text" class="fd-textarea" cols="30" rows="15" id="textarea-1">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
	  </div>
	</div>
	`;

export const compactMode = () => `<div style="height:450px;overflow-y:hidden">
<div class="fd-docs-rich-text-editor">
	  <div class="fd-toolbar fd-toolbar--title fd-toolbar-active ">
		<h4>RTE Title</h4>
	  </div>
	  <div class="fd-toolbar">
		<button class="fd-button fd-button--transparent fd-button--compact" aria-label="bold text">
		<i class="sap-icon--bold-text"></i>
		</button>
		<button class="fd-button fd-button--compact fd-button--transparent" aria-label="Italic text">
		<i class="sap-icon--italic-text"></i>
		</button>
		<button class="fd-button fd-button--compact fd-button--transparent" aria-label="underline text">
		<i class="sap-icon--underline-text"></i>
		</button>
		<button class="fd-button fd-button--compact fd-button--transparent" aria-label="text format">
		<i class="sap-icon--text-formatting"></i>
		</button>
		<div class="fd-popover">
		  <div class="fd-popover__control">
			<button aria-expanded="false" aria-haspopup="true" aria-label="select-label"
			  class="fd-button fd-button--compact fd-button--menu fd-button--transparent" 
			  aria-controls="h0C6A328"
			  id="compactAllign"
			  toggleElAttrs('h0C6A328', ['aria-hidden']);
			  toggleElAttrs('compactAllign', ['aria-expanded']);
			  tabindex="0">
			<i class="sap-icon--text-align-left"></i>
			<i class="sap-icon--slim-arrow-down"></i> 
			</button>
		  </div>
		  <div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A328">
			<ul aria-activedescendant="compactSelectRTE-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
			  <li id="compactSelectRTE-currentlyFocusedItem" class="fd-list__item is-selected" role="option" aria-selected="true" tabindex="0">
				<span class="fd-list__thumbnail">
				<i class="sap-icon--text-align-left"></i>
				<span class="fd-list__title"> Left Align</span>
			  </li>
			  <li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				<span class="fd-list__thumbnail">
				<i class="sap-icon--text-align-center"></i>
				<span class="fd-list__title"> Center Align</span>
			  </li>
			  <li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				<span class="fd-list__thumbnail">
				<i class="sap-icon--text-align-right"></i>
				<span class="fd-list__title"> Right Align</span>
			  </li>
			</ul>
		  </div>
		</div>
		<div class="fd-popover">
		  <div class="fd-popover__control">
			<div class="fd-select fd-select--compact ">
			  <button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="compactRTEParagraph" onclick="
				toggleElAttrs('h0C6A329', ['aria-hidden']);
				toggleElAttrs('compactRTEParagraph', ['aria-expanded']);
				" value="List Item 1" tabindex="0">
			  <span class="fd-select__text-content">Paragraph</span>
			  <span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </span>
			  </button>
			</div>
		  </div>
		  <div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A329">
			<ul aria-activedescendant="compactRTEParagraph-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
			  <li id="compactRTEParagraph-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Select</span>
			  </li>
			  <li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				<span class="fd-list__title">Heading 1</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Heading 2</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Heading 3</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Heading 4</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Heading 5</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Heading 6 </span>
			  </li>
			</ul>
		  </div>
		</div>
		<div class="fd-popover">
		  <div class="fd-popover__control">
			<div class="fd-select fd-select--compact">
			  <button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="compactRTEFont" onclick="
				toggleElAttrs('h0C6A3211', ['aria-hidden']);
				toggleElAttrs('compactRTEFont', ['aria-expanded']);
				" value="Times New Roman" tabindex="0">
			  <span class="fd-select__text-content">Times New Roman</span>
			  <span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </span>
			  </button>
			</div>
		  </div>
		  <div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3211">
			<ul aria-activedescendant="cozySelectCombobox-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
			  <li id="cozySelectCombobox-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Select</span>
			  </li>
			  <li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				<span class="fd-list__title">Andale Mona</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Arial</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Arial Black</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Book Antiqua</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Comic Sans MS</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Courier New</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Georgia</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Helvetica</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Impact</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Symbol</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Tahoma</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Terminal</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Times New Roman</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Trebuchet MS</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Verdana</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Webdings</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">Wingdings</span>
			  </li>
			</ul>
		  </div>
		</div>
		<div class="fd-popover">
		  <div class="fd-popover__control">
			<div class="fd-select fd-select--compact">
			  <button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="compactRTEFontSize" onclick="
				toggleElAttrs('h0C6A3212', ['aria-hidden']);
				toggleElAttrs('compactRTEFontSize', ['aria-expanded']);
				" value="List Item 1" tabindex="0">
			  <span class="fd-select__text-content">10 pt</span>
			  <span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </span>
			  </button>
			</div>
		  </div>
		  <div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3212">
			<ul aria-activedescendant="compactRTEFontSize-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
			  <li id="compactRTEFontSize-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">8 pt</span>
			  </li>
			  <li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				<span class="fd-list__title">10 pt</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">12 pt</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">14 pt</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">16 pt</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">18 pt</span>
			  </li>
			  <li class="fd-list__item" role="option" tabindex="0">
				<span class="fd-list__title">20 pt</span>
			  </li>
			</ul>
		  </div>
		</div>
		<div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
		  <button class="fd-button fd-button--compact fd-button--transparent" id="compactRTEFontColor" aria-haspopup="true" aria-expanded="false" aria-label="button" aria-controls="t4c0o2736" toggleElAttrs('t4c0o2736', ['aria-hidden']);
		  toggleElAttrs('compactRTEFontColor', ['aria-expanded']);>
			<svg xmlns="http://www.w3.org/2000/svg" 
			  viewBox="0 0 16 16">
			  <path d="M662.477,379.355h3.038l.806,2.7h1.163l-2.729-9h-1.518l-2.753,9h1.21Zm1.519-5.4,1.281,4.5h-2.586Z" transform="translate(-656.047 -373.055)" style="fill:var(--sapButton_IconColor)"/>
			  <rect class="outline" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
			  <rect class="fill" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
			</svg>
		  </button>
		  <button id="compactRTEFontColorIcon" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o2736" aria-haspopup="true" aria-expanded="false" aria-label="More" toggleElAttrs('t4c0o2736', ['aria-hidden']);
		  toggleElAttrs('compactRTEFontColorIcon', ['aria-expanded']);>
		  <i class="sap-icon--slim-arrow-down"></i></button>
		  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o2736">
			<nav class="fd-menu fd-menu--compact">
			  <ul class="fd-menu__list fd-menu__list--no-shadow">
				<li class="fd-menu__item">
				  <a class="fd-menu__link" role="button" href="#">
				  <span class="fd-menu__title">Red</span>
				  </a>
				</li>
				<li class="fd-menu__item">
				  <a class="fd-menu__link" role="button" href="#">
				  <span class="fd-menu__title">Blue</span>
				  </a>
				</li>
			  </ul>
			</nav>
		  </div>
		</div>
		<div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
		  <button id="compactRTEBackgroundColor" class="fd-button fd-button--compact fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-controls="t4c0o275" aria-label="button" toggleElAttrs('t4c0o275', ['aria-hidden']);
		  toggleElAttrs('compactRTEBackgroundColor', ['aria-expanded']); >
		  <i class="sap-icon--color-fill"></i> 
		  </button>
		  <button id="compactRTEBackgroundColorIcon"class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o275" aria-haspopup="true" aria-expanded="false" aria-label="More" toggleElAttrs('t4c0o275', ['aria-hidden']);
		  toggleElAttrs('compactRTEBackgroundColorIcon', ['aria-expanded']);><i class="sap-icon--slim-arrow-down"></i></button>
		  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o275">
			<nav class="fd-menu fd-menu--compact">
			  <ul class="fd-menu__list fd-menu__list--no-shadow">
				<li class="fd-menu__item">
				  <a class="fd-menu__link" role="button" href="#">
				  <span class="fd-menu__title">Red</span>
				  </a>
				</li>
				<li class="fd-menu__item">
				  <a class="fd-menu__link" role="button" href="#">
				  <span class="fd-menu__title">Blue</span>
				  </a>
				</li>
			  </ul>
			</nav>
		  </div>
		</div>
		<button class="fd-button fd-button--compact fd-button--transparent" aria-label="bullet text">
		<i class="sap-icon--bullet-text"></i>
		</button>
		<button class="fd-button fd-button--compact fd-button--transparent" aria-label="numbered text">
		<i class="sap-icon--numbered-text"></i>
		</button>
	  </div>
	  <textarea  aria-label="enter text" class="fd-textarea" cols="30" rows="15" id="textarea-2">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
	</div>
	`;

export const overFlowRTE = () => `
	<div style="height:450px;overflow-y:hidden">
	  <div class="fd-docs-rich-text-editor">
		<div class="fd-toolbar fd-toolbar--title fd-toolbar-active ">
		  <h4>RTE Title</h4>
		</div>
		<div class="fd-toolbar">
		  <button class="fd-button fd-button--transparent fd-button--compact" aria-label="bold text">
		  <i class="sap-icon--bold-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="italic text">
		  <i class="sap-icon--italic-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="underline text">
		  <i class="sap-icon--underline-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="text format">
		  <i class="sap-icon--text-formatting"></i>
		  </button>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <button aria-expanded="false" aria-haspopup="true" aria-label="select-label"
				class="fd-button fd-button--compact fd-button--menu fd-button--transparent" 
				aria-controls="h0C6A3219"
				tabindex="0" 
				toggleElAttrs('h0C6A3219', ['aria-hidden']);
				toggleElAttrs('overflowAllign', ['aria-expanded']);>
			  <i class="sap-icon--text-align-left"></i>
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </button>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3219">
			  <ul aria-activedescendant="compactSelectRTE-currentlyFocusedItem" aria-label="select-label" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="compactSelectRTE-currentlyFocusedItem" class="fd-list__item is-selected" role="option" aria-selected="true" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-left"></i>
				  <span class="fd-list__title"> Left Align</span>
				</li>
				<li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-center"></i>
				  <span class="fd-list__title"> Center Align</span>
				</li>
				<li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-right"></i>
				  <span class="fd-list__title"> Right Align</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact ">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="overflowRTEParagraph" onclick="
				  toggleElAttrs('h0C6A3214', ['aria-hidden']);
				  toggleElAttrs('overflowRTEParagraph', ['aria-expanded']);
				  " value="List Item 1" tabindex="0">
				<span class="fd-select__text-content">Paragraph</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3214">
			  <ul aria-activedescendant="overflowRTEParagraph-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEParagraph-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 1</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 2</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 3</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 4</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 5</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 6 </span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="overflowRTEFont" onclick="
				  toggleElAttrs('h0C6A3215', ['aria-hidden']);
				  toggleElAttrs('overflowRTEFont', ['aria-expanded']);
				  " value="Times New Roman" tabindex="0">
				<span class="fd-select__text-content">Times New Roman</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3215">
			  <ul aria-activedescendant="overflowRTEFont-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEFont-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Andale Mona</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial Black</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Book Antiqua</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Comic Sans MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Courier New</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Georgia</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Helvetica</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Impact</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Symbol</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Tahoma</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Terminal</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Times New Roman</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Trebuchet MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Verdana</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Webdings</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Wingdings</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="overflowRTEFontSize" onclick="
				  toggleElAttrs('h0C6A3216', ['aria-hidden']);
				  toggleElAttrs('overflowRTEFontSize', ['aria-expanded']);
				  " value="List Item 1" tabindex="0">
				<span class="fd-select__text-content">10 pt</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3216">
			  <ul aria-activedescendant="overflowRTEFontSize-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEFontSize-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">8 pt</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">10 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">12 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">14 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">16 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">18 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">20 pt</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="overflowRTEfontcolor"class="fd-button fd-button--compact fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-label="button" aria-controls="t4c0o2737" 
			toggleElAttrs('t4c0o2737', ['aria-hidden']);
			toggleElAttrs('overflowRTEfontcolor', ['aria-expanded']);>
			  <svg xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 16 16">
				<path d="M662.477,379.355h3.038l.806,2.7h1.163l-2.729-9h-1.518l-2.753,9h1.21Zm1.519-5.4,1.281,4.5h-2.586Z" transform="translate(-656.047 -373.055)" style="fill:var(--sapButton_IconColor)"/>
				<rect class="outline" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
				<rect class="fill" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
			  </svg>
			</button>
			<button id="overflowRTEfontcolorIcon" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o2737" aria-haspopup="true" aria-expanded="false" aria-label="More" 
			toggleElAttrs('t4c0o2737', ['aria-hidden']);
			toggleElAttrs('overflowRTEfontcolorIcon', ['aria-expanded']);><i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o2737">
			  <nav class="fd-menu fd-menu--compact">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="overflowRTEbackgroundcolor" class="fd-button fd-button--compact fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-controls="t4c0o276" aria-label="button"
			toggleElAttrs('t4c0o276', ['aria-hidden']);
			toggleElAttrs('overflowRTEbackgroundcolor', ['aria-expanded']);>
			<i class="sap-icon--color-fill"></i> 
			</button>
			<button id="overflowRTEbackgroundcolorIcon" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o276" aria-haspopup="true" aria-expanded="false" aria-label="More" 
			toggleElAttrs('t4c0o276', ['aria-hidden']);
			toggleElAttrs('overflowRTEbackgroundcolorIcon', ['aria-expanded']);><i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o276">
			  <nav class="fd-menu fd-menu--compact">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bullet text">
		  <i class="sap-icon--bullet-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="numbered text">
		  <i class="sap-icon--numbered-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bold text">
		  <i class="sap-icon--chain-link"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bold text">
		  <i class="sap-icon--indent"></i>
		  </button>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <button class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o2739" aria-haspopup="true" aria-expanded="false" aria-label="More"
			  toggleElAttrs('t4c0o2739', ['aria-hidden']);
			  toggleElAttrs('overflowRTEbackgroundcolorIcon', ['aria-expanded']); >
			  <i class="sap-icon--overflow"></i></button>
			  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o2739">
				<nav class="fd-menu fd-menu--compact">
				  <ul class="fd-menu__list">
					<li class="fd-menu__item">
					  <a class="fd-menu__link" role="button" href="#">
					  <span class="fd-menu__addon-before"><i class="sap-icon--save"></i></span>
					  <span class="fd-menu__title">Save</span>
					  </a>
					</li>
					<li class="fd-menu__item">
					  <a class="fd-menu__link" role="button" href="#">
					  <span class="fd-menu__addon-before"><i class="sap-icon--edit"></i></span>
					  <span class="fd-menu__title">Edit</span>
					  </a>
					</li>
				  </ul>
				</nav>
			  </div>
			</div>
		  </div>
		</div>
		<textarea  aria-label="enter text" class="fd-textarea" cols="30" rows="15" id="textarea-3">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
	  </div>
	</div>
	`;

export const overFlowRTEWithSolidToolBar = () => `
	<div style="height:450px;overflow-y:hidden">
	  <div class="fd-docs-rich-text-editor" style="background-color: #00000012;">
		<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active ">
		  <h4>RTE Title</h4>
		</div>
		<div class="fd-toolbar fd-toolbar--solid">
		  <button class="fd-button fd-button--transparent fd-button--compact" aria-label="bold text">
		  <i class="sap-icon--bold-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="italic text">
		  <i class="sap-icon--italic-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="underline text">
		  <i class="sap-icon--underline-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="text format">
		  <i class="sap-icon--text-formatting"></i>
		  </button>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <button aria-expanded="false" aria-haspopup="true" aria-label="select-label"
				class="fd-button fd-button--compact fd-button--menu fd-button--transparent" 
				aria-controls="h0C6A3213"
				id="solidToolbarRTEAlign"
				toggleElAttrs('h0C6A3213', ['aria-hidden']);
				  toggleElAttrs('solidToolbarRTEAlign', ['aria-expanded']);
				tabindex="0">
			  <i class="sap-icon--text-align-left"></i>
			  <i class="sap-icon--slim-arrow-down"></i> 
			  </button>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3213">
			  <ul aria-activedescendant="compactSelectRTE-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="compactSelectRTE-currentlyFocusedItem" class="fd-list__item is-selected" role="option" aria-selected="true" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-left"></i>
				  <span class="fd-list__title"> Left Align</span>
				</li>
				<li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-center"></i>
				  <span class="fd-list__title"> Center Align</span>
				</li>
				<li class="fd-list--compact fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__thumbnail">
				  <i class="sap-icon--text-align-right"></i>
				  <span class="fd-list__title"> Right Align</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact ">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="solidToolbarRTEParagraph" onclick="
				  toggleElAttrs('h0C6A3220', ['aria-hidden']);
				  toggleElAttrs('solidToolbarRTEParagraph', ['aria-expanded']);
				  " value="List Item 1" tabindex="0">
				<span class="fd-select__text-content">Paragraph</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3220">
			  <ul aria-activedescendant="overflowRTEParagraph-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEParagraph-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 1</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 2</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 3</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 4</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 5</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Heading 6 </span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="solidToolbarRTEFont" onclick="
				  toggleElAttrs('h0C6A3218', ['aria-hidden']);
				  toggleElAttrs('solidToolbarRTEFont', ['aria-expanded']);
				  " value="Times New Roman" tabindex="0">
				<span class="fd-select__text-content">Times New Roman</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3218">
			  <ul aria-activedescendant="overflowRTEFont-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEFont-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Select</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">Andale Mona</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Arial Black</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Book Antiqua</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Comic Sans MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Courier New</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Georgia</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Helvetica</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Impact</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Symbol</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Tahoma</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Terminal</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Times New Roman</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Trebuchet MS</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Verdana</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Webdings</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">Wingdings</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <div class="fd-select fd-select--compact">
				<button aria-expanded="false" aria-haspopup="listbox" aria-label="select-label" class="fd-select__control" id="solidToolbarRTEFontSize" onclick="
				  toggleElAttrs('h0C6A3217', ['aria-hidden']);
				  toggleElAttrs('solidToolbarRTEFontSize', ['aria-expanded']);
				  " value="List Item 1" tabindex="0">
				<span class="fd-select__text-content">10 pt</span>
				<span class="fd-button fd-button--compact fd-button--transparent fd-select__button">
				<i class="sap-icon--slim-arrow-down"></i> 
				</span>
				</button>
			  </div>
			</div>
			<div aria-hidden="true" class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" id="h0C6A3217">
			  <ul aria-activedescendant="overflowRTEFontSize-currentlyFocusedItem" aria-label="select-option" class="fd-list fd-list--compact fd-list--dropdown" role="listbox">
				<li id="overflowRTEFontSize-currentlyFocusedItem" class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">8 pt</span>
				</li>
				<li aria-selected="true" class="fd-list__item is-selected" role="option" tabindex="0">
				  <span class="fd-list__title">10 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">12 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">14 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">16 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">18 pt</span>
				</li>
				<li class="fd-list__item" role="option" tabindex="0">
				  <span class="fd-list__title">20 pt</span>
				</li>
			  </ul>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="solidToolbarRTEFontColor" class="fd-button fd-button--compact fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-label="button" aria-controls="t4c0o2738" 
			toggleElAttrs('t4c0o2738', ['aria-hidden']);
			toggleElAttrs('solidToolbarRTEFontColor', ['aria-expanded']);>
			  <svg xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 16 16">
				<path d="M662.477,379.355h3.038l.806,2.7h1.163l-2.729-9h-1.518l-2.753,9h1.21Zm1.519-5.4,1.281,4.5h-2.586Z" transform="translate(-656.047 -373.055)" style="fill:var(--sapButton_IconColor)"/>
				<rect class="outline" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
				<rect class="fill" x="1" y="12" width="14" height="3" rx="0.2" ry="0.2"/>
			  </svg>
			</button>
			<button id="solidToolbarRTEFontColorIcon" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o2738" aria-haspopup="true" aria-expanded="false" aria-label="More"
			toggleElAttrs('t4c0o2738', ['aria-hidden']);
			toggleElAttrs('solidToolbarRTEFontColorIcon', ['aria-expanded']);
			><i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o2738">
			  <nav class="fd-menu fd-menu--compact">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <div class="fd-button-split fd-button-split--compact fd-button-split--transparent fd-has-margin-right-small" role="group" aria-label="button-split">
			<button id="solidToolbarRTEBackgroundColor"  class="fd-button fd-button--compact fd-button--transparent" aria-haspopup="true" aria-expanded="false" aria-controls="t4c0o278" aria-label="button" toggleElAttrs('t4c0o278', ['aria-hidden']);
			toggleElAttrs('solidToolbarRTEBackgroundColor', ['aria-expanded']);>
			<i class="sap-icon--color-fill"></i> 
			</button>
			<button id="solidToolbarRTEBackgroundColorIcon" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o278" aria-haspopup="true" aria-expanded="false" aria-label="More" toggleElAttrs('t4c0o278', ['aria-hidden']);
			toggleElAttrs('solidToolbarRTEBackgroundColorIcon', ['aria-expanded']);>
			<i class="sap-icon--slim-arrow-down"></i></button>
			<div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o278">
			  <nav class="fd-menu fd-menu--compact">
				<ul class="fd-menu__list fd-menu__list--no-shadow">
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Red</span>
					</a>
				  </li>
				  <li class="fd-menu__item">
					<a class="fd-menu__link" role="button" href="#">
					<span class="fd-menu__title">Blue</span>
					</a>
				  </li>
				</ul>
			  </nav>
			</div>
		  </div>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bullet text">
		  <i class="sap-icon--bullet-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="numbered text">
		  <i class="sap-icon--numbered-text"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bold text">
		  <i class="sap-icon--chain-link"></i>
		  </button>
		  <button class="fd-button fd-button--compact fd-button--transparent" aria-label="bold text">
		  <i class="sap-icon--indent"></i>
		  </button>
		  <div class="fd-popover">
			<div class="fd-popover__control">
			  <button id="solidToolbarRTEOverFlow" class="fd-button fd-button--compact fd-button--transparent" aria-controls="t4c0o2740" aria-haspopup="true" aria-expanded="false" aria-label="More"toggleElAttrs('t4c0o2740', ['aria-hidden']);
			  toggleElAttrs('solidToolbarRTEOverFlow', ['aria-expanded']);><i class="sap-icon--overflow"></i></button>
			  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="t4c0o2740">
				<nav class="fd-menu fd-menu--compact">
				  <ul class="fd-menu__list">
					<li class="fd-menu__item">
					  <a class="fd-menu__link" role="button" href="#">
					  <span class="fd-menu__addon-before"><i class="sap-icon--save"></i></span>
					  <span class="fd-menu__title">Save</span>
					  </a>
					</li>
					<li class="fd-menu__item">
					  <a class="fd-menu__link" role="button" href="#">
					  <span class="fd-menu__addon-before"><i class="sap-icon--edit"></i></span>
					  <span class="fd-menu__title">Edit</span>
					  </a>
					</li>
				  </ul>
				</nav>
			  </div>
			</div>
		  </div>
		</div>
		<textarea  aria-label="enter text" class="fd-textarea" cols="30" rows="15" id="textarea-4">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc.</textarea>
	  </div>
	</div>
`;
