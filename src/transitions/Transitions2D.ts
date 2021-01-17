import hvrPulseAnimation from "../animations/Pulse";

/**
 * TODO: Add comment to everything
 */
const transitions_2d = {
  /**
   * TODO: Add comment to everything
   */
  hvrGrow: `display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      
      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      &:focus {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      &:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      `,

  hvrShrink: `
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
  
      &:hover {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      &:focus {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      &:active {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    `,
  hvrPulse: `
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
      &:hover {
        ${hvrPulseAnimation}
      }
      &:focus {
        ${hvrPulseAnimation}
      }
      &:active {
        ${hvrPulseAnimation}
      }
    `,
};

export default transitions_2d;
