import styled, { keyframes } from 'styled-components'
import { colorWhite, colorYellow, colorOrange } from '../../styles/colors'


// $colorNavy : #090D2B;
// $colorOrange : #F4694B;
// $colorYellow : #FDBC3C;
// $colorWhite : #ffffff;

const animationDuration1 = '3s'
const animationDuration2 = '3.4s'
const animationDuration3 = '4s'

const bezier1 = 'cubic-bezier(0.02, 0.01, 0.21, 1)'
const bezier2 = 'cubic-bezier(0.3, 0.27, 0.07, 1.64)'

const wing = `
  width: 50px;
  height: 50px;
  background-color: ${colorWhite};
  border-radius: 50%;
  opacity: 0.8;
  margin: 5px;
`

const rotate = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`

const rotateBee = keyframes`
  0%, 100% {
    transform: rotate(-90deg);
  }
  55% {
    transform: rotate(140deg);
  }	
`

const rotateBee3 = keyframes`
  0%, 100% {
    transform: rotate(40deg) scale(2);
  }
  55% {
    transform: rotate(290deg) scale(0.8);
  }
`

const x = keyframes`
  0%, 100% {
    transform: translateX(400px);
  }
  50% {
    animation-timing-function: $bezier1;
    transform: translateX(-400px);
  }
`

const y = keyframes`
  0%, 100% {
    transform: translateY(-100px);
  }
  50% {
    animation-timing-function: ${bezier2};
    transform: translateY(-300px);
  }
`


const xHorizontal = keyframes`
  0%, 100% {
    transform: translateX(-800px);
  }
  50% {
    animation-timing-function: $bezier1;
    transform: translateX(600px);
  }
`

const yHorizontal = keyframes`
  0%, 50%, 100% {
    animation-timing-function: $bezier1;
    transform: translateY(-100px);
  }
  25%, 75% {
    animation-timing-function: ${bezier2};
    transform: translateY(-200px);
  }
`

const flutter = keyframes`
  0% {
    transform: scale3d(1, 1, 1) translateY(0%);
  }
  30% {
    transform: scale3d(1, 0.3, 1) translateY(0%);
  }
  60%,100% {
    transform: scale3d(1, 1, 1) translateY(0%);
  }
`

export const StyledContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;

  .Scene {
    height: 100vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .flight-path {
    position: relative;
    animation: ${rotate} 3s linear infinite;
  }

  .bee1 {
    .flight-path--x {
      animation: ${x} ${animationDuration1} ${bezier2} infinite;
    }
    .flight-path--y {
      animation: ${y} ${animationDuration1} ${bezier1} infinite;
    }
    .bee {
      animation: ${rotateBee} ${animationDuration1} linear infinite;
    }

  }
  .bee2 {
    margin-top: 200px;
    transform: rotateY(180deg);
    
    .flight-path--x {
      animation: ${x} ${animationDuration2} 0.5s ${bezier2} infinite;
    }
    .flight-path--y {
      animation: ${y} ${animationDuration2} 0.5s ${bezier1} infinite;
    }
    .bee {
      animation: ${rotateBee} ${animationDuration2} 0.5s linear infinite;
    }

  }

  .bee3 {
    margin-top: 100px;
    transform: rotateY(180deg);
    
    .flight-path--x {
      animation: ${xHorizontal} ${animationDuration3} 0.5s ${bezier2} infinite;
    }
    .flight-path--y {
      animation: ${yHorizontal} ${animationDuration3} 0.5s ${bezier1} infinite;
    }
    .bee {
      animation: ${rotateBee3} ${animationDuration3} 0.5s linear infinite;
    }

    &.flip {
      .flight-path--x {
      animation: ${xHorizontal} ${animationDuration3} 1s ${bezier2} infinite;
    }
    .flight-path--y {
      animation: ${yHorizontal} ${animationDuration3} 1s ${bezier1} infinite;
    }
    }
  }

  .bee {
    position: absolute;
    top: 100px;
    width: 60px;
    height: 100px;
    padding: 5px;
    display: flex;
    align-items: center;
    &__body {
      position: relative;
      width: 60px;
      height: 60px;
      
      svg {
        width: 100%;
        height: 100%;
        z-index: 1;
        path {
          fill: ${colorYellow};
        }
      }
    }
    &__wings {
      position: absolute;
      transform: rotate(90deg) translateX(-50%);
      top: 25px;
    }
    &__wing--animation {
      animation: ${flutter} .25s ease infinite;
    }
    &__wing-1 {
      ${wing};
      transform-origin: 50%, 100%;
    }
    &__wing-2 {
      ${wing};
      transform-origin: 50%, 100%;
    }
  }


  .flip {
      transform: scale(0.4) rotate(120deg);
      opacity: 0.8;
    }
`
