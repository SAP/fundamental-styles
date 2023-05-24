The wizard guides a user through a long or unfamiliar task by dividing it into sections, revealing information in an
easy and digestible way.
It consists of a walkthrough screen, where the user is prompted to input required information and upon completing a
section, the next sections subsequently follow in a prescribed order; and the summary page, where the form is displayed
in read-only mode for assessment and final submission.

## Usage

**Use the wizard if:**

- the user has to accomplish a long or unfamiliar task
- the flow consist of a minimum of 3 and a maximum of 8 steps

**Do not use the wizard if:**

- a task has only 2 steps
- a task has more than 8 steps
- the format of the task is familiar to the user

## Types

There are two types of wizard that offer different functionality: **standard** and **branching**.

**Use the standard type if:**

- The total number of steps is known in advance.
- The number of steps does not change during usage.
- There is linear progression from one step to the next.

**Use the branching type if:**

- The total number of steps is not known.
- The number of steps may change during usage.
- There is non-linear progression. In other words, the user’s choice during one step determines which step comes next.
- In both types of wizard you can let users skip steps. Label these steps as “Optional”.

## Layout

The wizard can be used both in a full-screen layout and in the flexible column layout. There is no navigation from the
wizard to a next page. After completion or cancellation, the user is always navigated back to the page the wizard was
triggered from.

## Responsive paddings

These modifier classes will add horizontal paddings to the content and can be applied on the \`fd-wizard__progress-bar\`
level, the \`fd-wizard__content\`, and/or the \`fd-wizard__step-content-container\` level.

| **rem** | **Min-width** | **Max-width** | **Modifier class**                                                                                 |
|:--------|:--------------|:--------------|:---------------------------------------------------------------------------------------------------|
| 1rem    | _n/a_         | 599px         | `fd-wizard__progress-bar--sm` / `fd-wizard__content--sm` / `fd-wizard__step-content-container--sm` |
| 2rem    | 600px         | 1023px        | `fd-wizard__progress-bar--md` / `fd-wizard__content--md` / `fd-wizard__step-content-container--md` |
| 2rem    | 1024px        | 1439px        | `fd-wizard__progress-bar--lg` / `fd-wizard__content--lg` / `fd-wizard__step-content-container--lg` |
| 3rem    | 1440px        | _n/a_         | `fd-wizard__progress-bar--xl` / `fd-wizard__content--xl` / `fd-wizard__step-content-container--xl` |

## Modifiers

| **Steps**      | **Modifier class**             |
|:---------------|:-------------------------------|
| Completed      | `fd-wizard__step--completed`   |
| Current        | `fd-wizard__step--current`     |
| Upcoming       | `fd-wizard__step--upcoming`    |
| No-label       | `fd-wizard__step--no-label`    |
| Stacked        | `fd-wizard__step--stacked`     |
| Stacked on top | `fd-wizard__step--stacked-top` |
| Active         | `fd-wizard__step--active`      |

## Connector types

There are multiple connector types that can be displayed depending on the steps involved.

| **Connector type** | **Connection**                                  | **Class/Modifier**                |
|:-------------------|:------------------------------------------------|:----------------------------------|
| Default            | Inactive step (or Active step) to Inactive step | `fd-wizard__connector`            |
| Active             | Active step to Active step                      | `fd-wizard__connector--active`    |
| Branching          | Branching step to Inactive step or no step      | `fd-wizard__connector--branching` |

## Truncation rules

| **Type**                 | <div style="min-width: 6rem; margin-left: 2rem;">**Max lines** | **Modifier class**                                                                                                                                                               |
|:-------------------------|:---------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Label                    | 2                                                              | Text truncates when it exceeds the maximum space available. When a step has optional text, the label can only accommodate 1 line.                                                |
| Label with optional text | 1                                                              | Text truncates when it exceeds the maximum space available. The \`fd-wizard__label-container--optional\` modifier class is applied together with \`fd-wizard__label-container\`. |
| Optional text            | 2                                                              | Text truncates when it exceeds the maximum space available.                                                                                                                      |

## Content background

| **Type**    | **Modifier class**                 |
|:------------|:-----------------------------------|
| Solid       | ` fd-wizard__content--solid`       |
| List        | ` fd-wizard__content--list`        |
| Transparent | ` fd-wizard__content--transparent` |
