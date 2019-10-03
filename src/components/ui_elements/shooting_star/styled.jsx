import styled, { keyframes } from 'styled-components'
import { colorNavy, colorWhite, colorYellow } from '../../styles/colors'

const shoot = keyframes`
  0% {
    transform: translate(-75%, 75%) scale(0);
  }
  8% {
    transform: translate(0, 0) scale(1);
  }
  40% {
    transform: translate(75%, -75%) scale(0.8);
  }
  75% {
    transform: translate(140%, -140%) scale(0.4);
  }
  100% {
    transform: translate(150%, -150%) scale(0);
  }
`
const shootTopLeft = keyframes`
  0% {
    transform: translate(75%, 75%) scale(0);
  }
  8% {
    transform: translate(0, 0) scale(1);
  }
  40% {
    transform: translate(-75%, -75%) scale(0.8);
  }
  75% {
    transform: translate(-140%, -140%) scale(0.4);
  }
  100% {
    transform: translate(-150%, -150%) scale(0);
  }
`

const flare = keyframes`
  0% {
    height: 200px;
  }
  60% {
    height: 70px;
  }
  80% {
    height: 20px;
  }
  100% {
  height: 20px;
  }
`

export const StyledShootingStarWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;

  .shooting-star__container {
    margin-top: 100px;
    position: relative;
  }


  .tail {
    width: 18px;
    height: 200px;
    background-color: ${colorYellow};
    border-radius: 0 0 50% 50%;
    position: absolute;
    top:105px;
    right:105px;
    transform-origin: calc(100% - 9px) 9px;
    transform: rotate(45deg);
  }

  .shooting-star {
    position: relative;
    width: 200px;
    height: 200px;
    transform: translate(-100px, 100px) scale(0);

    &.shoot {

      &__direction {
        &-top-right {
          animation: ${shoot} 0.5s ease-out;
          animation-fill-mode: forwards;
        }
        &-top-left {
          animation: ${shootTopLeft} 0.3s ease-out;
          animation-fill-mode: forwards;

          & > div {
            transform: rotate(-45deg);
          }
        
          .tail {
            top: 95px;
          }
        }
      }

      .tail {
        animation: ${flare} 1.2s 0.2s linear 1;
        animation-fill-mode: forwards;
      }
    }
  }
  
  .comet {
    width: 20px;
    height: 20px;
    background-color: ${colorWhite};
    border-radius: 50%;
    position: absolute;
    top: 100px;
    right: 100px;
  }

`
