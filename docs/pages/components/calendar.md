---
title: Calendar
id: calendar
keywords: calendar
sidebar: left-navigation-sidebar
toc: false
permalink: components/calendar.html
folder: components
summary:
---

Commonly used as the contents of a popover when composing `date-picker`, rarely used on its own as a standalone component.
{: .docs-intro}
The `.fd-calendar__item` container takes the majority of styling. The rest of the markup provides the structure and layout.
Classes available for `.fd-calendar__item`. All are available to dates, months, and years.

> Looking for Date Picker? From a style perspective, a date-picker is simply a composition of our existing calendar, input group and popover, but contains no new styles of its own. Therefore, we consider it a pattern. [See the date picker pattern here]({{site.baseurl}}/patterns/date-picker).

<br>


## Calendar modifiers
This are classes used to describe the look general look of calendar.

<div class="fd-calendar" style="width: 100%;">
  <div class="fd-calendar__content">
    <table class="fd-calendar__table" role="grid">
      <tbody class="fd-calendar__group">
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar--compact</code></td>
          <td role="gridcell">Class used to style calendar in compact mode</td>
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell"></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar--mobile</code></td>
          <td role="gridcell">Class used to style calendar for mobile devices. Calendar uses different layout for different device orientation.</td>
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell"></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__content--days</code></td>
          <td role="gridcell">Class used to style calendar content when calendar displays days</td>
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell"></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__content--months</code></td>
          <td role="gridcell">Class used to style calendar content when calendar displays months</td>          
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell"></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__content--years</code></td>
          <td role="gridcell">Class used to style calendar content when calendar displays years</td>
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Calendar elements modifiers
This are classes used to describe the look of calendar grid element.

<div class="fd-calendar" style="width: 100%;">
  <div class="fd-calendar__content">
    <table class="fd-calendar__table" role="grid">
      <tbody class="fd-calendar__group">
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item</code></td>
          <td role="gridcell">Base class used to represent calendar cell</td>
          <td class="fd-calendar__item" role="gridcell"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--side-helper</code></td>
          <td role="gridcell">Class used for styling calendar grid side-helpers like week number or day shortcut</td>
          <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">1</td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--other-month</code></td>
          <td role="gridcell">Class used to style days outside of current month</td>
          <td class="fd-calendar__item fd-calendar__item--other-month"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--current</code></td>
          <td role="gridcell">Class used to style current day, month or year</td>
          <td class="fd-calendar__item fd-calendar__item--current"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--weekend</code></td>
          <td role="gridcell">Class used to style weekend days</td>
          <td class="fd-calendar__item fd-calendar__item--weekend"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--active</code></td>
          <td role="gridcell">Class used to style calendar elements selected by user</td>
          <td class="fd-calendar__item fd-calendar__item--active"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
        <tr class="fd-calendar__row">
          <td role="gridcell"><code>.fd-calendar__item--range</code></td>
          <td role="gridcell">Class used to style calendar elements placed between range start and end elements</td>
          <td class="fd-calendar__item fd-calendar__item--range"><span class="fd-calendar__text" role="button">30</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  
<br>

## Example calendar with days

{% capture default-calendar-days %}
<div class="fd-calendar">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="true" aria-expanded="true" aria-controls="bufLe361">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>

    <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
        <table class="fd-calendar__table" role="grid">
            <thead class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">M</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">W</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">F</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
            </tr>
            </thead>
            <tbody class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">1</td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">30</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">31</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">3</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">4</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">5</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">2</td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">6</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">7</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">8</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">9</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">10</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">11</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">12</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">3</td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">13</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">14</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">15</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">16</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">17</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">18</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">19</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">4</td>
                <td class="fd-calendar__item fd-calendar__item--current fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">20</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">21</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">22</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">23</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">24</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">25</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">26</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">5</td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">27</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">28</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">2</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">3</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">4</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">5</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-calendar-days %}

## Example calendar with months

{% capture default-calendar-months %}
<div class="fd-calendar">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
            </div>
            <div class="fd-calendar__action">
                <button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
            </div>
            <div class="fd-calendar__action">
                <button class="fd-button fd-button--transparent" aria-selected="true" aria-expanded="true" aria-controls="bufLe361">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
            </div>
        </div>
    </header>
    <div class="fd-calendar__content fd-calendar__content--months " id="1jjVw927">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--current">
                    <span class="fd-calendar__text" role="button">Jan.</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Feb.</span></td>
                <td class="fd-calendar__item" aria-selected="true">
                    <span class="fd-calendar__text" role="button">Mar.</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Apr.</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">May</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Jun.</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Jul.</span></td>
                <td class="fd-calendar__item fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">Aug.</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Sep.</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Oct.</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Nov.</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">Dec.</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-months %}

## Example calendar with years

