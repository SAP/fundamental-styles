var H=Object.defineProperty,P=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var l=(t,i,n)=>i in t?H(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,e=(t,i)=>{for(var n in i||(i={}))S.call(i,n)&&l(t,n,i[n]);if(r)for(var n of r(i))A.call(i,n)&&l(t,n,i[n]);return t},s=(t,i)=>P(t,E(i));/* empty css            *//* empty css               *//* empty css              *//* empty css                    *//* empty css                *//* empty css                         */const T=`<div style="min-height: 250px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group is-focus">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" value="07:00:00 AM">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control is-active" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <input class="fd-input" type="text" value="07">
                        <span class="fd-time-picker__colon">:</span>
                        <input class="fd-input" type="text" value="00">
                        <span class="fd-time-picker__colon">:</span>
                        <input class="fd-input" type="text" value="00">
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button fd-button--toggled">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button" aria-pressed="true">
                            PM
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">Ok</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`,F=`<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group is-focus">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="Enter time">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control is-active" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            18
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--toggled" aria-pressed="true">
                            13
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
                        <div data-label="Seconds" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item" style="--deg: 6deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 12deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 18deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 24deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 30deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 36deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 42deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 48deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 54deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 60deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 66deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 72deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 78deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 84deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 90deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">15</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 96deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 102deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 108deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 114deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 120deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">20</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 126deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 132deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 138deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 144deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 150deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">25</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 156deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 162deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 168deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 174deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 180deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">30</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 186deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 192deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 198deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 204deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 210deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">35</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 216deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 222deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 228deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 234deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 240deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">40</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 246deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 252deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 258deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 264deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 270deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">45</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 276deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 282deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 288deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 294deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 300deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">50</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 306deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 312deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 318deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 324deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 330deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">55</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 336deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 342deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 348deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 354deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 360deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">0</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item" style="--deg: 78deg">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">13</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">Ok</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,O=`<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group is-focus">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="--:--">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control is-active" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--toggled" aria-pressed="true">
                            18
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--transparent" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
                        <div data-label="Minutes" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item" style="--deg: 6deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 12deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 18deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 24deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 30deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 36deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 42deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 48deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 54deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 60deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 66deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 72deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 78deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 84deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 90deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">15</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 96deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 102deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 108deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 114deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 120deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">20</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 126deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 132deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 138deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 144deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 150deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">25</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 156deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 162deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 168deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 174deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 180deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">30</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 186deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 192deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 198deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 204deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 210deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">35</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 216deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 222deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 228deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 234deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 240deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">40</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 246deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 252deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 258deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 264deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 270deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">45</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 276deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 282deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 288deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 294deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 300deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">50</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 306deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 312deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 318deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 324deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 330deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">55</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 336deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 342deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 348deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 354deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 360deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">0</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item" style="--deg: 108deg">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">Ok</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,N=`<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group is-focus">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="Enter meeting time">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control is-active" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--toggled">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            00
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--transparent" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item" style="--deg: 6deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 12deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 18deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 24deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 30deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">1</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 36deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 42deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 48deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 54deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 60deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 66deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 72deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 78deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 84deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 90deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 96deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 102deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 108deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 114deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 120deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">4</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 126deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 132deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 138deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 144deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 150deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 156deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 162deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 168deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 174deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 180deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 186deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 192deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 198deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 204deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 210deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 216deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 222deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 228deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 234deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 240deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 246deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 252deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 258deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 264deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 270deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 276deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 282deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 288deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 294deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 300deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 306deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 312deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 318deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 324deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 330deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 336deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 342deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 348deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 354deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 360deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item" style="--deg: 210deg">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">7</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">Ok</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,U=`<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group is-focus">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" value="19:00">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control is-active" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--toggled">
                            19
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            00
                        </button>
                    </div>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item" style="--deg: 6deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 12deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 18deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 24deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 30deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">1</span>
                                <span class="fd-time-picker__number">13</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 36deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 42deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 48deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 54deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 60deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                                <span class="fd-time-picker__number">14</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 66deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 72deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 78deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 84deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 90deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                                <span class="fd-time-picker__number">15</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 96deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 102deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 108deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 114deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 120deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">4</span>
                                <span class="fd-time-picker__number">16</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 126deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 132deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 138deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 144deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 150deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                                <span class="fd-time-picker__number">17</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 156deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 162deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 168deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 174deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 180deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                                <span class="fd-time-picker__number">18</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 186deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 192deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 198deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 204deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 210deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                                <span class="fd-time-picker__number">19</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 216deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 222deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 228deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 234deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 240deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                                <span class="fd-time-picker__number">20</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 246deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 252deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 258deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 264deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 270deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                                <span class="fd-time-picker__number">21</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 276deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 282deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 288deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 294deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 300deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                                <span class="fd-time-picker__number">22</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 306deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 312deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 318deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 324deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 330deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                                <span class="fd-time-picker__number">23</span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 336deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 342deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 348deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 354deg">
                                <span class="fd-time-picker__tick"></span>
                            </div>

                            <div class="fd-time-picker__item" style="--deg: 360deg">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                                <span class="fd-time-picker__number">00</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item" style="--deg: 210deg">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--invisible"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">19</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">Ok</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;const j={title:"Components/Time Picker",parameters:{description:`The time picker allows the user to select a localized time, based on the 12-hour syste or the 24-hour system. It can be used with touch, mouse, or keyboard input. <br> For more information visit <a href="https://experience.sap.com/fiori-design-web//time-picker/" target="_blank">Fiori Design Guidelines</a>

##Usage
**Use the time picker if:**
- Users need to select a time.
- Users need to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- Users need to select a specific duration, such as 1 minute and 30 seconds.

**Do not use the time picker if:**
- Users need to select a standard duration such as 15 minutes, 30 minutes, 1 hour, or 2 hours. In this case, use the select control instead.

##Building blocks
- **Time Input Fiel**- users can enter a time directly or use the time picker button to select a time using the time picker popover.
On phones, selecting the time input field opens a time input popover for entering the time with the touch keyboard.

- **Time Picker Popover**- users can select a time by using the clock face to set hours, minutes, and seconds.
        - Hours clock face - depending on the time format, the hours clock face shows 12 hours or 24 hours
        - Minutes clock face
        - Seconds clock face (optional) - can be omitted if not relevant for the use case
        - Hours, minutes and seconds output - standard toggle buttons
        - AM/PM switch - uses segmented button
        - Now button (optional) - transparent icon only button
        - Footer - standard page footer using Bar component and decisive buttons

##Responsiveness
The time picker comes with a cozy mode and a compact mode. In the compact mode, the time input field and the button are smaller than in the cozy mode.
For mobile (size S) devices, the time picker popover does not open below the time input field, but in a subview.

##Behavior and Interaction
Users can enter the time in two ways:

- Enter a time directly in the input field
- Select a time using the time picker popover


##CSS Classes
- .fd-time-picker
    - .fd-time-picker__control
        - .fd-time-picker__input
    - .fd-time-picker__dropdown
        - .fd-time-picker__header
            - .fd-time-picker__output
                - .fd-time-picker__colon
        - .fd-time-picker\\_\\_clock-container
            - .fd-time-picker__clock
                - .fd-time-picker__label
                - .fd-time-picker\\_\\_item **Modifier classes:** .fd-time-picker\\_\\_item--deg6, .fd-time-picker\\_\\_item--deg12, ... , .fd-time-picker\\_\\_item--deg360
                    - .fd-time-picker\\_\\_tick **Modifier classes:**  .fd-time-picker\\_\\_tick--minute, .fd-time-picker\\_\\_tick--hour, .fd-time-picker\\_\\_tick--selected
                    - .fd-time-picker\\_\\_number **Modifier classes:** .fd-time-picker\\_\\_number--hover, .fd-time-picker\\_\\_number--invisible, .fd-time-picker\\_\\_number--selected
`},tags:["f3","theme"]},d=()=>U;d.storyName="Time Picker with 24-hour Clock Face";d.parameters={docs:{description:{story:`The 24-hour clock face shows an additional inner circle for the times from 13:00 to 24:00 hours.
`}}};const c=()=>N;c.storyName="Time Picker with 12-hour Clock Face";c.parameters={docs:{description:{story:`The 12-hour clock face shows only one circle and an AM/PM switch is displayed.
`}}};const a=()=>O;a.storyName="Minutes Face";a.parameters={docs:{description:{story:"When the minutes value is selected in the time display, the minutes clock face is shown."}}};const p=()=>F;p.storyName="Seconds Face";p.parameters={docs:{description:{story:"When the seconds value is selected in the time display, the seconds clock face is shown."}}};const _=()=>T;_.parameters={docs:{description:{story:`On phones, focusing on the time input field opens a time input popover. The user can then use the mobile keyboard to enter the time. For the 12-hour time format, the popover also offers an AM/PM switch.
`}}};var m,k,f;d.parameters=s(e({},d.parameters),{docs:s(e({},(m=d.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => hours24CozyExampleHtml"},(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source)})});var o,v,g;c.parameters=s(e({},c.parameters),{docs:s(e({},(o=c.parameters)==null?void 0:o.docs),{source:e({originalSource:"() => hours12CozyExampleHtml"},(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source)})});var u,b,y;a.parameters=s(e({},a.parameters),{docs:s(e({},(u=a.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => minutesCozyExampleHtml"},(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source)})});var h,w,x;p.parameters=s(e({},p.parameters),{docs:s(e({},(h=p.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => secondsCozyExampleHtml"},(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source)})});var M,C,z;_.parameters=s(e({},_.parameters),{docs:s(e({},(M=_.parameters)==null?void 0:M.docs),{source:e({originalSource:"() => mobileExampleHtml"},(z=(C=_.parameters)==null?void 0:C.docs)==null?void 0:z.source)})});const J=["Hours24Cozy","Hours12Cozy","MinutesCozy","SecondsCozy","Mobile"];export{c as Hours12Cozy,d as Hours24Cozy,a as MinutesCozy,_ as Mobile,p as SecondsCozy,J as __namedExportsOrder,j as default};
