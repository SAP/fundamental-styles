---
title: Generic Tile
id: generic-tile
keywords: tile generic tile
sidebar: left-navigation-sidebar
toc: false
permalink: components/generic-tile.html
folder: components
summary:
---


Generic Tiles can be used to represent an app similar to the SAP Fiori launchpad home page. They can display different types of content, which are based on the data supplied by the app. They can contain an icon, a title, an informative text, KPIs, counters and charts.
{: .docs-intro}

## Generic Tile Sizes (Responsiveness)
The large (default) tiles are designed for screens larger than 374px. For smaller screens use the small tiles `fd-tile--s`.

<ul class="docs-ul">
    <li>Large Tile - 11 x 11rem</li>
    <li>Small Tile - 9.25 x 9.25rem</li>
</ul>

*The background-colors are used to illustrate the tile sections in the documentation page.
{% capture tile-sizes %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile-sizes %}

## Generic Tile Layout
The generic tile control supports two tile dimensions - 1×1 (default) and 2×1 (`fd-tile--double`).
<ul class="docs-ul">
    <li>Large Tile (1 x 1) - 11 x 11rem</li>
    <li>Large Tile (2 x 1) - 22.5 x 11rem</li>
    <li>Small Tile (1 x 1) - 9.25 x 9.25rem</li>
    <li>Small Tile (2 x 1) - 19 x 9.25rem</li>
</ul>

The layout of the generic tile is fixed, with designated areas for the header, content area, and footer.
 
<ul class="docs-ul">
    <li>Header <code>fd-tile__header</code> - <strong>required</strong>. It contains a title and an (optional) subtitle.
        <ul class="docs-ul">
            <li>Title <code>fd-tile__title</code> - <strong>required</strong>. Can have up to two lines of text before it is truncated (or three lines if there is no subtitle).</li>
            <li>Subtitle <code>fd-tile__subtitle</code> <strong>optional</strong> - can have one line of text before it is truncated.</li>
        </ul>
    </li>
    <li>Content <code>fd-tile__content</code> - <strong>optional</strong>.</li>
    <li>Footer <code>fd-tile__footer</code>- <strong>optional</strong>. Can contain a refresh icon <code>sap-icon--refresh</code> and status.</li>
</ul>

{% capture tile-sizes %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile-sizes %}

## Generic Tile Content Columns
The tiles header, content and footer can be split into two columns with a 0.25rem vertical padding. Use the (`*--2-col`) modifier classes to achieve the 2-col design.

<ul class="docs-ul">
    <li>Header <code>fd-tile__header fd-tile__header--2-col</code>
        <ul class="docs-ul">
            <li>Section <code>fd-tile__section</code>.</li>
            <li>Section <code>fd-tile__section</code>.</li>
        </ul>
    </li>
    <li>Content <code>fd-tile__content fd-tile__content--2-col</code>
        <ul class="docs-ul">
            <li>Section <code>fd-tile__section</code>.</li>
            <li>Section <code>fd-tile__section</code>.</li>
        </ul>
    </li>
    <li>Footer <code>fd-tile__footer fd-tile__footer--2-col</code>
        <ul class="docs-ul">
            <li>Section <code>fd-tile__section</code>.</li>
            <li>Section <code>fd-tile__section</code>.</li>
        </ul>
    </li>
</ul>

*The background color is used to illustrate the column sections in the documentation page. 
{% capture tile-sizes %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile-sizes %}

<br>

## Launch Tile

Structure of the Numeric Content
<ul class="docs-ul">
    <li>Launch Icon Container - <code>fd-numeric-content__launch-icon-container</code>
        <ul class="docs-ul">
            <li>Launch Icon - <code>fd-numeric-content__launch-icon sap-icon--line-charts</code></li>
        </ul>
    </li>
    <li>KPI Container <strong>(optional)</strong> - <code>fd-numeric-content__kpi-container</code>
        <ul class="docs-ul">
            <li>KPI <strong>(optional)</strong> - <code>fd-numeric-content__kpi</code>
                <ul class="docs-ul">
                    <li>States:
                        <ul class="docs-ul">
                            <li>neutral (default)</li>
                            <li>positive - <code>fd-numeric-content__kpi--positive</code></li>
                            <li>negative - <code>fd-numeric-content__kpi--negative</code></li>
                            <li>critical - <code>fd-numeric-content__kpi--critical</code></li>
                            <li>informative - <code>fd-numeric-content__kpi--informative</code></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Scale Container <strong>(optional)</strong> - <code>fd-numeric-content__scale-container</code>
        <ul class="docs-ul">
            <li>Scale <strong>(optional)</strong> - <code>fd-numeric-content__scale</code>
                 <ul class="docs-ul">
                    <li>States:
                        <ul class="docs-ul">
                            <li>neutral (default)</li>
                            <li>positive - <code>fd-numeric-content__scale--positive</code></li>
                            <li>negative - <code>fd-numeric-content__scale--negative</code></li>
                            <li>critical - <code>fd-numeric-content__scale--critical</code></li>
                            <li>informative - <code>fd-numeric-content__scale--informative</code></li>
                        </ul>
                    </li>
                    <li>Deviation Arrows <strong>(optional)</strong>: <code>sap-icon--down</code> or <code>sap-icon--up</code></li>
                    <li>Text <strong>(optional)</strong>: <code>fd-numeric-content__scale-text</code></li>
                 </ul>
            </li>
        </ul>
    </li>
