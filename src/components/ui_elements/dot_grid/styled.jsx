import styled from 'styled-components'
import { dotsAppear, dotsFalling } from '../../utils/transitions'
import { colorGreen } from '../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown, ScreenDesktopDown, ScreenWidescreenDown } from '../../utils/media'
import pxToRem from '../../utils/px_to_rem'

export const StyledDotGridWrapper = styled.div`
  width: 100%;
  position: relative;
  opacity: 1;
`

export const StyledGrid = styled.div`
  height: 60vh;
  width: 80%;
  position: relative;
  top: 20%;
  z-index: 1;

  &.fade-out {
    transition: all 0.3s;
    opacity: 0;
  }

  @media ${ScreenDesktopDown} {
    width: 40vw;
  }
  
  @media ${ScreenTabletRetinaDown} {
    position: relative;
    height: 45vh;
    width: 80vw;
    top: 15vh;
    padding-right: 10vw;
    padding-left: 5vw;
  }
`

export const StyledDot = styled.div`
  display: inline-block;
  color: ${colorGreen};
  padding-left: 0;
  padding-right: ${pxToRem(40)};
  width: 10%;

  &.appearing {
    transform: scale(0);
    animation: ${dotsAppear} 200ms forwards ease-in-out;
    &:nth-child(2) { animation-delay: 0.225s; }
    &:nth-child(3) { animation-delay: 0.25s; }
    &:nth-child(4) { animation-delay: 0.275s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.325s; }
    &:nth-child(7) { animation-delay: 0.35s; }
    &:nth-child(8) { animation-delay: 0.375s; }
    &:nth-child(9) { animation-delay: 0.4s; }
    &:nth-child(10) { animation-delay: 0.425s; }  
  }

  &.falling {
    position: relative;
    top: 0;
    animation: ${dotsFalling} 1500ms forwards ease-in-out;
    &:nth-child(2) { animation-delay: 0.025s; }
    &:nth-child(3) { animation-delay: 0.25s; }
    &:nth-child(4) { animation-delay: 0.075s; }
    &:nth-child(5) { animation-delay: 0.1s; }
    &:nth-child(6) { animation-delay: 0.425s; }
    &:nth-child(7) { animation-delay: 0.55s; }
    &:nth-child(8) { animation-delay: 0.375s; }
    &:nth-child(9) { animation-delay: 0.2s; }
    &:nth-child(10) { animation-delay: 0.225s; }  
  }

  @media ${ScreenWidescreenDown} {
    padding-right: ${pxToRem(30)};
  }

  
  @media ${ScreenTabletRetinaDown} {
    font-size: ${pxToRem(20)};
  }

  @media ${ScreenPhoneDown} {
    padding-right: ${pxToRem(12)};
  }
`

export const StyledDotRow = styled.div`
  display: block;
  height: 10%;
`
