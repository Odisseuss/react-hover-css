import { keyframes, css } from "styled-components";

const hvrPulseKeyframes = keyframes`
    25% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    75% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
`;
const hvrPulseAnimation = css`
  -webkit-animation: ${hvrPulseKeyframes} 1s linear infinite;
  animation: ${hvrPulseKeyframes} 1s linear infinite;
`;
export default hvrPulseAnimation;