{% capture default-calendar-years %}
<div class="fd-calendar">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="true" aria-expanded="true" aria-controls="bufLe361">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>
    
    <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ521">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--current">
                    <span class="fd-calendar__text" role="button">2018</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2019</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2020</span></td>
                <td class="fd-calendar__item is-selected" aria-selected="true">
                    <span class="fd-calendar__text" role="button">2021</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2022</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2023</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2024</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2025</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2026</span></td>
                <td class="fd-calendar__item fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">2027</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2028</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2029</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-years %}

## Example calendar in compact mode

{% capture default-calendar-compact %}
<div class="fd-calendar fd-calendar--compact">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button class="fd-button fd-button--transparent" aria-selected="true" aria-expanded="true" aria-controls="bufLe361">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>

    <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
        <table class="fd-calendar__table" role="grid">
            <thead class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">M</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">W</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">F</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
            </tr>
            </thead>
            <tbody class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">1</td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">30</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">31</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">2</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">3</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">4</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">5</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">2</td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">6</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">7</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">8</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">9</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">10</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">11</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">12</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">3</td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">13</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">14</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">15</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">16</span></td>
                <td class="fd-calendar__item fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">17</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">18</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--range">
                    <span class="fd-calendar__text" role="button">19</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">4</td>
                <td class="fd-calendar__item fd-calendar__item--current fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">20</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">21</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">22</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">23</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">24</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">25</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">26</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">5</td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">27</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">28</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">2</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">3</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">4</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">5</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-calendar-compact %}


## Example calendar in mobile mode

{% capture default-calendar-mobile %}
<div class="fd-calendar fd-calendar--mobile" style="position: static;">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button class="fd-button--standard fd-button--light sap-icon--slim-arrow-left" aria-label="Previous"></button>
            </div>
            <div class="fd-calendar__action">
                <button class="fd-button--light" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">January</button>
            </div>
            <div class="fd-calendar__action">
                <button class="fd-button--light" aria-selected="false" aria-expanded="false" aria-controls="bufLe361">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button class="fd-button--standard fd-button--light sap-icon--slim-arrow-right" aria-label="Next"></button>
            </div>
        </div>
        <button class="fd-button--light fd-calendar__close-button--landscape" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">Cancel</button>
    </header>

    <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr283">
        <table class="fd-calendar__table" role="grid">
            <thead class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">M</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">W</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">T</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">F</th>
                <th class="fd-calendar__item fd-calendar__item--side-helper">S</th>
            </tr>
            </thead>
            <tbody class="fd-calendar__group">
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">1</td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled">
                    <span class="fd-calendar__text" role="button">29</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled">
                    <span class="fd-calendar__text" role="button">30</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled">
                    <span class="fd-calendar__text" role="button">31</span></td>
                <td class="fd-calendar__item is-disabled">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item is-disabled">
                    <span class="fd-calendar__text" role="button">2</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend is-disabled">
                    <span class="fd-calendar__text" role="button">3</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend is-disabled">
                    <span class="fd-calendar__text" role="button">4</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">2</td>
                <td class="fd-calendar__item is-disabled">
                    <span class="fd-calendar__text" role="button">5</span></td>
                <td class="fd-calendar__item fd-calendar__item--current">
                    <span class="fd-calendar__text" role="button">6</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">7</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">8</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">9</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">10</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">11</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">3</td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">12</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">13</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">14</span></td>
                <td class="fd-calendar__item fd-calendar__item--active">
                    <span class="fd-calendar__text" role="button">15</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">16</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">17</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">18</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">4</td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">19</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">20</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">21</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">22</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">23</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">24</span></td>
                <td class="fd-calendar__item fd-calendar__item--weekend">
                    <span class="fd-calendar__text" role="button">25</span></td>
            </tr>
            <tr class="fd-calendar__row">
                <td class="fd-calendar__item fd-calendar__item--side-helper" role="gridcell">5</td>
                <td class="fd-calendar__item is-blocked">
                    <span class="fd-calendar__text" role="button">26</span></td>
                <td class="fd-calendar__item is-blocked">
                    <span class="fd-calendar__text" role="button">27</span></td>
                <td class="fd-calendar__item is-blocked">
                    <span class="fd-calendar__text" role="button">28</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">29</span></td>
                <td class="fd-calendar__item">
                    <span class="fd-calendar__text" role="button">30</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">1</span></td>
                <td class="fd-calendar__item fd-calendar__item--other-month">
                    <span class="fd-calendar__text" role="button">2</span></td>
            </tr>
            </tbody>
        </table>
    </div>

    <button class="fd-button--light fd-calendar__close-button--portrait" aria-selected="false" aria-expanded="false" aria-controls="fm3cr569">Cancel</button>

</div>
{% endcapture %}
{% include display-component.html component=default-calendar-mobile %}
