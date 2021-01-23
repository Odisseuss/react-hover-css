import { keyframes, css } from "styled-components";

const hvrWobbleVerticalKeyframes = keyframes`
    16.65% {
        -webkit-transform: translateY(8px);
        transform: translateY(8px);
    }
    33.3% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
    49.95% {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }
    66.6% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    83.25% {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`;
const hvrWobbleVerticalAnimation = css`
  -webkit-animation: ${hvrWobbleVerticalKeyframes} 1s ease-in-out 1;
  animation: ${hvrWobbleVerticalKeyframes} 1s ease-in-out 1;
`;
export default hvrWobbleVerticalAnimation;
