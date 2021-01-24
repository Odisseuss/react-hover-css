import { css } from "styled-components";
import hvrRippleOut from "../animations/border/RippleOut";
import hvrRippleIn from "../animations/border/RippleIn";
/**
 * Contains all the speech bubble transitions
 *
 * @example
 * ```
 *  import {speechBubbleTransitions} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${speechBubbleTransitions.hvrFade}
 *    ...other styles
 *  `
 * ```
 */
const speechBubbleTransitions = {
  hvrBubbleTop: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        
        &:before {
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            border-style: solid;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            left: calc(50% - 10px);
            top: 0;
            border-width: 0 10px 10px 10px;
            border-color: transparent transparent #e1e1e1 transparent;
        }
        &:hover:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
        &:focus:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
        &:active:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
    `,
  hvrBubbleRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        
        &:before {
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            border-style: solid;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            top: calc(50% - 10px);
            right: 0;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent #e1e1e1;
        }
        &:hover:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);
        }
        &:focus:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);  
        }
        &:active:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px); 
        }
    `,
  hvrBubbleBottom: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        
        &:before {
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            border-style: solid;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            left: calc(50% - 10px);
            bottom: 0;
            border-width: 10px 10px 0 10px;
            border-color: #e1e1e1 transparent transparent transparent;
        }
        &:hover:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);   
        }
        &:focus:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);   
        }
        &:active:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);   
        }
    `,
  hvrbubbleLeft: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        
        &:before {
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            border-style: solid;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            top: calc(50% - 10px);
            left: 0;
            border-width: 10px 10px 10px 0;
            border-color: transparent #e1e1e1 transparent transparent;
        }
        &:hover:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
        &:focus:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
        &:active:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
    `,
  hvrBubbleFloatTop: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        
        &:before {
            position: absolute;
            z-index: -1;
            content: '';
            left: calc(50% - 10px);
            top: 0;
            border-style: solid;
            border-width: 0 10px 10px 10px;
            border-color: transparent transparent #e1e1e1 transparent;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
        }
        &:hover:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
        &:focus:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
        &:active:before {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);   
        }
        &:hover {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);  
        }
        &:focus {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
        }
        &:active {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
        }
    `,
  hvrBubbleFloatRight: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        
        &:before {
            position: absolute;
            z-index: -1;
            top: calc(50% - 10px);
            right: 0;
            content: '';
            border-style: solid;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent #e1e1e1;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
        }
        &:hover:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px); 
        }
        &:focus:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);  
        }
        &:active:before {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);  
        }
        &:hover {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
        }
        &:focus {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
        }
        &:active {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
        }
    `,
  hvrBubbleFloatBottom: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        
        &:before {
            position: absolute;
            z-index: -1;
            content: '';
            left: calc(50% - 10px);
            bottom: 0;
            border-style: solid;
            border-width: 10px 10px 0 10px;
            border-color: #e1e1e1 transparent transparent transparent;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
        }
        &:hover:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
        }
        &:focus:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
        }
        &:active:before {
            -webkit-transform: translateY(10px);
            transform: translateY(10px);
        }
        &:hover {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        &:focus {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
        &:active {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
        }
    `,
  hvrBubbleFloatLeft: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        
        &:before {
            position: absolute;
            z-index: -1;
            content: '';
            top: calc(50% - 10px);
            left: 0;
            border-style: solid;
            border-width: 10px 10px 10px 0;
            border-color: transparent #e1e1e1 transparent transparent;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
        }
        &:hover:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
        &:focus:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
        &:active:before {
            -webkit-transform: translateX(-10px);
            transform: translateX(-10px);   
        }
        &:hover {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);  
        }
        &:focus {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);
        }
        &:active {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);
        }
    `,
};

export default speechBubbleTransitions;
