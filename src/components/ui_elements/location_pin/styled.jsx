import styled from 'styled-components'

import { colorOrange, colorYellow } from '../../styles/colors'
import {
  ScreenWidescreenDown,
  ScreenTabletRetinaDown,
  ScreenPhoneDown,
  ScreenSmallDeviceDown,
  ScreenDesktopDown,
} from '../../utils/media'
import {
  CircleBounceIn,
  PinCircleReduceSize,
  PinIdling,
  PinIdlingVertical,
  PinIdlingVerticalMobile,
} from '../../utils/transitions'


export const StyledPin = styled.div`
  align-items: center;
  display: grid;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;

  &.idling {
    animation: ${PinIdling} 6s infinite 2s ease-out;

    @media ${ScreenTabletRetinaDown} {
      animation: ${PinIdlingVertical} 5s infinite 3s ease-out;
    }
    @media ${ScreenPhoneDown} {
      animation: none;
    }
  }

  #pin-background {
    height: 100%;
    width: 100%;
  }
`

export const StyledPinCircle = styled.div`
  height: 100vh;
  width: 100vw;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};

  &.pin-circle-replacement {
    position: absolute;
    display: grid;
    align-items: center;
    z-index: 5;
    top: 20vh;
    left: 30vw;
    height: auto;
    width: 20%;

    @media ${ScreenWidescreenDown} {
      width: 25%;
    }

    @media ${ScreenTabletRetinaDown} {
      top: 30%;
      left: auto;
    }

    @media ${ScreenPhoneDown} {
      top: -30%;
      width: 50%;
    }

    &.enter {
      transition: all 2s;
      left: 20%;
      animation: ${CircleBounceIn} 2s ease-in-out 1s forwards;

      @media ${ScreenWidescreenDown} {
        left: 25%;
      }

      @media ${ScreenDesktopDown} {
        left: 19%;
      }

      @media ${ScreenTabletRetinaDown} {
        left: ${props => (props.showSurroundingSuburbStats ? '35%' : 0)};
        top: ${props => (props.showSurroundingSuburbStats ? '35vh' : '60vh')};
        right: 0;
        margin: ${props => (props.showSurroundingSuburbStats ? '0' : '0 auto')};
        width: ${props => (props.showSurroundingSuburbStats ? '45%' : '25%')};
      }

      @media ${ScreenPhoneDown} {
        top: ${props => (props.showSurroundingSuburbStats ? '30vh' : '50vh')};
        width: ${props => (props.showSurroundingSuburbStats ? '70%' : '40%')};
      }
      @media ${ScreenSmallDeviceDown} {
        top: ${props => (props.showSurroundingSuburbStats ? '20vh' : '50vh')};
      }
    }
  }
`

export const StyledSvgPath = styled.path`
  fill: ${colorOrange};
`


export const StyledSvgCircle = styled.circle`
  fill: ${colorYellow};
`

export const StyledInnerCircle = styled.svg`
  &.pin_circle {
    &.size {
      &--small { 
        animation: ${PinCircleReduceSize} 1s forwards;
      }
      &--large { 
        animation: ${CircleBounceIn} 1s forwards;
      }
    }
  }
`
