import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

import { StyledBubbles } from './styled'

const Float = posed.div({
  props: {
    poseX: 0,
    poseDelay: 0,
    poseDuration: 0,
  },
  to: {
    top: '125%',
    delay: ({ poseDelay }) => poseDelay * 100,
    transition: {
      duration: 3200,
      loop: 100,
      ease: 'easeIn',
    },
  },
  from: {
    top: '-10%',
    delay: ({ poseDelay }) => poseDelay * 100,
  },
})

const BeerFloat = posed.div({
  props: {
    poseX: 0,
    poseDelay: 0,
    poseDuration: 0,
  },
  to: {
    top: '125%',
    delay: ({ poseDelay }) => poseDelay * 20,
    transition: {
      duration: 2000,
      loop: 100,
      ease: 'easeIn',
    },
  },
  from: {
    top: '10%',
    delay: ({ poseDelay }) => poseDelay * 20,
  },
})

const Bubble = (props) => {
  const { x, delay, scale, isBeer } = props
  return (
    isBeer ? (
      <BeerFloat
        pose="to"
        initialPose="from"
        className="pose-bubble"
        poseDelay={delay}
        poseX={x}
        style={{ left: `${x}%` }}
      >
        <div
          className="bubble"
          style={{ transform: `scale(${scale / 140})` }}
        />
      </BeerFloat>
    )
      : (
        <Float
          pose="to"
          initialPose="from"
          className="pose-bubble"
          poseDelay={delay}
          poseX={x}
          style={{ left: `${x}%` }}
        >
          <div
            className="bubble"
            style={{ transform: `scale(${scale / 140})` }}
          />
        </Float>
      )
  )
}


Bubble.propTypes = {
  isBeer: PropTypes.bool,
}

Bubble.defaultProps = {
  isBeer: false,
}


const BubbleAnimation = (props) => {

  const { areBubblesVisible, direction, position, isBeer } = props

  const createBubbles = (bubblesAmount) => {
    const bubbles = []
    for (let bubble = 0; bubble < bubblesAmount; bubble++) {
      bubbles.push(
        <Bubble
          isBeer={isBeer}
          key={bubble}
          x={Math.floor(Math.random() * 100) + 1}
          scale={Math.floor(Math.random() * 100) + 1}
          delay={Math.floor(Math.random() * 100) + bubble}
        />,
      )
    }
    return bubbles
  }
  return (
    areBubblesVisible ? (
      isBeer ? (
        <StyledBubbles direction={direction} position={position}>
          <div className="bubbles">{createBubbles(160)}</div>
        </StyledBubbles>
      ) : (
          <StyledBubbles direction={direction} position={position}>
            <div className="bubbles">{createBubbles(80)}</div>
          </StyledBubbles>
        )
    ) : null
  )
}

BubbleAnimation.propTypes = {
  areBubblesVisible: PropTypes.bool.isRequired,
  direction: PropTypes.string,
  position: PropTypes.string,
  isBeer: PropTypes.bool,
}


BubbleAnimation.defaultProps = {
  direction: 'down',
  position: 'fixed',
  isBeer: false,
}

export default BubbleAnimation
