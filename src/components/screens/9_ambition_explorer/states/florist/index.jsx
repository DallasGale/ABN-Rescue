import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import FlowerAnimation from '../../../../ui_elements/flower_animation'
import AllyTextExtractor from '../../../../utils/ally_text_extractor'


const MessageOnePose = posed.div({
  init: {
    position: 'absolute',
    width: '100%',
    top: '20vh',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1000,
    },
  },
  exit: {
    top: '120vh',
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


const Florist = (props) => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsMessageOneVisible(true)
    }, 10)



    const timer2 = setTimeout(() => {
      setIsMessageTwoVisible(true)
      setIsMessageOneVisible(false)
    }, 3500)

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
                <div className="layout-grid florist">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          <MessageOnePose initialPose="init" pose={hasSceneBegun ? 'enter' : 'init'}>
                            {
                              isMessageOneVisible && (
                                <StyledMessageH2
                                  aria-hidden="true"
                                  className='message'
                                  color={colorNavy}
                                >
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      THERE&apos;S ALSO THE SWEET SMELL OF OPPORTUNITY FOR BUDDING FLORISTS.
                                </SplitText>
                                  </MessagePoseContainer>
                                </StyledMessageH2>
                              )
                            }
                          </MessageOnePose>
                          {
                            isMessageTwoVisible && (
                              <StyledMessageH2
                                aria-hidden="true"
                                className={`message ${isMessageTwoVisible ? 'appear' : 'disappear'}`}
                                color={colorNavy}
                              >
                                <MessagePoseContainer
                                  initialPose="exit"
                                  pose={messagePoseProps ? 'enter' : 'exit'}
                                >
                                  <SplitText charPoses={messagePoseProps}>
                                    WITH ONLY&nbsp;
                                    </SplitText>

                                  {
                                    isMessageTwoVisible && (
                                      <CountUp
                                        end={7}
                                        separator=","
                                        duration={1}
                                        start={0}
                                        useEasing={false}
                                      />
                                    )
                                  }
                                  <SplitText charPoses={messagePoseProps}>
                                    &nbsp;FLORISTS IN THE NT.
                                    </SplitText>
                                </MessagePoseContainer>
                              </StyledMessageH2>
                            )
                          }
                        </div>
                      )}
                    >
                      <Tween duration={20} />
                    </Timeline>
                  </div>
                </div>
                {
                  hasSceneBegun && (
                    <FlowerAnimation />
                  )
                }
              </div>
            )
          }
          }

        </Scene>
      </Controller>

      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="THERE'S ALSO THE SWEET SMELL OF OPPORTUNITY FOR BUDDING FLORISTS. WITH ONLY 7 FLORISTS IN THE NT."
      />
    </StyledWrapper>
  )
}

export default Florist
