export default {
    title: 'Theming/Calendar',
    parameters: {
        components: ['bar', 'dialog', 'tile', 'calendar', 'button', 'segmented-button', 'icon']
    }
};

export const primary = () => `
    <h3>Days</h3>
    <div style="display: flex; justify-content: space-around;">
        <section class="fd-calendar">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
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
                                <span class="fd-calendar__text" role="button">30</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">6</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">10</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">12</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active fd-calendar__item--range">
                                <span class="fd-calendar__text" role="button">13</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                                <span class="fd-calendar__text" role="button">14</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                                <span class="fd-calendar__text" role="button">15</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                                <span class="fd-calendar__text" role="button">16</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                                <span class="fd-calendar__text" role="button">17</span>
                            </td>
                            <td aria-selected="true" role="gridcell"
                                class="fd-calendar__item fd-calendar__item--weekend
                                    fd-calendar__item--current is-active fd-calendar__special-day--1">
                                <span class="fd-calendar__text" role="button">18</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--1">
                                <span class="fd-calendar__text" role="button">19</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__special-day--3">
                                <span class="fd-calendar__text" role="button">24</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--3">
                                <span class="fd-calendar__text" role="button">25</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">26</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
    </div>

    <h3>Months</h3>
    <div style="display: flex; justify-content: space-around;">
        <section class="fd-calendar">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--months" id="1jjVw927">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">January</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">February</span>
                            </td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">March</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">April</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">May</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">June</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">July</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">August</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">September</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">October</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">November</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">December</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">
                Use arrow keys to navigate dates
            </div>
        </section>
    </div>

    <h3>Years</h3>
    <div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
        <section class="fd-calendar" style="margin-bottom: 1rem;">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ521">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">2018</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2019</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2020</span></td>
                            <td role="gridcell" class="fd-calendar__item is-selected">
                                <span class="fd-calendar__text" role="button">2021</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2022</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2023</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2024</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2025</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2026</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">2027</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2028</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2029</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2030</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2031</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2032</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2033</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2034</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2035</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2036</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2037</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
        <section class="fd-calendar" style="margin-bottom: 1rem;">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ522">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2010 - 2020</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2021 - 2031</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2032 - 2042</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2043 - 2053</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2054 - 2064</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2065 - 2075</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">2076 - 2086</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2087 - 2097</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2098 - 2108</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2109 - 2119</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2120 - 2130</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">2131 - 2141</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
    </div>

    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
        <section class="fd-calendar" style="margin-bottom: 1rem;">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ523">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2010 BC - 2020 BC</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2021 BC - 2031 BC</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">2032 BC - 2042 BC</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2043 BC - 2053 BC</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">2054 BC - 2064 BC</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2065 BC - 2075 BC</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2076 BC - 2086 BC</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2087 BC - 2097 BC</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
        <section class="fd-calendar" style="margin-bottom: 1rem;">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ524">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2010 Showa - 2020 Showa</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--current is-active">
                                <span class="fd-calendar__text" role="button">2021 Showa - 2031 Showa</span></td>
                        </tr>
                        <tr class="fd-calendar__row is-active">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2032 Showa - 2042 Showa</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2043 Showa - 2053 Showa</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
    </div>

    <h3>Compact</h3>
    <div style="display: flex; justify-content: space-around;">
        <div class="fd-calendar fd-calendar--compact">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--compact fd-button--transparent"
                            aria-expanded="false">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--compact fd-button--transparent"
                            aria-expanded="true">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
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
                            <span class="fd-calendar__text" role="button">30</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">31</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">1</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">2</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">3</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">4</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">5</span></td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">6</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">7</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">8</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">9</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">10</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">11</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">12</span></td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </td>
                        <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">13</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">14</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">15</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">16</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">17</span></td>
                        <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--current is-active fd-calendar__special-day--1">
                            <span class="fd-calendar__text" role="button">18</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--1">
                            <span class="fd-calendar__text" role="button">19</span></td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">20</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">21</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">22</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">23</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__special-day--3">
                            <span class="fd-calendar__text" role="button">24</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--3">
                            <span class="fd-calendar__text" role="button">25</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">26</span></td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">27</span></td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">28</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">1</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">2</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">3</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">4</span></td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">5</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </div>
    </div>

    <h3>Landscape (Mobile)</h3>
    <div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
            <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
                <div class="fd-calendar fd-calendar--mobile-landscape">
                    <header class="fd-calendar__header">
                        <div class="fd-calendar__navigation fd-calendar__navigation--main">
                            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                                    <i class="sap-icon--slim-arrow-left"></i>
                                </button>
                            </div>
                            <div class="fd-calendar__action">
                                <button type="button" class="fd-button fd-button--transparent">January</button>
                            </div>
                            <div class="fd-calendar__action">
                                <button type="button" class="fd-button fd-button--transparent">2018</button>
                            </div>
                            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                                    <i class="sap-icon--slim-arrow-right"></i>
                                </button>
                            </div>
                            <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button--navigation" aria-label="Close">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>
                    </header>
                    <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr283">
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
            <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cozy">
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

    <h3>Portrait (Mobile)</h3>
    <div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active">
        <section class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
            <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--cozy">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-title fd-title--h5">
                            Pick a date
                        </h3>
                    </div>
                </div>
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
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
                                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                                    <i class="sap-icon--slim-arrow-left"></i>
                                </button>
                            </div>
                            <div class="fd-calendar__action">
                                <button type="button" class="fd-button fd-button--transparent">January</button>
                            </div>
                            <div class="fd-calendar__action">
                                <button type="button" class="fd-button fd-button--transparent">2018</button>
                            </div>
                            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                                    <i class="sap-icon--slim-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr283">
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
            <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cozy">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                            OK
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;
