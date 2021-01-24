import { keyframes, css } from "styled-components";

const hvrUpKeyframes = keyframes`
    0%,
    50%,
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    25%,
    75% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
`;
const hvrUpAnimation = css`
  -webkit-animation: ${hvrUpKeyframes} 1s ease-out;
  animation: ${hvrUpKeyframes} 1s ease-out;
`;
export default hvrUpAnimation;
