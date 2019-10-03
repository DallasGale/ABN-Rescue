import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledContainer } from './styled'

const StyledCls2 = styled.g`
  clip-path: url(#clip-path);
`

const BeeWings = () => (
  <div className="bee__wings">
    <div className="bee__wing--animation">
      <div className="bee__wing-1" />
      <div className="bee__wing-2" />
    </div>
  </div>
)

const BeeBody = () => (
  <div className="bee__body">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="572.8px"
      height="572.801px"
      viewBox="0 0 572.8 572.801"
      style={{ enableBackground: 'new 0 0 572.8 572.801' }}
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M520.25,353.6c0,125-100.5,219.201-233.8,219.201S52.55,478.6,52.55,353.6c0-115.3,164.7-301.5,197.7-337.7   c9.3-10.2,22.4-15.9,36.2-15.9s26.9,5.8,36.2,15.9C355.55,52.1,520.25,238.4,520.25,353.6z" />
        </clipPath>
      </defs>
      <g>
        <path d="M520.25,353.6c0,125-100.5,219.201-233.8,219.201S52.55,478.6,52.55,353.6c0-115.3,164.7-301.5,197.7-337.7   c9.3-10.2,22.4-15.9,36.2-15.9s26.9,5.8,36.2,15.9C355.55,52.1,520.25,238.4,520.25,353.6z" />
        <StyledCls2>
          <rect className="cls-3" x="14.99" y="269.04" width="663.07" height="60" />
          <rect className="cls-3" x="24.99" y="146.44" width="663.07" height="60" />
        </StyledCls2>
      </g>
    </svg>
  </div>
)

const BeeOne = (props) => {
  const { isFlipped } = props
  return (
    <div className={`bee1 ${isFlipped ? 'flip' : ''}`}>
      <div className="flight-path--x">
        <div className="flight-path--y">
          <div className="bee" id="bee1">
            <BeeBody />
            <BeeWings />
          </div>
        </div>
      </div>
    </div>
  )
}


const BeeTwo = (props) => {
  const { isFlipped } = props
  return (
    <div className={`bee2 ${isFlipped ? 'flip' : ''}`}>
      <div className="flight-path--x">
        <div className="flight-path--y">
          <div className="bee" id="bee2">
            <BeeBody />
            <BeeWings />
          </div>
        </div>
      </div>
    </div>
  )
}


const BeeThree = (props) => {
  const { isFlipped } = props
  return (
    <div className={`bee3 ${isFlipped ? 'flip' : ''}`}>
      <div className="flight-path--x">
        <div className="flight-path--y">
          <div className="bee" id="bee3">
            <BeeBody />
            <BeeWings />
          </div>
        </div>
      </div>
    </div>
  )
}


const BeesScene = (props) => {
  const { isBeeTwoVisible, isBeeThreeVisible } = props
  return (
    <StyledContainer>
      <div className="Scene" id="sceneBees">
        <BeeOne {...props} />
        {
          isBeeTwoVisible && (
            <BeeTwo {...props} />
          )
        }

        {
          isBeeThreeVisible && (
            <BeeThree {...props} />
          )
        }
      </div>
    </StyledContainer>
  )
}

BeesScene.propTypes = {
  isBeeTwoVisible: PropTypes.bool,
  isBeeThreeVisible: PropTypes.bool,
}
BeesScene.defaultProps = {
  isBeeTwoVisible: false,
  isBeeThreeVisible: false,
}


export default BeesScene
