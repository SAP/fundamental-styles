/* empty css            *//* empty css               *//* empty css             *//* empty css                 *//* empty css               *//* empty css                         *//* empty css             */const l=`<style>
.docs-calendar {
    width: 100%;
}
.docs_cal_item_wrapper {
    display: flex;
}
.docs-cal-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    column-gap: 0.1rem;
    row-gap: 0.1rem;
    padding: 1rem;
    justify-items: right;
    align-items: center;
}
</style>

<section class="fd-calendar fd-calendar__content--dates docs-calendar">
    <div class="docs-cal-container">
        <div></div>
        <div>Regular</div>
        <div>Hover</div>
        <div>Focus</div>
        <div>Disabled</div>
    </div>
    <div class="docs-cal-container">
        <div>Working Day</div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <div>Working Day<b>(Legend)</b></div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non Working Day</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non Working Day<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Selected/First/Last in range</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Selected/First/Last in range<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Range Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Range Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Range Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Range Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non-current month dates</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text" role="button">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Week Number/Week Day Name</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item  fd-calendar__item--side-helper ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">Mon</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item  fd-calendar__item--side-helper">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">Mon</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item  fd-calendar__item--side-helper">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">Mon</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item  fd-calendar__item--side-helper">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">Mon</span>
                </div>
            </div>
        </div>
    </div>
</section>
`,s=`<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018 - 2037</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content fd-calendar__content--years " id="57YUZ521" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2018</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2019</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2020</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2021</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2022</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2023</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2024</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2025</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2026</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button is-active" type="button">
                            <span class="fd-calendar__text">2027</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2028</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2029</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2030</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2031</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2032</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2033</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2034</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2035</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2036</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2037</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content fd-calendar__content--years" id="57YUZ522" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2010 - 2020</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2021 - 2031</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2032 - 2042</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2043 - 2053</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2054 - 2064</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2065- 2075</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2076 - 2086</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2087 - 2097</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2098 - 2108</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2109 - 2119</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2120 - 2130</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button is-active" type="button">
                            <span class="fd-calendar__text">2131 - 2141</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2010 - 2097</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content fd-calendar__content--years" id="57YUZ523" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2010 BC - 2020 BC</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2021 BC - 2031 BC</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button is-active" type="button">
                            <span class="fd-calendar__text">2032 BC - 2042 BC</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2043 BC - 2053 BC</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2054 BC - 2064 BC</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2065 BC - 2075 BC</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2076 BC - 2086 BC</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2087 BC - 2097 BC</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2010 - 2053</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content fd-calendar__content--years " id="57YUZ524" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2010 Showa - 2020 Showa</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button is-active" type="button">
                            <span class="fd-calendar__text">2021 Showa - 2031 Showa</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row is-active">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2032 Showa - 2042 Showa</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">2043 Showa - 2053 Showa</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>
`,r=`<div style="display: flex; justify-content: space-around;">
    <section class="fd-calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content fd-calendar__content--months" id="1jjVw927" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">January</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">February</span>
                        </button>
                    </td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-button--toggled fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">March</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">April</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">May</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">June</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">July</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">August</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">September</span>
                        </button>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">October</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">November</span>
                        </button>
                    </td>
                    <td role="gridcell" class="fd-calendar__my-item">
                        <button class="fd-button fd-button--transparent fd-calendar__my-item-button" type="button">
                            <span class="fd-calendar__text">December</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">
            Use arrow keys to navigate dates
        </div>
    </section>
</div>
`,c=`<div style="display: flex; justify-content: space-around;">
    <section class="fd-calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">February</button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content" id="IO0cp341" role="grid">
            <thead class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sun</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Mon</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Tue</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Wed</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Thu</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Fri</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sat</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">30</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">31</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">1</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">6</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">6</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">7</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">8</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">9</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">10</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">11</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">12</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">7</span>
                        </div>
                    </td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--selected">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">13</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">14</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">15</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">16</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">17</span>
                        </div>
                    </td>
                    <td aria-selected="true" role="gridcell"
                        class="fd-calendar__item fd-calendar__item--weekend
                            fd-calendar__item--selected fd-calendar__item--legend-1">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text" role="button">18</span>
                            </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">19</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">8</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">20</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">21</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">22</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">23</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--legend-3">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">24</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">25</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">26</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">9</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">27</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">28</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">1</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
    <section class="fd-calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                    <i class="sap-icon--slim-arrow-left"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">February</button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                    <i class="sap-icon--slim-arrow-right"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content" id="IO0cp341" role="grid">
            <thead class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sun</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Mon</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Tue</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Wed</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Thu</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Fri</span>
                        </div>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sat</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">30</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">31</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">1</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">6</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">7</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">8</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">9</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">10</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">11</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">12</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--selected">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">13</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">14</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">15</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">16</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">17</span>
                        </div>
                    </td>
                    <td aria-selected="true" role="gridcell"
                        class="fd-calendar__item fd-calendar__item--weekend
                            fd-calendar__item--selected fd-calendar__item--legend-1">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text" role="button">18</span>
                            </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">19</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">20</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">21</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">22</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">23</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--legend-3">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">24</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">25</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">26</span>
                        </div>
                    </td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">27</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">28</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">1</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </div>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>`,_=`<div style="display: flex; justify-content: space-around;">
    <div style="display: flex; gap: 3rem; align-items: flex-start;">
        <div class="fd-calendar-legend" style="min-width: 420px;">
            <div class="fd-calendar-legend__item fd-calendar-legend__item--today">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-1">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Holiday</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-2">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">School Vacation</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-3 is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Wedding</div>
            </div>
        </div>

        <div class="fd-calendar-legend fd-calendar-legend--auto-column" style="max-width: 320px;">
            <div class="fd-calendar-legend__item fd-calendar-legend__item--today">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officiis eligendi qui aliquid eius omnis dolorem obcaecati libero magnam.</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-1">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 1</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-2">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 2</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-3 is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 3</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-4">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 4</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-5">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 5</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-6">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 6</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-7">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 7</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-8">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 8</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-9">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 9</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-10">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 10</div>
            </div>
        </div>

        <div class="fd-calendar-legend fd-calendar-legend--auto-column" style="max-width: 320px;">
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--today is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officiis eligendi qui aliquid eius omnis dolorem obcaecati libero magnam.</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-11">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 11</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-12">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 12</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-13">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 13</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-14">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 14</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-15">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 15</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-16">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 16</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-17">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 17</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-18">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 18</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-19">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 19</div>
            </div>
            <div class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-20">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 20</div>
            </div>
        </div>
    </div>
</div>`,b={title:"Components/Calendar",parameters:{description:`
The calendar component allows users to navigate to a single date, multiple days, whole week(s), or a date range, showing all time-related data within a given timeframe.

It is usually paired with components: **Input Group** and **Popover** to comprise **Date Picker**, which is considered a design pattern as the date picker does not contain components of its own. The calendar component is rarely, if ever, used as a standalone component.

See **Date Picker** in the patterns section.

## Usage
**Use the calendar if:**

- You want the user to select a single date, multiple days, whole week(s), or a date range.
- You want to display multiple months or years at once.
- The calendar always needs to be visible and prominent.
- Users need to see the year, month, week, weekday and date at a glance to decide which date to select. For example, a user might want to select a date based on the day of the week.
- Users might be used to different locale-specific date formats (such as day-month-year or month-day-year). Enabling them to select the date visually using the calendar bypasses format-specific interpretation.
- You want to highlight special days or hide/disable specific days.

**Do not use the calendar if:**

- The user is a power user who has to enter a lot of data fast. In this case, use the **Date Picker** pattern instead.
- The keyboard is the primary input device. In this case, use the **Date Picker** pattern instead.
- The available screen space is limited and displaying the calendar permanently would take up too much space.


## Structure

The following classes describe the block structure of the calendar component.

- \`fd-calendar\` calendar's main container that defines the width of calendar
  - \`fd-calendar__navigation\` container used for grouping the row of navigation controls
    - \`fd-calendar__action\` calendar's action buttons
  - \`fd-calendar__content\` calendar's body container
    - \`fd-calendar__group\` groups calendar rows with the same destination
    - \`fd-calendar__row\` groups calendar grid items in one row
        - \`fd-calendar__item\` represents calendar grid item
          - \`fd-calendar__text-wrapper\` element wrapping the date
            - \`fd-calendar__text\` represents the date

## Modifiers

### General

These modifier classes are used to display the general look of the calendar component.

| Modifier class | Use to... |
| -------------:| :------------- |
| \`fd-calendar--mobile-landscape\` | Display calendar in landscape mode for mobile
| \`fd-calendar--mobile-portrait\` | Display calendar in portrait mode for mobile
| \`fd-calendar__content--months\` | Display calendar months
| \`fd-calendar__content--years\` | Display calendar years
| \`fd-calendar__content--screen-reader-only\` | Display calendar content when only readable to screen readers

### Navigation

These modifier classes are used to display various calendar navigation actions.

| Modifier class | Use to... |
| --------------:| :------------- |
| \`fd-calendar__navigation--main\` | Limit main navigation width on mobile devices in landscape mode and create space for an optional _Close_ button
| \`fd-calendar__action--arrow-left\` | Display _Previous_ navigation button
| \`fd-calendar__action--arrow-right\` | Display _Next_ navigation button

### Grid elements

These modifier classes are used to style various calendar grid elements.


| Modifier class | Use to... |
| -------------:| :-------------- |
| \`fd-calendar__item\` | Represent calendar cell
| \`fd-calendar__item--weekend\` | Style weekend days
| \`fd-calendar__item--other\` | Style days outside of current month
| \`fd-calendar__item--today\` | Style today, current month or year
| \`fd-calendar__item--range\` | Style calendar elements placed between start and end range
| \`fd-calendar__item--selected\` | Style calendar selected elements or start and end dates of range selection
| \`fd-calendar__item--side-helper\` | Style calendar grid side helpers like week number or day shortcut


### States

These modifier classes are used to style various states of calendar grid elements.


| Modifier class | Use to... |
| -------------:| :-------------- |
| \`is-focus\` | Style focused calendar elements
| \`is-hover\` | Style hovered calendar elements
| \`is-disabled\` | Style disabled calendar elements

### Special days
The classes \`fd-calendar__item--legend-1\` ... \`fd-calendar__item--legend-20\` are used to style calendar grid elements with colors, which are identified by numeric modifier classes.

`,tags:["f3","a11y","theme"]}},a=()=>l;a.parameters={docs:{description:"Day Types"}};const n=()=>c;n.parameters={docs:{description:{story:"The calendar component can display days of the month by adding the `fd-calendar__content--dates` class to the container element."}}};const e=()=>r;e.parameters={docs:{description:{story:"The calendar component can display months in a year by adding the `fd-calendar__content--months` class to the container element."}}};const d=()=>s;d.parameters={docs:{description:{story:"The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the `fd-calendar__content--years` class to the container element, and adjust the number of columns, rows, and content to fit your use case."}}};const t=()=>_;t.parameters={docs:{description:{story:"The Calendar component can display a customizable legend to help users interpret the meaning of various colors and styles used within the calendar. <br>The legend includes 20 predefined color <b>placeholders</b> (<code>fd-calendar-legend__item--placeholder-1</code>, <code>fd-calendar-legend__item--placeholder-20</code>, etc.), as well as generic colors for <b>selection</b> (<code>fd-calendar-legend__item--selected</code>), <b>today</b> (<code>fd-calendar-legend__item--today</code>), <b>normal (work) days</b> (<code>fd-calendar-legend__item--work</code>), and <b>non-working days</b> (<code>fd-calendar-legend__item--non-work</code>).<br> The number of flexible columns should be configurable to prevent label truncation, though labels can also wrap to accommodate longer text. Use <code>fd-calendar-legend--auto-column</code> for auto column width.<br> Appointments are represented by circles (<code>fd-calendar-legend__item--appointment</code>), while special calendar days are depicted as squares (default)."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => calExampleHtml",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => daysExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => monthsExampleHtml",...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => yearsExampleHtml",...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => legendExampleHtml",...t.parameters?.docs?.source}}};const g=["CalendarDays","Days","Months","Years","Legend"];export{a as CalendarDays,n as Days,t as Legend,e as Months,d as Years,g as __namedExportsOrder,b as default};
