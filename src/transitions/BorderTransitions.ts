import { css } from "styled-components";
import hvrRippleOut from "../animations/border/RippleOut";
import hvrRippleIn from "../animations/border/RippleIn";
/**
 * Contains all the border transitions
 *
 * @example
 * ```
 *  import {borderTransitions} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${borderTransitions.hvrFade}
 *    ...other styles
 *  `
 * ```
 */
const borderTransitions = {
  hvrBorderFade: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
        box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);
        
        &:hover {
            box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);
        }
        &:focus {
            box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);
        }
        &:active {
            box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);
        }
    `,
  hvrHollow: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: background;
        transition-property: background;
        box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);
        
        &:hover {
            background: none;
        }
        &:focus {
            background: none;
        }
        &:active {
            background: none;
        }
    `,
  hvrTrim: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        

        &:before {
            content: '';
            position: absolute;
            border: white solid 4px;
            top: 4px;
            left: 4px;
            right: 4px;
            bottom: 4px;
            opacity: 0;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
        }
        &:hover:before {
            opacity: 1;
        }
        &:focus:before {
            opacity: 1;
        }
        &:active:before {
            opacity: 1;
        }
    `,
  hvrRippleOut: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;

    &:before {
      content: "";
      position: absolute;
      border: #e1e1e1 solid 6px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &:hover:before {
      ${hvrRippleOut}
    }
    &:focus:before {
      ${hvrRippleOut}
    }
    &:active:before {
      ${hvrRippleOut}
    }
  `,
  hvrRippleIn: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;

    &:before {
      content: "";
      position: absolute;
      border: #e1e1e1 solid 4px;
      top: -12px;
      right: -12px;
      bottom: -12px;
      left: -12px;
      opacity: 0;
    }
    &:hover:before {
      ${hvrRippleIn}
    }
    &:focus:before {
      ${hvrRippleIn}
    }
    &:active:before {
      ${hvrRippleIn}
    }
  `,
  hvrOutlineOut: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        

        &:before {
            content: '';
            position: absolute;
            border: #e1e1e1 solid 4px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: top, right, bottom, left;
            transition-property: top, right, bottom, left;
        }
        &:hover:before {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
        }
        &:focus:before {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
        }
        &:active:before {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
        }
    `,
  hvrOutlineIn: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        

        &:before {
            pointer-events: none;
            content: '';
            position: absolute;
            border: #e1e1e1 solid 4px;
            top: -16px;
            right: -16px;
            bottom: -16px;
            left: -16px;
            opacity: 0;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: top, right, bottom, left;
            transition-property: top, right, bottom, left;
        }
        &:hover {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
            opacity: 1;
        }
        &:focus {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
            opacity: 1;
        }
        &:active {
            top: -8px;
            right: -8px;
            bottom: -8px;
            left: -8px;
            opacity: 1;
        }
    `,
  hvrRoundCorners: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: border-radius;
        transition-property: border-radius;
        

        &:hover {
            border-radius: 1em;
        }
        &:focus {
            border-radius: 1em;
        }
        &:active {
            border-radius: 1em;
        }
    `,
  hvrUnderlineFromLeft: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            bottom: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: right;
            transition-property: right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            right: 0;
        }
        &:focus:before {
            right: 0;
        }
        &:active:before {
            right: 0;
        }
    `,
  hvrUnderlineFromCenter: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 51%;
            right: 51%;
            bottom: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            left: 0;
            right: 0;
        }
        &:focus:before {
            left: 0;
            right: 0;
        }
        &:active:before {
            left: 0;
            right: 0;
        }
    `,
  hvrUnderlineFromRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 100%;
            right: 0;
            bottom: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: left;
            transition-property: left;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            left: 0;
        }
        &:focus:before {
            left: 0;
        }
        &:active:before {
            left: 0;
        }
    `,
  hvrOverlineFromLeft: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            top: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: right;
            transition-property: right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            right: 0;
        }
        &:focus:before {
            right: 0;
        }
        &:active:before {
            right: 0;
        }
    `,
  hvrOverlineFromCenter: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 51%;
            right: 51%;
            top: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            left: 0;
            right: 0;
        }
        &:focus:before {
            left: 0;
            right: 0;
        }
        &:active:before {
            left: 0;
            right: 0;
        }
    `,
  hvrOverlineFromRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 100%;
            right: 0;
            top: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transition-property: left;
            transition-property: left;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            left: 0;
        }
        &:focus:before {
            left: 0;
        }
        &:active:before {
            left: 0;
        }
    `,
  hvrReveal: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-color: #2098D1;
            border-style: solid;
            border-width: 0;
            -webkit-transition-property: border-width;
            transition-property: border-width;
            -webkit-transition-duration: 0.1s;
            transition-duration: 0.1s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            border-width: 4px;
        }
        &:focus:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            border-width: 4px;
        }
        &:active:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            border-width: 4px;
        }
    `,
  hvrUnderlineReveal: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            bottom: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        &:focus:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        &:active:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    `,
  hvrOverlineReveal: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            top: 0;
            background: #2098D1;
            height: 4px;
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        &:focus:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        &:active:before {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    `,
};

export default borderTransitions;
