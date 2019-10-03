import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { allBoomingIndustries } from '../../../models/industries_booming'

import {
  StyledWrapper,
  StyledMessageWrapper,
  StyledBottomStatWrapper,
  StyledMiddleStatWrapper,
  StyledTopStatWrapper,
} from './styled'
import { StyledMessageH2 } from '../../styled/typography'
import StatWithLabel from '../../ui_elements/stat_with_label'

import Disclaimer from '../../ui_elements/disclaimer'

const PoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 10,
  },
})

const poseMessageProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const BoomingStates = (props) => {
  const { state } = props
  const stateSpecificStats = allBoomingIndustries.find(x => x.state === state)
  const [hasBarAnimationStopped, setHasBarAnimationStopped] = useState(false)
  const [areAllBarsVisible, setAreAllBarsVisible] = useState(false)
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false)

  return (
    <StyledWrapper>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={3000}
          pin
        >
          {progress => {
            if (progress > 0) {
              setAreAllBarsVisible(true)
            } else {
              setAreAllBarsVisible(false)
            }

            if (progress > 0 && progress < 0.5) {
              setIsDisclaimerVisible(true)
            } else setIsDisclaimerVisible(false)

            if (progress > 0.05) {
              setHasBarAnimationStopped(true)
            }
            return (
              <div className="sticky">
                <Timeline
                  totalProgress={progress}
                  paused
                  target={(
                    <div>
                      <div className={`panel top ${areAllBarsVisible ? 'appear' : 'disappear'}`}>
                        <StyledTopStatWrapper
                          className={`bar-label-and-stat ${areAllBarsVisible ? 'appear' : ''}`}
                        >
                          <StatWithLabel
                            arrowSize="small"
                            hasArrow
                            arrowDirection="up"
                            label={stateSpecificStats.industry_1.label}
                            isPercentage
                            showStat
                            decimals={1}
                            duration={1}
                            stat={stateSpecificStats.industry_1.percentage}
                            layout="horizontal"
                            statPosition="left"
                          />
                        </StyledTopStatWrapper>
                      </div>
                      <div className={`panel middle ${areAllBarsVisible ? 'appear' : 'disappear'}`}>
                        <StyledMiddleStatWrapper
                          className={`bar-label-and-stat ${areAllBarsVisible ? 'appear' : ''}`}
                        >
                          <StatWithLabel
                            className={`bar-label-and-stat ${areAllBarsVisible ? 'appear' : ''}`}
                            arrowSize="small"
                            hasArrow
                            arrowDirection="up"
                            label={stateSpecificStats.industry_2.label}
                            isPercentage
                            showStat
                            decimals={1}
                            duration={1}
                            stat={stateSpecificStats.industry_2.percentage}
                            layout="horizontal"
                            statPosition="left"
                          />
                        </StyledMiddleStatWrapper>
                      </div>
                      <div className={`panel bottom ${areAllBarsVisible ? 'appear' : 'disappear'}`}>
                        <StyledBottomStatWrapper
                          className={`bar-label-and-stat ${areAllBarsVisible ? 'appear' : ''}`}
                        >
                          <StatWithLabel
                            className={`bar-label-and-stat ${areAllBarsVisible ? 'appear' : ''}`}
                            arrowSize="small"
                            hasArrow
                            arrowDirection="up"
                            label={stateSpecificStats.industry_3.label}
                            isPercentage
                            showStat
                            decimals={1}
                            duration={1}
                            stat={stateSpecificStats.industry_3.percentage}
                            layout="horizontal"
                            statPosition="left"
                          />
                        </StyledBottomStatWrapper>

                        <StyledMessageWrapper>
                          <StyledMessageH2>
                            <PoseContainer
                              initialPose="exit"
                              pose={hasBarAnimationStopped ? 'enter' : 'exit'}
                            >
                              <SplitText charPoses={poseMessageProps}>
                                And in your state, these new businesses are on the up.
                              </SplitText>
                            </PoseContainer>
                          </StyledMessageH2>
                        </StyledMessageWrapper>
                      </div>
                    </div>
                  )}
                >
                  <Tween duration={10} />
                </Timeline>
                {
                  isDisclaimerVisible && (
                    <Disclaimer
                      copy="The above figures refer to actively trading businesses for the period 2017/2018 financial year Source: Australian Bureau of Statistics"
                      sourceName="Australian Bureau of Statistics"
                      sourceLink="https://www.abs.gov.au/"
                    />
                  )
                }
              </div>
            )
          }}
        </Scene>
      </Controller>
    </StyledWrapper>
  )
}

BoomingStates.propTypes = {
  state: PropTypes.string.isRequired,
}

export default BoomingStates
