import '../../../src/input.scss';
import '../../../src/form-label.scss';
import '../../../src/form-item.scss';
import '../../../src/form-message.scss';
import '../../../src/popover.scss';
import '../../../src/radio.scss';
import '../../../src/title.scss';
import '../../../src/token.scss';
import '../../../src/tokenizer.scss';
import '../../../src/input-group.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/link.scss';
import '../../../src/menu.scss';
export default {
    title: 'Patterns/Multi Input',
    parameters: {
        description: `
Multi Input allows users to enter multiple values which are displayed as a tokens. It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
If the entries are not validated by the application, users can also enter custom values.

##Usage

**Use the multi input if:**

- You want the user to select multiple ranges.
- The dataset to choose from is expected to increase over time.
- You need to provide the value help option to help users select or search multiple business objects.
- You want to enable users to add custom values.

`,
        tags: ['f3', 'a11y', 'theme'],
        components: [
            'input',
            'form-label',
            'form-item',
            'form-message',
            'popover',
            'radio',
            'title',
            'token',
            'tokenizer',
            'input-group',
            'checkbox',
            'list',
            'button',
            'icon',
            'bar',
            'dialog',
            'link',
            'menu'
        ]
    }
};

export const CozyAndCompact = () => `<div style="display:flex;height:310px">
    <div style="display:flex;flex-direction:column;padding-right:1rem">
        <label for="cozyMultiInput" class="fd-form-label">
            Multi Input Cozy Mode
        </label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348a1" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <div class="fd-tokenizer">
                        <div class="fd-tokenizer__inner">
                            <span class="fd-token" tabindex="0" role="button">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button aria-label="unselect option: apple" class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" tabindex="0" role="button">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button aria-label="unselect option: orange" class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" tabindex="0" role="button">
                                <span class="fd-token__text">
                                    Kiwi
                                </span>
                                <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" tabindex="0" role="button">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button aria-label="unselect option: banana" class="fd-token__close"></button>
                            </span>
                            <input id="cozyMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button
                            aria-label="show options"
                            aria-controls="F4GcX348a1"
                            aria-expanded="true"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--value-help"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a1">
            <div class="fd-popover__wrapper">
                <ul
                    aria-label="list of fruits"
                    aria-multiselectable="true"
                    class="fd-list fd-list--multi-input"
                    role="listbox">
					<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox" id="Ai4ez611" checked aria-labelledby="Az0bg2">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez611"></label>
						</div>
						<span class="fd-list__title" id="Az0bg2">Apple</span>
					</li>

					<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked aria-labelledby="Az0bg21">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez12"></label>
						</div>
						<span class="fd-list__title" id="Az0bg21">Orange</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox" id="Ai4ez6s13" checked aria-labelledby="Az0bg22">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6s13"></label>
						</div>
						<span class="fd-list__title" id="Az0bg22">Banana</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox" id="Ai4ez614" aria-labelledby="Az0bg23">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez614"></label>
						</div>
						<span class="fd-list__title" id="Az0bg23">Kiwi</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox" id="Ai4ez615" aria-labelledby="Az0bg24">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez615"></label>
						</div>
						<span class="fd-list__title" id="Az0bg24">Lemon</span>
					</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    <div style="display:flex;flex-direction:column">
        <label for="compactMultiInput" class="fd-form-label">
            Multi Input Compact Mode
        </label>

        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX34a" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <div class="fd-tokenizer fd-tokenizer--compact">
                        <div class="fd-tokenizer__inner">
                            <span tabindex="0" class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button aria-label="unselect option: apple" class="fd-token__close"></button>
                            </span>
                            <span tabindex="0" class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button aria-label="unselect option: orange" class="fd-token__close"></button>
                            </span>
                            <span tabindex="0" class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button aria-label="unselect option: banana" class="fd-token__close"></button>
                            </span>
                            <input id="compactMultiInput" class="fd-input fd-input-group__input fd-input--compact fd-tokenizer__input" />
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button
                            aria-label="show options"
                            aria-controls="F4GcX34a"
                            aria-expanded="false"
                            aria-haspopup="true"
                            class="fd-input-group__button fd-button fd-button--transparent fd-button--compact">
                            <i class="sap-icon--value-help"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX34a">
            <div class="fd-popover__wrapper">
                <ul
                    aria-label="list of fruits"
                    aria-multiselectable="true"
                    class="fd-list fd-list--multi-input fd-list--compact"
                    role="listbox">
                   	<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez616" checked aria-labelledby="Az0bg25">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez616"></label>
						</div>
						<span class="fd-list__title" id="Az0bg25">Apple</span>
					</li>

					<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez617" checked aria-labelledby="Az0bg26">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez617"></label>
						</div>
						<span class="fd-list__title" id="Az0bg26">Orange</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez61a3" checked aria-labelledby="Az0bg2a">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61a3"></label>
						</div>
						<span class="fd-list__title" id="Az0bg2a">Banana</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez618" aria-labelledby="Az0bg27">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez618"></label>
						</div>
						<span class="fd-list__title" id="Az0bg27">Kiwi</span>
					</li>
					<li role="option" tabindex="0" class="fd-list__item">
						<div class="fd-form-item fd-list__form-item">
							<input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez619" aria-labelledby="Az0bg28">
							<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez619"></label>
						</div>
						<span class="fd-list__title" id="Az0bg28">Lemon</span>
					</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>
`;

