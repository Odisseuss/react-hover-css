import hvrPulseAnimation from "../animations/Pulse";
import hvrPulseGrowAnimation from "../animations/PulseGrow";
import hvrPulseShrinkAnimation from "../animations/PulseShrink";
import hvrPushAnimation from "../animations/Push";
import hvrPopAnimation from "../animations/Pop";
import { css } from "styled-components";
import hvrBobAnimation from "../animations/Bob";

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
  hvrGrow: `display: inline-block;
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
};

export default transitions_2d;
