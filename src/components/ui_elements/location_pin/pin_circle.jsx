import React from 'react'
import PropTypes from 'prop-types'

import { StyledInnerCircle, StyledSvgCircle } from './styled'

const PinCircle = (props) => {
  const { reduceSize, isVisible } = props
  return (
    <StyledInnerCircle
      className={`pin_circle ${reduceSize ? 'size--small' : 'size--large'}`}
      reduceSize={reduceSize}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 590.72 590.72"
      isVisible={isVisible}
    >
      <StyledSvgCircle
        cx="295.36"
        cy="295.36"
        r="295.36"
      />
    </StyledInnerCircle>
  )
}

PinCircle.propTypes = {
  reduceSize: PropTypes.bool,
}

PinCircle.defaultProps = {
  reduceSize: false,
}

export default PinCircle
