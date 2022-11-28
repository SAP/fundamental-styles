(function() {

    window.onload = function () {
        const netlifyDrawerIframe = getNetlifyDrawerIframe();
        if (netlifyDrawerIframe) {
            netlifyDrawerIframe.style.display = 'none';
        }
    };

    function runOnPageChange() {
        //climb up DOM to get block element
        function getBlock(control) {
            var block = control.parentNode;
            while (block.getAttribute("role") !== "tablist") {
                block = block.parentNode;
            }
            return block;
        }

        //get all tablists
        var tablists = document.querySelectorAll('[role="tablist"]');
        //handle each tablist
        for (var i = 0; i < tablists.length; i++) {
            var tablist = tablists[i];
            //get all the tabs
            var tabs = tablist.querySelectorAll("[aria-controls]");
            for (var j = 0; j < tabs.length; j++) {
                var el = tabs[j];
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    //check states
                    var isDisabled = this.getAttribute("aria-disabled") === "true";
                    var isSelected = this.getAttribute("aria-selected") === "true";
                    if (isDisabled || isSelected) {
                        return;
                    }
                    //get all controls in grouping
                    var block = getBlock(this);
                    var controls = block.querySelectorAll("[aria-controls]");
                    //handle each controls
                    for (var k = 0; k < controls.length; k++) {
                        var control = controls[k];
                        //new selected tab
                        var isTriggerTab = control === this;
                        //get panel
                        var panelId = control.getAttribute("aria-controls");
                        var panel = document.getElementById(panelId);
                        //set states
                        control.setAttribute("aria-selected", isTriggerTab);
                        control.classList.remove('is-selected');
                        panel.setAttribute("aria-expanded", isTriggerTab);
                        panel.classList.remove('is-expanded');
                    }
                })
            }
        }
        var els = document.querySelectorAll("[aria-controls]");
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            el.addEventListener('click', function () {
                var targetId = this.getAttribute("aria-controls");
                var target = document.getElementById(targetId);
                //dropdown
                var isDropdown = this.getAttribute("aria-haspopup") === "true";
                if (isDropdown && target) {
                    // Get all of elements with same aria controls ID
                    const elements = document.querySelectorAll('[aria-controls="' + targetId + '"]');

                    //trigger
                    var isExpanded = this.getAttribute("aria-expanded") === "true";
                    this.setAttribute("aria-expanded", !isExpanded);
                    if (isExpanded) {
                        for (let i = 0; i < elements.length; i ++) {
                            elements[i].classList.remove('is-expanded')
                        }
                    } else {
                        for (let i = 0; i < elements.length; i ++) {
                            elements[i].classList.add('is-expanded')
                        }
                    }
                    //target
                    target.setAttribute("aria-hidden", isExpanded);
                    //searchinput for shellbar
                    if (document.getElementById('' + targetId + '1') !== null) {
                        document.getElementById('' + targetId + '1').setAttribute("aria-hidden", isExpanded);
                    }
                    return;
                }
                //tree
                if(target){
                    var isTree = target.getAttribute("role") === "tree";
                    var isTreeItem = target.getAttribute("role") === "treeitem";
                }

                function setPressed(el, bool) {
                    el.setAttribute("aria-pressed", bool);
                    if (bool) {
                        el.classList.add('is-pressed');
                    } else {
                        el.classList.remove('is-pressed');
                    }
                }

                function setExpanded(el, bool) {
                    el.setAttribute("aria-expanded", bool);
                    //get group
                    var group = el.querySelector("[role=group]");
                    group.setAttribute("aria-hidden", !bool);
                    if (!bool) {
                        group.classList.add('is-hidden');
                    } else {
                        group.classList.remove('is-hidden');
                    }
                }

                var isPressed;
                //handle the primary trigger
                if (isTree || isTreeItem) {
                    isPressed = this.getAttribute("aria-pressed") === "true";
                    setPressed(this, !isPressed);
                }
                //toggle a single treeitem
                if (isTreeItem) {
                    setExpanded(target, !isPressed);
                }
                //toggle all treeitems
                if (isTree) {
                    //all triggers
                    var controls = target.querySelectorAll("[aria-controls]");
                    for (var i = 0; i < controls.length; i++) {
                        var control = controls[i];
                        setPressed(control, !isPressed);
                        targetId = control.getAttribute("aria-controls");
                        target = document.getElementById(targetId);
                        setExpanded(target, !isPressed);
                    }
                }
            })
        }

        //set the indeterminate state of checkbox - tristate for checkbox examples
        var triStateCheckboxes = ['Ai4ez613', 'Ai4ez613i1', 'Ai4ez613i2', 'Ai4ez613i3', 'Ai4ez613i4', 'Ai4ez613i5', 'Ai4ez613i6', 'Ai4ez613i7', 'Ai4ez643', 'Ai4ez613c', 'Ai4ez643c', 'Ai4ez1'];
        for (var i = 0; i < triStateCheckboxes.length; i++) {
            const triStateCheckbox = document.getElementById(triStateCheckboxes[i]);
            if (triStateCheckbox) {
                triStateCheckbox.indeterminate = true;
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        runOnPageChange();
        const callback = function(mutationsList) {
            for (let i = 0, len = mutationsList.length; i < len; i++) {
                if (mutationsList[i].type == 'childList') {
                    runOnPageChange();
                    break;
                }
            }
        };

        const observer = new MutationObserver(callback);
        const config = { childList: true, subtree: true };
        observer.observe(document.getElementById('root'), config);
        observer.observe(document.getElementById('docs-root'), config);
    });


    // display responsive component controls
    const displayControls = document.querySelectorAll('.docs-component--responsive-display__controls');

    for (var i = 0; i < displayControls.length; i++) {
        const frame = displayControls[i].parentElement.querySelector('.docs-component--responsive-display__frame');
        displayControls[i].addEventListener('click', function (event) {
            const clickTarget = event.target;
            clearControls(displayControls[i]);
            resizeFrame(clickTarget, frame);
            clickTarget.setAttribute('aria-pressed', true);
        })
    }

    function clearControls(displayControl) {
        let childrens = Array.from(displayControl.children)
        for (var i = 0; i < childrens.length; i++) {
            childrens[i].setAttribute('aria-pressed', false);
        }
    }

    function resizeFrame(target, frame) {
        const size = target.getAttribute('data-size');
        switch (size) {
            case 'mobile':
                frame.width = '414';
                frame.height = '736'
                break;
            case 'tablet':
                frame.width = '720';
                frame.height = '1024'
                break;
        }
    }

})();


