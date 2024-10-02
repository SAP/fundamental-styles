var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var u=(i,t,n)=>t in i?q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,s=(i,t)=>{for(var n in t||(t={}))Q.call(t,n)&&u(i,n,t[n]);if(v)for(var n of v(t))V.call(t,n)&&u(i,n,t[n]);return i},e=(i,t)=>J(i,K(t));/* empty css               *//* empty css             *//* empty css                */const Z=`<div class="fddocs-container" style="margin-bottom: 200px;">
    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
            <ul class="fd-nested-list">
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverA11">
            <ul class="fd-nested-list fd-nested-list--popover">
                <li class="fd-nested-list__group-header">
                    Group Header 1
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link is-selected" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
            <ul class="fd-nested-list">
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverA12">
            <ul class="fd-nested-list fd-nested-list--popover">
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link is-selected" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
`,$=`<ul class="fd-nested-list">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content is-selected">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child" tabindex="0">
            <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
			<span class="fd-nested-list__title">Level 1 Item</span>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX600L2"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX600L2" aria-hidden="false">
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<span class="fd-nested-list__title">Level 2 Item</span>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX600L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX600L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<span class="fd-nested-list__title">Level 3 Item</span>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX600L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX600L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
</ul>
`,ss=`<ul class="fd-nested-list">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child" tabindex="0">
			<a class="fd-nested-list__link" href="#" tabindex="-1">
				<i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
				<span class="fd-nested-list__title">Level 1 Item</span>
			</a>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX400L222"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L222" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
					</a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX400L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX400L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX400L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX400L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`,es=`<ul class="fd-nested-list">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child is-expanded" tabindex="0">
			<a class="fd-nested-list__link" href="#" tabindex="-1">
				<i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
				<span class="fd-nested-list__title">Level 1 Item</span>
			</a>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX300L2"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX300L2" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
					</a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX300L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX300L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX300L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX300L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`,ts=`<ul class="fd-nested-list fd-nested-list--text-only">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	    <div class="fd-nested-list__content has-child is-expanded">
			<a class="fd-nested-list__link" href="#" >
				<span class="fd-nested-list__title">Level 1 Item</span>
            </a>
            <button class="fd-button fd-nested-list__button"
                    aria-controls="EX100L25"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="Expand submenu">
                    <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list level-2" id="EX100L25" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX100L35"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list level-3" id="EX100L35" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX100L45"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list level-4" id="EX100L45" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
							   <div class="fd-nested-list__content has-child" tabindex="0">
									<a class="fd-nested-list__link" href="#" tabindex="-1">
										<span class="fd-nested-list__title">Level 4 Item</span>
									</a>
                                    <button class="fd-button fd-nested-list__button"
                                        aria-controls="EX100L55"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                        aria-label="Expand submenu">
                                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                    </button>
								</div>
                                <ul class="fd-nested-list level-5" id="EX100L55" aria-hidden="false">
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link"href="#/">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                    <li class="fd-nested-list__item">
									   <div class="fd-nested-list__content has-child" tabindex="0">
											<a class="fd-nested-list__link" href="#" tabindex="-1">
												<span class="fd-nested-list__title">Level 5 Item</span>
											</a>
                                            <button class="fd-button fd-nested-list__button"
                                                aria-controls="EX100L65"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Expand submenu">
                                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                            </button>
										</div>
                                        <ul class="fd-nested-list level-6" id="EX100L65" aria-hidden="false">
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/" >
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link"href="#/">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`,ns=`<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <button class="fd-nested-list__link" aria-controls="EX500L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand submenu">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
`,is=`<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX400H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list " aria-labelledby="EX400H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <a class="fd-nested-list__link" href="#">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button
                        class="fd-button fd-nested-list__button"
                        aria-controls="EX400L2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Expand submenu"
                        onclick="toggleExpandedButton(event)">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link is-selected" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
        <div class="fd-side-nav__group-header" id="EX400H2">
            Group Header 2
        </div>
        <ul class="fd-nested-list" aria-labelledby="EX400H2">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ls=`<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child">
                    <a class="fd-nested-list__link" href="#">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX100L2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Expand submenu"
                        onclick="toggleExpandedButton(event)"
                        >
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fd-nested-list level-2" id="EX100L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,as=`<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`,ds=`<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Main Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;const fs={title:"Deprecated/Components/Side Navigation",parameters:{description:`
## DEPRECATED

This component is deprecated in favor of the vertical navigation component.
The side navigation area can be used to display navigation structures with up to two levels and contains links that change the content area.
The side navigation consists of two container sections: the **main navigation section** (top-aligned) with links used to navigate within the user’s current work context,
and the **utility section** (bottom-aligned) that contains links to additional information. Both of these sections use a nested list to display navigation items.

##Usage
**Use the side navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.


**Do not use the side navigation if:**

- Your scenarios are not in the tooling or administration space.
- You want the entries to open a new browser window.

##States
Side navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.

