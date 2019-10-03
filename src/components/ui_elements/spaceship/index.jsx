import React from 'react'
import PropTypes from 'prop-types'

import styled, { keyframes } from 'styled-components'
import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../../utils/media'

const Appear = keyframes`
  0% {}

  40% {
    left: 50%;
    bottom: 30%;
  }

  100% {
    left: 50%;
    bottom: 30%;
  }
`

const Leaving = keyframes`
  0% {
    left: 50%;
    bottom: 30%;
  }
  100% {
    left: 150%;
    bottom: 150%;
    transform: rotate(50deg);
  }
`


const AppearDevice = keyframes`
  0% {}

  40% {
    left: 40%;
    bottom: 20%;
  }

  100% {
    left: 40%;
    bottom: 20%;
  }
`


const LeavingDevice = keyframes`
  0% {
    left: 40%;
    bottom: 20%;
  }
  100% {
    left: 160%;
    bottom: 80%;
    transform: rotate(50deg);
  }
`

export const Exhaust = keyframes`
  0% {
    opacity: 0.6;
  }
  30% {
   opacity: 0.7;
  }

  60% {
    height: 88%;
    opacity: 0.9;
  }
  90% {
   opacity: 0.6;
  }
  100% {
   opacity: 0.85;
  }
`

const StyledWrapper = styled.div`
  height: ${pxToRem(300)};
  width: ${pxToRem(300)};
  position: absolute;
  bottom: -50vh;
  left: 0;
  transform: rotate(40deg);
  z-index: 3;

  @media ${ScreenTabletRetinaDown} {
    height: ${pxToRem(200)};
    width: ${pxToRem(200)};
    bottom: -10vh;
    left: -50vw;
  }

  @media ${ScreenPhoneDown} {
    height: ${pxToRem(120)};
    width: ${pxToRem(120)};
  }

  .st0 { 
    fill: #0098FF;
  }
  .st1 { 
    fill:#0084F0;
  }
  .st2 {
    fill:#00AD20;
  }

  &.appear {
    animation: ${Appear} 4s forwards ease-in-out;

    @media ${ScreenTabletRetinaDown} {
      animation: ${AppearDevice} 4s forwards ease-in-out;
    }
  }

  &.leaving {
    animation: ${Leaving} 0.7s forwards ease-in;

    @media ${ScreenTabletRetinaDown} {
      animation: ${LeavingDevice} 0.7s forwards ease-in;
    }
  }

  svg {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media ${ScreenTabletRetinaDown} {
    height: ${pxToRem(200)};
    width: ${pxToRem(200)};
  }
`
const StyledExhaustWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  position: absolute;
  bottom: ${pxToRem(-162)};
  left: 0;
  right: 0;
  display: block;
`

const StyledExhaust = styled.div`
  width: 50%;
  display: inline-block;
  position: relative;
  bottom: 0;
  height: ${pxToRem(150)};
`
const StyledExhaustInner = styled.div`
  animation: ${Exhaust} infinite 0.04s;
  position: relative;
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 13%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 13%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 13%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  top: 0;
  height: 100%;
  width: 50%;
  margin: 0 auto;
  display: block;
  position: relative;
`

const Spaceship = (props) => {
  const { isVisible, isLeaving } = props

  return (
    <StyledWrapper className={`${isVisible ? 'appear' : ''}  ${isLeaving ? 'leaving' : ''}`}>
      <svg
        version="1.1"
        id="Spaceship"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 674 733.4"
        style={{ enableBackground: 'new 0 0 674 733.4' }}
      >
        <polygon className="st0" points="262,379.4 262,641.4 0,641.4 " />
        <polygon className="st0" points="412,379.4 412,641.4 674,641.4 " />
        <path className="st0" d="M207,733.4c0-30.4,24.6-55,55-55l0,0l0,0c30.4,0,55,24.6,55,55l0,0H207z" />
        <path className="st0" d="M359,733.4c0-30.4,24.6-55,55-55l0,0l0,0c30.4,0,55,24.6,55,55l0,0H359z" />
        <path className="st1" d="M338,0L338,0c72.3,0,131,58.7,131,131v547.4l0,0H207l0,0V131C207,58.7,265.7,0,338,0z" />
        <circle className="st2" cx="338" cy="232.4" r="66" />
      </svg>

      <StyledExhaustWrapper>
        <StyledExhaust>
          <StyledExhaustInner />
        </StyledExhaust>

        <StyledExhaust>
          <StyledExhaustInner />
        </StyledExhaust>
      </StyledExhaustWrapper>


    </StyledWrapper>
  )
}

Spaceship.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLeaving: PropTypes.bool.isRequired,
}

export default Spaceship

