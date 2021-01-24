# React Hover CSS

A simple [Hover.css](http://ianlunn.github.io/Hover/) port to use with Styled-Components.
This contains all transitions exposed by Hover.css, except for the curl transitions.

## Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-hover-css --save
```

## Usage

1. Import one or more transition groups from the package:

```js
import { transition2d, backgroundTransition } from "react-hover-css";
```

2. Apply an animation to a styled-component:

```js
let StyledButton = styled.button`
  ${transition2d.someTransition}
  ...other styles
`;
```

### Using Icon Transitions

In order to use icons transitions you must first add the class `.hvr-icon` to the icon/element inside your main element, and then apply your transition:

```js
let StyledButton = styled.button`
  ${iconTransition.hvrIconBack}
  ...other styles
`;

let IconButton = () => {
  return (
    <StyledButton>
      <img src="#" className="hvr-icon" />
    </StyledButton>
  );
};
```

### Overriding Default Values

The transitions come with the default values used by the creator of [Hover.css](http://ianlunn.github.io/Hover/). You can override these properties by specifying the property after applying the transition:

```js
import { transition2d, backgroundTransition } from "react-hover-css";

let StyledButton = styled.button`
  ${backgroundTransition.hvrShutterOutVertical}
  background-color: red;
  transition-duration: 0.8s;
`;
```

### A note on overriding default values

Many of the transitions make use of the `:before` css pseudoselector. You can check out the styles that are being applied in your browser's inspector tool, and change overriding accordingly. In case you are unfamiliar with the capabilites of styled-components, an important thing you need to know is that the `&` symbol can be used to refer to the main component. You can use this to nest styles like with SCSS.

```js
// Selector examples
let StyledButton = styled.button`
  & // refers to the base element
  &:hover // on hover of the base element
  &:before // before the base element
  & .visible // selects the element with the 'visible' class that is a child of the base element
`;
```

For more details check out their documentation: [here](https://styled-components.com/docs/basics#coming-from-css)

### A note on overriding keyframes

Some animations make use of css keyframes. Unfortunately, you can't change these ones!

## License

This is an open source project distributed under the [MIT License](https://opensource.org/licenses/MIT)
