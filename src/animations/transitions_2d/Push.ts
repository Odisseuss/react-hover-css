import { keyframes, css } from "styled-components";

const hvrPushKeyFrames = keyframes`
    50% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;
const hvrPushAnimation = css`
  -webkit-animation: ${hvrPushKeyFrames} 0.3s linear 1;
  animation: ${hvrPushKeyFrames} 0.3s linear 1;
`;
export default hvrPushAnimation;
