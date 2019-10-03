import React from 'react'
import PropTypes from 'prop-types'

import { StyledWrapper, StyledButton } from './styled'
import { colorNavy } from '../../styles/colors'

const EditLocation = (props) => {
  const {
    postcodeValue,
    handleEditLocation,
    theme,
  } = props
  return (
    <StyledWrapper theme={theme}>
      {`Your Suburb: ${postcodeValue} `}
      <StyledButton
        theme={theme}
        data-tracking="btn-click:editLocation"
        type="button"
        onClick={handleEditLocation}
      >
        Edit location
      </StyledButton>
    </StyledWrapper>
  )
}

EditLocation.propTypes = {
  postcodeValue: PropTypes.string.isRequired,
  handleEditLocation: PropTypes.func.isRequired,
  theme: PropTypes.string,
}

EditLocation.defaultProps = {
  theme: colorNavy,
}


export default EditLocation
