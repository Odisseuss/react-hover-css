import { keyframes, css } from "styled-components";

const hvrWobbleBottomKeyframes = keyframes`
    16.65% {
        -webkit-transform: skew(-12deg);
        transform: skew(-12deg);
    }
    33.3% {
        -webkit-transform: skew(10deg);
        transform: skew(10deg);
    }
    49.95% {
        -webkit-transform: skew(-6deg);
        transform: skew(-6deg);
    }
    66.6% {
        -webkit-transform: skew(4deg);
        transform: skew(4deg);
    }
    83.25% {
        -webkit-transform: skew(-2deg);
        transform: skew(-2deg);
    }
    100% {
        -webkit-transform: skew(0);
        transform: skew(0);
    }
`;
const hvrWobbleBottomAnimation = css`
  -webkit-animation: ${hvrWobbleBottomKeyframes} 1s ease-in-out 1;
  animation: ${hvrWobbleBottomKeyframes} 1s ease-in-out 1;
`;
export default hvrWobbleBottomAnimation;
