import { keyframes, css } from "styled-components";

const hvrWobbleHorizontalKeyframes = keyframes`
    16.65% {
        -webkit-transform: translateX(6px);
        transform: translateX(6px);
    }
    33.3% {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    49.95% {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
    }
    66.6% {
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);
    }
    83.25% {
        -webkit-transform: translateX(1px);
        transform: translateX(1px);
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`;
const hvrWobbleHorizontalAnimation = css`
  -webkit-animation: ${hvrWobbleHorizontalKeyframes} 1s ease-in-out 1;
  animation: ${hvrWobbleHorizontalKeyframes} 1s ease-in-out 1;
`;
export default hvrWobbleHorizontalAnimation;
