Include `@fundamental-styles/fn-icons/dist/fn-icons-sprite.css` in your document and then you can use
this method

- `fn-icon-sprite` is basic class which should be applied to every icon.
- `fn-icon-sprite--size-{size}` modifier class is for sizing rendered icon. `size` can be
  one of `16`, `18`, `20`, `22`, `24`, `26`, `28`, `30`, `32`, `34`, `36`, `38`, `40`
- `fn-icon-sprite--color-{color-name}` modifier class for setting color of the icon. `color-name` can be
  one of `default`, `contrast`, `non-interactive`, `tile`, `marker`, `critical`, `negative`, `neutral`, `positive`

Bear in mind that these modifier classes are optional. SVG tag is directly injected into the DOM and because of that,
you can manipulate it as you wish. You can create your own classes and assign them to SVG elements directly. That way
everything is in your hands.
