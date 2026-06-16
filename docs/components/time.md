---
component: fd-time
title: Components/Time
category: Components
selector: fd-time
cssFile: time.css
sourcePath: packages/styles/stories/Components/time/time.stories.js
tags: []
dependencies: ["button","icon","time"]
relatedComponents: ["button","icon","time"]
stability: stable
---

# Components/Time

The time component is used to select a time value. It can be used to choose hours, minutes, seconds and/or a given period of the day. This component is rarely used alone and will likely be paired with the **Time Picker** pattern.
<br>
<br>
The time component consists of three main styles to indicate a specific state:


| Style&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class | Description |
| -------------| :------------- | :-------------- |
| <li class='fd-time__item'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item</code> | Class used to style inactive time slider items. |
| <li class='fd-time__item fd-time__item--collapsed'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item--collapsed</code> | Class used to style collapsed time slider items. <br>When this item is displayed, all inactive items below/above it are collapsed (out of sight). |
| <li class='fd-time__item fd-time__item--current'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item--current</code> | Class used to style current (active) time slider items. |


##Usage
**Use the time component in Time Picker if:**

- You want the user to select a time.
- You want the user to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- You want the user to select a detailed duration, such as 1 minute and 30 seconds.

**Do not use the time component in Time Picker if:**

- You want the user to select a duration such as 15 minutes, 30 minutes, 1 hour, or 2 hours. In this case, use the **Select** component instead.
- You want the user to select a date and time. In this case, use the **Date Picker**.
<br>

## Usage Guidelines

**Use the time component in Time Picker if:**

- You want the user to select a time.
- You want the user to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- You want the user to select a detailed duration, such as 1 minute and 30 seconds.

## When Not To Use

- You want the user to select a duration such as 15 minutes, 30 minutes, 1 hour, or 2 hours. In this case, use the **Select** component instead.
- You want the user to select a date and time. In this case, use the **Date Picker**.
<br>

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `time.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/time.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/time.css" rel="stylesheet">
```

## Basic Usage

```html
<div class='fd-time'>
    <div class='fd-time__col'>
        <label class='fd-time__slider-label'>Hrs</label>
        <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
            <i class="sap-icon--navigation-up-arrow"></i>
        </button>
        <div class='fd-time__wrapper fd-time__wrapper--active'>
            <ul class='fd-time__list'>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>01</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>02</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>03</span>
                </li>
                <li class='fd-time__item'>

                    <span class='fd-time__unit'>
                        04
                    </span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>05</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>06</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>07</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>08</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>09</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>10</span>
                </li>
            </ul>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>

                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>

                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-time--scrollable` | Time can be scrollable by adding the \ |
| `fd-time--tablet` | Time can be optimized for tablet screens, which adds padding on each side of the component |

## BEM Elements

This component uses the following BEM elements:

- `fd-time__col`
- `fd-time__col--period`
- `fd-time__current-indicator`
- `fd-time__item`
- `fd-time__item--collapsed`
- `fd-time__list`
- `fd-time__slider-label`
- `fd-time__unit`
- `fd-time__wrapper`
- `fd-time__wrapper--active`
- `fd-time__wrapper--meridian`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `time`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--collapsed`
- `--current`
- `--fdTime_Dropdown_Padding`
- `--fdTime_Item_Height`
- `--fdTime_Text_Shadow`
- `--fdTime_Unit_Line_Height`
- `--fdTime_Wrapper_Height`
- `--hidden`
- `--meridian`
- `--sapButton_BorderCornerRadius`
- `--sapContent_Selected_Background`
- `--sapContent_Selected_Hover_Background`
- `--sapContent_Selected_TextColor`
- `--sapFontSmallSize`

*...and 5 more*

## Examples

### Default

The default time component is displayed in cozy mode, which is ideal for mobile screens.

Only one item and wrapper should be active at a time with the \

```html
<div class='fd-time'>
    <div class='fd-time__col'>
        <label class='fd-time__slider-label'>Hrs</label>
        <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
            <i class="sap-icon--navigation-up-arrow"></i>
        </button>
        <div class='fd-time__wrapper fd-time__wrapper--active'>
            <ul class='fd-time__list'>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>01</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>02</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>03</span>
                </li>
                <li class='fd-time__item'>

                    <span class='fd-time__unit'>
                        04
                    </span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>05</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>06</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>07</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>08</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>09</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>10</span>
                </li>
            </ul>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>

                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>

                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
```

### Tablet

Time can be optimized for tablet screens, which adds padding on each side of the component. To display the time component for tablet, add the \

```html
<div class='fd-time fd-time--tablet'>
    <div class='fd-time__col'>
        <label class='fd-time__slider-label'>Hrs</label>
        <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
            <i class="sap-icon--navigation-up-arrow"></i>
        </button>
        <div class='fd-time__wrapper fd-time__wrapper--active'>
            <ul class='fd-time__list'>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>01</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>02</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>03</span>
                </li>
                <li class='fd-time__item'>

                    <span class='fd-time__unit'>
                        04
                    </span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>05</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>06</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>07</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>08</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>09</span>
                </li>
                <li class='fd-time__item'>
                    <span class='fd-time__unit'>10</span>
                </li>
            </ul>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>

                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>

                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
```

### Scrollable

Time can be scrollable by adding the \

```html
<div class="fd-time fd-time--scrollable">
    <div class="fd-time__col">
        <label class="fd-time__slider-label">Hrs</label>
        <button class="fd-button fd-button--transparent" aria-label="Increase hours">
            <i class="sap-icon--navigation-up-arrow"></i>
        </button>
        <div class="fd-time__wrapper fd-time__wrapper--active">
            <ul class="fd-time__list">
                <li class="fd-time__item">
                    <span class="fd-time__unit">01</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">02</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">03</span>
                </li>
                <li class="fd-time__item">

                    <span class="fd-time__unit">
                        04
                    </span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">05</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">06</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">07</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">08</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">09</span>
                </li>
                <li class="fd-time__item">
                    <span class="fd-time__unit">10</span>
                </li>
            </ul>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>

    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button--transparent" aria-label="Increase hours">
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class="fd-time__wrapper fd-time__wrapper--active">
                <ul class="fd-time__list">
                    <li class="fd-time__item">
                        <span class="fd-time__unit">01</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">02</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">03</span>
                    </li>
                    <li class="fd-time__item">

                        <span class="fd-time__unit">
                            04
                        </span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">05</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">06</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">07</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">08</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">09</span>
                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">10</span>
                    </li>
                </ul>
            </div>
            <button class="fd-button fd-button--transparent" aria-label="Decrease hours">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Sec</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">10</span>
            </div>
        </div>
    </div>

    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">04</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Sec</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">10</span>
            </div>
        </div>
        <div class="fd-time__col fd-time__col--period">
            <label class="fd-time__slider-label">AM/PM</label>
            <button class="fd-button fd-button--transparent" aria-label="Change Meridian">
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                <ul class="fd-time__list">
                    <li class="fd-time__item">
                        <span class="fd-time__unit">
                            AM
                        </span>

                    </li>
                    <li class="fd-time__item">
                        <span class="fd-time__unit">
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class="fd-button fd-button--transparent" aria-label="Change Meridian">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/time/time.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
