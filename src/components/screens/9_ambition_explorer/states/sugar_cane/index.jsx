import React, { useState, useEffect } from 'react'

import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import Crop from '../../../../ui_elements/crop'
import AllyTextExtractor from '../../../../utils/ally_text_extractor'

const MessageOnePose = posed.div({
  init: {
    position: 'absolute',
    width: '100%',
    top: '120vh',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    top: 0,
    transition: {
      type: 'spring',
      damping: 60,
      duration: 3000,
    },
  },
})

const MessageTwoPose = posed.div({
  init: {
    position: 'absolute',
    top: 0,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    top: 0,
  },
})

const CropPose = posed.div({
  init: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    top: '120vh',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    top: 0,
    transition: {
      type: 'spring',
      damping: 60,
      duration: 3000,
    },
  },
})


const MessagePoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 20,
  },
})

const messagePoseProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const SugarCane = () => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageOneLeaving, setIsMessageOneLeaving] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsMessageOneVisible(true)
    }, 10)

    const timer2 = setTimeout(() => {
      setIsMessageTwoVisible(true)
      setIsMessageOneLeaving(true)
    }, 4010)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [hasSceneBegun])

  return (
    <StyledWrapper>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={3000}
          reverse
          pin
        >
          {(progress) => {
            // console.log('isMessageOneLeaving', isMessageOneLeaving)

            if (progress === 0) {
              setIsMessageOneVisible(false)
              setIsMessageOneLeaving(false)
              setIsMessageTwoVisible(false)
            }

            if (progress === 0 || progress === 1) {
              setIsMessageTwoVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid sugar-cane">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          <MessageOnePose initialPose="init" pose={isMessageOneVisible ? 'enter' : 'init'}>
                            <StyledMessageH2
                              aria-hidden="true"
                              className={`message first-line ${isMessageOneLeaving ? 'leaving' : ''}`}
                              color={colorNavy}
                            >
                              QLD ALSO HAS MORE SUGAR CANE GROWERS THAN ANY OTHER STATE.
                            </StyledMessageH2>
                          </MessageOnePose>
                          {
                            isMessageTwoVisible && (
                              <MessageTwoPose initialPose="init" pose={isMessageTwoVisible ? 'enter' : 'init'}>
                                <StyledMessageH2
                                  aria-hidden="true"
                                  className="message"
                                  color={colorNavy}
                                >
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      SWEET WORK.
                                    </SplitText>
                                  </MessagePoseContainer>
                                </StyledMessageH2>
                              </MessageTwoPose>
                            )
                          }
                        </div>
                      )}
                    >
                      <Tween duration={20} />
                    </Timeline>
                  </div>
                </div>

                <CropPose initialPose="init" pose={isMessageOneVisible ? 'enter' : 'init'}>
                  <Crop isCropVisible={isMessageOneVisible} />
                </CropPose>

              </div>
            )
          }
          }
        </Scene>
      </Controller>

      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="QLD ALSO HAS MORE SUGAR CANE GROWERS THAN ANY OTHER STATE. SWEET WORK."
      />
    </StyledWrapper>
  )
}

export default SugarCane
