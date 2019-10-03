import React from 'react'
import styled from 'styled-components'

import { colorWhite, colorLightGray } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenPhoneDown } from '../../utils/media'

const StyledWrapper = styled.div`  
  .moon {
    bottom: -40vh;
    left: 65vw;
    display: block;
    position: absolute;
    width: ${pxToRem(200)};
    height: ${pxToRem(200)};  

    &.enter {
      transition: all 1.2s ease-in-out;
      bottom: 20vh;
      left: 55vw;

      @media ${ScreenPhoneDown} {
        left: 25vw;
      }
    }

    &.leave {
      transition: all 0.9s ease-in-out;
      bottom: 120vh;
      left: 50vw;
    }
  }
`

const StyledSvg = styled.svg`
  position: relative;
  height: 100%;
  width: 100%;
`

const StyledCircleA = styled.circle`
  fill: ${colorWhite};
`

const StyledCircleB = styled.circle`
  fill: ${colorLightGray};
`

const Moon = (props) => {
  const { isMoonVisible, isMoonLeaving } = props

  return (
    <StyledWrapper>
      <div className={`moon ${isMoonVisible ? 'enter' : ''} ${isMoonLeaving ? 'leave' : ''}`}>
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2413 2413">
          <StyledCircleA cx="1206.5" cy="1206.5" r="1206.5" />
          <StyledCircleB cx="569.4" cy="560.78" r="120.95" />
          <StyledCircleB cx="1329.32" cy="1642.23" r="120.95" />
          <StyledCircleB cx="1670.83" cy="1372.73" r="120.95" />
          <StyledCircleB cx="1479.67" cy="276.17" r="120.95" />
          <StyledCircleB cx="690.57" cy="2030.31" r="120.95" />
          <StyledCircleB cx="291.71" cy="1295.11" r="120.95" />
        </StyledSvg>
      </div>
    </StyledWrapper>
  )
}

export default Moon
