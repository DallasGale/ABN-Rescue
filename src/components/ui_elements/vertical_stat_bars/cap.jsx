import React from 'react'
import PropTypes from 'prop-types'
import { StyledCap, StyledCircle } from './styled'

const Cap = (props) => {
  const { theme } = props
  return (
    <StyledCap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 590.72 590.72"
      >
        <StyledCircle
          theme={theme}
          cx="295.36"
          cy="295.36"
          r="295.36"
        />
      </svg>
    </StyledCap>
  )
}

Cap.propTypes = {
  theme: PropTypes.string.isRequired,
}

export default Cap
