/* empty css            *//* empty css               *//* empty css             *//* empty css                 *//* empty css               *//* empty css                         *//* empty css             */const s=`<style>
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
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <div>Working Day<b>(Legend)</b></div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--legend-1 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non Working Day</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non Working Day<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Selected/First/Last in range</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Selected/First/Last in range<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--selected fd-calendar__item--legend-9 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Range Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Range Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--range fd-calendar__item--legend-12 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--legend-12 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--selected fd-calendar__item--legend-16 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Range Selection</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Today Range Selection<b>(Legend)</b></p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--today fd-calendar__item--range fd-calendar__item--legend-13 is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
    </div>
    <div class="docs-cal-container">
        <p>Non-current month dates</p>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other ">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-hover">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-focus">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
                </div>
            </div>
        </div>
        <div class="docs_cal_item_wrapper">
            <div class="fd-calendar__item fd-calendar__item--other is-disabled">
                <div class="fd-calendar__text-wrapper">
                    <span class="fd-calendar__text">31</span>
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
`,t=`<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <section class="fd-calendar" role="group" aria-roledescription="Calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous"  title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button id="calendar-year-range" type="button" class="fd-button fd-button--transparent">2018 - 2037</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table 
            role="grid"
            aria-readonly="false"
            aria-multiselectable="false"
            aria-roledescription="Year Picker"
            aria-labelledby="calendar-year-range"
            class="fd-calendar__content fd-calendar__content--years" 
            id="57YUZ521">
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2018"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2018</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2019"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2019</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2020"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2020</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2021"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2021</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2022"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2022</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2023"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2023</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2024"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2024</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2025"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2025</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2026"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2026</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false" 
                        aria-label="Select Year 2027"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button is-active">
                            <span class="fd-calendar__text">2027</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2028"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2028</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2029"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2029</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2030"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2030</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2031"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2031</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2032"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2032</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2033"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2033</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2034"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2034</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2035"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2035</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2036"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2036</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year 2037"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2037</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>

    <section class="fd-calendar" role="group" aria-roledescription="Calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table 
            role="grid"
            aria-readonly="false"
            aria-multiselectable="false"
            aria-roledescription="Year Picker"
            class="fd-calendar__content fd-calendar__content--years" 
            id="57YUZ522">
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell" 
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2010 - 2020"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2010 - 2020</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2021 - 2031"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2021 - 2031</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2032 - 2042"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2032 - 2042</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2043 - 2053"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2043 - 2053</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2054 - 2064"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2054 - 2064</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2065- 2075"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2065- 2075</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2076 - 2086"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2076 - 2086</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2087 - 2097"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2087 - 2097</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2098 - 2108"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2098 - 2108</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2109 - 2119"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2109 - 2119</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2120 - 2130"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2120 - 2130</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2131 - 2141"
                        tabindex="-1" 
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button is-active">
                            <span class="fd-calendar__text">2131 - 2141</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <section class="fd-calendar" role="group" aria-roledescription="Calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button id="calendar-year-range-3" type="button" class="fd-button fd-button--transparent">2010 - 2097</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table 
            role="grid"
            aria-readonly="false"
            aria-multiselectable="false"
            aria-roledescription="Year Picker"
            aria-labelledby="calendar-year-range-3"
            class="fd-calendar__content fd-calendar__content--years" 
            id="57YUZ523">
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2010 BC - 2020 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2010 BC - 2020 BC</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2021 BC - 2031 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2021 BC - 2031 BC</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2032 BC - 2042 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button is-active">
                            <span class="fd-calendar__text">2032 BC - 2042 BC</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2043 BC - 2053 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2043 BC - 2053 BC</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2054 BC - 2064 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2054 BC - 2064 BC</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2065 BC - 2075 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2065 BC - 2075 BC</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2076 BC - 2086 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2076 BC - 2086 BC</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2087 BC - 2097 BC"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2087 BC - 2097 BC</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>

    <section class="fd-calendar" role="group" aria-roledescription="Calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button id="calendar-year-range-4" type="button" class="fd-button fd-button--transparent">2010 - 2053</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table 
            role="grid"
            aria-readonly="false"
            aria-multiselectable="false"
            aria-roledescription="Year Picker"
            aria-labelledby="calendar-year-range-4"
            class="fd-calendar__content fd-calendar__content--years" 
            id="57YUZ524">
            <tbody class="fd-calendar__group"role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2010 Showa - 2020 Showa"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2010 Showa - 2020 Showa</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2021 Showa - 2031 Showa"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button is-active">
                            <span class="fd-calendar__text">2021 Showa - 2031 Showa</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row is-active">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2032 Showa - 2042 Showa"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2032 Showa - 2042 Showa</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select Year Range 2043 Showa - 2053 Showa"
                        tabindex="-1"  
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">2043 Showa - 2053 Showa</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>
`,i=`<div style="display: flex; justify-content: space-around;">
    <section class="fd-calendar" role="group" aria-roledescription="Calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" id="calendar-year" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table 
            role="grid"
            aria-readonly="false"
            aria-multiselectable="false"
            aria-roledescription="Month Picker"
            aria-labelledby="calendar-year"
            class="fd-calendar__content fd-calendar__content--months" 
            id="1jjVw927">
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select January 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">January</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select February 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">February</span>
                        </span>
                    </td>
                    <td
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"  
                        aria-label="Select March 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-button--toggled fd-calendar__my-item-button">
                            <span class="fd-calendar__text">March</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select April 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">April</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select May 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">May</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select June 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">June</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select July 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">July</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select August 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">August</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select September 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">September</span>
                        </span>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select October 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">October</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select November 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">November</span>
                        </span>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false" 
                        aria-label="Select December 2018"
                        tabindex="-1"
                        class="fd-calendar__my-item">
                        <span class="fd-button fd-button--transparent fd-calendar__my-item-button">
                            <span class="fd-calendar__text">December</span>
                        </span>
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
    <section class="fd-calendar" role="group" aria-roledescription="Calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent" aria-label="February">February</button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
            <thead class="fd-calendar__group" role="rowgroup">
                <tr class="fd-calendar__row" role="row">
                    <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                    <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sun</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Mon</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Tue</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Wed</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Thu</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Fri</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sat</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <th 
                        scope="row" 
                        role="rowheader" 
                        aria-label="Calendar Week 5" 
                        class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </th>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="January 30, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">30</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="January 31, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">31</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 1, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">1</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 2, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">2</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 3, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">3</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 4, 2018; Non-Working Day" 
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">4</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 5, 2018; Non-Working Day" 
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <th 
                        scope="row" 
                        role="rowheader" 
                        aria-label="Calendar Week 6" 
                        class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">6</span>
                        </div>
                    </th>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 6, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">6</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 7, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">7</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 8, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">8</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 9, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">9</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 10, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">10</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        title="Non-Working Day"
                        aria-label="February 11, 2018; Non-Working Day"  
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">11</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        title="Non-Working Day"
                        aria-label="February 12, 2018; Non-Working Day"  
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">12</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <th 
                        scope="row" 
                        role="rowheader" 
                        aria-label="Calendar Week 7" 
                        class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">7</span>
                        </div>
                    </th>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 13, 2018"  
                        class="fd-calendar__item fd-calendar__item--selected">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">13</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 14, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">14</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 15, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">15</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 16, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">16</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 17, 2018; Special Day Type 7"  
                        title="Special Day Type 7"   
                        class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">17</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 18, 2018; Non-Working Day, Special Day Type 1"  
                        title="Non-Working Day, Special Day Type 1"
                        class="fd-calendar__item fd-calendar__item--weekend
                            fd-calendar__item--selected fd-calendar__item--legend-1">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">18</span>
                            </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 19, 2018; Non-Working Day, Special Day Type 5" 
                        title="Non-Working Day, Special Day Type 5"  
                        class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">19</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <th
                        scope="row" 
                        role="rowheader" 
                        aria-label="Calendar Week 8" 
                        class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">8</span>
                        </div>
                    </th>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 20, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">20</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 21, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">21</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 22, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">22</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 23, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">23</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 24, 2018"  
                        title="Special Day Type 3" 
                        class="fd-calendar__item fd-calendar__item--legend-3">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">24</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 25, 2018" 
                        title="Non-Working Day, Special Day Type 9"  
                        class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">25</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 26, 2018; Non-Working Day"   
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">26</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <th
                        scope="row" 
                        role="rowheader" 
                        aria-label="Calendar Week 9" 
                        class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">9</span>
                        </div>
                    </th>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 27, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">27</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 28, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">28</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 1, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">1</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 2, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">2</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 3, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">3</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 4, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">4</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 5, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>

    <section class="fd-calendar" role="group" aria-roledescription="Calendar">
        <header class="fd-calendar__navigation">
            <div class="fd-calendar__action fd-calendar__action--arrow-left">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                    <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent" aria-label="February">February</button>
            </div>
            <div class="fd-calendar__action">
                <button type="button" class="fd-button fd-button--transparent">2018</button>
            </div>
            <div class="fd-calendar__action fd-calendar__action--arrow-right">
                <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                    <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                </button>
            </div>
        </header>
        <table class="fd-calendar__content" id="IO0cp342" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
            <thead class="fd-calendar__group" role="rowgroup">
                <tr class="fd-calendar__row" role="row">
                    <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sun</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Mon</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Tue</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Wed</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Thu</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Fri</span>
                        </div>
                    </th>
                    <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">Sat</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="fd-calendar__group" role="rowgroup">
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="January 30, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">30</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="January 31, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">31</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 1, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">1</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 2, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">2</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 3, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">3</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 4, 2018; Non-Working Day" 
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">4</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 5, 2018; Non-Working Day" 
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 6, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">6</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 7, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">7</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 8, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">8</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 9, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">9</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 10, 2018"  
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">10</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        title="Non-Working Day"
                        aria-label="February 11, 2018; Non-Working Day"  
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">11</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        title="Non-Working Day"
                        aria-label="February 12, 2018; Non-Working Day"  
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">12</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 13, 2018"  
                        class="fd-calendar__item fd-calendar__item--selected">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">13</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 14, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">14</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 15, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">15</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 16, 2018"   
                        class="fd-calendar__item fd-calendar__item--range">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">16</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 17, 2018; Special Day Type 7"  
                        title="Special Day Type 7"   
                        class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">17</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="true"
                        aria-disabled="false"
                        aria-label="February 18, 2018; Non-Working Day, Special Day Type 1"  
                        title="Non-Working Day, Special Day Type 1"
                        class="fd-calendar__item fd-calendar__item--weekend
                            fd-calendar__item--selected fd-calendar__item--legend-1">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">18</span>
                            </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 19, 2018; Non-Working Day, Special Day Type 5" 
                        title="Non-Working Day, Special Day Type 5"  
                        class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">19</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 20, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">20</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 21, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">21</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 22, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">22</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 23, 2018"   
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">23</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 24, 2018"  
                        title="Special Day Type 3" 
                        class="fd-calendar__item fd-calendar__item--legend-3">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">24</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 25, 2018" 
                        title="Non-Working Day, Special Day Type 9"  
                        class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">25</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 26, 2018; Non-Working Day"   
                        title="Non-Working Day"
                        class="fd-calendar__item fd-calendar__item--weekend">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">26</span>
                        </div>
                    </td>
                </tr>
                <tr role="row" class="fd-calendar__row">
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 27, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">27</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="February 28, 2018" 
                        class="fd-calendar__item">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">28</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 1, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">1</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 2, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">2</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 3, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">3</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 4, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">4</span>
                        </div>
                    </td>
                    <td 
                        role="gridcell"
                        aria-selected="false"
                        aria-disabled="false"
                        aria-label="March 5, 2018" 
                        class="fd-calendar__item fd-calendar__item--other">
                        <div class="fd-calendar__text-wrapper">
                            <span class="fd-calendar__text">5</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>`,_=`<div style="display: flex; justify-content: space-around;">
    <div style="display: flex; gap: 3rem; align-items: flex-start;">
        <div 
            role="list"
            aria-label="Calendar Legend"
            aria-owns="item-1 item-2 item-3 item-4 item-5 item-6 item-7"
            class="fd-calendar-legend" style="min-width: 420px;">
            <div 
                id="item-1"
                role="listitem"
                aria-posinset="1"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--today">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today</div>
            </div>
            <div 
                id="item-2"
                role="listitem"
                aria-posinset="2"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div 
                id="item-3"
                role="listitem"
                aria-posinset="3"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div 
                id="item-4"
                role="listitem"
                aria-posinset="4"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div    
                id="item-5"
                role="listitem"
                aria-posinset="5"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-1">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Holiday</div>
            </div>
            <div 
                id="item-6"
                role="listitem"
                aria-posinset="6"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-2">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">School Vacation</div>
            </div>
            <div 
                id="item-7"
                role="listitem"
                aria-posinset="7"
                aria-setsize="7"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-3 is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Wedding</div>
            </div>
        </div>

        <div 
            role="list"
            aria-label="Calendar Legend"
            aria-owns="item-1a item-2a item-3a item-4a item-5a item-6a item-7a 
            item-8a item-9a item-10a item-11a item-12a item-13a item-14a"
            class="fd-calendar-legend fd-calendar-legend--auto-column" 
            style="max-width: 320px;">
            <div 
                id="item-1a"
                role="listitem"
                aria-posinset="1"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--today">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officiis eligendi qui aliquid eius omnis dolorem obcaecati libero magnam.</div>
            </div>
            <div 
                id="item-2a"
                role="listitem"
                aria-posinset="2"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div 
                id="item-3a"
                role="listitem"
                aria-posinset="3"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div 
                id="item-4a"
                role="listitem"
                aria-posinset="4"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div 
                id="item-5a"
                role="listitem"
                aria-posinset="5"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-1">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 1</div>
            </div>
            <div 
                id="item-6a"
                role="listitem"
                aria-posinset="6"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-2">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 2</div>
            </div>
            <div 
                id="item-7a"
                role="listitem"
                aria-posinset="7"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-3 is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 3</div>
            </div>
            <div 
                id="item-8a"
                role="listitem"
                aria-posinset="8"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-4">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 4</div>
            </div>
            <div 
                id="item-9a"
                role="listitem"
                aria-posinset="9"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-5">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 5</div>
            </div>
            <div 
                id="item-10a"
                role="listitem"
                aria-posinset="10"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-6">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 6</div>
            </div>
            <div 
                id="item-11a"
                role="listitem"
                aria-posinset="11"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-7">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 7</div>
            </div>
            <div 
                id="item-12a"
                role="listitem"
                aria-posinset="12"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-8">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 8</div>
            </div>
            <div 
                id="item-13a"
                role="listitem"
                aria-posinset="13"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-9">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 9</div>
            </div>
            <div    
                id="item-14a"
                role="listitem"
                aria-posinset="14"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--placeholder-10">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 10</div>
            </div>
        </div>

        <div 
            role="list"
            aria-label="Calendar Legend"
            aria-owns="item-1b item-2b item-3b item-4b item-5b item-6b item-7b 
            item-8b item-9b item-10b item-11b item-12b item-13b item-14b"
            class="fd-calendar-legend fd-calendar-legend--auto-column" 
            style="max-width: 320px;">
            <div 
                id="item-1b"
                role="listitem"
                aria-posinset="1"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--today is-focus">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Today Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officiis eligendi qui aliquid eius omnis dolorem obcaecati libero magnam.</div>
            </div>
            <div 
                id="item-2b"
                role="listitem"
                aria-posinset="2"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--selected">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Selected</div>
            </div>
            <div 
                id="item-3b"
                role="listitem"
                aria-posinset="3"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Work Day</div>
            </div>
            <div 
                id="item-4b"
                role="listitem"
                aria-posinset="4"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--non-work">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Non-Work Day</div>
            </div>
            <div 
                id="item-5b"
                role="listitem"
                aria-posinset="5"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-11">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 11</div>
            </div>
            <div 
                id="item-6b"
                role="listitem"
                aria-posinset="6"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-12">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 12</div>
            </div>
            <div 
                id="item-7b"
                role="listitem"
                aria-posinset="7"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-13">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 13</div>
            </div>
            <div 
                id="item-8b"
                role="listitem"
                aria-posinset="8"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-14">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 14</div>
            </div>
            <div 
                id="item-9b"
                role="listitem"
                aria-posinset="9"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-15">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 15</div>
            </div>
            <div 
                id="item-10b"
                role="listitem"
                aria-posinset="10"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-16">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 16</div>
            </div>
            <div 
                id="item-11b"
                role="listitem"
                aria-posinset="11"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-17">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 17</div>
            </div>
            <div 
                id="item-12b"
                role="listitem"
                aria-posinset="12"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-18">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 18</div>
            </div>
            <div 
                id="item-13b"
                role="listitem"
                aria-posinset="13"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-19">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 19</div>
            </div>
            <div 
                id="item-14b"
                role="listitem"
                aria-posinset="14"
                aria-setsize="14"
                tabindex="-1"
                class="fd-calendar-legend__item fd-calendar-legend__item--appointment fd-calendar-legend__item--placeholder-20">
                <div class="fd-calendar-legend__marker"></div>
                <div class="fd-calendar-legend__text">Special Day Placeholder 20</div>
            </div>
        </div>
    </div>
</div>`,f=`
<h4>Horizontal</h4>
<div class="fd-calendar-container">
    <div class="fd-calendar-container-inner">
        <section class="fd-calendar" role="group" aria-roledescription="Calendar">
            <header class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                        <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="February">February</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right fd-calendar__hidden">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next" tabindex="-1">
                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
                <thead class="fd-calendar__group" role="rowgroup">
                    <tr class="fd-calendar__row" role="row">
                        <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Mon</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Tue</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Wed</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Thu</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Fri</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sat</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sun</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group" role="rowgroup">
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 5" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 30, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">30</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 31, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">31</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 1, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 2, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 3, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 4, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 5, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 6" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 6, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 7, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 8, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 9, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 10, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 11, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 12, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 7" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 13, 2018"  
                            class="fd-calendar__item fd-calendar__item--selected">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 14, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 15, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">15</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 16, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">16</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 17, 2018; Special Day Type 7"  
                            title="Special Day Type 7"   
                            class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">17</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 18, 2018; Non-Working Day, Special Day Type 1"  
                            title="Non-Working Day, Special Day Type 1"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--selected fd-calendar__item--legend-1">
                                <div class="fd-calendar__text-wrapper">
                                    <span class="fd-calendar__text">18</span>
                                </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 19, 2018; Non-Working Day, Special Day Type 5" 
                            title="Non-Working Day, Special Day Type 5"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">19</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 8" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 20, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">20</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 21, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">21</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 22, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">22</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 23, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">23</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 24, 2018"  
                            title="Special Day Type 3" 
                            class="fd-calendar__item fd-calendar__item--legend-3">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">24</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 25, 2018" 
                            title="Non-Working Day, Special Day Type 9"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">25</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 26, 2018; Non-Working Day"   
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">26</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 9" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 27, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 28, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 1, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 2, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 3, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 4, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 5, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
        <section class="fd-calendar" role="group" aria-roledescription="Calendar">
            <header class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left fd-calendar__hidden">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous" tabindex="-1">
                        <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="March">March</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
                <thead class="fd-calendar__group" role="rowgroup">
                    <tr class="fd-calendar__row" role="row">
                        <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Mon</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Tue</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Wed</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Thu</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Fri</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sat</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sun</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group" role="rowgroup">
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 10" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 27, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 28, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 1, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 2, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 3, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 4, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 5, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 11" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 6, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 7, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 8, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 9, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 10, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="March 11, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="March 12, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 12" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 13, 2018"  
                            class="fd-calendar__item fd-calendar__item--selected">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 14, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 15, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">15</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 16, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">16</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 17, 2018; Special Day Type 7"  
                            title="Special Day Type 7"   
                            class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">17</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 18, 2018; Non-Working Day, Special Day Type 1"  
                            title="Non-Working Day, Special Day Type 1"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--selected fd-calendar__item--legend-1">
                                <div class="fd-calendar__text-wrapper">
                                    <span class="fd-calendar__text">18</span>
                                </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 19, 2018; Non-Working Day, Special Day Type 5" 
                            title="Non-Working Day, Special Day Type 5"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">19</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 13" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 20, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">20</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 21, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">21</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 22, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">22</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 23, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">23</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 24, 2018"  
                            title="Special Day Type 3" 
                            class="fd-calendar__item fd-calendar__item--legend-3">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">24</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 25, 2018" 
                            title="Non-Working Day, Special Day Type 9"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">25</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 26, 2018; Non-Working Day"   
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">26</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 14" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 27, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 28, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 29, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">29</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 30, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">30</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 31, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">31</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="April 1, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="April 2, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
    </div>
</div>

<br><br>

<h4>Vertical</h4>
<div class="fd-calendar-container fd-calendar-container--vertical">
    <div class="fd-calendar-container-inner">
        <section class="fd-calendar" role="group" aria-roledescription="Calendar">
            <header class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                        <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="February">February</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
                <thead class="fd-calendar__group" role="rowgroup">
                    <tr class="fd-calendar__row" role="row">
                        <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Mon</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Tue</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Wed</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Thu</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Fri</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sat</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sun</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group" role="rowgroup">
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 5" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 30, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">30</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 31, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">31</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 1, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 2, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 3, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 4, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 5, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 6" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 6, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 7, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 8, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 9, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 10, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 11, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 12, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 7" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 13, 2018"  
                            class="fd-calendar__item fd-calendar__item--selected">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 14, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 15, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">15</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 16, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">16</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 17, 2018; Special Day Type 7"  
                            title="Special Day Type 7"   
                            class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">17</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 18, 2018; Non-Working Day, Special Day Type 1"  
                            title="Non-Working Day, Special Day Type 1"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--selected fd-calendar__item--legend-1">
                                <div class="fd-calendar__text-wrapper">
                                    <span class="fd-calendar__text">18</span>
                                </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 19, 2018; Non-Working Day, Special Day Type 5" 
                            title="Non-Working Day, Special Day Type 5"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">19</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 8" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 20, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">20</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 21, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">21</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 22, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">22</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 23, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">23</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 24, 2018"  
                            title="Special Day Type 3" 
                            class="fd-calendar__item fd-calendar__item--legend-3">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">24</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 25, 2018" 
                            title="Non-Working Day, Special Day Type 9"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">25</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 26, 2018; Non-Working Day"   
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">26</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 9" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 27, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 28, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 1, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 2, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 3, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 4, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 5, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
        <section class="fd-calendar" role="group" aria-roledescription="Calendar">
            <header class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left fd-calendar__hidden">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous" tabindex="-1">
                        <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="March">March</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right fd-calendar__hidden">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next" tabindex="-1">
                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
                <thead class="fd-calendar__group" role="rowgroup">
                    <tr class="fd-calendar__row" role="row">
                        <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Mon</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Tue</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Wed</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Thu</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Fri</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sat</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sun</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group" role="rowgroup">
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 10" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 27, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 28, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 1, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 2, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 3, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 4, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 5, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 11" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 6, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 7, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 8, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 9, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 10, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="March 11, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="March 12, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 12" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 13, 2018"  
                            class="fd-calendar__item fd-calendar__item--selected">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 14, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 15, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">15</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 16, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">16</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 17, 2018; Special Day Type 7"  
                            title="Special Day Type 7"   
                            class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">17</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="March 18, 2018; Non-Working Day, Special Day Type 1"  
                            title="Non-Working Day, Special Day Type 1"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--selected fd-calendar__item--legend-1">
                                <div class="fd-calendar__text-wrapper">
                                    <span class="fd-calendar__text">18</span>
                                </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 19, 2018; Non-Working Day, Special Day Type 5" 
                            title="Non-Working Day, Special Day Type 5"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">19</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 13" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 20, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">20</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 21, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">21</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 22, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">22</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 23, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">23</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 24, 2018"  
                            title="Special Day Type 3" 
                            class="fd-calendar__item fd-calendar__item--legend-3">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">24</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 25, 2018" 
                            title="Non-Working Day, Special Day Type 9"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">25</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 26, 2018; Non-Working Day"   
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">26</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 14" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 27, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 28, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 29, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">29</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 30, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">30</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 31, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">31</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="April 1, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="April 2, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
    </div>
</div>

<br><br>

<h4>Mobile</h4>
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active" style="width: fit-content;">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile" style="min-height: 600px; width: fit-content;">
      <div class="fd-dialog__header fd-bar fd-bar--header fd-bar--cosy">
        <div class="fd-bar__left">
          <div class="fd-bar__element">
            <h3 class="fd-title fd-title--h5">
              Calendar
            </h3>
          </div>
        </div>
      </div>
      <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
        <section class="fd-calendar fd-calendar--mobile" role="group" aria-roledescription="Calendar">
            <header class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous" title="Previous">
                        <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="February">February</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next" title="Next">
                        <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <table class="fd-calendar__content" id="IO0cp341" role="grid" aria-readonly="false" aria-multiselectable="true" aria-roledescription="Gregorian calendar">
                <thead class="fd-calendar__group" role="rowgroup">
                    <tr class="fd-calendar__row" role="row">
                        <th role="columnheader" class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th role="columnheader" aria-label="Monday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Mon</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Tuesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Tue</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Wednesday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Wed</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Thursday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Thu</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Friday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Fri</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Saturday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sat</span>
                            </div>
                        </th>
                        <th role="columnheader" aria-label="Sunday" class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">Sun</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group" role="rowgroup">
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 5" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 30, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">30</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="January 31, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">31</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 1, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 2, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 3, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 4, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 5, 2018; Non-Working Day" 
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 6" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 6, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">6</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 7, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 8, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 9, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 10, 2018"  
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">10</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 11, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">11</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            title="Non-Working Day"
                            aria-label="February 12, 2018; Non-Working Day"  
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">12</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th 
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 7" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">7</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 13, 2018"  
                            class="fd-calendar__item fd-calendar__item--selected">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">13</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 14, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">14</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 15, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">15</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 16, 2018"   
                            class="fd-calendar__item fd-calendar__item--range">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">16</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 17, 2018; Special Day Type 7"  
                            title="Special Day Type 7"   
                            class="fd-calendar__item fd-calendar__item--range  fd-calendar__item--legend-7">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">17</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-label="February 18, 2018; Non-Working Day, Special Day Type 1"  
                            title="Non-Working Day, Special Day Type 1"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--selected fd-calendar__item--legend-1">
                                <div class="fd-calendar__text-wrapper">
                                    <span class="fd-calendar__text">18</span>
                                </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 19, 2018; Non-Working Day, Special Day Type 5" 
                            title="Non-Working Day, Special Day Type 5"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-5">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">19</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 8" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">8</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 20, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">20</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 21, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">21</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 22, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">22</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 23, 2018"   
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">23</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 24, 2018"  
                            title="Special Day Type 3" 
                            class="fd-calendar__item fd-calendar__item--legend-3">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">24</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 25, 2018" 
                            title="Non-Working Day, Special Day Type 9"  
                            class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--legend-9">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">25</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 26, 2018; Non-Working Day"   
                            title="Non-Working Day"
                            class="fd-calendar__item fd-calendar__item--weekend">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">26</span>
                            </div>
                        </td>
                    </tr>
                    <tr role="row" class="fd-calendar__row">
                        <th
                            scope="row" 
                            role="rowheader" 
                            aria-label="Calendar Week 9" 
                            class="fd-calendar__item fd-calendar__item--side-helper">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">9</span>
                            </div>
                        </th>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 27, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">27</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="February 28, 2018" 
                            class="fd-calendar__item">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">28</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 1, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">1</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 2, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">2</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 3, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">3</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 4, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">4</span>
                            </div>
                        </td>
                        <td 
                            role="gridcell"
                            aria-selected="false"
                            aria-disabled="false"
                            aria-label="March 5, 2018" 
                            class="fd-calendar__item fd-calendar__item--other">
                            <div class="fd-calendar__text-wrapper">
                                <span class="fd-calendar__text">5</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
        </section>
      </div>
      <div class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
        <div class="fd-bar__right">
          <div class="fd-bar__element">
            <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
            OK
            </button>
          </div>
          <div class="fd-bar__element">
            <button class="fd-dialog__decisive-button fd-button">
            Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>`,g={title:"Components/Calendar",parameters:{description:`
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

`,tags:[]}},e=()=>s;e.parameters={docs:{description:"Day Types"}};const n=()=>c;n.parameters={docs:{description:{story:"The calendar component can display days of the month by adding the `fd-calendar__content--dates` class to the container element."}}};const d=()=>i;d.parameters={docs:{description:{story:"The calendar component can display months in a year by adding the `fd-calendar__content--months` class to the container element."}}};const l=()=>t;l.parameters={docs:{description:{story:"The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the `fd-calendar__content--years` class to the container element, and adjust the number of columns, rows, and content to fit your use case."}}};const r=()=>_;r.parameters={docs:{description:{story:`The Calendar component can display a customizable legend to help users interpret the meaning of various colors and styles used within the calendar.<br>
The legend includes:
- 20 predefined color <b>placeholders:</b> <code>fd-calendar-legend__item--placeholder-1</code>...<code>fd-calendar-legend__item--placeholder-20</code><br>
- <b>selection:</b> <code>fd-calendar-legend__item--selected</code><br>
- <b>today:</b> <code>fd-calendar-legend__item--today</code><br>
- <b>normal (work) days:</b> <code>fd-calendar-legend__item--work</code><br>
- <b>non-working days:</b> <code>fd-calendar-legend__item--non-work</code>.<br> 

The number of flexible columns should be configurable to prevent label truncation, though labels can also wrap to accommodate longer text. Use <code>fd-calendar-legend--auto-column</code> for auto column width.<br><br>
Appointments are represented by circles <code>fd-calendar-legend__item--appointment</code>, while special calendar days are depicted as squares (default).`}}};const a=()=>f;a.storyName="Two-Month Calendar";a.parameters={docs:{description:{story:"For date range selection use cases the calendar can provide 2-month view. The adjacent month days and the inner buttons are hidden. <br><br>In cases where the width of the screen is not enough the 2-month calendar is turning into a vertical structure. Use the modifier class <code>.fd-calendar-container--vertical</code> for vertical layout. <br><br>On phone the Calendar popover turns into full screen dialog with only one month and taking back the adjacent month days."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => calExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => daysExampleHtml",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => monthsExampleHtml",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => yearsExampleHtml",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => legendExampleHtml",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => twoMonthViewExampleHtml",...a.parameters?.docs?.source}}};const w=["CalendarDays","Days","Months","Years","Legend","TwoMonthView"];export{e as CalendarDays,n as Days,r as Legend,d as Months,a as TwoMonthView,l as Years,w as __namedExportsOrder,g as default};
