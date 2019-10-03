import styled from 'styled-components'
import { colorNavy } from '../../styles/colors'

import {
  ScreenWidescreenDown,
  ScreenTabletRetinaDown,
  ScreenPhoneDown,
  ScreenDesktopDown,
} from '../../utils/media'

export const StyledWrapper = styled.div`
  overflow: hidden;

 .sticky {
    display: flex;
    align-items: center;
    width: 250vw;
    justify-content: flex-start;
    height: 100vh;
    overflow: hidden;

    @media ${ScreenDesktopDown} {
      width: 350vw;
    }

    @media ${ScreenTabletRetinaDown} { 
      height: 300vh;
      width: 100vw;
      align-items: flex-start;
      justify-content: left;
      top: -10px;

      .message {
        writing-mode: vertical-lr;
      }
    }


    @media ${ScreenPhoneDown} {
      height: 400vw;
    }

    .panel {
      background: ${colorNavy};
      height: 100vh;
      width: 350vw;
      position: absolute;
      text-align: center;

      @media ${ScreenTabletRetinaDown} {
        left: 0;
        height: 300vh;
        width: 100vw;
      }

    }
   }  



 @media ${ScreenTabletRetinaDown} {
    .scrollmagic-pin-spacer {
      top: -3px !important;
    }
  }
`

export const StyledMessageWrapper = styled.div`
  width: 250vw;
  height: 100vh;    
  position: relative;
  z-index: 1;
  display: grid;
  align-items: center;
  justify-content: center;
  z-index: 1;


  @media ${ScreenTabletRetinaDown} {
    width: 100vw;
    height: 220vh;
  }

  @media ${ScreenPhoneDown} {
    height: 250vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }


  svg {
    height: auto;
    width: 150vw;

    @media ${ScreenTabletRetinaDown} {
      transform: rotate(90deg);
      width: 250vw;
    }

    @media ${ScreenPhoneDown} {
      width: 350vw;
    }
  }

`
