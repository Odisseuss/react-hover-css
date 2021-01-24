import { css } from "styled-components";
import hvrDown from "../animations/icon/Down";
import hvrUp from "../animations/icon/Up";
import hvrDrop from "../animations/icon/Drop";
import hvrBob from "../animations/icon/Bob";
import hvrBuzz from "../animations/icon/Buzz";
import hvrBuzzOut from "../animations/icon/BuzzOut";
import hvrFloatAway from "../animations/icon/FloatAway";
import hvrHang from "../animations/icon/Hang";
import hvrPop from "../animations/icon/Pop";
import hvrPulse from "../animations/icon/Pulse";
import hvrPulseGrow from "../animations/icon/PulseGrow";
import hvrPulseShrink from "../animations/icon/PulseShrink";
import hvrPush from "../animations/icon/Push";
import hvrSinkAway from "../animations/icon/SinkAway";
import hvrWobbleHorizontal from "../animations/icon/WobbleHorizontal";
import hvrWobbleVertical from "../animations/icon/WobbleVertical";
/**
 * Contains all the icon transitions
 *
 * @example
 * ```
 *  import {iconTransitions} from 'react-styled-hover';
 *
 *  let StyledButton = styled.button`
 *    ${iconTransitions.hvrFade}
 *    ...other styles
 *  `
 * ```
 * @remarks
 * The button should contain another element with the class of `.hvr-icon` for the icon animations to work
 */
