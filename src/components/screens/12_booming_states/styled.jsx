import styled from 'styled-components'
import { colorBlue, colorGreen, colorYellow } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletRetinaDown, ScreenWidescreenDown, ScreenPhoneDown, ScreenDesktopDown, SmallDevice, ScreenSmallDeviceDown } from '../../utils/media'
import {
  BoomingStateTopBarAppears,
  BoomingStateMiddleBarAppears,
  BoomingStateBottomBarAppears,
  FadeIn,
} from '../../utils/transitions'

export const StyledWrapper = styled.div`
  overflow: hidden;

  .sticky{
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    .panel {
      width: 100vw;
      position: relative;
      z-index: 0;

      &.top {
        background: ${colorBlue};
        height: 100vh;
        
        .bar-label-and-stat {
          opacity: 0;
          &.appear {
            animation: ${FadeIn} 0.4s ease-in-out 0.2s forwards;
          }
        }
        
        &.appear {
          animation: ${BoomingStateTopBarAppears} 0.6s ease-in-out forwards;
        }
      }

      &.middle {
        background: ${colorYellow};
        height: 100vh;
        z-index: 1;

        .bar-label-and-stat {
          opacity: 0;
          &.appear {
            animation: ${FadeIn} 0.4s ease-in-out 0.6s forwards;
          }
        }
        &.appear {
          animation: ${BoomingStateMiddleBarAppears} 0.6s ease-in-out 0.4s forwards;
        }
      }



      &.bottom {
        background: ${colorGreen};
        height: 100vh;
        z-index: 2;

        .bar-label-and-stat {
          opacity: 0;
          &.appear {
            animation: ${FadeIn} 0.4s ease-in-out 1s forwards;
          }
        }
        
        &.appear {
          animation: ${BoomingStateBottomBarAppears} 0.6s ease-in-out 8s forwards;
        }
      }
    }
  }
`

export const StyledStatWrapper = styled.div`
  padding-left: ${pxToRem(40)};
  position: relative;
  width: 100%;
  
  div {
    :nth-child(2) {
      text-align: right;
    }
  }

  @media ${ScreenPhoneDown} {
    padding-left: ${pxToRem(20)};
  }
`

export const StyledTopStatWrapper = styled(StyledStatWrapper)`
  top: 15vh;
  @media ${ScreenSmallDeviceDown} {
    top: 18vh;
  }
`

export const StyledMiddleStatWrapper = styled(StyledStatWrapper)`
  top: 5vh;
`

export const StyledBottomStatWrapper = styled(StyledStatWrapper)`
  top: 5vh;
`

export const StyledMessageWrapper = styled.div`
  position: absolute;
  padding-top: 3vh;
  max-width: 65%;

  @media ${ScreenDesktopDown} {
    max-width: 80%;
  }

  @media ${ScreenTabletRetinaDown} {
    max-width: ${pxToRem(550)};
  }

  @media ${ScreenSmallDeviceDown} {
    padding-top: 0;
  }
`
