import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'

const StyledPath = styled.path`
  	fill: none;
	stroke: ${props => props.barColor};
	stroke-width: 8px;
	fill-rule: evenodd;
`

const StyledBarsWrapper = styled.div`
  height: ${pxToRem(18)};
  width: ${pxToRem(18)};
`
const Svg = (props) => {
	const {
		barColor,
	} = props
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
			<StyledPath barColor={barColor}
			d="M36.373,31.928H0"
			/>
			<StyledPath barColor={barColor}
			d="M36.373,18.044H0"
			/>
			<StyledPath barColor={barColor}
			d="M36.373,3.695H0"
			/>
		</svg>
	)
}

const MenuOpenIcon = (props) => {
	const {
		barColor,
	} = props
  return (
	<StyledBarsWrapper >
		<Svg barColor={barColor} />
	</StyledBarsWrapper>
  )
}
MenuOpenIcon.propTypes = {
	barColor: PropTypes.string,
}
  
MenuOpenIcon.defaultProps = {
	barColor: '#00AD20',
}

export default MenuOpenIcon
