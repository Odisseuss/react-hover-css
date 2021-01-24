import { keyframes, css } from "styled-components";

const hvrDropKeyframes = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    51%,
        100% {
        opacity: 1;
    }
`;
const hvrDropAnimation = css`
  -webkit-animation: ${hvrDropKeyframes} 0.5s 0.3s forwards
    cubic-bezier(0.52, 1.64, 0.37, 0.66);
  animation: ${hvrDropKeyframes} 0.5s 0.3s forwards
    cubic-bezier(0.52, 1.64, 0.37, 0.66);
`;
export default hvrDropAnimation;
