import { keyframes, css } from "styled-components";

const hvrBobKeyframes = keyframes`
    0% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
    50% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
    }
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
`;
const hvrBobFloatKeyframes = keyframes`
    100% {
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
    }
`;
const hvrBobAnimation = css`
  -webkit-animation: ${hvrBobFloatKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrBobKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
  animation: ${hvrBobFloatKeyframes} 0.3s 0s ease-out 1 forwards normal,
    ${hvrBobKeyframes} 1.5s 0.3s ease-in-out infinite forwards alternate;
`;
export default hvrBobAnimation;
