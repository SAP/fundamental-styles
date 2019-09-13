---
title: Localization Editor
id: localization-editor
keywords: localization editor
sidebar: left-navigation-sidebar
toc: false
permalink: components/localization-editor.html
folder: components
summary:
---

## With input

{% capture default %}
<div class="fd-localization-editor">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <label class="fd-form-label" for="vTshu851">
         Localization Editor Label
         </label>
         <div class="fd-input-group">
            <input type="text" class="fd-input" id="" aria-controls="NJvVh542c" aria-expanded="false"
            aria-haspopup="true" placeholder="Enter Label">
            <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light"
            aria-controls="NJvVh542c" aria-expanded="false" aria-haspopup="true">EN*</button>
            </span>
         </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="NJvVh542c">
         <nav class="fd-menu">
            <ul class="fd-menu__list">
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input" id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon">
                     ES
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input"  id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon">
                     CH
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input" id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon">
                     PL
                     </span>
                  </div>
               </li>
            </ul>
         </nav>
      </div>
   </div>
</div>

<br>

<div class="fd-localization-editor">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <label class="fd-form-label" for="vTshu851">
         Localization Editor Compact Mode
         </label>
         <div class="fd-input-group">
            <input type="text" class="fd-input fd-input--compact" id="" aria-controls="test22" aria-expanded="false"
            aria-haspopup="true" placeholder="Enter Label">
            <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-button--light fd-button--compact"
            aria-controls="test22" aria-expanded="false" aria-haspopup="true">EN*</button>
            </span>
         </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="test22">
         <nav class="fd-menu">
            <ul class="fd-menu__list">
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input fd-input--compact" id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon">
                     ES
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input fd-input--compact" id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon ">
                     CH
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group">
                     <input type="text" class="fd-input fd-input--compact" id="" placeholder="Enter Label">
                     <span class="fd-input-group__addon">
                     PL
                     </span>
                  </div>
               </li>
            </ul>
         </nav>
      </div>
   </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br><br>

## With textarea

{% capture default %}
<div class="fd-localization-editor">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <label class="fd-form-label" for="vTshu851">
         Localization Editor Label
         </label>
         <div class="fd-input-group ">
            <textarea class="fd-textarea" id="" aria-controls="NJvVh542" aria-expanded="false"
            aria-haspopup="true"></textarea>
            <span class="fd-input-group__addon  fd-input-group__addon--textarea fd-input-group__addon--button">
            <button class="fd-button--light"
            aria-controls="NJvVh542" aria-expanded="false" aria-haspopup="true">EN*</button>
            </span>
         </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="NJvVh542">
         <nav class="fd-menu">
            <ul class="fd-menu__list">
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group ">
                     <textarea class="fd-textarea" id=""></textarea>
                     <span class="fd-input-group__addon  fd-input-group__addon--textarea">
                     ES
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group ">
                     <textarea class="fd-textarea" id=""></textarea>
                     <span class="fd-input-group__addon  fd-input-group__addon--textarea">
                     CH
                     </span>
                  </div>
               </li>
               <li class="fd-localization-editor__language">
                  <div class="fd-input-group ">
                     <textarea class="fd-textarea" id=""></textarea>
                     <span class="fd-input-group__addon  fd-input-group__addon--textarea">
                     PL
                     </span>
                  </div>
               </li>
            </ul>
         </nav>
      </div>
   </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
