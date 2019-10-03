import styled, { keyframes } from 'styled-components'
import { colorWhite, colorBlueLight } from '../../../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown, ScreenTabletDown } from '../../../../utils/media';

const Flash = keyframes`
  0%, 10%, 100% {
    visibility: visible;
    opacity: 0;
  }
  1% {
    visibility: visible;
    opacity: 1;
  }
`

export const StyledCameraFlash = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: ${colorWhite};
  width: 100vw;
  height: 100vh;

  &.flash {
    animation: ${Flash} 4s forwards;
  }

  &.no-flash {
    opacity: 0;
    visibility: hidden;
  }
`