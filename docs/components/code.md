---
component: fd-code
title: Components/Code
category: Components
selector: fd-code
cssFile: code.css
sourcePath: packages/styles/stories/Components/code/code.stories.js
tags: []
dependencies: ["code"]
relatedComponents: ["code"]
stability: stable
generatedAt: 2026-05-28T16:47:20.761Z
---

# Components/Code

The code component helps with formating and styling code snippets. It differantiates the code lines from the normal text.

##Usage
Use the code if: <br>
- You want to display a block of code. <br>
- You want to dispaly a line of code.

## Usage Guidelines

Use the code if: <br>
- You want to display a block of code. <br>
- You want to dispaly a line of code.

## Dependencies

This component depends on the following CSS files:

- `code.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/code.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/code.css" rel="stylesheet">
```

## Basic Usage

```html
<pre><code class="fd-code">apiVersion: extensions.name/v1alpha1
    kind: Class
    metadata:
    name: fundamental-extension-management
    spec:
    cdmUrl: {{ url.path.version1 }}://{{ .subdomain.domain }}{{ .Values.cdmPath }}
    description: This Extension adds Extension Management to Project1
    displayName: Extension Management
    supportsDynamicCdmUrls: false
    multipleInstallations: false
    image: "data:image/png;base64,sfg87sg98f7gs9d8g7s9fgdfg"
    installableScopes:
    - Cluster
    extensionConfig:
    extensionManagerServiceUrl: https://extension-manager-name.{{ .Values.landscapeDomainName }}/graphql
</code></pre>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-code--inline` | Inline Code is used to hightlight a short snippet code inside a paragraph. |

## Related Components

This component works with or depends on:

- `code`

## Design Tokens

Key CSS variables used by this component:

- `--inline`
- `--sapFontSize`
- `--sapNeutralBackground`

## Examples

### Code Block

Code Block is a combination of multiple lines of code which can be displayed as a standalone element.

```html
<pre><code class="fd-code">apiVersion: extensions.name/v1alpha1
    kind: Class
    metadata:
    name: fundamental-extension-management
    spec:
    cdmUrl: {{ url.path.version1 }}://{{ .subdomain.domain }}{{ .Values.cdmPath }}
    description: This Extension adds Extension Management to Project1
    displayName: Extension Management
    supportsDynamicCdmUrls: false
    multipleInstallations: false
    image: "data:image/png;base64,sfg87sg98f7gs9d8g7s9fgdfg"
    installableScopes:
    - Cluster
    extensionConfig:
    extensionManagerServiceUrl: https://extension-manager-name.{{ .Values.landscapeDomainName }}/graphql
</code></pre>
```

### InlineCode

Inline Code is used to hightlight a short snippet code inside a paragraph.

```html
You can add inline code like here <code class="fd-code fd-code--inline">FundamentalExtension</code> and add mores
<code class="fd-code fd-code--inline">ClassName</code>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/code/code.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
