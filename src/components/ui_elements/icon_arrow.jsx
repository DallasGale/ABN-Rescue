import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorNavy } from '../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../utils/media'

const StyledPath = styled.path`
  fill: ${props => (props.arrowColour)};
`

const StyledPolygon = styled.polygon`
  fill: ${props => (props.arrowColour)};
`

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &.direction {
    &__up {
      bottom: ${props => (props.arrowSize === 'small' ? '3px' : 0)};
      width: ${props => (props.arrowSize === 'small' ? '35px' : '65px')};
      height: 30px;
      z-index: 4;
      position: relative;
      text-align: center;
      margin: 0 auto;
      display: block;
      margin-bottom: 30px;

      @media ${ScreenTabletRetinaDown} {
        width: ${props => (props.arrowSize === 'small' ? '50px' : '65px')};
      }
      @media ${ScreenPhoneDown} {
        width: ${props => (props.arrowSize === 'small' ? '40px' : '65px')};
      }
      svg {
        transform: rotate(-90deg);
      }
    }
    &__right {
      transform: rotate(0);
      
    }
  }

`

const IconArrow = (props) => {
  const {
    arrowSize,
    arrowDirection,
    arrowColour,
  } = props
  return (
    <StyledWrapper
      arrowSize={arrowSize}
      className={`${arrowDirection === 'up' ? 'direction__up' : ''}`}
    >
      {
        arrowSize === 'large' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112.56 53.65"
          >
            <StyledPath
              d="M85.83,0,80.16,5.65,97.28,22.82H0v8H97.28L80.16,48l5.67,5.65,26.73-26.83ZM101,26.56l.26.26-.26.27Z"
              fill={arrowColour}
            />
          </svg>
        )
      }
      {
        arrowSize === 'small' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 78.15 53.64"
          >
            <StyledPolygon
              points="51.44 53.64 78.14 26.82 51.44 0 45.77 5.64 62.87 22.82 0 22.82 0 30.82 62.87 30.82 45.77 48 51.44 53.64"
              fill={arrowColour}
            />
          </svg>
        )
      }
    </StyledWrapper>
  )
}

// TODO Create constants for prop values.
// TODO ie. oneOfType(CONSTANTS.SIZES)

IconArrow.propTypes = {
  arrowSize: PropTypes.string,
  arrowDirection: PropTypes.string,
  arrowColour: PropTypes.string,
}

IconArrow.defaultProps = {
  arrowSize: 'large',
  arrowDirection: 'right',
  arrowColour: colorNavy,
}

export default IconArrow
