/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
$(document).ready(function() {

    //AnchorJS
    // eslint-disable-next-line no-undef
    anchors.add('.post-content>h2');

    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    $('#copyright-year').text(new Date().getFullYear());

    if ((location.pathname === '/index.html') || (location.pathname === '/') || (location.pathname === '/fundamental/')) {
        $('#mobile-sidenav-btn').hide();
    }

    $('#mobile-sidenav-btn').click(function() {
        $('#tg-sb-sidebar').toggleClass('fd-styles__mobile-list');
    });
});

$(document).ready(function() {
    //scrollable tokenizer
    tokenizerScrollToEnd();

    //dialog
    draggableDialog();

    //dropdown
    var els = document.querySelectorAll('[aria-controls]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        el.addEventListener('click', function() {
            var targetId = this.getAttribute('aria-controls');
            var target = document.getElementById(targetId);
            //message strip
            var isMessageStrip = this.parentElement.getAttribute('role') === 'alert';
            if (isMessageStrip) {
                //remove or hide if we want some animation
                $(target).remove();
                return;
            }
            //dropdown
            var isDropdown = this.getAttribute('aria-haspopup') === 'true';
            if (isDropdown) {
                // Get all of elements with same aria controls ID
                const elements = document.querySelectorAll('[aria-controls="' + targetId + '"]');

                //trigger
                var isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                if (isExpanded) {
                    for (let i = 0; i < elements.length; i ++) {
                        elements[i].classList.remove('is-expanded');
                    }
                } else {
                    for (let i = 0; i < elements.length; i ++) {
                        elements[i].classList.add('is-expanded');
                    }
                }
                //target
                target.setAttribute('aria-hidden', isExpanded);
                //searchinput for shellbar
                if (document.getElementById('' + targetId + '1') !== null) {
                    document.getElementById('' + targetId + '1').setAttribute('aria-hidden', isExpanded);
                }
                return;
            }
            //tree
            if (target) {
                var isTree = target.getAttribute('role') === 'tree';
                var isTreeItem = target.getAttribute('role') === 'treeitem';
            }

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
                group.setAttribute('aria-hidden', !bool);
                if (!bool) {
                    group.classList.add('is-hidden');
                } else {
                    group.classList.remove('is-hidden');
                }
            }

            var isPressed;
            //handle the primary trigger
            if (isTree || isTreeItem) {
                isPressed = this.getAttribute('aria-pressed') === 'true';
                setPressed(this, !isPressed);
            }
            //toggle a single treeitem
            if (isTreeItem) {
                setExpanded(target, !isPressed);
            }
            //toggle all treeitems
            if (isTree) {
                //all triggers
                var controls = target.querySelectorAll('[aria-controls]');
                for (var i = 0; i < controls.length; i++) {
                    var control = controls[i];
                    setPressed(control, !isPressed);
                    targetId = control.getAttribute('aria-controls');
                    target = document.getElementById(targetId);
                    setExpanded(target, !isPressed);
                }
            }
        });
    }

    //climb up DOM to get block element
    function getBlock(control) {
        var block = control.parentNode;
        while (block.getAttribute('role') !== 'tablist') {
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
        var tabs = tablist.querySelectorAll('[aria-controls]');
        for (var j = 0; j < tabs.length; j++) {
            var el = tabs[j];
            el.addEventListener('click', function(e) {
                e.preventDefault();
                //check states
                var isDisabled = this.getAttribute('aria-disabled') === 'true';
                var isSelected = this.getAttribute('aria-selected') === 'true';
                if (isDisabled || isSelected) {
                    return;
                }
                //get all controls in grouping
                var block = getBlock(this);
                var controls = block.querySelectorAll('[aria-controls]');
                //handle each controls
                for (var k = 0; k < controls.length; k++) {
                    var control = controls[k];
                    //new selected tab
                    var isTriggerTab = control === this;
                    //get panel
                    var panelId = control.getAttribute('aria-controls');
                    var panel = document.getElementById(panelId);
                    //set states
                    control.setAttribute('aria-selected', isTriggerTab);
                    control.classList.remove('is-selected');
                    panel.setAttribute('aria-expanded', isTriggerTab);
                    panel.classList.remove('is-expanded');
                }
            });
        }
    }

    // bg color toggle for component display
    var toggle = document.getElementsByClassName('toggle-bg');
    for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener('change', function() {
            if (this.checked) {
                this.closest('div').style.backgroundColor = 'white';
            } else {
                this.closest('div').style.backgroundColor = '#f3f4f5';
            }
        });
    }

    //set the indeterminate state of checkbox
    const triStateCheckbox = document.getElementById('Ai4ez613');
    if (triStateCheckbox) {
        triStateCheckbox.indeterminate = true;
    }

    const triStateCheckboxI1 = document.getElementById('Ai4ez613i1');
    if (triStateCheckboxI1) {
        triStateCheckboxI1.indeterminate = true;
    }

    const triStateCheckboxI2 = document.getElementById('Ai4ez613i2');
    if (triStateCheckboxI2) {
        triStateCheckboxI2.indeterminate = true;
    }

    const triStateCheckboxI3 = document.getElementById('Ai4ez613i3');
    if (triStateCheckboxI3) {
        triStateCheckboxI3.indeterminate = true;
    }

    const triStateCheckboxI4 = document.getElementById('Ai4ez613i4');
    if (triStateCheckboxI4) {
        triStateCheckboxI4.indeterminate = true;
    }

    const triStateCheckboxI5 = document.getElementById('Ai4ez613i5');
    if (triStateCheckboxI5) {
        triStateCheckboxI5.indeterminate = true;
    }

    const triStateCheckboxI6 = document.getElementById('Ai4ez613i6');
    if (triStateCheckboxI6) {
        triStateCheckboxI6.indeterminate = true;
    }

    const triStateCheckboxI7 = document.getElementById('Ai4ez613i7');
    if (triStateCheckboxI7) {
        triStateCheckboxI7.indeterminate = true;
    }

    const triStateCheckboxI8 = document.getElementById('Ai4ez6191');
    if (triStateCheckboxI8) {
        triStateCheckboxI8.indeterminate = true;
    }

    // display responsive component controls
    const displayControls = document.querySelectorAll('.docs-component--responsive-display__controls');

    for (var i = 0; i < displayControls.length; i++) {
        const frame = displayControls[i].parentElement.querySelector('.docs-component--responsive-display__frame');
        displayControls[i].addEventListener('click', function(event) {
            const clickTarget = event.target;
            clearControls(displayControls[i]);
            resizeFrame(clickTarget, frame);
            clickTarget.setAttribute('aria-pressed', true);
        });
    }

    function clearControls(displayControl) {
        let childrens = Array.from(displayControl.children);
        for (var i = 0; i < childrens.length; i++) {
            childrens[i].setAttribute('aria-pressed', false);
        }
    }

    function resizeFrame(target, frame) {
        const size = target.getAttribute('data-size');
        switch (size) {
            case 'mobile':
                frame.width = '414';
                frame.height = '736';
                break;
            case 'tablet':
                frame.width = '720';
                frame.height = '1024';
                break;
        }
    }
    //display inline-help on mouse over of the help icon
    $('.fd-popover[aria-label=\'inline-help\']').hover(function() {
        $(this).find('.fd-popover__popper').attr('aria-hidden', false);
    }, function() {
        $(this).find('.fd-popover__popper').attr('aria-hidden', true);
    });
});

