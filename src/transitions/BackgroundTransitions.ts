import { css } from "styled-components";
import hvrBackPulse from "../animations/background/BackPulse";

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
  hvrFade: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        overflow: hidden;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: color, background-color;
        transition-property: color, background-color;
        
        &:hover {
            background-color: #2098D1;
            color: white;
        }
        &:focus {
            background-color: #2098D1;
            color: white;
        }
        &:active {
            background-color: #2098D1;
            color: white;
        }
    `,
  hvrBackPulse: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        overflow: hidden;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: color, background-color;
        transition-property: color, background-color;
        
        &:hover {
            ${hvrBackPulse}
            background-color: #2098D1;
            color: white;
        }
        &:focus {
            ${hvrBackPulse}
            background-color: #2098D1;
            color: white;
        }
        &:active {
            ${hvrBackPulse}
            background-color: #2098D1;
            color: white;
        }
    `,
  hvrSweepToRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #2098D1;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover {
            color: white;
        }
        &:focus {
            color: white;
        }
        &:active {
            color: white;
        }
        &:hover:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
        &:focus:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
        &:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    `,
};

export default transitions_2d;
