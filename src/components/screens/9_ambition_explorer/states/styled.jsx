import styled from 'styled-components'
import {
  ScreenTabletRetinaDown,
  ScreenSmallLaptopDown,
  ScreenPhoneDown,
  ScreenDesktopDown,
  ScreenTabletDown,
  ScreenSmallDeviceDown,
} from '../../../utils/media'
import pxToRem from '../../../utils/px_to_rem'

export const StyledWrapper = styled.div`
  overflow: hidden;

  .sticky {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .layout-grid {
    align-items: baseline;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 90vw;
    position: absolute;
    height: 100vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;

    @media ${ScreenTabletRetinaDown} {
      display: block;
      width: 100%;
    }

    .message {
      margin-top: 25%;
      position: relative;
      display: block;
      
      @media ${ScreenPhoneDown} {
        font-size: ${pxToRem(56)};
      } 
    }
    
    &.bees {
      display: block;

      .message {
        margin-top: 0;
        position: absolute;

        &.appear {
          top: 20vh;
          transition: all 1s ease-in-out;
        }
        &.leaving {
          opacity: 1;
          transition: all 0.5s ease-in-out;
          top: -100vh;
        }
      }
    }

    &.mattress {
      .message {
        /* padding-left: 0; */
        position: absolute;
        margin-top: 15%;
        width: 45%;

        @media ${ScreenSmallLaptopDown} {
          font-size: ${pxToRem(60)};
        }

        @media ${ScreenTabletRetinaDown} {
          font-size: ${pxToRem(110)};
          width: 65%;
        }

        @media ${ScreenTabletDown} {
          font-size: ${pxToRem(80)};
          width: 90%;
        }
        @media ${ScreenPhoneDown} {
          margin-top: 25%;
          font-size: ${pxToRem(60)};
        }
      }
    }

    &.ice-cream {
      .message {
        /* padding-left: 0; */
        position: absolute;
        margin-top: 15%;
        width: 40%;

        @media ${ScreenSmallLaptopDown} {
          font-size: ${pxToRem(60)};
        }

        @media ${ScreenTabletRetinaDown} {
          font-size: ${pxToRem(110)};
          width: 65%;
        }

        @media ${ScreenTabletDown} {
          font-size: ${pxToRem(80)};
          width: 90%;
        }
        @media ${ScreenPhoneDown} {
          margin-top: 25%;
          font-size: ${pxToRem(60)};
        }
      }
    }

    &.sugar-cane {
      .message {
        margin-top: 0;
        top: 25vh;
        
        &.first-line {
          width: 60%;
        }
        &.leaving  {
          opacity: 0;
          transition: all 0.1s;
        }

        @media ${ScreenDesktopDown} {
          &.first-line {
            width: 80%;
          }
        }

        @media ${ScreenTabletRetinaDown} {
          top: 15vh;
        }
      }
    }

    &.photography {
      .message {
        width: 65%;

        @media ${ScreenSmallLaptopDown} {
          width: 80%;
        }
        
        @media ${ScreenTabletRetinaDown} {
          top: 0;
          margin-top: 15%;
        }

        @media ${ScreenPhoneDown} {
          width: 65%;
          margin-top: 25%;
        }
      }
    }

    &.travel-agent {
      .message {
        width: 25vw;

        @media ${ScreenDesktopDown} {
          width: 45vw;
        }

        @media ${ScreenTabletRetinaDown} {
          width: auto;
        }

        @media ${ScreenPhoneDown} {
          width: auto;
        }
      }
    }

    &.pub {
      display: block;
      top: 0;
      .message {
        margin-top: 15%;

        @media ${ScreenTabletRetinaDown} {
          top: 10vh;
        }

        @media ${ScreenPhoneDown} {
          top: 10vh;
          width: 60%;
        }
      }
    }

    &.investigation {
      .message {
        position: absolute;
        margin-top: 0;
        top: 0;

        &.appear {
          top: 20vh;
        }
      }
    }


    &.florist {
      .message {
        position: absolute;
        margin-top: 0;
        top: 0;

        &:first-child {
          width: 45%;

          @media ${ScreenTabletRetinaDown} {
            width: 75%;
          }

          @media ${ScreenPhoneDown} {
            width: 90%;
          }
        }

        @media ${ScreenTabletRetinaDown} {
          width: 75%;
        }
        
        @media ${ScreenPhoneDown} {
          width: 90%;
        }

        &.appear {
          top: 20vh;
        }
      }
    }

    &.lobster {
      display: block;
      top: 0;
      z-index: 6;
      
      .message {
        margin-top: 15%;
        width: 50%;

        @media ${ScreenSmallLaptopDown} {
          margin-top: 25vh;
          width: 60%;
          font-size: ${pxToRem(70)};
        }

        @media ${ScreenTabletRetinaDown} {
          width: 80%;
          margin-top: 15vh;
        }

        @media ${ScreenPhoneDown} {
          margin-top: 10vh;
          /* width: 60%; */
        }
      }
    }
  }

  .lobster-versus-grid {
      display: grid;
      grid-template-columns: 40% 20% 40%;
      width: 100vw;
      align-items: center;
      justify-items: center;
      height: 100vh;
      z-index: 3;
      position: absolute;

      @media ${ScreenTabletRetinaDown} {
        display: block;
      }

      .message {
        padding: 0 0 0 0;
      }

      .column {

        @media ${ScreenTabletRetinaDown} {
          height: 33vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

  .travel-agent-versus-grid {
      display: block;
      justify-items: center;
      height: 30vh;
      z-index: 3;
      position: absolute;
      width: 100vw;
      top: 30vh;
      padding-left: 5vw;

      @media ${ScreenSmallLaptopDown} {
        height: 40vh;
      }

      @media ${ScreenTabletRetinaDown} {
        height: 20vh;
        top: 22vh;
      }

      @media ${ScreenTabletDown} {
        height: 25vh;
      }

      .message {
        padding: 0 0 0 0;
        width: 25vw;

        @media ${ScreenDesktopDown} {
          width: 40vw;
        }

        @media ${ScreenTabletRetinaDown} {
          font-size: ${pxToRem(80)};
          width: auto;
        }

        @media ${ScreenPhoneDown} {
          font-size: ${pxToRem(65)};
        }
      }

      .column {
        height: 33%;
        display: flex;
        align-items: center;
        justify-content: left;

      }
    }

  .message__container {
    position: absolute;
  }
`
