import { keyframes, css } from "styled-components";

const hvrRippleInKeyframes = keyframes`
    100% {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
    }
`;
const hvrRippleInAnimation = css`
  -webkit-animation: ${hvrRippleInKeyframes} 1s;
  animation: ${hvrRippleInKeyframes} 1s;
`;
export default hvrRippleInAnimation;