function toggleElAttrs(id, toggleAttrs) {
    let ref = document.getElementById(id);
    if (ref && Array.isArray(toggleAttrs) && toggleAttrs.length){
        for(var i = 0; i < toggleAttrs.length; i++) {
            var val = ref.getAttribute(toggleAttrs[i]);
            if(val === 'true') {
                setElAttr(id, toggleAttrs[i], 'false');
            } else if (val === 'false') {
                setElAttr(id, toggleAttrs[i], 'true');
            }
        }
    }
}

function setElAttr(id, attr, value) {
    let ref = document.getElementById(id);
    if (ref && attr && value){
        ref.setAttribute(attr, value);
    }
}

function onControlClick(controlId, selfId, toggleAttrs) {
    let ref = document.getElementById(controlId);

    if (ref.getAttribute("aria-hidden") === "true") {
        ref.setAttribute("aria-hidden", "false");
    } else {
        ref.setAttribute("aria-hidden", "true");
    }

    // tree
    var isTree = ref.getAttribute('role') === 'tree';
    var isTreeItem = ref.getAttribute('role') === 'treeitem';

    function setPressed(el, bool) {
        el.setAttribute('aria-pressed', bool);
        if (bool) {
            el.classList.add('is-pressed');
        } else {
            el.classList.remove('is-pressed');
        }
    }

    function setExpanded(el, bool) {
        el.setAttribute('aria-expanded', bool);
        //get group
        var group = el.querySelector('[role=group]');
        if (group) {
            group.setAttribute('aria-hidden', !bool);
            if (!bool) {
                group.classList.add('is-hidden');
            } else {
                group.classList.remove('is-hidden');
            }
        }
    }

    let isPressed;
    //handle the primary trigger
    if (isTree || isTreeItem) {
        const control = ref.querySelector('.fd-tree__control');
        isPressed = control.getAttribute('aria-pressed') === 'true';
        setPressed(control, !isPressed);
    }
    //toggle a single treeitem
    if (isTreeItem) {
        setExpanded(ref, !isPressed);
    }
    //toggle all treeitems
    if (isTree) {
        //all triggers
        const controls = document.querySelectorAll('.fd-tree__control');
        for (let i = 0; i < controls.length; i++) {
            let control = controls[i];
            setPressed(control, !isPressed);
            targetId = control.getAttribute('aria-controls');
            ref = document.getElementById(targetId);
            setExpanded(ref, !isPressed);
        }
    }
}

