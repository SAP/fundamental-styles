export default {
    title: 'Theming/Form',
    parameters: {
        components: ['form-label', 'form-layout-grid', 'layout-grid', 'input', 'popover', 'select', 'icon', 'button']
    }
};


export const primary = () => `
    <h3>Small Form Grid</h3>
    <div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical" style="max-width:600px">
        <div class="fd-row">
            <div class="fd-col">
                <label class="fd-form-label" for="input-1-name">Name:</label>
            </div>
            <div class="fd-col">
                <input class="fd-input" type="text" id="input-1-name" placeholder="Enter First and Last Name" value="Amelia Perry">
            </div>
        </div>
        <div class="fd-row">
            <div class="fd-col">
                <label class="fd-form-label fd-form-label--required" for="input-1-street">Street/No.: </label>
            </div>
            <div class="fd-col">
                <input class="fd-input" type="text" id="input-1-street" placeholder="Enter address" value="Myrtle St.">
            </div>
            <div class="fd-col fd-col--4">
                <input class="fd-input" type="text" id="input-1-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
            </div>
        </div>
        <div class="fd-row">
            <div class="fd-col">
                <label class="fd-form-label fd-form-label--required" for="input-1-zip">ZIP Code/City: </label>
            </div>
            <div class="fd-col fd-col--4">
                <input class="fd-input" type="text" id="input-1-zip" placeholder="Enter ZIP Code" value="43823">
            </div>
            <div class="fd-col">
                <input class="fd-input" type="text" id="input-1-city" placeholder="Enter City" aria-label="City" value="Downtown">
            </div>
        </div>
        <div class="fd-row">
            <div class="fd-col">
                <label class="fd-form-label" for="input-1-country">Country:</label>
            </div>
            <div class="fd-col fd-col--4">
                <div class="fd-popover" style="width:100%">
                    <div class="fd-popover__control">
                    <div class="fd-select">
                        <div
                            aria-controls="h031XCM509"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            class="fd-select__control"
                            aria-label="Country"
                            tabindex="0">
                            <span class="fd-select__text-content">US</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    <h3>Form Grid</h3>
    <div class="fd-container fd-form-layout-grid-container" style="max-width:1024px">
        <div class="fd-row">
            <div class="fd-col fd-col-md--2 fd-col-lg--4">
            <label class="fd-form-label" for="input-2-name">Name:</label>
            </div>
            <div class="fd-col fd-col-md--10 fd-col-lg--8">
            <input class="fd-input" type="text" id="input-2-name" placeholder="Enter First and Last Name" value="Amelia Perry">
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col-md--2 fd-col-lg--4">
                <label class="fd-form-label fd-form-label--required" for="input-2-street">Street/No.: </label>
            </div>
            <div class="fd-col fd-col-md--10 fd-col-lg--8">
                <div class="fd-row">
                    <div class="fd-col fd-col--4">
                        <input class="fd-input" type="text" id="input-2-street" placeholder="Enter address" value="Myrtle St.">
                    </div>
                    <div class="fd-col fd-col--8">
                        <input class="fd-input" type="text" id="input-2-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col-md--2  fd-col-lg--4">
                <label class="fd-form-label fd-form-label--required" for="input-2-zip">ZIP Code/City: </label>
            </div>
            <div class="fd-col fd-col-md--10  fd-col-lg--8">
                <div class="fd-row">
                    <div class="fd-col fd-col--8">
                        <input class="fd-input" type="text" id="input-2-zip" placeholder="Enter ZIP Code" value="43823">
                    </div>
                    <div class="fd-col fd-col--4">
                        <input class="fd-input" type="text" id="input-2-city" placeholder="Enter City" aria-label="City" value="Downtown">
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-row">
            <div class="fd-col fd-col-md--2  fd-col-lg--4">
                <label class="fd-form-label" for="input-2-country">Country:</label>
            </div>
            <div class="fd-col fd-col-md--10  fd-col-lg--8">
                <div class="fd-popover" style="width:100%">
                    <div class="fd-popover__control">
                        <div class="fd-select">
                            <div
                                aria-controls="h031XCM509"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                        class="fd-select__control"
                                        aria-label="Country"
                                tabindex="0">
                                <span class="fd-select__text-content">US</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    <h3>Multiple Form</h3>
    <div class="fd-container fd-form-layout-grid-container" style="max-width:1440px">
        <div class="fd-row">
            <div class="fd-col fd-col-lg--6 fd-col--wrap">
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label" for="input-7-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <input class="fd-input" type="text" id="input-7-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
            </div>
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label fd-form-label--required" for="input-7-street">Street/No.: </label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-row">
                <div class="fd-col fd-col--4">
                    <input class="fd-input" type="text" id="input-7-street" placeholder="Enter address" value="Myrtle St.">
                </div>
                <div class="fd-col fd-col--8">
                    <input class="fd-input" type="text" id="input-7-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                </div>
                </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label fd-form-label--required" for="input-7-zip">ZIP Code/City: </label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-row">
                    <div class="fd-col fd-col--8">
                    <input class="fd-input" type="text" id="input-7-zip" placeholder="Enter ZIP Code" value="43823">
                </div>
                <div class="fd-col fd-col--4">
                    <input class="fd-input" type="text" id="input-7-city" placeholder="Enter City" aria-label="City" value="Downtown">
                </div>
                </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label" for="input-7-country">Country:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-popover" style="width:100%">
                    <div class="fd-popover__control">
                    <div class="fd-select">
                        <div
                            aria-controls="h031XCM509"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                        class="fd-select__control"
                        aria-label="Country"
                            tabindex="0">
                            <span class="fd-select__text-content">US</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="fd-col fd-col-lg--6 fd-col--wrap">
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label" for="input-8-name">Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <input class="fd-input" type="text" id="input-8-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                </div>
            </div>
            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label fd-form-label--required" for="input-8-street">Street/No.: </label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-row">
                <div class="fd-col fd-col--4">
                    <input class="fd-input" type="text" id="input-8-street" placeholder="Enter address" value="Myrtle St.">
                </div>
                <div class="fd-col fd-col--8">
                    <input class="fd-input" type="text" id="input-8-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                </div>
                </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label fd-form-label--required" for="input-8-zip">ZIP Code/City: </label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-row">
                    <div class="fd-col fd-col--8">
                    <input class="fd-input" type="text" id="input-8-zip" placeholder="Enter ZIP Code" value="43823">
                </div>
                <div class="fd-col fd-col--4">
                    <input class="fd-input" type="text" id="input-8-city" placeholder="Enter City" aria-label="City" value="Downtown">
                </div>
                </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--12">
                <label class="fd-form-label" for="input-8-country">Country:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--12">
                <div class="fd-popover" style="width:100%">
                    <div class="fd-popover__control">
                    <div class="fd-select">
                        <div
                            aria-controls="h031XCM509"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                        class="fd-select__control"
                        aria-label="Country"
                            tabindex="0">
                            <span class="fd-select__text-content">US</span>
                            <span class="fd-button fd-button--transparent fd-select__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <br>
    
    <h3>Compact Form</h3>
    <div class="fd-container fd-form-layout-grid-container">
        <div class="fd-row">
            <div class="fd-col fd-col--4">
            <label class="fd-form-label" for="input-13-compact">Default Input:</label>
            </div>
            <div class="fd-col fd-col--7">
                <input class="fd-input fd-input--compact" type="text" id="input-13-compact" placeholder="Field placeholder text">
            </div>
        </div>
        <div class="fd-row">
            <div class="fd-col fd-col--4">
            <label class="fd-form-label fd-form-label--required" for="input-13b-compact">Required Input: </label>
            </div>
            <div class="fd-col fd-col--7">
                <input class="fd-input fd-input--compact" type="text" id="input-13b-compact" placeholder="Field placeholder text">
            </div>
        </div>
        <div class="fd-row" role="group" aria-labelledby="groupLabel-compact">
            <div class="fd-col fd-col--4">
            <label class="fd-form-label"  id="groupLabel-compact">2 Inputs: </label>
            </div>
            <div class="fd-col fd-col--7">
                <div class="fd-row">
                    <div class="fd-col fd-col--6">
                        <input class="fd-input fd-input--compact" type="text" id="input1-of-2-compact" aria-label="input1-of-2-compact" placeholder="Field placeholder text">
                    </div>
                    <div class="fd-col fd-col--6">
                        <input class="fd-input fd-input--compact" type="text" id="input2-of-2-compact" aria-label="input2-of-2-compact" placeholder="Field placeholder text">
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
