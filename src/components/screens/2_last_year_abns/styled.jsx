import styled from 'styled-components'

import { colorGreen, colorNavy, colorBlue } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'

import { ClockTickingRotation, ClockStopped } from '../../utils/transitions'

export const StyledSpeechBubbleBox = styled.div`
  background: ${colorGreen};
  position: relative;
  display: inline-block;
  height: auto;
  padding: ${pxToRem(20)};
  padding-bottom: ${pxToRem(80)};
  width: 80%;
  left: ${pxToRem(30)};
  top: ${pxToRem(160)};
  transform-origin: top left;
  transform: scale(0);

  &.appear {
    transition: all 0.2s;
    transform: scale(1);
  }

  &.disappear {
    transition: all 0.2s;
    transform: scale(0);
  }

  &.explode {
    transition: all 0.1s ease-in;
    transform-origin: center center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    h2 {
      opacity: 0;
    }
  }
`

export const StyledCorner = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-top: ${pxToRem(60)} solid transparent;
  border-bottom: ${pxToRem(60)} solid transparent;
  border-left: ${pxToRem(60)} solid ${colorGreen};
  top:  ${pxToRem(-60)};
  left: ${pxToRem(30)};
`

export const StyledLastYearWrapper = styled.div`
  overflow: hidden;
  
  .sticky {
    top: 0 !important; 
    width: 100%;
    height: 100vh;
  }
  
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text {
    position: relative;
    display: inline-block;
  }
`


export const StyledMessageWrapper = styled.div`
  color: ${colorNavy};
  height: 100vh;
  padding: ${pxToRem(100)} 0;
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  &.blue-bg {
    background: ${colorBlue};
  }
  &.transparent-bg {
    background: none;
  }
  h2 {
    top: 25%
  }
`

export const StyledBlueShape = styled.div`
  background: ${colorBlue};
  left: ${pxToRem(-5000)};
  bottom:${pxToRem(0)};
  width: ${pxToRem(5000)};
  position: fixed;
  height: ${pxToRem(5000)};
  transform-origin: bottom right;
  transition: all 0.3s;
  z-index: 1;
  animation: ${props => (props.isSceneEnding ? ClockStopped : ClockTickingRotation)};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transform: ${props => (props.isSceneEnding ? 'rotate(90deg)' : 'rotate(0deg)')};
`