CozyAndCompact.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The multi-input component is a composition of 
        the \`input group\`, \`popover\`, \`checkbox\`, \`list\` and \`token\` components.  It can be displayed in compact mode by adding
         the \`--compact\` modifier class to the building blocks of the components.
        `
        }
    }
};

export const AsFormItem = () => `<div style="height:310px">
    <div class="fd-form-item">
    <label for="formItemMultiInput" class="fd-form-label">
        Multi Input as form item
    </label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button aria-label="unselect option: apple" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button aria-label="unselect option: orange" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button aria-label="unselect option: banana" class="fd-token__close"></button>
                        </span>
                        <input id="formItemMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button aria-label="show options" class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
        <div class="fd-popover__wrapper">
            <ul aria-multiselectable="true" role="listbox" aria-label="list of fruits" class="fd-list fd-list--multi-input">
				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez620" checked aria-labelledby="Az0bg30">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4e20"></label>
					</div>
					<span class="fd-list__title" id="Az0bg30">Apple</span>
				</li>

				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez621" checked aria-labelledby="Az0bg31">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez621"></label>
					</div>
					<span class="fd-list__title" id="Az0bg31">Orange</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez622" checked aria-labelledby="Az0bg32">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez622"></label>
					</div>
					<span class="fd-list__title" id="Az0bg32">Banana</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez623" aria-labelledby="Az0bg33">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez623"></label>
					</div>
					<span class="fd-list__title" id="Az0bg33">Kiwi</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez624" aria-labelledby="Az0bg34">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez624"></label>
					</div>
					<span class="fd-list__title" id="Az0bg34">Lemon</span>
				</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</div>
`;

AsFormItem.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
        }
    }
};

export const Grouping = () => `<div style="height:450px">
    <label for="fruitsAndVegsMultiInput" class="fd-form-label">
    Fruits and Vegetables
    </label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4H8X34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button aria-label="unselect option: apple" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button aria-label="unselect option: orange" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span>
                        <input id="fruitsAndVegsMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button aria-label="show options" class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4H8X34a">
        <div class="fd-popover__wrapper">
            <h3 id="fruitListHeader" class="fd-list__group-header">
                <span class="fd-list__title">Fruits</span>
            </h3>
            <ul aria-multiselectable="true" role="listbox" aria-labelledby="fruitListHeader" class="fd-list fd-list--multi-input">
               <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez625" checked aria-labelledby="Az0bg35">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez625"></label>
					</div>
					<span class="fd-list__title" id="Az0bg35">Apple</span>
				</li>

				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez626" checked aria-labelledby="Az0bg36">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez626"></label>
					</div>
					<span class="fd-list__title" id="Az0bg36">Orange</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez627" checked aria-labelledby="Az0bg37">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez627"></label>
					</div>
					<span class="fd-list__title" id="Az0bg37">Banana</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez628" aria-labelledby="Az0bg38">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez628"></label>
					</div>
					<span class="fd-list__title" id="Az0bg38">Kiwi</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez629" aria-labelledby="Az0bg39">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez629"></label>
					</div>
					<span class="fd-list__title" id="Az0bg39">Lemon</span>
				</li>
            </ul>
            <label class="fd-list__group-header" id="selectMultipleVegsLabel">
                <span class="fd-list__title">Vegetables</span>
            </label>
            <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-labelledby="selectMultipleVegsLabel">
 				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez630" checked aria-labelledby="Az0bg40">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez630"></label>
					</div>
					<span class="fd-list__title" id="Az0bg40">Onion</span>
				</li>

				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez631" checked aria-labelledby="Az0bg41">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez632"></label>
					</div>
					<span class="fd-list__title" id="Az0bg41">Tomato</span>
				</li>
            </ul>
        </div>
        </div>
    </div>
</div>
`;