function stepInputValue(inputId, stepDirection) {
    let inputRef = document.getElementById(inputId);

    if (inputRef) {
        if (stepDirection === "up") {
            ++inputRef.value;
        } else if (stepDirection === "down") {
            --inputRef.value;
        }
    } else {
        console.warn("No element with id='" + inputId + "' found");
    }
}

function setValue(inputId, value) {
    let inputRef = document.getElementById(inputId);
    if (inputRef) {
        inputRef.value = value;
    } else {
        console.warn("No element with id='" + inputId + "' found");
    }
}

function setAriaHidden(elementId, value) {
    let elementRef = document.getElementById(elementId);
    if (elementRef) {
        elementRef.setAttribute('aria-hidden', value);
    } else {
        console.warn("No element with id='" + elementId + "' found");
    }
}

function setFocus(elementId) {
    let elementRef = document.getElementById(elementId);
    if (elementRef) {
        elementRef.focus();
    } else {
        console.warn("No element with id='" + elementId + "' found");
    }
}

function addClass(elementId, className) {
    let elementRef = document.getElementById(elementId);
    if (elementRef && className) {
        elementRef.classList.add(className);
    } else {
        console.warn("No element with id='" + elementId + "' found");
    }
}

function browseFile(inputId) {
    let inputRef = document.getElementById(inputId);
    inputRef.click();
}

function toggleClass(elementId, className) {
    let elementRef = document.getElementById(elementId);
    if (elementRef && className) {
        elementRef.classList.toggle(className);
    } else {
        console.warn("No element with id='" + elementId + "' found");
    }
}

function onPopoverClick(id) {
    let elementRef = document.getElementById(id);
    let toggle = elementRef.getAttribute('aria-hidden');
    // I didn't use ?: because of IE 11 support
    if(toggle == 'true') {
        toggle='false';
    } else {
        toggle='true';
    }

    setAriaHidden(id, toggle);
}

function isSpaceOrEnter(event, buttonFn) {
    switch(event && event.key && event.key.code){
        case 'Space':
        case 'Enter':
            buttonFn instanceof Function && buttonFn();
        default:
            break;
    }
}

function toggleNestedListSubmenu(event) {
    let button = event.target;
    let icon = button.children[0];

    if(button && (button.getAttribute('aria-expanded')=='false')) {
        icon.classList = 'sap-icon--navigation-down-arrow';
        button.setAttribute('aria-expanded', 'true');
    } else {
        icon.classList = 'sap-icon--navigation-right-arrow';
        button.setAttribute('aria-expanded', 'false');
    }
}

function toggleCondensedVerticalNavSubmenu(event) {
    let button = event.target;

    while (button.id !== 'parentCalendarButton') {
        button = button.parentNode;
    }

    if (button.classList.contains('is-expanded')) {
        button.classList.remove('is-expanded');
    } else {
        button.classList.add('is-expanded');
    }
}

function toggleVerticalNavSubmenu(event) {
    let button = event.target;
    if (button.tagName.toLowerCase() !== 'li') {
        button = event.target.parentNode;
    }
    let arrowIcon = button.querySelector('.fd-list__navigation-item-arrow');

    if (arrowIcon && arrowIcon.classList.contains('is-expanded')) {
        button.classList.remove('is-expanded');
        arrowIcon.classList.remove('is-expanded');
        arrowIcon.classList.add('sap-icon--navigation-right-arrow');
        arrowIcon.classList.remove('sap-icon--navigation-down-arrow');
    } else if (arrowIcon) {
        button.classList.add('is-expanded');
        arrowIcon.classList.add('is-expanded');
        arrowIcon.classList.remove('sap-icon--navigation-right-arrow');
        arrowIcon.classList.add('sap-icon--navigation-down-arrow');
    }
}

function getNetlifyDrawerIframe() {
    try {

        const iframes = window.parent.document.getElementsByTagName('iframe');
        let iframe;

        for (const key in iframes) {
            if (iframes[key].src?.startsWith('https://app.netlify.com')) {
                iframe = iframes[key];
            }
        }

        return iframe;

    } catch (error) {
        console.log(error);
    }
}