**Note:** It is recommend to use only two states per device.

        `,tags:["f3","a11y","theme"]}},l=()=>ds;l.storyName="Default";l.parameters={docs:{description:{story:"\nThe default side navigation is displayed in cozy mode with one navigation level. Because there is only one level, all further navigation is shown in the content area. The `fd-nested-list--text-only` modifier class should be added to the lists in both the main and utility sections.\n        "}}};const a=()=>as;a.storyName="Icons";a.parameters={docs:{description:{story:"\nSide navigation can be displayed with icons. In the expanded state, entries can consist of only text or an icon with text. The use or non-use of icons must be consistent for all links on one level. Do not combine entries with and without icons on the same level. To display icons in list items, add the `fd-nested-list__icon` class within the list items.\n        "}}};const d=()=>ls;d.storyName="Group";d.parameters={docs:{description:{story:"\nSide navigation can be displayed with group headers that organize the entries, which is ideal for when there is more than one level of hierarchy. When they are grouped, the entries on the first level are just headers and don't trigger navigation themselves.\n<br><br>It's recommended to use up to two levels of navigation, however; for more levels of navigation, use the content area. When expanded, the `is-expanded` class should also be extended to the content element. To trigger another level, use the `fd-nested-list__button` element.\n        "}}};const c=()=>is;c.storyName="Complex";c.parameters={docs:{description:{story:`
Side navigation can display several different features such as icons, group headers, and two levels of navigation.
        `}}};const o=()=>ns;o.storyName="Condensed";o.parameters={docs:{description:{story:"\nSide navigation can be displayed in a condensed state, showing only icons that represent the navigation entries. When the user selects an entry from the navigation, a **Popover** is displayed. The default size for the popover body is often longer than the text length. However, the length can be adjusted to match the text length by adding the `fd-popover__body--dropdown-fill` class to the `fd-popover__body` element.\n<br><br>To display a condensed side navigation, add the `fd-side-nav--condensed` modifier class to the main element.\n        "}}};const _=()=>ts;_.parameters={docs:{disable:!0}};const r=()=>es;r.parameters={docs:{disable:!0}};const f=()=>ss;f.parameters={docs:{disable:!0}};const p=()=>$;p.parameters={docs:{disable:!0}};const m=()=>Z;m.parameters={docs:{description:{story:`
Nested list can be displayed inside popover.
        `}}};var h,b,L;l.parameters=e(s({},l.parameters),{docs:e(s({},(h=l.parameters)==null?void 0:h.docs),{source:s({originalSource:"() => cozyExampleHtml"},(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source)})});var I,k,g;a.parameters=e(s({},a.parameters),{docs:e(s({},(I=a.parameters)==null?void 0:I.docs),{source:s({originalSource:"() => cozyIconsExampleHtml"},(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source)})});var x,y,E;d.parameters=e(s({},d.parameters),{docs:e(s({},(x=d.parameters)==null?void 0:x.docs),{source:s({originalSource:"() => cozyGroupingExampleHtml"},(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source)})});var w,X,H;c.parameters=e(s({},c.parameters),{docs:e(s({},(w=c.parameters)==null?void 0:w.docs),{source:s({originalSource:"() => complexCozySideNavExampleHtml"},(H=(X=c.parameters)==null?void 0:X.docs)==null?void 0:H.source)})});var S,N,z;o.parameters=e(s({},o.parameters),{docs:e(s({},(S=o.parameters)==null?void 0:S.docs),{source:s({originalSource:"() => condensedStateCozyExampleHtml"},(z=(N=o.parameters)==null?void 0:N.docs)==null?void 0:z.source)})});var C,W,M;_.parameters=e(s({},_.parameters),{docs:e(s({},(C=_.parameters)==null?void 0:C.docs),{source:s({originalSource:"() => nestedListWithoutIconsExampleHtml"},(M=(W=_.parameters)==null?void 0:W.docs)==null?void 0:M.source)})});var G,T,U;r.parameters=e(s({},r.parameters),{docs:e(s({},(G=r.parameters)==null?void 0:G.docs),{source:s({originalSource:"() => nestedListWithIconsOnlyInFirstLevelExampleHtml"},(U=(T=r.parameters)==null?void 0:T.docs)==null?void 0:U.source)})});var D,O,P;f.parameters=e(s({},f.parameters),{docs:e(s({},(D=f.parameters)==null?void 0:D.docs),{source:s({originalSource:"() => nestedListWithGroupHeadersExampleHtml"},(P=(O=f.parameters)==null?void 0:O.docs)==null?void 0:P.source)})});var B,F,Y;p.parameters=e(s({},p.parameters),{docs:e(s({},(B=p.parameters)==null?void 0:B.docs),{source:s({originalSource:"() => nestedListWithoutLinksExampleHtml"},(Y=(F=p.parameters)==null?void 0:F.docs)==null?void 0:Y.source)})});var A,j,R;m.parameters=e(s({},m.parameters),{docs:e(s({},(A=m.parameters)==null?void 0:A.docs),{source:s({originalSource:"() => nestedListPopoverExampleHtml"},(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source)})});const ps=["Cozy","CozyIcons","CozyGrouping","ComplexCozySideNav","CondensedStateCozy","NestedListWithoutIcons","NestedListWithIconsOnlyInFirstLevel","NestedListWithGroupHeaders","NestedListWithoutLinks","NestedListPopover"];export{c as ComplexCozySideNav,o as CondensedStateCozy,l as Cozy,d as CozyGrouping,a as CozyIcons,m as NestedListPopover,f as NestedListWithGroupHeaders,r as NestedListWithIconsOnlyInFirstLevel,_ as NestedListWithoutIcons,p as NestedListWithoutLinks,ps as __namedExportsOrder,fs as default};
