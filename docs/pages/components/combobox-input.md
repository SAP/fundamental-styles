---
title: Combobox Input
id: combobox-input
keywords: combobox input
sidebar: left-navigation-sidebar
toc: false
permalink: components/combobox-input.html
folder: components
summary:
---


{% capture default %}
<div class="fd-combobox-input">
  <div class="fd-popover">
      <div class="fd-popover__control">
          <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
              <div class="fd-input-group fd-input-group--after">
                  <input type="text" class="fd-form-control" id="" placeholder="Select Fruit">
                  <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                      <button class=" fd-button--light sap-icon--navigation-down-arrow"></button>
                  </span>
              </div>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348">
          <nav class="fd-menu">
          <ul class="fd-menu__list">
              <li><a href="#" class="fd-menu__item">Pear</a></li>
              <li><a href="#" class="fd-menu__item">Strawberry</a></li>
              <li><a href="#" class="fd-menu__item">Raspberry</a></li>
              <li><a href="#" class="fd-menu__item fd-menu__link">+ New Item</a></li>
          </ul>
          </nav>
      </div>
  </div>
</div>

<br>

<div class="fd-combobox-input">
  <div class="fd-popover">
      <div class="fd-popover__control">
          <div class="fd-combobox-control" aria-label="Image label" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
              <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                  <input type="text" class="fd-form-control fd-form-control--compact" id="" placeholder="Select Fruit">
                  <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                      <button class=" fd-button--light sap-icon--navigation-down-arrow"></button>
                  </span>
              </div>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34">
          <nav class="fd-menu">
          <ul class="fd-menu__list">
              <li><a href="#" class="fd-menu__item">Pear</a></li>
              <li><a href="#" class="fd-menu__item">Strawberry</a></li>
              <li><a href="#" class="fd-menu__item">Raspberry</a></li>
              <li><a href="#" class="fd-menu__item fd-menu__link">+ New Item</a></li>
          </ul>
          </nav>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
