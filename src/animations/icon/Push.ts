import { keyframes, css } from "styled-components";

const hvrPushKeyframes = keyframes`
    50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
`;
const hvrPushAnimation = css`
  -webkit-animation: ${hvrPushKeyframes} 0.3s linear 1;
  animation: ${hvrPushKeyframes} 0.3s linear 1;
`;
export default hvrPushAnimation;
