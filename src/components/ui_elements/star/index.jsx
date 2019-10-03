import React from 'react'
import styled from 'styled-components'

import FilledCircle from '../filled-circle'
import { colorWhite } from '../../styles/colors'

const StyledStarWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${props => (props.y !== null ? props.y : 0)};
  left: ${props => (props.x !== null ? props.x : 0)};
  transform: ${props => (props.scale !== null ? `scale(${props.scale})` : '')};
`

const Star = (props) => {
  const { x, y, scale } = props
  return (
    <StyledStarWrapper x={x} y={y} scale={scale} className="star">
      <FilledCircle color={colorWhite} />
    </StyledStarWrapper>
  )
}

export default Star
