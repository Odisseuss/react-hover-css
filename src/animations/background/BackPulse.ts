import { keyframes, css } from "styled-components";

const hvrBackPulseKeyframes = keyframes`
    50% {
        background-color: rgba(32, 152, 209, 0.75);
    }
`;

const hvrBackPulseAnimation = css`
  -webkit-animation: ${hvrBackPulseKeyframes} 1s 0.5s liniar infinite;
  animation: ${hvrBackPulseKeyframes} 0.3s 0s ease-out 1 forwards;
`;
export default hvrBackPulseAnimation;
