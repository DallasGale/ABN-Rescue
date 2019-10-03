import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { colorGreen } from '../styles/colors'

const StyledCrossWrapper = styled.div`
  background: ${props => (!props.color ? colorGreen : props.color)};
  height: ${pxToRem(18)};
  width: ${pxToRem(3)};
`

const MenuCloseBarIcon = (props) => {
  const { barColor } = props
  return (
    <StyledCrossWrapper color={barColor} />
  )
}

MenuCloseBarIcon.propTypes = {
  barColor: PropTypes.string.isRequired,
}


export default MenuCloseBarIcon
