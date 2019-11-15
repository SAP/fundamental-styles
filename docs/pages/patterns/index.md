---
title: Patterns
keywords: patterns
toc: false
sidebar: left-navigation-sidebar
permalink: /patterns/index.html
folder: Patterns
summary:
---

Patterns in Fundamental Library Styles are completely composed from other components CSS and don't have any of their own unique class names or styles.


<div class="docs-component-grid">
    {% for component in site.data.patterns.items %}
        <a href="{{component.meta}}.html" class="docs-component-grid--item">
            <img src="{{site.baseurl}}/images/component-visual/{{component.meta}}.png" alt="{{component.title}}" width="60%" class="docs-component-grid--img__{{component.meta}}">
            <br>
            <h3 class="docs-component-grid--label">{{component.title}}</h3>
        </a>
    {% endfor %}
</div>
