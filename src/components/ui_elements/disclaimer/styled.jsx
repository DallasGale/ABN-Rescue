import styled from 'styled-components'
import {
  ScreenTabletRetinaDown,
  ScreenPhoneDown,
  ScreenTabletDown,
} from '../../utils/media'

import { colorNavy } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'

export const StyledDisclaimerWrapper = styled.div`
  bottom: 0;
  position: fixed;
  padding-bottom: ${pxToRem(30)};
  padding-left: ${pxToRem(30)};
  left: 0;
  width: 100%;
  z-index: ${props => (props.zIndex !== null ? props.zIndex : 10)};

  @media ${ScreenTabletRetinaDown} {
    width: ${pxToRem(320)};
    padding-bottom: 5vw;
    padding-left: 5vw;
  }

  @media ${ScreenTabletDown} {
    width: ${pxToRem(265)};
  }

  @media ${ScreenPhoneDown} {
    width: 90vw;
    bottom: ${pxToRem(30)};
  }
`
export const StyledDisclaimer = styled.p`
  color: ${props => (props.color !== null ? props.color : colorNavy)};
  font-size: ${pxToRem(13)};
  font-weight: bold;
  margin-bottom: 0;
  width: 100%;
  line-height: 1.5;

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(12)};
  }

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(10)};
  }
`