Grouping.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story:
            'In cases where the list items need to be categorized into groups, it is possible to add headers for each category as seen below.'
        }
    }
};

export const MatchPopoverBodySize = () => `<div style="height:270px">
    <label for="matchPopoverBodySizeMultiInput" class="fd-form-label">
    Fruits
    </label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4HGFHX34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button aria-label="unselect option: apple" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button aria-label="unselect option: orange" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span>
                        <input id="matchPopoverBodySizeMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button aria-label="show options" class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4HGFHX34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HGFHX34a">
        <div class="fd-popover__wrapper">
            <ul aria-multiselectable="true" role="listbox" aria-label="list of fruits" class="fd-list fd-list--multi-input">
        		<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez633" checked aria-labelledby="Az0bg42">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez633"></label>
					</div>
					<span class="fd-list__title" id="Az0bg42">Apple</span>
				</li>

				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez634" checked aria-labelledby="Az0bg43">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez634"></label>
					</div>
					<span class="fd-list__title" id="Az0bg43">Orange</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez635" checked aria-labelledby="Az0bg44">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez635"></label>
					</div>
					<span class="fd-list__title" id="Az0bg44">Banana</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez636" aria-labelledby="Az0bg45">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez636"></label>
					</div>
					<span class="fd-list__title" id="Az0bg45">Kiwi</span>
				</li>
				<li role="option" tabindex="0" class="fd-list__item">
					<div class="fd-form-item fd-list__form-item">
						<input type="checkbox" class="fd-checkbox" id="Ai4ez637" aria-labelledby="Az0bg46">
						<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez637"></label>
					</div>
					<span class="fd-list__title" id="Az0bg46">Lemon</span>
				</li>
            </ul>
        </div>
        </div>
    </div>
</div>
`;

MatchPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.

This class has been added to all the \`Multi Input\` examples above.
In the example you can see how the \`Multi Input\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
        }
    }
};

export const ReadOnlyAndDisabled = () => `<div style="display:flex;height:250px;margin-top:1em;">
    <div>
        <div style="margin-bottom:1em;">
            <div>
                <label for="disabledMultiInput" class="fd-form-label">
                    Latin Words (Disabled)
                </label>
                <div class="fd-popover" style="display:flex;flex-direction:column">
                    <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
                        <div class="fd-input-group fd-input-group--control"  aria-disabled="true" disabled>
                            <div class="fd-tokenizer">
                                <div class="fd-tokenizer__inner">
                                    <span class="fd-token fd-token--readonly" role="button">
                                        <span class="fd-token__text">
                                            Bibendum
                                        </span>
                                    </span>
                                    <span class="fd-token fd-token--readonly" role="button">
                                        <span class="fd-token__text">
                                            Lorem
                                        </span>
                                    </span>
                                    <span class="fd-token fd-token--readonly" role="button">
                                        <span class="fd-token__text">
                                            Dolor
                                        </span>
                                    </span>
                                    <span class="fd-token fd-token--readonly" role="button">
                                        <span class="fd-token__text">
                                            Filter
                                        </span>
                                    </span>
                                    <span class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Lorem
                                        </span>
                                    </span>
                                    <span class="fd-tokenizer__indicator">
                                        <div class="fd-popover">
                                            <div
                                                class="fd-popover__control fd-input-group__control"
                                                aria-controls="F4GcX34Xa"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                                onclick="onPopoverClick('F4GcX34Xa');">
                                                <a class="fd-link">
                                                    <span class="fd-link__content">2 more</span>
                                                </a>
                                            </div>
                                            <div class="fd-popover__body" aria-hidden="true" id="F4GcX34Xa">
                                                <nav class="fd-menu" id="">
                                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                        <li class="fd-menu__item">
                                                            <a tabindex="-1"  href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Consectetur</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a tabindex="-1" href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Adipiscing</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </span>
                                    <input disabled id="disabledMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                                </div>
                            </div>
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="show options" tabindex="-1" class="fd-input-group__button fd-button fd-button--transparent">
                                    <i class="sap-icon--value-help"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <label for="readOnlyMultiInput" class="fd-form-label">
                    Latin Words (Readonly)
                </label>
                <div class="fd-popover" style="display:flex;flex-direction:column;padding-right:1rem">
                    <div class="fd-popover__control" aria-controls="F4GcX3X8a" aria-expanded="false" aria-haspopup="false">
                        <div class="fd-input-group fd-input-group--control" readonly aria-readonly="true">
                            <div class="fd-tokenizer fd-tokenizer--readonly">
                                <div class="fd-tokenizer__inner">
                                    <span tabindex="0" class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Bibendum
                                        </span>
                                    </span>
                                    <span tabindex="0" class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Lorem
                                        </span>
                                    </span>
                                    <span tabindex="0" class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Dolor
                                        </span>
                                    </span>
                                    <span tabindex="0" class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Filter
                                        </span>
                                    </span>
                                    <span tabindex="0" class="fd-token fd-token--readonly">
                                        <span class="fd-token__text">
                                            Lorem
                                        </span>
                                    </span>
                                    <span class="fd-tokenizer__indicator">
                                        <div class="fd-popover">
                                            <div
                                                class="fd-popover__control fd-input-group__control"
                                                aria-controls="F4GF5348a"
                                                aria-expanded="true"
                                                aria-haspopup="true"
                                                onclick="onPopoverClick('F4GF5348a');">
                                                <a tabindex="0" class="fd-link">
                                                    <span class="fd-link__content">2 more</span>
                                                </a>
                                            </div>
                                            <div class="fd-popover__body" aria-hidden="false" id="F4GF5348a">
                                                <nav aria-label="more options" class="fd-menu" id="">
                                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Consectetur</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Adipiscing</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </span>
                                    <input id="readOnlyMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" readonly aria-readonly="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

