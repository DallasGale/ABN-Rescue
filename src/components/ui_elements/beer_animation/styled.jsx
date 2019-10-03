import styled, { keyframes } from 'styled-components'
import { colorWhite, colorYellow } from '../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown, ScreenDesktopDown } from '../../utils/media'

const dribbleDown = keyframes`
  0% {
    height: 0;
    top: -10px;
  }
  100% {
    height: 200px;
    top : 0;
  }
`

const dribbleDown2 = keyframes`
  0% {
    height: 0;
    top: -10px;
  }
  100% {
    height: 80px;
    top : 0;
  }
`

const tilt = `
  transform: rotate(-30deg);
  transition: all 0.5s ease-in-out;
`

export const StyledFroth = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  right: 0;
  z-index: 1;
  background: ${colorYellow};
  border-top-color: ${colorWhite};
  border-top-style: solid;
  border-top-width: 16vh;

  @media ${ScreenTabletRetinaDown} {
    border-top-width: 10vh;
  }

  @media ${ScreenPhoneDown} {
    border-top-width: 8vh;
  }

  &.tilt {
    ${tilt}
    width: 180%;
    margin-top: 10vh;

    @media ${ScreenTabletRetinaDown} {
      margin-top: 0;
      margin-left: -40vh;
    }


    @media ${ScreenPhoneDown} {
      margin-top: 30vh;
    }
  }

  .froth {
    position: absolute;
    /* top: -10px; */
    right: 0%;
    width: 30%;
    height: 500px;
    max-width: 400px;
    display: flex;

    @media ${ScreenTabletRetinaDown} {
      right: 10vw;
      width: 20%;
      height: 500px;
      max-width: 300px;
    }

    .dribble {
      width: 35%;
      max-width: 70px;
      background-color: ${colorWhite};
      position: relative;
      flex: 0 1 auto;
      margin: 0 auto;
      height: 0;
      top: 0;
      transform: scale(2.5);

      @media ${ScreenDesktopDown} {
        transform: scale(1.5);
      }

      &.removed {
        opacity: 0;
        transition: all 0.3s;
      }
      
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-color: inherit;
        top: 100%;
        transform: translateY(-50%);
      }

      &.dripping.dribble-1 {
        animation: ${dribbleDown2} 1000ms ease-out 1;
        animation-fill-mode: forwards;
      }

      &.dripping.dribble-2 {
        animation: ${dribbleDown} 1000ms ease-out 1;
        animation-fill-mode: forwards;
      }
    }
  }
`
