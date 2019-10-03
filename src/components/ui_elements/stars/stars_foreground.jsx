import React from 'react'
import { StyledStarContainer } from './styled'
import Star from '../star'

const StarsForeground = (props) => {
  const { areForegroundStarsVisible } = props

  return (
    <StyledStarContainer className={`stars stars__foreground ${areForegroundStarsVisible ? 'appear' : 'disappear'}`}>
      <Star y="20vh" x="10vw" />
      <Star y="80vh" x="20vw" />
      <Star y="70vh" x="70vw" />
      <Star y="60vh" x="80vw" />
    </StyledStarContainer>
  )
}

export default StarsForeground