ReadOnlyAndDisabled.parameters = {
    docs: {
        iframeHeight: 100,
        description: {
            story: `
To make the \`Multi Input\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.

To disable a \`Multi Input\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disabled\` class or the \`aria-disabled="true"\` attribute.
`
        }
    }
};

export const Semantic = () => `<div style="height:300px">
<label for="semanticMultiInput" class="fd-form-label">
    Semantic Fruits
</label>
<div class="fd-popover">
    <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcKJH8a" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control is-success">
            <div class="fd-tokenizer">
                 <div class="fd-tokenizer__inner">
                     <span class="fd-token" tabindex="0" role="button">
                         <span class="fd-token__text">
                             Apple
                         </span>
                         <button aria-label="unselect option: apple" class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" tabindex="0" role="button">
                         <span class="fd-token__text">
                             Orange
                         </span>
                         <button aria-label="unselect option: orange" class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" tabindex="0" role="button">
                         <span class="fd-token__text">
                             Kiwi
                         </span>
                         <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                     </span>
                     <span class="fd-tokenizer__indicator">4 more</span>
                     <input id="semanticMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" />
                 </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button aria-label="show options" class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--value-help"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcKJH8a">
      <div class="fd-popover__wrapper">
        <span class="fd-list__message fd-list__message--success">Success Message</span>
        <ul aria-multiselectable="true" role="listbox" aria-label="list of fruits" class="fd-list fd-list--multi-input fd-list--has-message">
			<li class="fd-list__message fd-list__message--success" role="option">Success Message</li>
			<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
				<div class="fd-form-item fd-list__form-item">
					<input type="checkbox" class="fd-checkbox" id="Ai4ez638" checked aria-labelledby="Az0bg47">
					<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez638"></label>
				</div>
				<span class="fd-list__title" id="Az0bg47">Apple</span>
			</li>
			<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
				<div class="fd-form-item fd-list__form-item">
					<input type="checkbox" class="fd-checkbox" id="Ai4ez639" checked aria-labelledby="Az0bg48">
					<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez639"></label>
				</div>
				<span class="fd-list__title" id="Az0bg48">Orange</span>
			</li>
			<li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
				<div class="fd-form-item fd-list__form-item">
					<input type="checkbox" class="fd-checkbox" id="Ai4ez640" checked aria-labelledby="Az0bg49">
					<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez640"></label>
				</div>
				<span class="fd-list__title" id="Az0bg49">Banana</span>
			</li>
			<li role="option" tabindex="0" class="fd-list__item">
				<div class="fd-form-item fd-list__form-item">
					<input type="checkbox" class="fd-checkbox" id="Ai4ez641" aria-labelledby="Az0bg50">
					<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez641"></label>
				</div>
				<span class="fd-list__title" id="Az0bg50">Kiwi</span>
			</li>
			<li role="option" tabindex="0" class="fd-list__item">
				<div class="fd-form-item fd-list__form-item">
					<input type="checkbox" class="fd-checkbox" id="Ai4ez642" aria-labelledby="Az0bg51">
					<label tabindex="-1" class="fd-checkbox__label" for="Ai4ez642"></label>
				</div>
				<span class="fd-list__title" id="Az0bg51">Lemon</span>
			</li>
        </ul>
    </div>
  </div>
</div>
</div>
`;

