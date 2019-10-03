import React from 'react'
import { StyledStarContainer } from './styled'
import Star from '../star'

const StarsBackground = (props) => {

  const { areBackgroundStarsVisible } = props

  return (
    <StyledStarContainer
      className={`stars stars__background ${areBackgroundStarsVisible ? 'appear' : 'disappear'}`}
    >
      <Star y="31vh" x="72vw" scale={0.4} />
      <Star y="70vh" x="20vw" scale={0.6} />
      <Star y="57vh" x="42vw" scale={0.6} />
      <Star y="20vh" x="20vw" scale={0.2} />
      <Star y="36vh" x="73vw" scale={0.4} />
      <Star y="50vh" x="40vw" scale={0.3} />
      <Star y="10vh" x="20vw" scale={0.8} />
      <Star y="30vh" x="74vw" scale={0.4} />
      <Star y="81vh" x="90vw" scale={0.5} />
      <Star y="60vh" x="80vw" scale={0.6} />
      <Star y="25vh" x="80vw" scale={0.4} />
      <Star y="12vh" x="50vw" scale={0.2} />
      <Star y="70vh" x="46vw" scale={0.4} />
      <Star y="60vh" x="80vw" scale={0.3} />
      <Star y="5vh" x="90vw" scale={0.2} />
      <Star y="11vh" x="83vw" scale={0.2} />
      <Star y="68vh" x="60vw" scale={0.5} />
    </StyledStarContainer>
  )
}

export default StarsBackground
