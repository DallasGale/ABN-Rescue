/* eslint-disable camelcase */
import { keyframes } from 'styled-components'
import { colorOrange, colorYellow } from '../styles/colors'

export const transitionPt1 = 'transition: all 0.1s ease-in-out;'
export const transitionPt2 = 'transition: all 0.2s ease-in-out;'

export const pageLoadContentAppear = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;  }
`

export const pageLoadContentDisappear = keyframes`
  100% { opacity: 0; top: 0 }

  0% { opacity: 1; top: -20px }
`

export const dotsAppear = keyframes`
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1)
  }
`

export const dotsFalling = keyframes`
  0% {
    opacity: 1;
    top: 0;
  }
  15% {
    top: -2px;
  }

  60% {
    top: 100vh;
    opacity: 0.3;
  }

  80% {
    opacity: 0;
  }

  100% {
    top: 200vh;
  }
`

export const PinEnter = keyframes`
  0% {}
  100% { margin-left: 100% }
`


export const PinEnter_Tablet = keyframes`
  0% {}
  100% { margin-top: 100% }
`


export const PinExpand = keyframes`
  0% {
    transform-origin: right center;
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  100% {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(4);
   }
`


export const CircleBounceIn = keyframes`
  0% {
    transform: scale(1);
  }
  15% { 
    transform: scale(1.8);
  }
  30% { 
    transform: scale(1);
  }
  45% {
    transform: scale(1.4);
  }
  60% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.15);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`


export const PinCircleReduceSize = keyframes`
  0% {
    transform: scale(0.5);
  }
  15% { 
    transform: scale(0.8);
  }
  30% { 
    transform: scale(0.5);
  }
  45% {
    transform: scale(0.7);
  }
  60% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(0.55);
  }
  90% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0.5);
  }
`

export const FadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const FadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`


export const ColumnOneBounceIn = keyframes`
  50% { top: 20vh }
  100% { top: 50vh }
`

export const ColumnTwoBounceIn = keyframes`
  50% { top: 0 }
  100% { top: 25vh }
`

export const ColumnThreeBounceIn = keyframes`
  50% { top: -15vh }
  100% { top: -5vh }
`
export const rollingArrows = keyframes`
  0% { opacity: 0.3; }
  8% { opacity: 1; }
  20% { opacity: 0.3; }
  28% { opacity: 0.3; }
  34% { opacity: 1; }
  46% { opacity: 0.3; }
  100% { opacity: 0.3; }
`
export const ClockTickingRotation = keyframes`
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(10deg)
  }

  20% {
    transform: rotate(10deg)
  }

  30% {
    transform: rotate(30deg)
  }

  40% {
    transform: rotate(30deg)
  }

  50% {
    transform: rotate(50deg)
  }

  60% {
    transform: rotate(50deg)
  }

  70% {
    transform: rotate(70deg)
  }

  80% {
    transform: rotate(70deg)
  }

  100% {
    transform: rotate(90deg)
  }
`

export const ClockStopped = keyframes`
  0% {
    transform: rotate(90deg)
  }
  100% {
    transform: rotate(90deg)
  }
`


export const EnlargeNineMillion = keyframes`
  0% {
    transform: translateX(600%);
  }
  20% {
    transform: translateX(0%);
  }

  90% {
    borderRadius: 100%;
    transform: scale(100);
  }
`


export const BoomingStateTopBarAppears = keyframes`
  0% {

  }
  100% {
    height: 25vh;
  }
`

export const BoomingStateMiddleBarAppears = keyframes`
  0% {

  }
  100% {
    height: 15vh;
  }
`

export const BoomingStateBottomBarAppears = keyframes`
  0% {

  }
  100% {
    height: 60vh;
  }
`
export const PinIdling = keyframes`
  0% {
    left: 0;
  }

  10% {
    left: 2vw;
  }

  30% {
    left: 0;
  }

  100% {
    left: 0;
  }
`
export const PinIdlingVertical = keyframes`
  0% {
    /* top: 10vh; */
  }

  10% {
    top: 10vh;
  }

  30% {
    top: 8vh;
  }

  100% {
    top: 8vh;
  }
`

export const PinIdlingVerticalMobile = keyframes`
  0% {
    top: -10vh;
  }

  10% {
    top: -10vh;
  }

  30% {
    top: -15vh;
  }

  100% {
    top: -10vh;
  }
`

export const LaunchExplorerMessage = keyframes`
0% {
  top:  -40vh;
}
 
90% {
  top: 21vh;
}

100% {
  top: 22vh;
}
`

export const ForgroundStarsAppear = keyframes`
  0% {
    transform: translateY(-45%);
  }

  100% {
    transform: translateY(0);
  }
`