Semantic.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `
For a complete list of states supported by the \`Multi Input\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into \`fd-input-group\` element.
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.`
        }
    }
};

export const MobileMode = () => `<section role="dialog" aria-labelledby="mobileModeMultiInputHeader"
         class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 id="mobileModeMultiInputHeader" class="fd-title fd-title--h5">
                        Select Ingredient
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--cozy fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <div class="fd-input-group">
                        <div class="fd-tokenizer">
                            <div class="fd-tokenizer__inner">
                             <span class="fd-token" tabindex="0" role="button">
                                 <span class="fd-token__text">
                                     Apple
                                 </span>
                                 <button aria-label="unselect option: apple" class="fd-token__close"></button>
                             </span>
                                <span class="fd-token" tabindex="0" role="button">
                                 <span class="fd-token__text">
                                     Orange
                                 </span>
                                 <button aria-label="unselect option: orange" class="fd-token__close"></button>
                             </span>
                                <span class="fd-token" tabindex="0" role="button">
                                 <span class="fd-token__text">
                                     Kiwi
                                 </span>
                                 <button aria-label="unselect option: kiwi" class="fd-token__close"></button>
                             </span>
                                <span class="fd-tokenizer__indicator">4 more</span>
                                <input aria-labelledby="mobileModeMultiInputHeader"
                                       class="fd-input fd-input-group__input fd-tokenizer__input" />
                            </div>
                        </div>
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button aria-label="show options"
                                class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--value-help"></i>
                        </button>
                    </span>
                    </div>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="select all" class="fd-button fd-button--transparent">
                        <i class="sap-icon--multiselect-all"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <span class="fd-list__message fd-list__message--success">Success Message</span>
            <ul aria-multiselectable="true" role="listbox" aria-label="list of fruits"
                class="fd-list fd-list--multi-input fd-list--has-message fd-list--mobile">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez648" checked aria-labelledby="Az0bg57">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez648"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg57">Apple</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez649" checked aria-labelledby="Az0bg58">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez649"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg58">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez650" checked aria-labelledby="Az0bg59">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez650"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg59">Banana</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-dialog__decisive-button">OK</button>
                </div>
            </div>
        </footer>
    </div>
</section>

`;

MobileMode.parameters = {
    docs: {
        iframeHeight: 450,
        description: {
            story: `
For mobile devices, or tablets, multi input component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.`
        }
    }
};

export const Filtering = () => `<div style="min-height: 250px;">
<label for="filteringMultiInput" class="fd-form-label">
    Filtered Fruits
</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348aB" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button aria-label="unselect option: apple" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button aria-label="unselect option: orange" class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" tabindex="0" role="button">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button aria-label="unselect option: banana" class="fd-token__close"></button>
                        </span>
                        <input id="filteringMultiInput" class="fd-input fd-input-group__input fd-tokenizer__input" value="A" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button aria-label="show options" class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348aB" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aB">
            <ul aria-multiselectable="true" role="listbox" aria-label="list of fruits" class="fd-list fd-list--multi-input">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez651" checked aria-labelledby="Az0bg59">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez651"></label>
                    </div>
                <span class="fd-list__title" id="Az0bg59"><b>A</b>pple</span>
                <span class="fd-list__secondary">A2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez652" checked aria-labelledby="Az0bg60">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez652"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg60">Or<b>a</b>nge</span>
                    <span class="fd-list__secondary">A1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez653" checked aria-labelledby="Az0bg61">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez653"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg61">B<b>a</b>nana</span>
                    <span class="fd-list__secondary">A3</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez654" aria-labelledby="Az0bg62">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez654"></label>
                    </div>
                <span class="fd-list__title" id="Az0bg62"><b>A</b>pple</span>
                <span class="fd-list__secondary">A1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez655" aria-labelledby="Az0bg63">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez655"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg63">Or<b>a</b>nge</span>
                    <span class="fd-list__secondary">A2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez656" aria-labelledby="Az0bg64">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez656"></label>
                    </div>
                    <span class="fd-list__title" id="Az0bg64">B<b>a</b>nana</span>
                    <span class="fd-list__secondary">A3</span>
                </li>
            </ul>
            <span class="fd-list__footer">
            <a tabindex="0" role="button" class="fd-link">Show All</a>
            </span>
        </div>
    </div>
</div>
`;

Filtering.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
The user can filter selectable options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
        }
    }
};
