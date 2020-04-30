/* eslint-disable no-undef */
(function () {
    const els = document.querySelectorAll("[aria-controls]");
    for (let i = 0; i < els.length; i++) {
        const el = els[i];
        el.addEventListener('click', function () {
            let targetId = this.getAttribute("aria-controls");
            let target = document.getElementById(targetId);
            //message strip
            const isMessageStrip = this.parentElement.getAttribute("role") === "alert";
            if (isMessageStrip) {
                //remove or hide if we want some animation
                // target.setAttribute("aria-hidden", true);
                target.remove();
                return;
            }
            //dropdown
            const isDropdown = this.getAttribute("aria-haspopup") === "true";
            if (isDropdown) {
                //trigger
                const isExpanded = this.getAttribute("aria-expanded") === "true";
                this.setAttribute("aria-expanded", !isExpanded);
                if (isExpanded) {
                    this.classList.remove('is-expanded');
                } else {
                    this.classList.add('is-expanded');
                }
                //target
                target.setAttribute("aria-hidden", isExpanded);
                return;
            }
            //tree
            const isTree = target.getAttribute("role") === "tree";
            const isTreeItem = target.getAttribute("role") === "treeitem";

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
                const group = el.querySelector("[role=group]");
                group.setAttribute("aria-hidden", !bool);
                if (!bool) {
                    group.classList.add('is-hidden');
                } else {
                    group.classList.remove('is-hidden');
                }
            }
            let isPressed;
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
                const controls = target.querySelectorAll("[aria-controls]");
                for (let i = 0; i < controls.length; i++) {
                    const control = controls[i];
                    setPressed(control, !isPressed);
                    targetId = control.getAttribute("aria-controls");
                    target = document.getElementById(targetId);
                    setExpanded(target, !isPressed);
                }
            }
        })
    }

    const toggle = document.getElementById("toggleBg");
    const toggleState = localStorage.getItem('toggleState');
    if (toggleState == "true") {
        toggle.checked = true;
        document.body.style.backgroundColor = "white";
    }
    toggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.style.backgroundColor = "white";
            localStorage.setItem("toggleState", true);
        } else {
            document.body.style.backgroundColor = "#EDEFF0";
            localStorage.setItem("toggleState", false);
        }
    });

    const uglyThemeCss = "static/theme-ugly.css";
    const toggleTheme = document.getElementById("toggleTheme");
    const toggleThemeState = localStorage.getItem('toggleThemeState');
    if (toggleThemeState == "false") {
        toggleTheme.checked = false;
        toggleStylesheet(uglyThemeCss, false);
    }
    toggleTheme.addEventListener('change', function () {
        if (this.checked) {
            toggleStylesheet(uglyThemeCss, true);
            localStorage.setItem("toggleThemeState", true);
        } else {
            toggleStylesheet(uglyThemeCss, false);
            localStorage.setItem("toggleThemeState", false);
        }
    });

    const unNormalizeCss = "static/unnormalize.css";
    const toggleUnNormalize = document.getElementById("toggleUnNormalize");
    const toggleUnNormalizeState = localStorage.getItem('toggleUnNormalizeState');
    if (toggleUnNormalizeState == "true") {
        toggleUnNormalize.checked = true;
        toggleStylesheet(unNormalizeCss, true);
    }
    toggleUnNormalize.addEventListener('change', function () {
        if (this.checked) {
            toggleStylesheet(unNormalizeCss, true);
            localStorage.setItem("toggleUnNormalizeState", true);
        } else {
            toggleStylesheet(unNormalizeCss, false);
            localStorage.setItem("toggleUnNormalizeState", false);
        }
    });

    const normalizeCss = "normalize/normalize.css";
    const toggleNormalize = document.getElementById("toggleNormalize");
    const toggleNormalizeState = localStorage.getItem('toggleNormalizeState');
    if (toggleNormalizeState == "true") {
        toggleNormalize.checked = true;
        toggleStylesheet(normalizeCss, true);
    }
    toggleNormalize.addEventListener('change', function () {
        if (this.checked) {
            toggleStylesheet(normalizeCss, true);
            localStorage.setItem("toggleNormalizeState", true);
        } else {
            toggleStylesheet(normalizeCss, false);
            localStorage.setItem("toggleNormalizeState", false);
        }
    });

    const toggleAnimationCss = "static/animation.css";
    const toggleAnimation = document.getElementById("toggleAnimation");
    const toggleAnimationState = localStorage.getItem('toggleAnimationState');
    if (toggleAnimationState == "true") {
        toggleAnimation.checked = true;
        toggleStylesheet(toggleAnimationCss, true);
    }
    toggleAnimation.addEventListener('change', function () {
        if (this.checked) {
            toggleStylesheet(toggleAnimationCss, true);
            localStorage.setItem("toggleAnimationState", true);
        } else {
            toggleStylesheet(toggleAnimationCss, false);
            localStorage.setItem("toggleAnimationState", false);
        }
    });

    const toggleDir = document.getElementById("toggleDir");
    const toggleDirState = localStorage.getItem('toggleDir');
    if (toggleDirState == "true") {
        toggle.checked = true;
        document.body.setAttribute("dir", "rtl");
    }
    toggleDir.addEventListener('change', function () {
        if (this.checked) {
            document.body.setAttribute("dir", "rtl");
            localStorage.setItem("toggleDirState", true);
        } else {
            document.body.setAttribute("dir", "ltr");
            localStorage.setItem("toggleDirState", false);
        }
    });

    const toggleTouch = document.getElementById("toggleTouch");
    const toggleTouchState = localStorage.getItem('toggleTouch');
    if (toggleTouchState == "true") {
        toggle.checked = true;
        document.body.classList.add("fd-for-touch");
    }
    toggleTouch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add("fd-for-touch");
            localStorage.setItem("toggleTouchState", true);
        } else {
            document.body.classList.remove("fd-for-touch");
            localStorage.setItem("toggleTouchState", false);
        }
    });

    const toggleCompact = document.getElementById("toggleCompact");
    const toggleCompactState = localStorage.getItem('toggleCompact');
    if (toggleCompactState == "true") {
        toggle.checked = true;
        document.body.classList.add("fd-for-compact");
    }
    toggleCompact.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add("fd-for-compact");
            localStorage.setItem("toggleCompactState", true);
        } else {
            document.body.classList.remove("fd-for-compact");
            localStorage.setItem("toggleCompactState", false);
        }
    });

    //indeterminate
    const indeterminates = document.querySelectorAll("[indeterminate]");
    for (let i = 0; i < indeterminates.length; i++) {
        indeterminates[i].indeterminate = true;
    }


})();
