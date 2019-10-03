import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { colorWhite, colorNavy } from '../styles/colors'

const StyledRect = styled.rect`
  fill: ${colorNavy};
`

const StyledCrossWrapper = styled.div`
   height: ${pxToRem(18)};
    width: ${pxToRem(18)};
`

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 31.66">
    <StyledRect
      x="0.12"
      y="14.5"
      width="36.77"
      height="8"
      transform="translate(-10.33 15.83) rotate(-45)"
    />
    <StyledRect
      x="14.5"
      y="0.12"
      width="8"
      height="36.77"
      transform="translate(-10.33 15.83) rotate(-45)"
    />
  </svg>
)

const MenuCloseIcon = () => {
  return (
	<StyledCrossWrapper>
		<Svg />
	</StyledCrossWrapper>
  )
}


export default MenuCloseIcon
