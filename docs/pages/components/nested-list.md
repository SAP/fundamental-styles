---
title: Nested List
id: nested-list
keywords: nested-list, nested, list
sidebar: left-navigation-sidebar
toc: false
permalink: components/nested-list.html
folder: components
summary:
---

{: .docs-intro}
Nested List represents a nested structure with up to 10 levels.

# Nested List Without Icons
{% capture example-1 %}
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
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX100L2" aria-haspopup="true">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list level-2" id="EX100L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX100L3" aria-haspopup="true">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list level-3" id="EX100L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX100L4" aria-haspopup="true">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list level-4" id="EX100L4" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link has-child" 
                                    href="#" aria-controls="EX100L5" aria-haspopup="true">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                                <ul class="fd-nested-list level-5" id="EX100L5" aria-hidden="true">
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link" href="#">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link has-child" 
                                            href="#" aria-controls="EX100L6" aria-haspopup="true">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                        <ul class="fd-nested-list level-6" id="EX100L6" aria-hidden="true">
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link" href="#">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link" href="#" >
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link" href="#">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link" href="#">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
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
{% endcapture %}
{% include display-component.html component=example-1 %}

<br /><br />

# Nested List With Icons
{% capture example-2 %}
<ul class="fd-nested-list fd-nested-list--no-border">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected" href="#">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX700L2" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list level-2" id="EX700L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX700L3" aria-haspopup="true">
                    <span class="fd-nested-list__icon sap-icon--appointment"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list level-3" id="EX700L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__icon sap-icon--group"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX700L4" aria-haspopup="true">
                            <span class="fd-nested-list__icon sap-icon--history"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list level-4" id="EX700L4" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__icon sap-icon--leads"></span>
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__icon sap-icon--opportunity"></span>
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__icon sap-icon--retail-store"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--video"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-2 %}

<br /><br /> 

# Nested List With Icons Only in First-Level Items
{% capture example-3 %}
<ul class="fd-nested-list">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected" href="#">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX300L2" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX300L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX300L3" aria-haspopup="true">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX300L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX300L4" aria-haspopup="true">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX300L4" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
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
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-3 %}

<br /><br />

# Nested List With Group Headers
{% capture example-4 %}
<ul class="fd-nested-list">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected" href="#">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX400L2" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX400L3" aria-haspopup="true">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX400L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX400L4" aria-haspopup="true">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX400L4" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
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
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-4 %}

<br /><br />

# Nested List With Group Headers Compact Mode
{% capture example-5 %}
<ul class="fd-nested-list fd-nested-list--compact">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected" href="#">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX500L2" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX500L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX500L3" aria-haspopup="true">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX500L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX500L4" aria-haspopup="true">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX500L4" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
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
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-5 %}

<br /><br />

# Nested List Without Links
{% capture example-6 %}
<ul class="fd-nested-list fd-nested-list--compact">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content is-selected">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content has-child" aria-controls="EX600L2" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX600L2" aria-hidden="true">
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child" 
                    aria-controls="EX600L3" aria-haspopup="true">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX600L3" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                    </li>
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content has-child" 
                            aria-controls="EX600L4" aria-haspopup="true">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX600L4" aria-hidden="true">
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
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-6 %}

<br /><br />

# Right To Left Support
{% capture example-7 %}
<ul class="fd-nested-list fd-nested-list--no-border" dir="rtl">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--home"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected" href="#">
            <span class="fd-nested-list__icon sap-icon--calendar"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link has-child" href="#" aria-controls="EX700" aria-haspopup="true">
            <span class="fd-nested-list__icon sap-icon--employee"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
        <ul class="fd-nested-list level-2" id="EX700" aria-hidden="true">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link has-child" 
                    href="#" aria-controls="EX701" aria-haspopup="true">
                    <span class="fd-nested-list__icon sap-icon--email-read"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
                <ul class="fd-nested-list level-3" id="EX701" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__icon sap-icon--home"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link has-child" 
                            href="#" aria-controls="EX702" aria-haspopup="true">
                            <span class="fd-nested-list__icon sap-icon--documents"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                        <ul class="fd-nested-list level-4" id="EX702" aria-hidden="true">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__icon sap-icon--employee-pane"></span>
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--database"></span>
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--activities"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__icon sap-icon--bar-chart"></span>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link" href="#">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=example-7 %}