import { keyframes, css } from "styled-components";

const hvrPulseGrowKeyframes = keyframes`
    to {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
`;
const hvrPulseGrowAnimation = css`
  -webkit-animation: ${hvrPulseGrowKeyframes} 0.3s linear infinite alternate;
  animation: ${hvrPulseGrowKeyframes} 0.3s linear infinite alternate;
`;
export default hvrPulseGrowAnimation;
