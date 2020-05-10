---
title: Tile
id: tile
keywords: tile
sidebar: left-navigation-sidebar
toc: false
permalink: components/tile.html
folder: components
summary:
---


Tiles are used in SAP Fiori launchpad home page to represent an app. They can display different types of content, which is based on data supplied by the app. They can contain an icon, a title, an informative text, KPIs, counters, and charts.
{: .docs-intro}

## Generic Tile Sizes (Responsiveness)
The large (default) tiles are designed for screens larger than 374px. For smaller screens use the small tiles `fd-tile--s`.

<ul class="docs-ul">
    <li>Large Tile - 11 x 11rem</li>
    <li>Small Tile - 9.25 x 9.25rem</li>
</ul>
{% capture tile-sizes %}
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div tabindex="0" class="fd-tile fd-tile--s">
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
            <li>Title <code>fd-tile__title</code> - can have up to two lines of text before it is truncated (or three lines if there is no subtitle).</li>
            <li>Subtitle <code>fd-tile__subtitle</code> <strong>optional</strong> - can have one line of text before it is truncated.</li>
        </ul>
    </li>
    <li>Content <code>fd-tile__content</code> - <strong>optional</strong>.</li>
    <li>Footer <code>fd-tile__footer</code>- <strong>optional</strong>. Can contain a refresh icon <code>sap-icon--refresh</code> and status.</li>
</ul>

{% capture tile-sizes %}
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
        <div tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
        <div tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
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

*The blue background of the sections is used to illustrate the sections in the documentation page. 
{% capture tile-sizes %}
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile">
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
    <div tabindex="0" class="fd-tile fd-tile--double">
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
    <div tabindex="0" class="fd-tile fd-tile--s">
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
    <div tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
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

## KPI Tile (Numeric Content)
Key Performance Indicators (KPIs) are used to measure and monitor a company’s performance at a strategic and operational level.The number of digits is limited by the size of the tiles.
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
    <div tabindex="0" class="fd-tile fd-tile--kpi">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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

{% capture tile-launch %}
<h4>Launch Tile With Numeric Content and Launch Icon</h4>
<br>
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile fd-tile--launch">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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
<h4>Launch Tile (Profile)</h4>
<br>
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile fd-tile--launch">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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
    <div tabindex="0" class="fd-tile fd-tile--launch">
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
    <div tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
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

## Feed Tile

{% capture tile-feed %}
<div class="docs-section-container">
    <div tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text-container">
                    <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                    <div class="fd-tile__content-byline">About 1 minute ago.</div>
                </div>
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
    <div tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text-container">
                    <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                    <div class="fd-tile__content-byline">About 1 minute ago.</div>
                </div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
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
