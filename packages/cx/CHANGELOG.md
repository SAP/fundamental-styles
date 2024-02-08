# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.33.0-rc.8](https://github.com/SAP/fundamental-styles/compare/v0.33.0-rc.7...v0.33.0-rc.8) (2024-02-08)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.33.0-rc.7](https://github.com/SAP/fundamental-styles/compare/v0.33.0-rc.6...v0.33.0-rc.7) (2024-02-08)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.33.0-rc.6](https://github.com/SAP/fundamental-styles/compare/v0.33.0-rc.5...v0.33.0-rc.6) (2024-02-08)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.33.0-rc.5](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.4...v0.33.0-rc.5) (2024-02-08)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.34.0-rc.4](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.3...v0.34.0-rc.4) (2024-02-07)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.34.0-rc.3](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.2...v0.34.0-rc.3) (2024-02-07)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.34.0-rc.2](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.1...v0.34.0-rc.2) (2024-02-07)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.34.0-rc.1](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.0...v0.34.0-rc.1) (2024-02-07)

**Note:** Version bump only for package @fundamental-styles/cx





# [0.34.0-rc.0](https://github.com/SAP/fundamental-styles/compare/v0.24.2...v0.34.0-rc.0) (2024-02-07)


### Bug Fixes

* **cx:** add cx namespace for side nav ([#4021](https://github.com/SAP/fundamental-styles/issues/4021)) ([d5f8fc8](https://github.com/SAP/fundamental-styles/commit/d5f8fc8f91d1d6c309c44f85487a7e8dbae3da68))
* **cx:** add side nav fixes after design review [ci visual] ([#4025](https://github.com/SAP/fundamental-styles/issues/4025)) ([0850bda](https://github.com/SAP/fundamental-styles/commit/0850bda8b63d0f0d1f5d6b1427678c0e99c1fc1d))
* **styles:** add --mobile class to CX side nav [ci visual] ([#4354](https://github.com/SAP/fundamental-styles/issues/4354)) ([dd004e6](https://github.com/SAP/fundamental-styles/commit/dd004e6ed9c62efea4c0ef0e52b9859c3f6b1252))
* **styles:** checkbox refactor and fix the problem with icons in FF ([#4608](https://github.com/SAP/fundamental-styles/issues/4608)) ([fa8711f](https://github.com/SAP/fundamental-styles/commit/fa8711f96e8c00c9b1958ca765d46153ef99403c))
* **styles:** screenreaders attempting to read icons from content [ci visual] ([#4518](https://github.com/SAP/fundamental-styles/issues/4518)) ([14de174](https://github.com/SAP/fundamental-styles/commit/14de1744cb867f7a1b481faa8866a7ef13aa9277))
* **styles:** update cx side nav button type ([#4253](https://github.com/SAP/fundamental-styles/issues/4253)) ([af8de11](https://github.com/SAP/fundamental-styles/commit/af8de11fbd31704daff66545007b01ceb85e7073))


### Features

* **cx:** introduce Side Nav ([#3913](https://github.com/SAP/fundamental-styles/issues/3913)) ([cb29f40](https://github.com/SAP/fundamental-styles/commit/cb29f400de0de16d30c156120a43ac1fea026fe7))
* **styles:** created new package CX ([#3967](https://github.com/SAP/fundamental-styles/issues/3967)) ([6a374d9](https://github.com/SAP/fundamental-styles/commit/6a374d9f1316e29e56f527cb84970b7ae6849d5f))
* **styles:** introduce compact mixin [ci visual] ([#4277](https://github.com/SAP/fundamental-styles/issues/4277)) ([5df9358](https://github.com/SAP/fundamental-styles/commit/5df93582054253c16f3e8b0df0c7ec93fa6d78da))


### BREAKING CHANGES

* **styles:** change in the label markup. A new span element with class fd-checkbox__checkmark has been introduced
* **styles:** - Compact/Condensed modes can be applied on root level now;
- If some component should have different content density than the parent one, provide `--compact`, `--condensed`, `--cozy` modifier to the element class.
