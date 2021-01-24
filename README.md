# React Hover CSS

A simple [Hover.css](http://ianlunn.github.io/Hover/) port to use with Styled-Components.
For the moment this package only contains the 2d transitions, and the background transitions from the original library. All of the transitions are coming soon!

## Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-hover-css --save
```

## Usage

```js
import { transition2d, backgroundTransition } from "react-hover-css";

let StyledButton = styled.button`
  ${transition2d.someTransition}
  ...other styles
`;
```

The transitions come with the default color of ![#2098D1](https://via.placeholder.com/15/2098D1/000000?text=+) `#2098D1` used by the creator of [Hover.css](http://ianlunn.github.io/Hover/).
You can override the existing properties by just specifying the property after applying the transition like this:

```js
import { transition2d, backgroundTransition } from "react-hover-css";

let StyledButton = styled.button`
  ${backgroundTransition.hvrShutterOutVertical}
  background-color: red;
`;
```

### Using Icon Transitions

In order to use icons transitions, simply add the class `.hvr-icon` to the icon inside your element, and apply an icon transition.

### Warning!

Some animations use css keyframes, which you can't change!
