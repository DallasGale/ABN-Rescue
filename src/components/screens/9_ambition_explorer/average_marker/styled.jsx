import styled from 'styled-components'
import { colorWhite, colorOrangeBright } from '../../../styles/colors'
import pxToRem from '../../../utils/px_to_rem'
import { ScreenTabletDown, ScreenPhoneDown } from '../../../utils/media';

export const StyledAverageMarker = styled.div`
  background: ${colorOrangeBright};
  border-top: 2px ${colorWhite} dotted;
  position: absolute;
  width: 100%;
  height: 33%;
  bottom: ${props => (props.isVisible ? 0 : '-63%')};
  transition: all 0.5s ease-in-out;
  left: 0;
  z-index: 1;
  &.fadeOut {
    opacity: 0;
  }

  @media ${ScreenTabletDown} {
    height: 20%;
  }

  @media ${ScreenPhoneDown} {
    height: 33%;
  }
`

export const StyledLabel = styled.div`
  color: ${colorWhite};
  font-size: ${pxToRem(12)};
  font-family: neptune-bold;
  position: relative;
  margin-top: ${pxToRem(-10)};

  @media ${ScreenPhoneDown} {
  font-size: ${pxToRem(10)};
  }
`

export const StyledLabelBackground = styled.div`
  background: ${colorOrangeBright};
  position: absolute;
  top: ${pxToRem(-2)};
  padding: 0 ${pxToRem(8)};
  left: 5%;
`
