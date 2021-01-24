import { keyframes, css } from "styled-components";

const hvrPopKeyframes = keyframes`
    50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
`;
const hvrPopAnimation = css`
  -webkit-animation: ${hvrPopKeyframes} 0.3s linear 1;
  animation: ${hvrPopKeyframes} 0.3s linear 1;
`;
export default hvrPopAnimation;
