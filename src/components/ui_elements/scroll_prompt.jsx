import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { rollingArrows } from '../utils/transitions'
import { ScreenPhoneDown } from '../utils/media'
import { colorGreen, colorWhite } from '../styles/colors'


const StyledMouse = styled.path`
	fill: none;
	stroke: ${colorWhite};
	stroke-width: 8;
`
const StyledDot = styled.circle`
	fill: ${props => (props.dotColor)};
`
const StyledArrow = styled.path`
	opacity: 0.3;
	fill: none;
	stroke: ${colorWhite};
	stroke-width: 8;
	enable-background: new;
	animation-name: ${rollingArrows} ;
	animation-duration: 2.5s ;
	animation-timing-function: ease-in-out ;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-delay: -0.3s;
	&:nth-child(2) {
		animation-delay: -0.2s;
	}
	&:nth-child(1) {
		animation-delay:  -0.1s;
	}
`


const StyledScrollButton = styled.button`
	background: transparent;
	border: 0;
  height: 10vh;
  width: 20vw;
  z-index: 100;
  position:fixed;
  top: 85vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

	svg {
		position: relative;
		width: 100%;
		height: 100%;
	}
	
  &.hidden {
	  opacity: 0;
  }
`
const Svg = (props) => {
	const { dotColor } = props
	return (
		<svg
			version="1.1"
			id="Scroll_Prompt"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 85.2 200.5">
			<g id="Mouse">
				<StyledDot dotColor={dotColor} cx="42.6" cy="63.3" r="6" />
				<StyledMouse d="M37.1,6.9h11c11,0,20,9,20,20v41c0,11-9,20-20,20h-11c-11,0-20-9-20-20v-41C17.1,15.9,26,6.9,37.1,6.9z" />
			</g>
			<g id="v">
				<StyledArrow d="M67.1,167.9l-24,24l-24-24" />
				<StyledArrow d="M67.1,141.9l-24,24l-24-24" />
				<StyledArrow d="M67.1,114.9l-24,24l-24-24" />
			</g>
		</svg>
	)
}

const ScrollPrompt = (props) => {
	const { onClick, scrollPaused, scrollDotColor } = props
	return (
		<StyledScrollButton
			type="button"
			aria-label="Scroll to next section"
			className={!scrollPaused && 'hidden'}
			onClick={onClick}
		>
			<Svg dotColor={scrollDotColor} />
		</StyledScrollButton>
	)
}

ScrollPrompt.propTypes = {
	scrollPaused: PropTypes.bool,
	scrollDotColor: PropTypes.string,
}

ScrollPrompt.defaultsProps = {
	scrollPaused: false,
	scrollDotColor: colorGreen,
}


export default ScrollPrompt
