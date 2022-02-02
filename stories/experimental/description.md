Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. 
They are often used as visual elements within other components, although they can be used independently,
given that they can be read by screen readers or have a tooltip for accessibility purposes.
See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction-overview--page)
for instructions on how to use the SAP icon font on your page.

## Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting 
as a non-interactive icon/pictogram.
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button 
style. See **Button** for more details on how to implement it.

## Methods of inclusion
There are a couple of ways to include icons in project:
- Include SVG icons separately, independently
- Include SVG sprite
- Use webfont

All of these methods have their pros and cons.

When you use `SVG sprite` you load all icons at once. This after
first load gives impression that icons are loaded instantly, but it has drawback - sprite SVG size. `SVG sprite`
usage also gives more control over the render of the icons, since SVGs are regular HTML DOM elements, and they can
be manipulated any way you want with CSS.
[Also, browser compatibility should be considered](https://caniuse.com/mdn-svg_elements_use_href) when using raw SVG
DOM elements. Also as a icon user, you have to write more HTML code than you'd have to write in other methods.

When you use `Independent SVG icons` icons are loaded at time of request. This creates many(depending on how heavily
icons are used) HTTP requests, but meantime has good impact on initial load time of application.
Styles are using [`mask-image`](https://caniuse.com/mdn-css_properties_mask-image) CSS property to color
icons. Stroke width manipulations are limited in this way too. HTML markup is minimal, just like you'd get
if you used webfont.

Both `SVG sprite` and `Independent SVG icons` have default size of **16x16 pixels**, whereas webfont does not have
default size and uses default page font-size, since it is essentially ordinary font.


