import styled from 'styled-components'
import {
  colorLightYellow,
  colorYellow,
  colorWhite,
  colorNavy,
} from '../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown, ScreenSmallLaptopDown } from '../../utils/media'

export const StyledMattressWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: $colorNavy;
  position: absolute;
  z-index: 10;

  .mattress-container {
    position: absolute;
    width: 96vw;
    height: auto;
    bottom: -50vh;
    .cls-1{fill:${colorLightYellow};}
    .cls-2{fill:${colorYellow};}
    .cls-3{fill:${colorWhite};}

    @media ${ScreenTabletRetinaDown} {
      width: 170vw;
    }

    @media ${ScreenPhoneDown} {
      width: 100vw;
    }

    &.appear {
      bottom: -10vh;
      transition: all 1s;

      @media ${ScreenSmallLaptopDown} {
        bottom: -25vh;
      }

      @media ${ScreenTabletRetinaDown} {
        bottom: 0;
      }
    }
  }

  .mattress {
    &-top {
      width: 100%;
      padding-top:calc(100% / 16);
      background-color: ${colorLightYellow};
      z-index: 1;
      transform: translate(0);

      @media ${ScreenPhoneDown} {
        padding-top:calc(200% / 16);  
      }
    }

    &-bottom {
      width: 100%;
      padding-top:calc(100% / 8);
      background-color: ${colorYellow};
      z-index: 1;
      transform: translate(0);

      @media ${ScreenPhoneDown} {
        height: 110px;
        padding-top: 0;
      }
    }
    &-bobble {
      background-color: ${colorWhite};
      width: 100%;
      height: auto;
      padding-top:calc(100% / 32);
      border-radius: 50% 50% 0 0;
      border: 1px solid ${colorNavy};
      border-bottom: none;
      z-index: 0;
      /* animation: ${ReduceBobbleHeight} 1s forwards 1s; */
    }
    &-bobbles {
      display: flex;
      margin: 0 -1px;
      z-index: 0;
      transform: translateY(50%);
    }
  }
`