</ul>

<br>
Numeric Content Sizes:
<ul class="docs-ul">
    <li>L-Numeric Content size. Longest combination for 4-character languages</li>
    <li>M-Numeric Content size. Longest combination for 6-character languages</li>
    <li>S-Numeric Content size. Longest combination for 8-character languages</li>
</ul>

<br>
The header can contain a maximum of 3 lines; all 3 lines can be used for the title or one of the lines can be used for a subtitle. If a 4 line title or an optional subtitle line is required, the fd-tile_header-content can be used to represent a header and will merge the content containers into one tile.

{% capture tile-launch %}
<h4>Launch Tile With Numeric Content and Launch Icon</h4>
<br>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <span class="sap-icon--refresh fd-tile__refresh"></span>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <span class="fd-numeric-content__launch-icon sap-icon--line-charts"></span>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile With Combined Header and Content</h4>
<br>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <span class="sap-icon--refresh fd-tile__refresh"></span>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <span class="sap-icon--refresh fd-tile__refresh"></span>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile (Profile)</h4>
<br>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/60/60/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/50/50/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile (Logo)</h4>
<br>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile-launch %}

<br>

## KPI Tile (Numeric Content)
Key Performance Indicators (KPIs) are used to measure and monitor a company’s performance at a strategic and operational level. The KPI Tile control supports a limited number of digits which varies depending on the size of the tile.
<br>
<ul class="docs-ul">
    <li>L-Numeric Content size. Longest combination for 4-character languages</li>
    <li>M-Numeric Content size. Longest combination for 6-character languages</li>
    <li>S-Numeric Content size. Longest combination for 8-character languages</li>
</ul>

<br>
Structure of the Numeric Content
<ul class="docs-ul">
    <li>KPI Container - <code>fd-numeric-content__kpi-container</code>
        <ul class="docs-ul">
            <li>KPI - <code>fd-numeric-content__kpi</code>
                <ul class="docs-ul">
                    <li>States:
                        <ul class="docs-ul">
                            <li>neutral (default)</li>
                            <li>positive - <code>fd-numeric-content__kpi--positive</code></li>
                            <li>negative - <code>fd-numeric-content__kpi--negative</code></li>
                            <li>critical - <code>fd-numeric-content__kpi--critical</code></li>
                            <li>informative - <code>fd-numeric-content__kpi--informative</code></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Scale Container <strong>(optional)</strong> - <code>fd-numeric-content__scale-container</code>
        <ul class="docs-ul">
            <li>Scale <strong>(optional)</strong> - <code>fd-numeric-content__scale</code>
                 <ul class="docs-ul">
                    <li>States:
                        <ul class="docs-ul">
                            <li>neutral (default)</li>
                            <li>positive - <code>fd-numeric-content__scale--positive</code></li>
                            <li>negative - <code>fd-numeric-content__scale--negative</code></li>
                            <li>critical - <code>fd-numeric-content__scale--critical</code></li>
                            <li>informative - <code>fd-numeric-content__scale--informative</code></li>
                        </ul>
                    </li>
                    <li>Deviation Arrows <strong>(optional)</strong>: <code>sap-icon--down</code> or <code>sap-icon--up</code></li>
                    <li>Text <strong>(optional)</strong>: <code>fd-numeric-content__scale-text</code></li>
                 </ul>
            </li>
        </ul>
    </li>
</ul>

{% capture tile-kpi %}
<h4>KPI Tile with L-Size Numeric Content</h4>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <span class="sap-icon--refresh fd-tile__refresh"></span>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <span class="sap-icon--refresh fd-tile__refresh"></span>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>

<br>
<br>
<h4>KPI Tile with M-Size Numeric Content</h4>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text eiusmod tempor incididunt ut labore </div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title Text eiusmod tempor incididunt</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <span class="fd-numeric-content__scale-arrow sap-icon--up"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>

<br>
<br>
<h4>KPI Tile with S-Size Numeric Content</h4>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <span class="fd-numeric-content__scale-arrow sap-icon--down"></span>
                        <span class="fd-numeric-content__scale-text">%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">CAD, Current Quarter</span>
        </div>
    </div>
</div>


{% endcapture %}
{% include display-component.html component=tile-kpi %}

