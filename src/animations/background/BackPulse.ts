import { keyframes, css } from "styled-components";

const hvrBackPulseKeyframes = keyframes`
    50% {
        background-color: rgba(32, 152, 209, 0.75);
    }
`;

const hvrBackPulseAnimation = css`
  -webkit-animation: ${hvrBackPulseKeyframes} 1s 0.5s linear infinite;
  animation: ${hvrBackPulseKeyframes} 1s 0.5s linear infinite;
`;
export default hvrBackPulseAnimation;
