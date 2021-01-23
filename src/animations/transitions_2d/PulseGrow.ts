import { keyframes, css } from "styled-components";

const hvrPulseGrowKeyframes = keyframes`
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
const hvrPulseGrowAnimation = css`
  -webkit-animation: ${hvrPulseGrowKeyframes} 0.3s linear infinite alternate;
  animation: ${hvrPulseGrowKeyframes} 0.3s linear infinite alternate;
`;
export default hvrPulseGrowAnimation;
