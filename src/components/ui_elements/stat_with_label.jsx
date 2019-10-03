import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CountUp from 'react-countup'

import { colorNavy } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'

import IconArrow from './icon_arrow'
import { ScreenPhoneDown, ScreenTabletRetinaDown } from '../utils/media'
import { FadeIn } from '../utils/transitions'

const StyledContent = styled.div`
  opacity: 0;
  font-family: druk-bold;
  color: ${colorNavy};
  width: 100%; 
  text-transform: uppercase;
  position: ${props => (props.layout === 'horizontal' ? 'relative' : 'absolute')};
  z-index: 5;
  height: auto;
  text-align: center;
  animation: ${FadeIn} 0.5s ease-in-out forwards;
`

const StyledTitle = styled.div`
  font-size: ${pxToRem(24)};
  margin: 0 auto ${pxToRem(8)};
  line-height: 1;
  max-width: ${pxToRem(100)};
  &.has-arrow {
    max-width: none;
  }

  &.horizontal {
    margin: 0;
  }
  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(20)};
  }
`

const StyledStat = styled.div`
  font-size: ${pxToRem(40)};
  line-height: 1;

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(30)};
  }
`

const StyledGridHorizonal = styled.div`
  display: grid;
  width: 100%;
  grid-gap: ${pxToRem(10)};
  align-items: baseline;
  grid-template-columns: ${props => props.hasArrow && pxToRem(10)} ${pxToRem(90)} 1fr;
  text-align: left;

  @media ${ScreenTabletRetinaDown} {
    grid-template-columns: ${props => props.hasArrow && pxToRem(20)} ${pxToRem(90)} 1fr;
  }

  @media ${ScreenPhoneDown} {
    grid-template-columns: ${props => props.hasArrow && pxToRem(20)} ${pxToRem(70)} 1fr;
  }
`

const StatWithLabel = (props) => {
  const {
    delay,
    duration,
    decimals,
    hasArrow,
    isPercentage,
    label,
    layout,
    stat,
    statPosition,
    showStat,
  } = props
  return (
    <StyledContent layout={layout}>
      {
        layout === 'horizontal' && (
          <>
            {
              statPosition === 'left' && (
                <>
                  <StyledGridHorizonal hasArrow={hasArrow}>
                    {hasArrow && (
                      <div>
                        <IconArrow {...props} />
                      </div>
                    )}
                    <StyledStat >
                      {showStat && (
                        <CountUp
                          delay={delay}
                          decimals={decimals}
                          end={stat}
                          separator=","
                          duration={duration}
                          start={0}
                        />
                      )}
                      {isPercentage && '%'}
                    </StyledStat>
                    <StyledTitle className={(hasArrow && 'has-arrow horizontal')}>{label}</StyledTitle>
                  </StyledGridHorizonal>
                </>
              )
            }
            {
              statPosition === 'right' && (
                <>
                  <StyledGridHorizonal>
                    <StyledTitle className={(hasArrow && 'has-arrow')}>{label}</StyledTitle>
                    <StyledStat>
                      {hasArrow && (
                        <IconArrow {...props} />
                      )}
                      {showStat && (
                        <CountUp
                          delay={delay}
                          decimals={decimals}
                          duration={duration}
                          end={stat}
                          separator=","
                          start={0}
                        />
                      )}
                    </StyledStat>
                  </StyledGridHorizonal>
                </>
              )
            }
          </>
        )
      }

      {
        statPosition === 'bottom' && (
          <>
            {hasArrow && (
              <IconArrow {...props} />
            )}
            <StyledTitle className={(hasArrow && 'has-arrow')}>{label}</StyledTitle>
            <StyledStat>
              {showStat && (
                <CountUp
                  delay={delay}
                  decimals={decimals}
                  duration={duration}
                  end={stat}
                  separator=","
                  start={0}
                />
              )}
            </StyledStat>
          </>
        )
      }
      {
        statPosition === 'top' && (
          <>
            {hasArrow && (
              <IconArrow {...props} />
            )}
            <StyledStat>
              {showStat && (
                <CountUp
                  delay={delay}
                  decimals={decimals}
                  duration={duration}
                  end={stat}
                  separator=","
                  start={0}
                />
              )}
            </StyledStat>
            <StyledTitle className={(hasArrow && 'has-arrow')}>{label}</StyledTitle>
          </>
        )
      }
    </StyledContent>
  )
}

StatWithLabel.propTypes = {
  delay: PropTypes.number,
  decimals: PropTypes.number,
  duration: PropTypes.number,
  hasArrow: PropTypes.bool,
  isPercentage: PropTypes.bool,
  label: PropTypes.string.isRequired,
  layout: PropTypes.string,
  stat: PropTypes.number.isRequired,
  statPosition: PropTypes.string,
  showStat: PropTypes.bool,
}

StatWithLabel.defaultProps = {
  delay: 0,
  decimals: 0,
  duration: 3,
  hasArrow: false,
  isPercentage: false,
  layout: 'right',
  statPosition: 'bottom',
  showStat: false,
}

StyledTitle.propTypes = {
  hasArrow: PropTypes.bool,
}

StyledTitle.defaultProps = {
  hasArrow: false,
}

export default StatWithLabel
