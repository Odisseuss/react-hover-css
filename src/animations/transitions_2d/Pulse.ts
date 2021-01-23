import { keyframes, css } from "styled-components";

const hvrPulseKeyframes = keyframes`
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
const hvrPulseAnimation = css`
  -webkit-animation: ${hvrPulseKeyframes} 1s linear infinite;
  animation: ${hvrPulseKeyframes} 1s linear infinite;
`;
export default hvrPulseAnimation;
