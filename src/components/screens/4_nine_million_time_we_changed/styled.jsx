
import styled from 'styled-components'
import { colorGreen, colorNavy, colorBlue } from '../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../../utils/media'
import pxToRem from '../../utils/px_to_rem'
import { StyledMessageH2 } from '../../styled/typography'


export const StyledStartABizWrapper = styled.div`
  overflow: hidden;
  .sticky {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    .layout-grid {
      align-items: center;
      display: grid;
      grid-template-columns: 50% 50%;
      width: 90vw;
      position: absolute;
      height: 100vh;
      left: 0;
      right: 0;
      margin: 0 auto;
      @media ${ScreenTabletRetinaDown} {
        display: block;
        width: 100%;
      }
    }
    .message_2 {
      opacity: 0;

      &.appear {
        opacity: 1;
      }
    }

    .message_2, .message_3 {  
      padding: 0;

      @media ${ScreenTabletRetinaDown} {
        top: 70vh;
        padding-left: 5vw;
      }

      @media ${ScreenPhoneDown} {
        top: 62vh;
      }
    }

    @media ${ScreenTabletRetinaDown} {
      display: block;
    }
  }
`

export const StyledNineMillionAustraliansBlock = styled.div`
  background: ${colorGreen};
  height: 100vh;
  width: 100vw;
  position: absolute;
  text-align: center;
  z-index: 2;
  left: 3000px;
  &.navy {
    background: ${colorNavy};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &.blue {
    background: ${colorBlue};
    z-index: 0;
  }

  &.appear {
    left: 0;
    transition: all 0.3s;
  }

  &.disappear {
    opacity: 0;
    transition: all 0.2s;
  }
`

export const StyledNineMillionAusMessage = styled(StyledMessageH2)`
  position: absolute;
  z-index: 15;
  transform: translateX(600%);
  background: ${colorGreen};
  width: 100%;
  position: absolute;
  height: 100vh;
  padding-top: 25vh;

  &.appear {
    opacity: 1;
    transition: all 0.4s ease-out;
    transform: translateX(0%);
  }

  &.disappear {
      opacity: 0;
      transition: all 0.3s;
    }
`

export const StyledTimeWeChangedContent = styled.div`
  background: ${colorGreen};
  color: ${colorNavy};
  height: 100vh;
  padding: ${pxToRem(100)} 0;
  position: absolute;
  z-index: 12;
  width: 100%;
  transform: translateX(-100%);
  &.appear {
    transform: translateX(0%);
    transition: all 0.5s ease-out;
  }

  &.disappear {
    opacity: 0;
    transition: all 0.5s ease-in;
  }

`

export const StyledTimeWeChangedH2 = styled(StyledMessageH2)`
  width: 100%;
  z-index: 13;
  position: absolute;
  top: 25%;
  transform: translateX(-300%);

  &.appear {
    transform: translateX(0%);
    transition: all 0.3s ease-out;
  }

  &.disappear { 
    opacity: 0;
    transition: all 0.3s;
  }
`

export const StyledZoomOutDot = styled.div`
  background: ${colorGreen};
  position: absolute;
  z-index: 2;
  right: 0;
  display: block;

  @media ${ScreenPhoneDown} {
    width: ${pxToRem(1000)};
    height: ${pxToRem(1000)};
    border-radius: ${pxToRem(1000)};
  }
`
