import { css } from "styled-components";
import hvrBackPulse from "../animations/background/BackPulse";

/**
 * Contains all the background transitions
 *
 * @example
 * ```
 *  import {backgroundTransitions} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${backgroundTransitions.hvrFade}
 *    ...other styles
 *  `
 * ```
 */
const backgroundTransitions = {
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
  hvrBackPulse: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
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
  hvrSweepToLeft: `
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
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
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
  hvrSweepToBottom: `
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
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
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
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:focus:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:active:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    `,
  hvrSweepToTop: `
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
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
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
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:focus:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:active:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    `,
  hvrBounceToRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        
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
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
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
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:focus:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
    `,
  hvrBounceToLeft: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        
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
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
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
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:focus:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:active:before {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
    `,
  hvrBounceToBottom: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #2098D1;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
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
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:focus:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:active:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
    `,
  hvrBounceToTop: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #2098D1;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
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
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:focus:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
        &:active:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
    `,
  hvrRadialOut: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        background: #e1e1e1;
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
            border-radius: 100%;
            -webkit-transform: scale(0);
            transform: scale(0);
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
            -webkit-transform: scale(2);
            transform: scale(2);
        }
        &:focus:before {
            -webkit-transform: scale(2);
            transform: scale(2);
        }
        &:active:before {
            -webkit-transform: scale(2);
            transform: scale(2);
        }
    `,
  hvrRadialIn: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        background: #2098D1;
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
            background: #e1e1e1;
            border-radius: 100%;
            -webkit-transform: scale(2);
            transform: scale(2);
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
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        &:focus:before {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        &:active:before {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
    `,
  hvrRectangleIn: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #2098D1;
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
            background: #e1e1e1;
            -webkit-transform: scale(1);
            transform: scale(1);
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
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        &:focus:before {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        &:active:before {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
    `,
  hvrRectangleOut: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        background: #2098D1;
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
            -webkit-transform: scale(0);
            transform: scale(0);
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
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        &:focus:before {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        &:active:before {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    `,
  hvrShutterInHorizontal: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #2098D1;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #e1e1e1;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
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
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
        }
        &:focus:before {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
        }
        &:active:before {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
        }
    `,
  hvrShutterOutHorizontal: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #e1e1e1;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #2098D1;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
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
  hvrShutterInVertical: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #2098D1;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #e1e1e1;
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
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
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
        }
        &:focus:before {
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
        }
        &:active:before {
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
        }
    `,
  hvrShutterOutVertical: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #e1e1e1;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #2098D1;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
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
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:focus:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
        &:active:before {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    `,
};

export default backgroundTransitions;
