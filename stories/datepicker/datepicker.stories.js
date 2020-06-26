import '../../dist/calendar.css';

export default {
    title: 'Patterns/Datepicker',
    parameters: {
        description: `The date picker lets users select a localized date using touch, mouse, or keyboard input. It consists of two parts: the date input field and the date picker.

Use this control if the user needs to enter a single date or a date range. The control also allows users to navigate directly from one month or year to another.

The date-picker component is an opinionated composition of the <code>input-group</code>, <code>popover</code> and <code>calendar</code> components to accomplish the UI pattern for picking a date.

This component mostly relies on the CSS of other components and has very little CSS of its own.`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const sizes = () => `
<div class="fd-docs-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
            <label class="fd-form-label" for="asdewq123">Pick a date:</label>
            <div class="fd-input-group">
				<input class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date" id="asdewq123">
				<span class="fd-input-group__addon fd-input-group__addon--button">
				<button class="fd-input-group__button fd-popover__control fd-button fd-button--transparent sap-icon--appointment-2" aria-controls="Itcgq828" aria-expanded="false" aria-haspopup="true" aria-label="Choose Date"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq828">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX297" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
					        <tr class="fd-calendar__row">
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">M</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">W</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">F</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                            </tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<br>

<div class="fd-docs-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
            <label class="fd-form-label" for="asdewq124">Pick a date:</label>
			<div class="fd-input-group">
				<input type="text" value="" placeholder="Pick a date" class="fd-input fd-input--compact fd-input-group__input" id="asdewq124">
				<span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
				<button class="fd-button fd-button--transparent fd-button--compact fd-input-group__button fd-popover__control sap-icon--appointment-2" aria-controls="Itcgq82" aria-expanded="false" aria-haspopup="true" aria-label="Choose Date"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq82">
			<div class="fd-calendar fd-calendar--compact">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left fd-button--compact" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent fd-button--compact" aria-selected="false" aria-expanded="false">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent fd-button--compact" aria-selected="false" aria-expanded="false">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right fd-button--compact" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX298" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
	                    <thead class="fd-calendar__group">
					        <tr class="fd-calendar__row">
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">M</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">W</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">F</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                            </tr>
						</thead>
                        <tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 420
    }
};

export const todaySelectionButton = () => `
<div class="fd-docs-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
            <label class="fd-form-label" for="asdewq125">Pick a date:</label>
			<div class="fd-input-group">
				<input class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date" id="asdewq125">
				<span class="fd-input-group__addon fd-input-group__addon--button">
				<button class="fd-input-group__button fd-popover__control fd-button fd-button--transparent sap-icon--appointment-2" aria-controls="Itcgq829" aria-expanded="false" aria-haspopup="true" aria-label="Choose Date"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq829">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX299" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
					        <tr class="fd-calendar__row">
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">M</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">W</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">F</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                            </tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
			<footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
				<div class="fd-bar__right">
					<div class="fd-bar__element">
						<button class="fd-dialog__decisive-button fd-button">Today</button>
					</div>
				</div>
			</footer>
		</div>
	</div>
</div>
`;

todaySelectionButton.parameters = {
    docs: {
        iframeHeight: 460,
        storyDescription: 'The today selection button in the footer selects today\'s date in the system or user-preferred timezone and closes the DatePicker popover. This date value then appears in the DatePicker\'s input field. If using a compact datepicker add the <code>fd-button--compact</code> class to this button.'
    }
};

export const todayNavigationButton = () => `
<div class="fd-docs-date-picker">
	<div class="fd-popover">
		<div class="fd-popover__control">
            <label class="fd-form-label" for="asdewq126">Pick a date:</label>
			<div class="fd-input-group">
				<input class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date" id="asdewq126">
				<span class="fd-input-group__addon fd-input-group__addon--button">
				<button class="fd-input-group__button fd-popover__control fd-button fd-button--transparent sap-icon--appointment-2" aria-controls="Itcgq830" aria-expanded="false" aria-haspopup="true" aria-label="Choose Date"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq830">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">Today</button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX300" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
					        <tr class="fd-calendar__row">
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">M</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">W</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">F</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                            </tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`;

todayNavigationButton.parameters = {
    docs: {
        iframeHeight: 440,
        storyDescription: `The today navigation button in the header navigates focus to today's date in the system or user-preferred timezone, selects it but does not close the DatePicker popover. This is useful in displaying the DatePicker on mobile where DatePicker closes when user presses the OK button. If using a compact datepicker add the <code>fd-button--compact</code> class to this button.
    
**Using both today selection and navigation buttons on the same datepicker is not recommended, as it may lead to confusion.**`
    }
};

export const mobileDialog = () => `
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-landscape">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation fd-calendar__navigation--main">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
                        </div>
						<button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
                        <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button fd-calendar__close-button--navigation" aria-label="Close"></button>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr2831">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

mobileDialog.storyName = 'DatePicker dialog in mobile landscape mode with today navigation';
mobileDialog.parameters = {
    docs: {
        iframeHeight: 380
    }
};

export const dialogPortrait = () => `
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--cosy">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Pick a date
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button" aria-label="Close"></button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-portrait">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation">
                        <div class="fd-segmented-button" role="group" aria-label="Switch Date/Time picker">
                            <button class="fd-button is-active">Date</button>
                            <button class="fd-button">Time</button>
                        </div>
                    </div>
                    <div class="fd-calendar__navigation">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
                        </div>
						<button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr2832">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

dialogPortrait.storyName = 'DatePicker dialog in mobile portrait mode with today navigation';
dialogPortrait.parameters = {
    docs: {
        iframeHeight: 490
    }
};

export const rtlExample = () => `
<div class="fd-docs-date-picker" dir="rtl">
	<div class="fd-popover">
		<div class="fd-popover__control">
            <label class="fd-form-label" for="asdewq127">Pick a date:</label>
			<div class="fd-input-group">
				<input class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date" id="asdewq127">
				<span class="fd-input-group__addon fd-input-group__addon--button">
				<button class="fd-input-group__button fd-popover__control fd-button fd-button--transparent sap-icon--appointment-2" aria-controls="Itcgq828" aria-expanded="false" aria-haspopup="true" aria-label="Choose Date"></button>
				</span>
			</div>
		</div>
		<div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="Itcgq828">
			<div class="fd-calendar">
				<header class="fd-calendar__header">
				<div class="fd-calendar__navigation">
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous" aria-disabled="true"></button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">September</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false">2018</button>
					</div>
					<div class="fd-calendar__action">
						<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
					</div>
				</div>
				</header>
				<div class="fd-calendar__content">
					<div class="fd-calendar__dates" id="YeayX297" aria-hidden="false">
						<table class="fd-calendar__table" role="grid">
						<thead class="fd-calendar__group">
					        <tr class="fd-calendar__row">
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">M</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">W</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">T</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">F</span>
                                </th>
                                <th class="fd-calendar__item fd-calendar__item--side-helper">
                                    <span class="fd-calendar__text" role="button">S</span>
                                </th>
                            </tr>
						</thead>
						<tbody class="fd-calendar__group">
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
								<span class="fd-calendar__text">31</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">3</span>
							</td>
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">4</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-disabled" role="gridcell">
								<span class="fd-calendar__text">5</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
								<span class="fd-calendar__text">6</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">7</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">8</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">9</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">10</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">11</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">12</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">13</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">14</span>
							</td>
							<td class="fd-calendar__item is-selected" role="gridcell">
								<span class="fd-calendar__text">15</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">16</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">17</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">18</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">19</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">20</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">21</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">22</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">23</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">24</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">25</span>
							</td>
						</tr>
						<tr class="fd-calendar__row">
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">26</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">27</span>
							</td>
							<td class="fd-calendar__item is-blocked" role="gridcell">
								<span class="fd-calendar__text">28</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">29</span>
							</td>
							<td class="fd-calendar__item" role="gridcell">
								<span class="fd-calendar__text">30</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">1</span>
							</td>
							<td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
								<span class="fd-calendar__text">2</span>
							</td>
						</tr>
						</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active" dir="rtl">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-landscape">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation fd-calendar__navigation--main">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
                        </div>
						<button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
                        <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button fd-calendar__close-button--navigation" aria-label="Close"></button>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr2833">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
<br />
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active" dir="rtl">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--cosy">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Pick a date
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button" aria-label="Close"></button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-portrait">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation">
                        <div class="fd-segmented-button" role="group" aria-label="Switch Date/Time picker">
                            <button class="fd-button is-active">Date</button>
                            <button class="fd-button">Time</button>
                        </div>
                    </div>
                    <div class="fd-calendar__navigation">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
                        </div>
						<button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr2834">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

rtlExample.parameters = {
    docs: {
        iframeHeight: 940,
        disable: true
    }
};
