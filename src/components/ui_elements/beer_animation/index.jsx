import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

import BubbleAnimation from '../bubble_animation'
import { colorWhite } from '../../styles/colors'

import { StyledFroth } from './styled'


const TiltBeerPose = posed.div({
  init: {
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
  tilt: {
    opacity: 1,
    rotate: '-30deg',
    width: '180%',
    top: '20vh',
    transition: {
      ease: 'easeInOut',
      duration: 500,
    },
  },
})

const Froth = () => {
  const [isDrip1Visible, setIsDrip1Visible] = useState(false)
  const [isDrip2Visible, setIsDrip2Visible] = useState(false)

  useEffect(() => {
    const drip1Timer = setTimeout(() => {
      setIsDrip1Visible(true)
    }, 200)

    const drip2Timer = setTimeout(() => {
      setIsDrip2Visible(true)
    }, 800)

    const dripRemoveTimer = setTimeout(() => {
      setIsDrip1Visible(false)
      setIsDrip2Visible(false)
    }, 4200)

    return () => {
      clearTimeout(drip1Timer)
      clearTimeout(drip2Timer)
      clearTimeout(dripRemoveTimer)
    }
  }, [])

  return (
    <div className="froth">
      <div className={`dribble dribble-1 ${isDrip1Visible ? 'dripping' : 'removed'}`} />
      <div className={`dribble dribble-2 ${isDrip2Visible ? 'dripping' : 'removed'}`} />
    </div>
  )
}

const BeerAnimation = (props) => {
  const [areBubblesVisible, setAareBubblesVisible] = useState(true)
  const { isBeerTilted } = props

  console.log('isBeerTilted', isBeerTilted)
  return (
    <TiltBeerPose initialPose="init" pose={isBeerTilted ? 'tilt' : 'init'}>
      <StyledFroth>
        <BubbleAnimation isBeer areBubblesVisible={areBubblesVisible} position="absolute" direction="up" />
        <Froth />
      </StyledFroth>
    </TiltBeerPose>
  )
}

BeerAnimation.propTypes = {
  isBeerTilted: PropTypes.bool.isRequired,
}

export default BeerAnimation