function stepInputValue(inputId, stepDirection) {
    
    let inputRef = document.getElementById(inputId);

    if (inputRef) {
        if (stepDirection === 'up') {
            ++inputRef.value;
        } else if (stepDirection === 'down') {
            --inputRef.value;
        }
    } else {
        console.warn('No element with id=\'' + inputId + '\' found');
    }
}

function browseFile(inputId) {
    
    let inputRef = document.getElementById(inputId);
    inputRef.click();
  
}

function selectFile(input, inputtext){
    var file=input.value;
    let inputRef = document.getElementById(inputtext);
    inputRef.value=file;
}

function toggleDialog(dialogId, show) {
    let dialog = document.getElementById(dialogId);
    if (show) {
        $(dialog).addClass('fd-dialog--active');
    } else {
        $(dialog).removeClass('fd-dialog--active');
    }
}


function draggableDialog() {
    let draggableDialogs = document.getElementsByClassName('fd-dialog__content--draggable-grab');

    for (let i = 0; i < draggableDialogs.length; i++) {
        let dialogHeader = draggableDialogs[i].getElementsByClassName('fd-dialog__header')[0];
        if (dialogHeader) {
            dialogHeader.onmousedown = function() {
                $(draggableDialogs[i]).addClass('fd-dialog__content--draggable-grabbing');
            };
            dialogHeader.onmouseup = function() {
                $(draggableDialogs[i]).removeClass('fd-dialog__content--draggable-grabbing');
            };
        }
    }
}

function tokenizerScrollToEnd() {
    const tokenizerElement = $('#tokenizer-scrollable');
    if (tokenizerElement) {
        tokenizerElement.scrollLeft(10000);
    }
}
