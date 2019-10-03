import React from 'react'
import PropTypes from 'prop-types'
import { StyledColumn, StyledPath } from './styled'


const Bar = (props) => {
  const { theme } = props
  return (
    <StyledColumn>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386 3324">
        <StyledPath
          theme={theme}
          d="M550,122c-106.59,0-193,86.41-193,193V3446H743V315C743,208.41,656.59,122,550,122Z"
          transform="translate(-357 -122)"
        />
      </svg>
    </StyledColumn>
  )
}

Bar.propTypes = {
  theme: PropTypes.string.isRequired,
}

export default Bar