<br>

## Feed Tile
The Feed tile can be used to show new notification content in a news feed. If there are no new notifications, the tile displays the most recent notification. 
To create a Feed tile, use the `fd-tile--feed` modifier class.
{% capture tile-feed %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile-feed %}

<br>

## Badge Tile
Badges are used to display very short and important information.
Use a badge on a Tile if the Tile is new or has been newly added to a page.
Tiles do not display badges in action/edit mode. 
{% capture tile-badge %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-badge">Badge</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/60/60/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/50/50/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-badge">New</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile-badge %}

<br>

## Slide Tile
The Slide Tile contains a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed by hovering the mouse over the tile on desktop devices. The dots on the bottom of each tile identify the number of pages they contain. 
To create a Slide Tile, use the `fd-tile--slide` modifier class.

{% capture tile-slide %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/200/200/nature')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide fd-tile--s">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/200/200/nature')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/400/200/nature')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/400/200/nature')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile-slide %}

<br>

## Tile In Action Mode
In action mode view, the close button is displayed on the top right-hand corner of the Tile. The action icon is only an indicator and is displayed on the bottom right-hand corner. The click/touch area fills the entire Tile, excluding the click/touch area reserved for the close button. For Action Mode use the `fd-tile--action` modifier class.

{% capture tile-action %}
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
        <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/60/60/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
        <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('https://placeimg.com/50/50/nature')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<div class="docs-section-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/400/200/nature')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
        <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('https://placeimg.com/400/200/nature')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
        <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile-action %}

<br>
## Line Tile
<ul class="docs-ul">
    <li>
        Line Tile Container - <code>fd-tile-container</code>. The container controls the behaviour of the tiles - <strong>Floating</strong> (default) and <strong>List</strong> (<code>fd-tile-container--list</code>). For screen sizes less than 450px use the <strong>List</strong> behaviour. For bigger screens use the default <strong>Floating</strong> behaviour.
        <ul class="docs-ul">
            <li>Line Tile - apply the <code>fd-tile--line</code> modifier class to <code>fd-tile</code>.
                Line Tiles have two modes - cosy (default) and compact (<code>fd-tile--compact</code>). *Note: the compact mode is applied only on Line Tiles. It should not be applied on the other types.
                <ul class="docs-ul">
                    <li>Line Tile Header - <code>fd-tile__header</code>
                        <ul class="docs-ul">
                            <li>Title <code>fd-tile__title</code> - <strong>required</strong>. For a Line Tile with a badge the title and the badge must be wrapped in a container <code>fd-tile__title-container</code>.
                            </li>
                            <li>Subtitle <code>fd-tile__subtitle</code> <strong>optional</strong>.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

<br>
<strong>Breakpoints</strong>
<ul class="docs-ul">
    <li><strong>List</strong> behaviour - for screen sizes less than 450px - S screens.</li>
    <li><strong>Floating</strong> behaviour - for screen sizes greater or equal to 450px - M, L and XL screens.</li>
</ul>

<br>
<strong>Wrapping and Overflow Behaviour</strong>
<ul class="docs-ul">
    <li><strong>Floating</strong> behaviour - If the content of the Tile can't fit in one line, the Tile wraps into two rows. *Note: this behaviour requires JavaScript and is not provided in Fundamental-Styles. </li>
    <li><strong>List</strong> behaviour - the Tile grows vertically and the text inside wraps into two rows, splitting the title in the first row and the subtitle in the second row.</li>
</ul>

<br>
<strong>List Tile States</strong>
<ul class="docs-ul">
    <li>Regular</li>
    <li>Hover</li>
    <li>Pressed</li>
    <li>Disabled - the disabled state can only be applied on Line Tiles. The other types do not have a disabled state. </li>
</ul>

<br>
<strong>Action Mode</strong> <br><br>
The controls are wrapped in a container <code>fd-tile__action-container</code> which is right aligned within the tile. The default spacing between the header and actions container for List View in Action mode is 0.25rem. Gradient masking is also supported in edit mode. 

{% capture tile-line %}
<h4>Line Tile - Floating Behaviour, Cosy Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem </div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cosy Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container fd-tile-container--list"> 
                <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Compact Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Compact Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container fd-tile-container--list"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cosy Mode, With Badge</h4>
<div class="docs-section-container">
    <div class="fd-tile-container"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia voluptas</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title accusamus dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle facilis distinctio</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cosy Mode, With Badge</h4>
<div class="docs-section-container">
    <div class="fd-tile-container fd-tile-container--list"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title accusamus et iusto odio dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle facilis est et expedita distinctio</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cosy and Action Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Disabled Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cosy and Action Mode</h4>
<div class="docs-section-container">
    <div class="fd-tile-container fd-tile-container--list"> 
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Disabled Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator"></button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close"></button>
            </div>
        </div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile-line %}
