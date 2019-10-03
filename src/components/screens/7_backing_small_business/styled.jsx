
import styled from 'styled-components'
import { colorBlue, colorPink, colorNavy, colorOrangeBright } from '../../styles/colors'
import { StyledMessageH2 } from '../../styled/typography'
import pxToRem from '../../utils/px_to_rem'
import { ScreenDesktopDown, ScreenTabletDown, ScreenTabletRetinaDown } from '../../utils/media'

export const StyledContent = styled.div`
  color: ${colorNavy};
  height: 100vh;
  padding: ${pxToRem(100)} 0;
  position: relative;
  width: 100%;
`
export const StyledWrapper = styled.div`
  overflow: hidden;

  .sticky {
    width: 100%;
    .panel {
      width: 100vw;
      position: absolute;
      z-index: 0;

      &.top {
        background: ${colorBlue};
        height: 60vh;
      }
      &.bottom {
        background: ${colorPink};
        bottom: -90%;
        visibility: hidden;
        height: 55vh;
      }
    }
  }
`


export const StyledH2 = styled(StyledMessageH2)`
  color: ${colorOrangeBright};
  padding-bottom: 0;
  padding-top: 0;
  width: 60%;
  top: 25%;
  @media ${ScreenDesktopDown} {
    width: 90%;
  }
  @media ${ScreenTabletDown} {
    width: 80%;
  }
`


export const StyledRescueH2 = styled(StyledMessageH2)`
  padding-top: 2.5vh;
  padding-bottom: 1vh;
  position: absolute;
  height: auto;
  top: auto;
  bottom: auto;

  @media ${ScreenTabletRetinaDown} {
    max-width: 80%;
  }

  &.message__top {
    bottom: 15vh;
  }
  &.message__bottom {
    top: 0;
  }

  &.appear {
    opacity: 1;
    transition: all 0.2s;
  }

  &.disappear {
    opacity: 0;
    transition: all 0.2s;
  }
`
