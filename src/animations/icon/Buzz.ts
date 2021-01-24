import { keyframes, css } from "styled-components";

const hvrBuzzKeyframes = keyframes`
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
`;
const hvrBuzzAnimation = css`
  -webkit-animation: ${hvrBuzzKeyframes} 0.15s linear infinite;
  animation: ${hvrBuzzKeyframes} 0.15s linear infinite;
`;
export default hvrBuzzAnimation;
