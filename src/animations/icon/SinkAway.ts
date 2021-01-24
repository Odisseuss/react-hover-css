import { keyframes, css } from "styled-components";

const hvrSinkAwayKeyframes = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(1em);
        transform: translateY(1em);
    }
`;
const hvrSinkAwayAnimation = css`
  -webkit-animation: ${hvrSinkAwayKeyframes} 0.5s ease-out forwards;
  animation: ${hvrSinkAwayKeyframes} 0.5s ease-out forwards;
`;
export default hvrSinkAwayAnimation;
