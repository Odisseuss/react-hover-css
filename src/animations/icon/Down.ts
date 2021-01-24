import { keyframes, css } from "styled-components";

const hvrDownKeyframes = keyframes`
    0%,
    50%,
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    25%,
    75% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
`;
const hvrDownAnimation = css`
  -webkit-animation: ${hvrDownKeyframes} 1s ease-out;
  animation: ${hvrDownKeyframes} 1s ease-out;
`;
export default hvrDownAnimation;
