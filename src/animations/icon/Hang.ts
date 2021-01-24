import { keyframes, css } from "styled-components";

const hvrHangKeyframes = keyframes`
    0% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
    50% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
`;
const hvrHangFloatKeyframes = keyframes`
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
`;
const hvrHangAnimation = css`
  -webkit-animation: ${hvrHangFloatKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrHangKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
  animation: ${hvrHangFloatKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrHangKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
`;
export default hvrHangAnimation;
