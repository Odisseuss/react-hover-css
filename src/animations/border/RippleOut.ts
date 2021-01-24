import { keyframes, css } from "styled-components";

const hvrRippleOutKeyframes = keyframes`
    100% {
        top: -12px;
        right: -12px;
        bottom: -12px;
        left: -12px;
        opacity: 0;
    }
`;
const hvrRippleOutAnimation = css`
  -webkit-animation: ${hvrRippleOutKeyframes} 1s;
  animation: ${hvrRippleOutKeyframes} 1s;
`;
export default hvrRippleOutAnimation;
