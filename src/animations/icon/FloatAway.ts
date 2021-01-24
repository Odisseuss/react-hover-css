import { keyframes, css } from "styled-components";

const hvrFloatAwayKeyframes = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(-1em);
        transform: translateY(-1em);
    }
`;
const hvrFloatAwayAnimation = css`
  -webkit-animation: ${hvrFloatAwayKeyframes} 0.5s ease-out forwards;
  animation: ${hvrFloatAwayKeyframes} 0.5s ease-out forwards;
`;
export default hvrFloatAwayAnimation;
