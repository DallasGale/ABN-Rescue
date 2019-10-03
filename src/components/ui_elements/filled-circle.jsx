import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as colors from '../styles/colors'

const Svg = styled.svg`
  position: relative;
  height: 100%;
  width: 100%;
`

const StyledCircle = styled.circle`
  fill: ${props => (!props.color ? colors.colorWhite : props.color)};
`

const FilledCircle = (props) => {
  const { color } = props

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3623 3623">
      <StyledCircle
        color={color}
        cx="1811.5"
        cy="1811.5"
        r="1811.5"
      />
    </Svg>
  )
}

FilledCircle.propTypes = {
  color: PropTypes.string.isRequired,
}

export default FilledCircle
