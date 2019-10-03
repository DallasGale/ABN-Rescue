import React from 'react'
import PropTypes from 'prop-types'
import { StyledAverageMarker, StyledLabelBackground, StyledLabel } from './styled'

const AverageMarker = (props) => {
  const {
    cancelledAverage,
    isVisible,
    isSceneEnding,
  } = props
  return (
    <StyledAverageMarker isVisible={isVisible} className={`${isSceneEnding ? 'fadeOut' : ''}`}>
      <StyledLabelBackground>
        <StyledLabel>
          {`Australian Averages: ${cancelledAverage} cancelled ABNs`}
        </StyledLabel>
      </StyledLabelBackground>
    </StyledAverageMarker>
  )
}

AverageMarker.propTypes = {
  cancelledAverage: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  isSceneEnding: PropTypes.bool,
}

AverageMarker.defaultProps = {
  isVisible: false,
  isSceneEnding: false,
}

export default AverageMarker
