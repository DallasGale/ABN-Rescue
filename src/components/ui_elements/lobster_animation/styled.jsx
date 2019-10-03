import styled from 'styled-components'
import { colorNavy, colorOrange, colorOrangeLight } from '../../styles/colors'
import { ScreenTabletRetinaDown } from '../../utils/media'

export const StyledContent = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  transition: all 1s;
  align-items: center;

  .scene-container {
    width: 50%;
    max-width: 400px;
    min-width: 200px;
  }

  @keyframes fl {
    0%, 100% {
      transform: rotate(-45deg) ;
    }
    40% {
      transform: rotate(-35deg) ;
    }
  }

  @keyframes fr {
    0%, 100% {
      transform: rotate(45deg);
    }
    40% {
      transform: rotate(35deg);
    }
  }

  .lobster {
    position: absolute;
    width: 20vw;
    z-index: 2;

    @media ${ScreenTabletRetinaDown} {
      width: 40vw;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    svg {
      max-height: 100%;
      overflow: visible
    }
    .cls-1{
      fill: ${colorOrangeLight};
    }
    .cls-2{
      stroke: ${colorOrangeLight};
    }
    .cls-3{
      stroke: ${colorOrange};
    }
    .cls-4{
      fill: ${colorOrange};
    }
    .cls-5{
      fill: ${colorNavy};
    }


    .lobster-elements-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .feeler-position {
        top: calc(15% - 8px);
        /* @media screen and (max-width:500px) {
          top: calc(15% - 7px);
        } */
        width: 36%;
        position: absolute;
        &--left {
          left: calc(50% - 15px);
          transform: translateX(-100%) translateY(-100%);
          /* @media screen and (max-width:500px) {
            left: calc(50% - 10px);
          } */
        }
        &--right {
          left: calc(50% + 5px);
          transform: translateY(-100%);
          /* @media screen and (max-width:500px) {
            left: calc(50% + 2px);
          } */
        }
        .feeler-box {
          position: relative;
          width: 100%;
          &:before {
            content: '';
            padding-top:80%;
            display: inline-block;
          }
          .feeler {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            border-top: 8px solid ${colorOrangeLight};
            
          }
          &--left {
            .feeler {
              transform: rotate(-45deg);
              transform-origin: 100% 100%;
              animation: fl 1500ms ease infinite;
              border-top: 8px solid ${colorOrangeLight};
              border-right: 8px solid ${colorOrangeLight};
              /* @media screen and (max-width:500px) {
                border-width: 7px;
              } */
            }
          }
          &--right {
            .feeler {
              transform: rotate(45deg);
              transform-origin: 0% 100%;
              animation: fr 1500ms ease infinite;
              border-top: 8px solid ${colorOrange};
              border-left: 8px solid ${colorOrange};
              /* @media screen and (max-width:500px) {
                border-width: 7px;
              } */
            }
          }
        }
      }
      .arms-position {
        top: 43%;
        width: 36%;
        position: absolute;
        &--left {
          left: 38%;
          transform: translateX(-100%) translateY(-100%);
        }
        &--right {
          left: 68%;
          transform: translateY(-100%);
        }
        .arms-box {
          position: relative;
          width: 100%;
          &:before {
            content: '';
            padding-top:60%;
            display: inline-block;
          }
          .arm {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
          }
          &--left {
            .arm {
              transform: rotate(-45deg);
              transform-origin: 100% 100%;
              animation: fr 1500ms ease -500ms infinite;
              border-bottom: 8px solid ${colorOrangeLight};
              border-left: 8px solid ${colorOrangeLight};

              /* @media screen and (max-width:500px) {
                border-width: 7px;
              } */
              &-1 {
                left: calc(-15% - 10px);
                animation: fr 1500ms ease -650ms infinite;
              }
            }
          }
          &--right {
            .arm {
              transform: rotate(-45deg);
              transform-origin: 0% 100%;
              animation: fl 1500ms ease -250ms infinite;
              border-bottom: 8px solid ${colorOrange};
              border-right: 8px solid ${colorOrange};
              /* @media screen and (max-width:500px) {
                border-width: 7px;
              } */
              &-1 {
                left: calc(-15% - 10px);
                animation: fl 1500ms ease -100ms infinite;
              }
            }
          }
        }
      }      
    }
  }
`
