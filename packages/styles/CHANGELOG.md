# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.35.0-rc.11](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.10...v0.35.0-rc.11) (2024-04-17)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.10](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.9...v0.35.0-rc.10) (2024-04-17)

### Bug Fixes

-   **styles:** add fix for buttons hover state in Shell Bar [ci visual] ([#5310](https://github.com/SAP/fundamental-styles/issues/5310)) ([0cad0b9](https://github.com/SAP/fundamental-styles/commit/0cad0b98c057c417a222fadb5f554f4e6b9b5784))

# [0.35.0-rc.9](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.8...v0.35.0-rc.9) (2024-04-07)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.8](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.7...v0.35.0-rc.8) (2024-04-07)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.7](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.6...v0.35.0-rc.7) (2024-04-07)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.6](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.5...v0.35.0-rc.6) (2024-04-05)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.5](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.4...v0.35.0-rc.5) (2024-04-04)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.4](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.3...v0.35.0-rc.4) (2024-04-04)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.3](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.2...v0.35.0-rc.3) (2024-04-04)

**Note:** Version bump only for package fundamental-styles

# [0.35.0-rc.2](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.1...v0.35.0-rc.2) (2024-04-04)

### Bug Fixes

-   **styles:** add a11y improvements for Dynamic Page header [ci visual] ([#5279](https://github.com/SAP/fundamental-styles/issues/5279)) ([9c7a90f](https://github.com/SAP/fundamental-styles/commit/9c7a90ffad9bc43d3732c2e44b8143330400effc))

### BREAKING CHANGES

-   **styles:** - dynamic page container is now article not section with aria-roledescription

*   the fd-dynamic-page\_\_title-area element has a new sibling, a button that receives the focus and once it's focussed applies a visual outline to the container
*   dynamic page title is not an <h1> element, but a div with role="heading" and aria-level="2". The level in ngx should be exposed as an input property and for this reason we are not using h1, h2, h3, etc
    the element with class fd-dynamic-page\_\_collapsible-header is now a section not a div
*   Facets headings have been updated to div elements with role="heading" and aria-level="2"

# [0.35.0-rc.1](https://github.com/SAP/fundamental-styles/compare/v0.35.0-rc.0...v0.35.0-rc.1) (2024-03-29)

### Bug Fixes

-   **styles:** add focus and a11y changes for Card header [ci visual] ([#5265](https://github.com/SAP/fundamental-styles/issues/5265)) ([3a4045b](https://github.com/SAP/fundamental-styles/commit/3a4045bca754e9f13787f79585d0ef5697fa0bb5))

# [0.35.0-rc.0](https://github.com/SAP/fundamental-styles/compare/v0.34.1-rc.4...v0.35.0-rc.0) (2024-03-26)

**Note:** Version bump only for package fundamental-styles

## [0.34.1-rc.4](https://github.com/SAP/fundamental-styles/compare/v0.34.1-rc.3...v0.34.1-rc.4) (2024-03-26)

### Features

-   **styles:** update Card header per latest design ([#5261](https://github.com/SAP/fundamental-styles/issues/5261)) ([29bcff7](https://github.com/SAP/fundamental-styles/commit/29bcff71c52ecec883eefce2757ed9dc46ed954a))

## [0.34.1-rc.3](https://github.com/SAP/fundamental-styles/compare/v0.34.1-rc.2...v0.34.1-rc.3) (2024-03-26)

**Note:** Version bump only for package fundamental-styles

## [0.34.1-rc.2](https://github.com/SAP/fundamental-styles/compare/v0.34.1-rc.1...v0.34.1-rc.2) (2024-03-26)

**Note:** Version bump only for package fundamental-styles

## [0.34.1-rc.1](https://github.com/SAP/fundamental-styles/compare/v0.34.1-rc.0...v0.34.1-rc.1) (2024-03-25)

**Note:** Version bump only for package fundamental-styles

## [0.34.1-rc.0](https://github.com/SAP/fundamental-styles/compare/v0.34.0...v0.34.1-rc.0) (2024-03-24)

**Note:** Version bump only for package fundamental-styles

# [0.34.0](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.9...v0.34.0) (2024-03-21)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.9](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.8...v0.34.0-rc.9) (2024-03-20)

### Bug Fixes

-   **styles:** add fix for the Tokens focus being cut in Tokenizer [ci visual] ([#5249](https://github.com/SAP/fundamental-styles/issues/5249)) ([38d6a49](https://github.com/SAP/fundamental-styles/commit/38d6a49cadc2b15290955243ce93c9382716b987))

# [0.34.0-rc.8](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.7...v0.34.0-rc.8) (2024-03-20)

### Bug Fixes

-   **styles:** add fix for Product Switch items jumping on selection [ci visual] ([#5246](https://github.com/SAP/fundamental-styles/issues/5246)) ([58df9fe](https://github.com/SAP/fundamental-styles/commit/58df9feb716e08010f3f68beda4b226965994ffa))

# [0.34.0-rc.7](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.6...v0.34.0-rc.7) (2024-03-15)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.6](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.5...v0.34.0-rc.6) (2024-03-14)

### Bug Fixes

-   **styles:** add word break for text in Message Strip component [ci visual] ([#5233](https://github.com/SAP/fundamental-styles/issues/5233)) ([81bd584](https://github.com/SAP/fundamental-styles/commit/81bd5840b3877fe02dddf51d18f9e9a672ae71dd))

# [0.34.0-rc.5](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.4...v0.34.0-rc.5) (2024-03-13)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.4](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.3...v0.34.0-rc.4) (2024-03-13)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.3](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.2...v0.34.0-rc.3) (2024-03-12)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.2](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.1...v0.34.0-rc.2) (2024-03-11)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.1](https://github.com/SAP/fundamental-styles/compare/v0.34.0-rc.0...v0.34.0-rc.1) (2024-03-11)

**Note:** Version bump only for package fundamental-styles

# [0.34.0-rc.0](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.21...v0.34.0-rc.0) (2024-03-05)

### Bug Fixes

-   **styles:** add display block to fd-title [ci visual] ([#5180](https://github.com/SAP/fundamental-styles/issues/5180)) ([9c8358e](https://github.com/SAP/fundamental-styles/commit/9c8358e10788c3dfbe8490d2bbad2dd68d9769dd))

### BREAKING CHANGES

-   **styles:** update facets aria attributes

-   fix: allow empty [ci visual]

## [0.33.3-rc.21](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.20...v0.33.3-rc.21) (2024-03-05)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.20](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.19...v0.33.3-rc.20) (2024-02-28)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.19](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.18...v0.33.3-rc.19) (2024-02-26)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.18](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.17...v0.33.3-rc.18) (2024-02-26)

### Bug Fixes

-   **styles:** less and more words capitalise not uppercase [ci visual] ([#5207](https://github.com/SAP/fundamental-styles/issues/5207)) ([65769c6](https://github.com/SAP/fundamental-styles/commit/65769c65ead0d4e6741bc877ff40a85c7e95e9ce))

## [0.33.3-rc.17](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.16...v0.33.3-rc.17) (2024-02-17)

### Bug Fixes

-   **styles:** add fix for information state hover and active [ci visual] ([#5183](https://github.com/SAP/fundamental-styles/issues/5183)) ([2487d86](https://github.com/SAP/fundamental-styles/commit/2487d86f1389032adf821658c6e57df9c85666b1))

## [0.33.3-rc.16](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.15...v0.33.3-rc.16) (2024-02-16)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.15](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.14...v0.33.3-rc.15) (2024-02-15)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.14](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.13...v0.33.3-rc.14) (2024-02-12)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.13](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.12...v0.33.3-rc.13) (2024-02-12)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.12](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.11...v0.33.3-rc.12) (2024-02-11)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.11](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.10...v0.33.3-rc.11) (2024-02-10)

**Note:** Version bump only for package fundamental-styles

## [0.33.3-rc.10](https://github.com/SAP/fundamental-styles/compare/v0.33.3-rc.9...v0.33.3-rc.10) (2024-02-09)

**Note:** Version bump only for package fundamental-styles
