import React from 'react'
import FilledCircle from '../filled-circle'
import { StyledDot } from './styled'
import { colorGreen } from '../../styles/colors'

const Dot = (props) => {
  const { isDisappearing } = props
  return (
    <StyledDot className={isDisappearing ? 'falling' : 'appearing'}>
      <FilledCircle color={colorGreen} />
    </StyledDot>
  )
}

export default Dot
