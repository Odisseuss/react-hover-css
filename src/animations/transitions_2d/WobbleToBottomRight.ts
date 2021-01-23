import { keyframes, css } from "styled-components";

const hvrWobbleToBottomRightKeyframes = keyframes`
    16.65% {
        -webkit-transform: translate(8px, 8px);
        transform: translate(8px, 8px);
    }
    33.3% {
        -webkit-transform: translate(-6px, -6px);
        transform: translate(-6px, -6px);
    }
    49.95% {
        -webkit-transform: translate(4px, 4px);
        transform: translate(4px, 4px);
    }
    66.6% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
    }
    83.25% {
        -webkit-transform: translate(1px, 1px);
        transform: translate(1px, 1px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
`;
const hvrWobbleToBottomRightAnimation = css`
  -webkit-animation: ${hvrWobbleToBottomRightKeyframes} 1s ease-in-out 1;
  animation: ${hvrWobbleToBottomRightKeyframes} 1s ease-in-out 1;
`;
export default hvrWobbleToBottomRightAnimation;
