# CX - Customer Experience 

The Customer Experience (CX) package offers components built following the CX style guidelines. The CX team owns the design and the components presented in this package. 

## CX Components

Side Nav Bar: lets users navigate the entire content of a product or a section. It is usually positioned on the right or left part of the page.

## Getting Started

### 1. Customer Experience Package included in Fundamental Styles Library

Customer Experience (CX) package is part of the Fundamental Styles Library. Installing the Fundamental Styles Library in the project automatically installs the Customer Experience package. 

**Learn more at http://sap.github.io/fundamental-styles/**

However, the components in every package share the same name across the library. To use the CX component styles, point to the Customer Experience Package when calling the component.

#### Example

SideNavigationModule  is a component that exist in Fundamental Styles library and in Customer Experience Package. By default the component is called from the Fundamental Styles library:

```bash
import {SideNavigationModule } from '@fundamental-styles';
```

To use the SideNavigationModule component from the Customer Experience Package:

```bash
import {SideNavigationModule } from '@fundamental-styles/cx';
```

### 2. Customer Experience Package on its own

Customer Experience Package can stand on its own. You can install the package in your project through:

```bash
npm i @fundamental-styles/cx
```



This library was generated with [Nx](https://nx.dev).