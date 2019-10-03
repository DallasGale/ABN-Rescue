import React from 'react'
import styled from 'styled-components'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../../utils/media'
import { colorBlueLight } from '../../styles/colors'

export const StyledBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  z-index: 0;

  @media ${ScreenTabletRetinaDown} {
    height: 125%;
    top: -17%;
    width: 100vw;
  }

  /* @media ${ScreenPhoneDown} {
    height: 40vh;
    top: 43vh;
  } */

  .panel {
    height: 20vh;
    width: 100%;
    position: absolute;
    background: ${colorBlueLight};
    
    @media ${ScreenTabletRetinaDown} {
      height: 9vh;
    }

    @media ${ScreenPhoneDown} {
      height: 8vh;
    }

    &__top {
      top: 0;
    }

    &__bottom {
      bottom: 0;
    }
  }
`

const CameraBackground = () => (
  <StyledBackground>
    <div className="panel panel__top" />
    <div className="panel panel__bottom" />
  </StyledBackground>
)

export default CameraBackground
