import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Controller, Scene } from 'react-scrollmagic'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Tween, Timeline } from 'react-gsap'

import { StyledWrapper, StyledMessage } from './styled'
import { VerticalStatBars, VerticalStats } from '../../ui_elements/vertical_stat_bars'

import Disclaimer from '../../ui_elements/disclaimer'
import AllyTextExtractor from '../../utils/ally_text_extractor'

const PoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 5,
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

const IndustriesThrive = (props) => {
  const { duration } = props
  const [isThriveSceneVisible, setIsThriveSceneVisible] = useState(false)
  const [showVerticalColumns, setShowVerticalColumns] = useState(false)
  const [showGreenBackground, setShowGreenBackground] = useState(false)

  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false)

  return (
    <StyledWrapper>
      <Controller>
        <Scene
          duration={duration}
          pin
          reverse
        >
          {progress => {
            // console.log(progress)
            if (progress > 0.3) {
              setShowGreenBackground(true)
            } else {
              setShowGreenBackground(false)
            }

            if (progress > 0.4) {
              setIsThriveSceneVisible(true)
            }

            if (progress > 0.45) {
              setShowVerticalColumns(true)
            }

            if (progress < 0.45) {
              setIsThriveSceneVisible(false)
              setShowVerticalColumns(false)
            }

            if (progress > 0.45 && progress < 0.98) {
              setIsDisclaimerVisible(true)
            } else setIsDisclaimerVisible(false)

            return (
              <div className="sticky">
                <Timeline
                  totalProgress={progress}
                  paused
                  target={(
                    <>
                      <StyledMessage
                        aria-hidden="true"
                        className={`${isThriveSceneVisible ? 'appear' : 'disappear'}`}>
                        <PoseContainer
                          initialPose="exit"
                          pose={isThriveSceneVisible ? 'enter' : 'exit'}
                        >
                          <SplitText charPoses={poseMessageProps}>
                            Across the country
                          </SplitText>
                          <br />
                          <SplitText charPoses={poseMessageProps}>
                            these industries are thriving.
                          </SplitText>
                        </PoseContainer>
                      </StyledMessage>
                      <div>
                        {
                          showVerticalColumns && (
                            <>
                              <VerticalStats />
                              <VerticalStatBars />
                            </>
                          )
                        }
                        {
                          showGreenBackground && (
                            <div className="green-background" />
                          )
                        }
                      </div>
                    </>
                  )}
                >

                  <Tween
                    duration={20}
                  />
                </Timeline>
              </div>
            )
          }}
        </Scene>
      </Controller>
      {
        isDisclaimerVisible && (
          <Disclaimer
            copy="The above figures refer to actively trading businesses for the period 2017/2018 financial year"
            sourceName="Australian Bureau of Statistics"
            sourceLink="https://www.abs.gov.au/"
          />
        )
      }
      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="Across the country these industries are thriving."
      />
    </StyledWrapper>
  )
}

IndustriesThrive.propTypes = {
  duration: PropTypes.number,
}

IndustriesThrive.defaultProps = {
  duration: 1000,
}

export default IndustriesThrive
