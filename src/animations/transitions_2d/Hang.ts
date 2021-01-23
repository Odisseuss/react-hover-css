import { keyframes, css } from "styled-components";

const hvrHangKeyframes = keyframes`
    0% {
        -webkit-transform: translateY(8px);
        transform: translateY(8px);
    }
    50% {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }
    100% {
        -webkit-transform: translateY(8px);
        transform: translateY(8px);
    }
`;
const hvrHangSinkKeyframes = keyframes`
    100% {
        -webkit-transform: translateY(8px);
        transform: translateY(8px);
    }
`;
const hvrHangAnimation = css`
  -webkit-animation: ${hvrHangSinkKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrHangKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
  animation: ${hvrHangSinkKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrHangKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
`;
export default hvrHangAnimation;