const iconTransitions = {
  hvrIconBack: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.1s;
            transition-duration: 0.1s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
        }
        &:focus .hvr-icon {
            -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
        }
        &:active .hvr-icon {
            -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
        }
    `,
  hvrIconForward: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.1s;
            transition-duration: 0.1s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: translateX(4px);
            transform: translateX(4px);
        }
        &:focus .hvr-icon {
            -webkit-transform: translateX(4px);
            transform: translateX(4px);
        }
        &:active .hvr-icon {
            -webkit-transform: translateX(4px);
            transform: translateX(4px);
        }
    `,
  hvrIconDown: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrDown}
    }
    &:focus .hvr-icon {
      ${hvrDown}
    }
    &:active .hvr-icon {
      ${hvrDown}
    }
  `,
  hvrIconUp: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrUp}
    }
    &:focus .hvr-icon {
      ${hvrUp}
    }
    &:active .hvr-icon {
      ${hvrUp}
    }
  `,
  hvrIconSpin: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);

        & .hvr-icon {
            display: inline-block;

            -webkit-transition-duration: 1s;
            transition-duration: 1s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: ease-in-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
        &:focus .hvr-icon {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
        &:active .hvr-icon {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    `,
  hvrIconDrop: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      opacity: 0;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      ${hvrDrop}
    }
    &:focus .hvr-icon {
      opacity: 0;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      ${hvrDrop}
    }
    &:active .hvr-icon {
      opacity: 0;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      ${hvrDrop}
    }
  `,
  hvrIconFade: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.5s;
            transition-duration: 0.5s;
            -webkit-transition-property: color;
            transition-property: color;
        }
        
        &:hover .hvr-icon {
            color: #0F9E5E;
        }
        &:focus .hvr-icon {
            color: #0F9E5E;
        }
        &:active .hvr-icon {
            color: #0F9E5E;
        }
    `,
  hvrIconFloatAway: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrFloatAway}
    }
    &:focus .hvr-icon {
      ${hvrFloatAway}
    }
    &:active .hvr-icon {
      ${hvrFloatAway}
    }
  `,
  hvrIconSinkAway: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrSinkAway}
    }
    &:focus .hvr-icon {
      ${hvrSinkAway}
    }
    &:active .hvr-icon {
      ${hvrSinkAway}
    }
  `,
  hvrIconGrow: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: scale(1.3) translateZ(0);
            transform: scale(1.3) translateZ(0);
        }
        &:focus .hvr-icon {
            -webkit-transform: scale(1.3) translateZ(0);
            transform: scale(1.3) translateZ(0);
        }
        &:active .hvr-icon {
            -webkit-transform: scale(1.3) translateZ(0);
            transform: scale(1.3) translateZ(0);
        }
    `,
  hvrIconShrink: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
        &:focus .hvr-icon {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
        &:active .hvr-icon {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
    `,
  hvrIconPulse: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover .hvr-icon {
      ${hvrPulse}
    }
    &:focus .hvr-icon {
      ${hvrPulse}
    }
    &:active .hvr-icon {
      ${hvrPulse}
    }
  `,
  hvrIconPulseGrow: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover .hvr-icon {
      ${hvrPulseGrow}
    }
    &:focus .hvr-icon {
      ${hvrPulseGrow}
    }
    &:active .hvr-icon {
      ${hvrPulseGrow}
    }
  `,
  hvrIconPulseShrink: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover .hvr-icon {
      ${hvrPulseShrink}
    }
    &:focus .hvr-icon {
      ${hvrPulseShrink}
    }
    &:active .hvr-icon {
      ${hvrPulseShrink}
    }
  `,
  hvrIconPush: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover .hvr-icon {
      ${hvrPush}
    }
    &:focus .hvr-icon {
      ${hvrPush}
    }
    &:active .hvr-icon {
      ${hvrPush}
    }
  `,
  hvrIconPop: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:hover .hvr-icon {
      ${hvrPop}
    }
    &:focus .hvr-icon {
      ${hvrPop}
    }
    &:active .hvr-icon {
      ${hvrPop}
    }
  `,
  hvrIconBounce: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
            transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        }
        &:focus .hvr-icon {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
            transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        }
        &:active .hvr-icon {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
            -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
            transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        }
    `,
  hvrIconRotate: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: rotate(20deg);
            transform: rotate(20deg);
        }
        &:focus .hvr-icon {
            -webkit-transform: rotate(20deg);
            transform: rotate(20deg);
        }
        &:active .hvr-icon {
            -webkit-transform: rotate(20deg);
            transform: rotate(20deg);
        }
    `,
  hvrIconGrowRotate: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: scale(1.5) rotate(12deg);
            transform: scale(1.5) rotate(12deg);
        }
        &:focus .hvr-icon {
            -webkit-transform: scale(1.5) rotate(12deg);
            transform: scale(1.5) rotate(12deg);
        }
        &:active .hvr-icon {
            -webkit-transform: scale(1.5) rotate(12deg);
            transform: scale(1.5) rotate(12deg);
        }
    `,
  hvrIconFloat: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
          
        }
        &:focus .hvr-icon {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
          
        }
        &:active .hvr-icon {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
          
        }
    `,
  hvrIconSink: `
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        & .hvr-icon {
            display: inline-block;

            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        
        &:hover .hvr-icon {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
        &:focus .hvr-icon {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
        &:active .hvr-icon {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
    `,
  hvrIconBob: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrBob}
    }
    &:focus .hvr-icon {
      ${hvrBob}
    }
    &:active .hvr-icon {
      ${hvrBob}
    }
  `,
  hvrIconHang: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrHang}
    }
    &:focus .hvr-icon {
      ${hvrHang}
    }
    &:active .hvr-icon {
      ${hvrHang}
    }
  `,
  hvrIconWobbleHorizontal: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrWobbleHorizontal}
    }
    &:focus .hvr-icon {
      ${hvrWobbleHorizontal}
    }
    &:active .hvr-icon {
      ${hvrWobbleHorizontal}
    }
  `,
  hvrIconWobbleVertical: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrWobbleVertical}
    }
    &:focus .hvr-icon {
      ${hvrWobbleVertical}
    }
    &:active .hvr-icon {
      ${hvrWobbleVertical}
    }
  `,
  hvrIconBuzz: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrBuzz}
    }
    &:focus .hvr-icon {
      ${hvrBuzz}
    }
    &:active .hvr-icon {
      ${hvrBuzz}
    }
  `,
  hvrBuzzOut: css`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    & .hvr-icon {
      display: inline-block;

      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    &:hover .hvr-icon {
      ${hvrBuzzOut}
    }
    &:focus .hvr-icon {
      ${hvrBuzzOut}
    }
    &:active .hvr-icon {
      ${hvrBuzzOut}
    }
  `,
};

export default iconTransitions;
