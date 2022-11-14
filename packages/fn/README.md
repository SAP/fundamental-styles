# Fundamental Library Next

Fundamental Library Next (FN) package offers components built following the BTP design guidelines. Based on the BTP design guideline, the icons included in this package may differ from the icons presented in Fundamental Styles Library. 

## Getting Started

### 1. Fundamental Library Next Package included in Fundamental Styles Library

Fundamental Library Next (FN) package is part of the Fundamental Styles Library. Installing the Fundamental Styles Library in the project automatically installs the Fundamental Library Next package. 

**Learn more at http://sap.github.io/fundamental-styles/**

However, the components in every package share the same name across the library. To use the FN component styles, point to the Fundamental Library Next Package when calling the component.

#### Example

Input is a component that exist in Fundamental Styles library and in Fundamental Library Next Package. By default the component is called from the Fundamental Styles library:

```bash
import {Input} from '@fundamental-styles';
```

To use the Input component from the Fundamental Library Next Package:

```bash
import {Input} from '@fundamental-styles/fn';
```

### 2. Fundamental Library Next Package on its own

Fundamental Library Next Package can stand on its own. You can install the package in your project through:

```bash
npm i @fundamental-styles/fn
```



Fundamental Library Next (FN) package is at the experimental phase at the moment. More details will be included in the future release.