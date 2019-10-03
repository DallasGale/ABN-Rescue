import styled from 'styled-components'
import { colorBlue, colorWhite } from '../../styles/colors'
import {
  FadeIn,
  ColumnOneBounceIn,
  ColumnTwoBounceIn,
  ColumnThreeBounceIn,
} from '../../utils/transitions'

import { ScreenWidescreenDown, ScreenPhoneDown } from '../../utils/media'

export const StyledVerticalGrid = styled.div`
  background: ${props => (props.background !== null ? props.background : 'none')};
  height: 100vh;
  width: 100%;
  display: grid;
  position: absolute;
  grid-template-columns: repeat(3, 1fr);
  z-index: ${props => (props.zIndex !== null ? props.zIndex : 0)};
`

export const StyledCircle = styled.circle`
  fill: ${props => (props.theme === '' ? colorBlue : props.theme)};
`

export const StyledCap = styled.div`
  position: absolute;
  height: auto;
  width: 100%;
  left: 0;
  top: 0;
`

export const StyledColumn = styled.div`
  position: relative;
  top: 100%;
  :nth-child(1) {
    animation: ${ColumnOneBounceIn} 1s ease-in-out forwards;
  }
  :nth-child(2) {
    animation: ${ColumnTwoBounceIn} 1s ease-in-out 0.5s forwards;
  }
  :nth-child(3) {
    animation: ${ColumnThreeBounceIn} 1s ease-in-out 1s forwards;
  }
`

export const StyledBar = styled.div`
  position: relative;
  top: 33%;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => (props.theme === '' ? colorBlue : props.theme)};

  @media ${ScreenWidescreenDown} {
    top: 28%;
  }
`

export const StyledStatWrapper = styled.div`
  position: relative;
  top: 65%;
  opacity: 0;
  animation: ${FadeIn} 0.2s ease-in-out forwards;
  :nth-child(1) {
    animation-delay: 0.5s;
  }
  :nth-child(2) {
    animation-delay: 1s;
  }
  :nth-child(3) {
    animation-delay: 1.5s;
  }

  @media ${ScreenPhoneDown} {
    top: 58%;
  }
`

export const StyledPath = styled.path`
  fill: ${props => (props.theme !== null ? props.theme : colorWhite)};
`
