import { keyframes, css } from "styled-components";

const hvrBuzzOutKeyframes = keyframes`
    10% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    20% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    30% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    40% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    50% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    60% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    70% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    80% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    90% {
        -webkit-transform: translateX(1px) rotate(0);
        transform: translateX(1px) rotate(0);
    }
    100% {
        -webkit-transform: translateX(-1px) rotate(0);
        transform: translateX(-1px) rotate(0);
    }
`;
const hvrBuzzOutAnimation = css`
  -webkit-animation: ${hvrBuzzOutKeyframes} 0.75s linear infinite;
  animation: ${hvrBuzzOutKeyframes} 0.75s linear infinite;
`;
export default hvrBuzzOutAnimation;
