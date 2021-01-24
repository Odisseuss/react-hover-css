/**
 * @example
 * ```
 *  import {shadowTransitions} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${shadowTransitions.hvrFade}
 *    ...other styles
 *  `
 * ```
 */
const shadowTransitions = {
  hvrGlow: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
        
        &:hover {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }
        &:focus {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }
        &:active {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
        }
    `,
  hvrShadow: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
        
        &:hover {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        }
        &:focus {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        }
        &:active {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        }
    `,
  hvrGrowShadow: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
        
        &:hover {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        &:focus {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        &:active {
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    `,
  hvrBoxShadowOutset: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
        
        &:hover {
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
        }
        &:focus {
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
        }
        &:active {
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
        }
    `,
  hvrBoxShadowInset: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
        box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
        
        &:hover {
            box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
        }
        &:focus {
            box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
        }
        &:active {
            box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);
        }
    `,
  hvrFloatShadow: `
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
            pointer-events: none;
            position: absolute;
            z-index: -1;
            content: '';
            top: 100%;
            left: 5%;
            height: 10px;
            width: 90%;
            opacity: 0;
            background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
            background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
            /* W3C */
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform, opacity;
            transition-property: transform, opacity;
        }
        &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
        }
        &:focus {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
        }
        &:active {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
        }
        &:hover:before {
            opacity: 1;
            -webkit-transform: translateY(5px);
            transform: translateY(5px);
        }
        &:focus:before {
            opacity: 1;
            -webkit-transform: translateY(5px);
            transform: translateY(5px);
        }
        &:active:before {
            opacity: 1;
            -webkit-transform: translateY(5px);
            transform: translateY(5px);
        }
    `,
  hvrShadowRadial: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        
        &:before {
            pointer-events: none;
            position: absolute;
            content: '';
            left: 0;
            width: 100%;
            box-sizing: border-box;
            background-repeat: no-repeat;
            height: 5px;
            opacity: 0;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            bottom: 100%;
            background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
            background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
        }
        &:after {
            pointer-events: none;
            position: absolute;
            content: '';
            left: 0;
            width: 100%;
            box-sizing: border-box;
            background-repeat: no-repeat;
            height: 5px;
            opacity: 0;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: opacity;
            transition-property: opacity;
            top: 100%;
            background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
            background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
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
        &:hover:after {
            opacity: 1;
        }
        &:focus:after {
            opacity: 1;
        }
        &:active:after {
            opacity: 1;
        }
    `,
};

export default shadowTransitions;
