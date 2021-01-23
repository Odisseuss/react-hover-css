import hvrPulseAnimation from "../animations/transitions_2d/Pulse";
import hvrPulseGrowAnimation from "../animations/transitions_2d/PulseGrow";
import hvrPulseShrinkAnimation from "../animations/transitions_2d/PulseShrink";
import hvrPushAnimation from "../animations/transitions_2d/Push";
import hvrPopAnimation from "../animations/transitions_2d/Pop";
import { css } from "styled-components";
import hvrBobAnimation from "../animations/transitions_2d/Bob";
import hvrHangAnimation from "../animations/transitions_2d/Hang";
import hvrWobbleVertical from "../animations/transitions_2d/WobbleVertical";
import hvrWobbleHorizontal from "../animations/transitions_2d/WobbleHorizontal";
import hvrWobbleToBottomRight from "../animations/transitions_2d/WobbleToBottomRight";
import hvrWobbleToTopRight from "../animations/transitions_2d/WobbleToTopRight";
import hvrWobbleTop from "../animations/transitions_2d/WobbleTop";
import hvrWobbleBottom from "../animations/transitions_2d/WobbleBottom";
import hvrWobbleSkew from "../animations/transitions_2d/WobbleSkew";
import hvrBuzz from "../animations/transitions_2d/Buzz";
import hvrBuzzOut from "../animations/transitions_2d/BuzzOut";

/**
 * Contains all the 2d transitions
 *
 * @example
 * ```
 *  import {transitions_2d} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${transitions_2d.hvrGrow}
 *    ...other styles
 *  `
 * ```
 */
const transitions_2d = {
  hvrGrow: `
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      
      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      &:focus {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      &:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      `,

  hvrShrink: `
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
  
      &:hover {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      &:focus {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      &:active {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    `,
  hvrPulse: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrPulseAnimation}
    }
    &:focus {
      ${hvrPulseAnimation}
    }
    &:active {
      ${hvrPulseAnimation}
    }
  `,
  hvrPulseGrow: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrPulseGrowAnimation}
    }
    &:focus {
      ${hvrPulseGrowAnimation}
    }
    &:active {
      ${hvrPulseGrowAnimation}
    }
  `,
  hvrPulseShrink: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrPulseShrinkAnimation}
    }
    &:focus {
      ${hvrPulseShrinkAnimation}
    }
    &:active {
      ${hvrPulseShrinkAnimation}
    }
  `,
  hvrPush: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrPushAnimation}
    }
    &:focus {
      ${hvrPushAnimation}
    }
    &:active {
      ${hvrPushAnimation}
    }
  `,
  hvrPop: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrPopAnimation}
    }
    &:focus {
      ${hvrPopAnimation}
    }
    &:active {
      ${hvrPopAnimation}
    }
  `,
  hvrBounceIn: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;

    &:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    &:focus {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    &:active {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  `,
  hvrBounceOut: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;

    &:hover {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    &:focus {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    &:active {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
`,
  hvrRotate: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    &:focus {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    &:active {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
`,
  hvrGrowRotate: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: scale(1.1) rotate(4deg);
      transform: scale(1.1) rotate(4deg);
    }
    &:focus {
      -webkit-transform: scale(1.1) rotate(4deg);
      transform: scale(1.1) rotate(4deg);
    }
    &:active {
      -webkit-transform: scale(1.1) rotate(4deg);
      transform: scale(1.1) rotate(4deg);
    }
`,
  hvrFloat: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

    &:hover {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    &:focus {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    &:active {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
`,
  hvrSink: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

    &:hover {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    &:focus {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    &:active {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
`,
  hvrBob: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrBobAnimation}
    }
    &:focus {
      ${hvrBobAnimation}
    }
    &:active {
      ${hvrBobAnimation}
    }
  `,
  hvrHang: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrHangAnimation}
    }
    &:focus {
      ${hvrHangAnimation}
    }
    &:active {
      ${hvrHangAnimation}
    }
  `,
  hvrSkew: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
    &:focus {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
    &:active {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
  `,
  hvrSkewForward: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;

    &:hover {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
    &:focus {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
    &:active {
      -webkit-transform: skew(-10deg);
      transform: skew(-10deg);
    }
  `,
  hvrSkewBackward: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;

    &:hover {
      -webkit-transform: skew(10deg);
      transform: skew(10deg);
    }
    &:focus {
      -webkit-transform: skew(10deg);
      transform: skew(10deg);
    }
    &:active {
      -webkit-transform: skew(10deg);
      transform: skew(10deg);
    }
  `,
  hvrWobbleVertical: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrWobbleVertical}
    }
    &:focus {
      ${hvrWobbleVertical}
    }
    &:active {
      ${hvrWobbleVertical}
    }
  `,
  hvrWobbleHorizontal: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrWobbleHorizontal}
    }
    &:focus {
      ${hvrWobbleHorizontal}
    }
    &:active {
      ${hvrWobbleHorizontal}
    }
  `,
  hvrWobbleToBottomRight: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrWobbleToBottomRight}
    }
    &:focus {
      ${hvrWobbleToBottomRight}
    }
    &:active {
      ${hvrWobbleToBottomRight}
    }
  `,
  hvrWobbleToTopRight: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrWobbleToTopRight}
    }
    &:focus {
      ${hvrWobbleToTopRight}
    }
    &:active {
      ${hvrWobbleToTopRight}
    }
  `,
  hvrWobbleTop: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;

    &:hover {
      ${hvrWobbleTop}
    }
    &:focus {
      ${hvrWobbleTop}
    }
    &:active {
      ${hvrWobbleTop}
    }
  `,
  hvrWobbleBottom: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;

    &:hover {
      ${hvrWobbleBottom}
    }
    &:focus {
      ${hvrWobbleBottom}
    }
    &:active {
      ${hvrWobbleBottom}
    }
  `,
  hvrWobbleSkew: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrWobbleSkew}
    }
    &:focus {
      ${hvrWobbleSkew}
    }
    &:active {
      ${hvrWobbleSkew}
    }
  `,
  hvrBuzz: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrBuzz}
    }
    &:focus {
      ${hvrBuzz}
    }
    &:active {
      ${hvrBuzz}
    }
  `,
  hvrBuzzOut: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    &:hover {
      ${hvrBuzzOut}
    }
    &:focus {
      ${hvrBuzzOut}
    }
    &:active {
      ${hvrBuzzOut}
    }
  `,
  hvrForward: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    &:focus {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    &:active {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
  `,
  hvrBackward: `
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
    &:focus {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
    &:active {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
  `,
};

export default transitions_2d;
