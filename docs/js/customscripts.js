$(document).ready(function () {

    //AnchorJS
    anchors.add('.post-content>h2');

    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    $('#copyright-year').text(new Date().getFullYear());

    if ((location.pathname === '/index.html') || (location.pathname === '/') || (location.pathname === '/fundamental/')) {
        $('#mobile-sidenav-btn').hide();
    }

    $('#mobile-sidenav-btn').click(() => {
        $("#tg-sb-sidebar").toggleClass('fd-styles__mobile-list');
    });

});

$(document).ready(function () {
    //dropdown
    var els = document.querySelectorAll("[aria-controls]");
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        el.addEventListener('click', function (e) {
            var targetId = this.getAttribute("aria-controls");
            var target = document.getElementById(targetId);
            //alert
            var isAlert = this.parentElement.getAttribute("role") === "alert";
            if (isAlert) {
                //remove or hide if we want some animation
                // target.setAttribute("aria-hidden", true);
                target.remove();
                return;
            }
            //dropdown
            var isDropdown = this.getAttribute("aria-haspopup") === "true";
            if (isDropdown) {
                //trigger
                var isExpanded = this.getAttribute("aria-expanded") === "true";
                this.setAttribute("aria-expanded", !isExpanded);
                //target
                var targetIsHidden = target.getAttribute("aria-hidden") == "true";
                target.setAttribute("aria-hidden", isExpanded);
                return;
            }
            //tree
            var isTree = target.getAttribute("role") === "tree";
            var isTreeItem = target.getAttribute("role") === "treeitem";

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

    // bg color toggle for component display
    var toggle = document.getElementsByClassName("toggle-bg");
    for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener("change", function () {
            if (this.checked) {
                this.closest('div').style.backgroundColor = "white";
            } else {
                this.closest('div').style.backgroundColor = "#f3f4f5";
            }
        });
    }

    //set the indeterminate state of checkbox
    const triStateCheckbox = document.getElementById('Ai4ez613');
    if (triStateCheckbox) {
        triStateCheckbox.indeterminate = true;
    }

    // display responsive component controls
    const displayControls = document.querySelectorAll('.docs-component--responsive-display__controls');
    displayControls.forEach((displayControl) => {
        const frame = displayControl.parentElement.querySelector('.docs-component--responsive-display__frame');
        console.log(frame);
        displayControl.addEventListener('click', event => {
            const clickTarget = event.target;
            clearControls(displayControl);
            resizeFrame(clickTarget, frame);
            clickTarget.setAttribute('aria-pressed', true);
        })
    });

    function clearControls(displayControl) {
        Array.from(displayControl.children).forEach(button => {
            button.setAttribute('aria-pressed', false);
        });
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

});
