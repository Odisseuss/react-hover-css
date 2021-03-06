import { keyframes, css } from "styled-components";

const hvrPulseShrinkKeyframes = keyframes`
    to {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
`;
const hvrPulseShrinkAnimation = css`
  -webkit-animation: ${hvrPulseShrinkKeyframes} 0.3s linear infinite alternate;
  animation: ${hvrPulseShrinkKeyframes} 0.3s linear infinite alternate;
`;
export default hvrPulseShrinkAnimation;
