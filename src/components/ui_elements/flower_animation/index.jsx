import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

import { StyledContent } from './styled'

const FlowerHead = posed.div({
  to: {
    delay: 300,
    easing: 'ease-in-out',
    scale: 1,
    backgroundColor: '#0084F0',
    transition: {
      backgroundColor: {
        type: 'keyframes',
        values: ['#018c1b', '#0084F0'],
        duration: 1200,
        delay: 1000,
      },
      scale: {
        type: 'spring',
        damping: 5,
        values: [0.2, 1],
        duration: 1800,
      },
    },
  },
  from: {
    scale: 0.2,
    backgroundColor: '#018c1b',
    originY: '100%',
    originX: '50%',
    delay: 200,
  },
})

const FlowerGrow = posed.div({
  to: {
    scale: 1,
    opacity: 1,
    duration: 2200,
    easing: 'ease-in-out',
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 100,
    },
  },
  from: {
    scale: 0.2,
    opacity: 0,
    originY: '100%',
    originX: '50%',
  },
})

const Flower = (props) => {
  const { height, delay } = props
  const [grow, SetGrow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      SetGrow(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <FlowerGrow pose={grow ? 'to' : 'from'} initialPose="from">
      <div className="flower">
        <FlowerHead
          className="flower__head"
          pose={grow ? 'to' : 'from'}
          initialPose="from"
        />

        <div className="flower__body">
          <div className={[`flower__stem flower__stem--${height}`]} />
          <div className="flower__leaves">
            <div className="flower__leaf flower__leaf--left" />
            <div className="flower__leaf flower__leaf--right" />
          </div>
        </div>
      </div>
    </FlowerGrow>
  )
};

const FlowerAnimation = () => (
  <StyledContent>
    <div className="flowers-container">
      <div className="flowers">
        <Flower height="short" delay="4400" />
        <Flower height="tall" delay="4500" />
        <Flower height="short" delay="4300" />
        <Flower height="tall" delay="4000" />
        <Flower height="short" delay="4200" />
        <Flower height="tall" delay="0" />
        <Flower height="short" delay="4600" />
      </div>
    </div>
  </StyledContent>
);

export default FlowerAnimation
