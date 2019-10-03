import styled, { keyframes } from 'styled-components'
import {
  colorOrange,
  colorYellow,
  colorWhite,
} from '../../styles/colors'
import { ScreenPhoneDown, ScreenTabletRetinaDown } from '../../utils/media';

export const dipIcecream = keyframes`
  0%, 10%, 50%, 60%, 78%, 95%, 100% { transform:  translateY(0px)}
  5% { transform: translateY(10px)}
  55%, 84% { transform: translateY(5px)}
`;

export const dipIcecream2 = keyframes`
  0%, 5%, 20%, 35%, 50%, 100% { transform:  translateY(0px)}
  10%, 40% { transform: translateY(10px)}
`;

export const shakeConeMore = keyframes`
  0% {
    transform: rotate(0deg)
  }
  15% {
    transform: rotate(-3deg)
  }
  30% {
    transform: rotate(3deg)
  }
  45% {
    transform: rotate(-2deg)
  }
  60% {
    transform: rotate(0deg)
  }
`;

export const becomeSun = keyframes`
  from {
    margin-top: -25%;
    margin-left: 35%;
  }
  to {
    margin-top: -10%;
}
`

export const removeTopScoop = keyframes`
  from {
    margin-top: 100%;
    }
  to {
    margin-top: 150vh;
    }
`;
export const removeBottomScoop = keyframes`
   from {
    margin-top: 13%;
    }
  to {
    margin-top: 150vh;
    }
`;

export const StyledContent = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;

  /* Container that should determine the responsiveness of the children
    Using scale()
  */
  .icecream-container {
    position: absolute;
    display: flex;
    width: 50%;
    height: 100%;
    right: 0;
    bottom: 0;

    @media ${ScreenTabletRetinaDown} {
      width: 100%;
      transform: scale(0.8);
      bottom: -20vh;
    }

    @media ${ScreenPhoneDown} {
      bottom: -30vh;
    }
  }

  .icecream {
    width: 50%;
    height: 40%;
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    flex-direction: column-reverse;

    &.icecream-1 {
      z-index: 1;
      @media ${ScreenPhoneDown} {
        transform: scale(0.7);
      }

      .dip {
        animation: ${dipIcecream}1.4s ease 1;
        animation-fill-mode: forwards;
        animation-delay: 350ms;
      }
    }
    &.icecream-2 {
      margin-top: 10vh;
      z-index: 0;
      
      @media ${ScreenPhoneDown} {
        transform: scale(0.5);
      }
      .dip {
        animation: ${dipIcecream2} 1.4s ease 1;
        animation-fill-mode: forwards;
        animation-delay: 350ms;
      }
    }
  }

  .cone {
    width: 60vh;
    z-index: 1;
    svg {
      width: 100%;
      height: auto;
    }
    &.shake {
      svg {
        animation: ${shakeConeMore} 0.5s 1;
        animation-fill-mode: forwards;
        animation-timing-function: steps(5,end);
      }
    }
  }
  .cone-polygon {
    fill: ${colorYellow};
  }

  .ball {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    &-orange {
      background-color: ${colorOrange};
    }
    &-white {
      background-color: ${colorWhite};
    }
  }

  .scoops {
    position: relative;
    &-inner {
      position: relative;
      width: 35vh;
      height: 35vh;

      &.scoop-becomes-sun {
        .scoop-3 {
          animation: ${becomeSun} 800ms ease 1;
          animation-fill-mode: forwards;
          animation-delay: 200ms;
        }
        .scoop-4 {
          animation: ${removeTopScoop} 400ms ease 1;
          animation-fill-mode: forwards;
        }
        .scoop-5 {
          animation: ${removeBottomScoop} 450ms ease 1;
          animation-fill-mode: forwards;
        }
      }
    }
  }
  .scoop {
    position: absolute;
    &-large {
      width: 100%;
      height: 100%;
    }
    &-small {
      width: 70%;
      height: 70%;
    }
    &-1 {
      width: 90%;
      height: 90%;
      margin-left: -15%;
      z-index: 2;
    }
    &-2 {
      width: 70%;
      height: 70%;
      bottom: 10%;
      margin-left: 50%;
      z-index: 2;
    }
    &-3 {
      width: 70%;
      height: 70%;
      margin-top: -25%;
      margin-left: 35%;
      z-index: 2;
    }
    &-4, &-5 {
      width: 87.5%;
      height: 87.5%;
      margin-left: 6.25%;

    }
    &-4 {
      margin-top: 100%;
      z-index: 0;
    }
    &-5 {
      margin-top: 13%;
      z-index: 0;
    }
  }

  .drip {
    width: 15%;
    svg {
      width: 100%;
      height: 100%;
    }
    path {
      fill: ${colorWhite};
    }
  }

  .drips {
    position: absolute;
    top: 72vh;
    width: 100%;
    z-index: 1;
    &-inner {
      position: relative;
      height: 100vh;
    }
    .drip:nth-child(1) {
      position: absolute;
      top: -13vh;
      margin-left: 5%;
    }
    .drip:nth-child(2) {
      position: absolute;
      top: -15vh;
      margin-left: 20%;
    }
    .drip:nth-child(3) {
      position: absolute;
      top: -12vh;
      margin-left: 40%;
    }
    .drip:nth-child(4) {
      position: absolute;
      top: -12vh;
      margin-left: 62%;
    }
    .drip:nth-child(5) {
      position: absolute;
      top: -12vh;
      margin-left: 35%;
    }
    .drip:nth-child(6) {
      position: absolute;
      top: -12vh;
      margin-left: 75%;
    }
    .drip:nth-child(7) {
      position: absolute;
      top: -12vh;
      margin-left: 22%;
    }
  }
`;
