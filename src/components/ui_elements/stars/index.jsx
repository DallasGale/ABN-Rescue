import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledStarsWrapper } from './styled'

import ShootingStar from '../shooting_star'
import StarsForeground from './stars_foreground'
import StarsBackground from './stars_background'

const Stars = (props) => {

  const { isMessageTwoVisible } = props

  const [areForegroundStarsVisible, setAreForegroundStarsVisible] = useState(false)
  const [areBackgroundStarsVisible, setAreBackgroundStarsVisible] = useState(false)
  const [isShootingStarOneVisible, setIsShootingStarOneVisible] = useState(false)
  const [isShootingStarTwoVisible, setIsShootingStarTwoVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsShootingStarOneVisible(false)
      setIsShootingStarTwoVisible(false)
      setAreForegroundStarsVisible(true)
      setAreBackgroundStarsVisible(true)
    }, 0)

    const timer2 = setTimeout(() => {
      setIsShootingStarOneVisible(true)
    }, 1000)

    const timer3 = setTimeout(() => {
      setIsShootingStarTwoVisible(true)
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <StyledStarsWrapper className={`${isMessageTwoVisible ? 'move-up' : ''}`}>
      <ShootingStar isShooting={isShootingStarOneVisible} direction="top-right" />
      <ShootingStar isShooting={isShootingStarTwoVisible} direction="top-left" />
      <StarsForeground areForegroundStarsVisible={areForegroundStarsVisible} />
      <StarsBackground areBackgroundStarsVisible={areBackgroundStarsVisible} />
    </StyledStarsWrapper>
  )
}

Stars.propTypes = {
  isMessageTwoVisible: PropTypes.bool,
}

Stars.defaultProps = {
  isMessageTwoVisible: false,
}


export default Stars
