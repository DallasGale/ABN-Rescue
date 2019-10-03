import React from 'react'
import PropTypes from 'prop-types'
import { StyledShootingStarWrapper } from './styled'

const ShootingStar = (props) => {

  const { isShooting, direction } = props

  return (
    <StyledShootingStarWrapper>
      <div className="shooting-star__container">
        {
          direction === 'top-left' && (
            <div className={`shooting-star ${isShooting ? 'shoot  shoot__direction-top-left' : ''}`}>
              <div className="tail" />
              <div className="comet" />
            </div>
          )
        }
        {
          direction === 'top-right' && (
            <div className={`shooting-star ${isShooting ? 'shoot  shoot__direction-top-right' : ''}`}>
              <div className="tail" />
              <div className="comet" />
            </div>
          )
        }
      </div>
    </StyledShootingStarWrapper>
  )
}

ShootingStar.propTypes = {
  isShooting: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
}

export default ShootingStar
