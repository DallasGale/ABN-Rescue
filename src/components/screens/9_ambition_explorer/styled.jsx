/* eslint-disable camelcase */
import styled from 'styled-components'
import {
  ScreenWidescreenDown,
  ScreenDesktopDown,
  ScreenTabletRetinaDown,
  ScreenPhoneDown,
  ScreenTabletDown,
} from '../../utils/media'
import { StyledMessageH2 } from '../../styled/typography'

import {
  CircleBounceIn,
  PinEnter,
  PinExpand,
  PinEnter_Tablet,
} from '../../utils/transitions'

import { colorBlue, colorGreen, colorYellow } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'

export const StyledWrapper = styled.div`
  overflow: hidden;


  .sticky {
    background: ${colorBlue};
    top: 0 !important; 
    width: 100%;
  }

  .pin-wrapper {
    height: 100vh;
    width: 100%;
    position: relative;
    margin-left: 0;
    z-index: 3;
    pointer-events: none;
    &.animate-in {
      animation: ${PinEnter} 1s ease-in-out forwards;
      #pin-background {
        animation-delay: 1s;
        animation: ${PinExpand} 1.2s ease-in-out forwards;
      }
    }
    &.animate-out {
      animation: ${PinEnter} 1s ease-in-out forwards;
      animation-direction: reverse;
      #pin-background {
        animation-delay: 1s;
        animation: ${PinExpand} 1.2s ease-in-out forwards;
        animation-direction: reverse;
      }
    }

    @media ${ScreenTabletRetinaDown} {
    &.animate-in {
      animation: ${PinEnter_Tablet} 1s ease-in-out forwards;
      #pin-background-tablet {
        animation-delay: 1s;
        animation: ${PinExpand} 1.2s ease-in-out forwards;
      }
    }
    &.animate-out {
      animation: ${PinEnter_Tablet} 1s ease-in-out forwards;
      animation-direction: reverse;
      #pin-background-tablet {
        animation-delay: 1s;
        animation: ${PinExpand} 1.2s ease-in-out forwards;
        animation-direction: reverse;
      }
    }
    }
  }
  .green-background {
    background: ${colorGreen};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0 !important;
    left: 0;
    z-index: 3;
    transform: translateY(-100%);
    &.appear {
      transform: translateY(0%);
      transition: 0.6s;
    }
    &.disappear {
      transform: translateY(100%);
      transition: 0.6s;
    }
  }
`

export const StyledLaunchExplorer = styled.div`
  position: absolute;
  width: 50vw;
  left: 50vw;
  height: auto;
  z-index: 2;

  @media ${ScreenDesktopDown} {
    width: 60vw;
  }

  @media ${ScreenTabletRetinaDown} {
    left: 0;
    height: 100vw;
    bottom: 0;
    width: 100%;
    top: 35vh;
  }

  &.appear { 
    opacity: 1;
    transition: 1s;
  }

  &.disappear {
    opacity: 0;
    transition: 1s;
  }

  &.enter {

    @media ${ScreenTabletRetinaDown} {
      top: 32vh;
    }
  }

  &.exit {
    transition: all 1s ease-in-out;
    opacity: 0;
  }
`

export const StyledMessage = styled(StyledMessageH2)`
  padding-left: 0;
  padding-bottom: 0;
`

export const StyledSurroundingSuburbCircle = styled.div`
  animation: ${CircleBounceIn} 1s forwards;
  border-radius: 100%;
  background: ${colorYellow};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 0;
  z-index: 2;

  &.surrounding-suburb-1 {
    left: 40%;
    top: -10%;
    width: ${pxToRem(420)};
    height: ${pxToRem(420)};
    @media ${ScreenWidescreenDown} {
      top: 0;
      width: ${pxToRem(300)};
      height: ${pxToRem(300)};
    }

    @media ${ScreenTabletRetinaDown} {
      top: 40vh;
      left: 5vw;
      width: ${pxToRem(250)};
      height: ${pxToRem(250)};
    }

    @media ${ScreenTabletDown} {
      width: ${pxToRem(220)};
      height: ${pxToRem(220)};
    }

    @media ${ScreenPhoneDown} {
      top: 32vh;
      width: ${pxToRem(160)};
      height: ${pxToRem(160)};
    }
  }
  &.surrounding-suburb-2 {
    right: 5%;
    top: 13%;
    width: ${pxToRem(260)};
    height: ${pxToRem(260)};

    @media ${ScreenWidescreenDown} {
      width: ${pxToRem(180)};
      height: ${pxToRem(180)};
    }

    @media ${ScreenTabletRetinaDown} {
      top: 75vh;
      right: 20vw;
    }

    @media ${ScreenTabletDown} {
      right: 10vw;
    }

    @media ${ScreenPhoneDown} {
      width: ${pxToRem(140)};
      height: ${pxToRem(140)};
      top: 70vh;
    }
  }
  &.surrounding-suburb-3 {
    right: 20%;
    top: 80%;
    width: ${pxToRem(140)};
    height: ${pxToRem(140)};

    @media ${ScreenWidescreenDown} {  
      top: 70%;
    }

    @media ${ScreenTabletRetinaDown} {
      display: none;
    }
  }
  &.surrounding-suburb-4 {
    left: 5%;
    top: 80%;
    width: ${pxToRem(130)};
    height: ${pxToRem(130)};
    @media ${ScreenWidescreenDown} {  
      top: 70%;
    }

    @media ${ScreenTabletRetinaDown} {
      display: none;
    }
  }
  &.surrounding-suburb-5 {
    right: 50%;
    top: 70%;
    width: ${pxToRem(110)};
    height: ${pxToRem(110)};

    @media ${ScreenTabletRetinaDown} {
      display: none;
    }
  }
`

export const StyledSurroundingSuburbsWrapper = styled.div`
  transform: translate(0, 0) !important;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  z-index: 4;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0 !important;
`


export const StyledNothingBeatsMessage = styled(StyledMessageH2)`
  position: absolute;
  z-index: 5;
  top: 18%;
`
