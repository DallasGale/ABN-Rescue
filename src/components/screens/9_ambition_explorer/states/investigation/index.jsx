import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorGreen } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import SherlockAnimation from '../../../../ui_elements/sherlock_animation'
import { Desktop, TabletRetinaDown } from '../../../../utils/media'

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


const Investigation = (props) => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)

  const [isSherlockVisible, setIsSherlockVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsSherlockVisible(true)
      setIsMessageOneVisible(true)
    }, 0)



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
              setIsSherlockVisible(false)
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
                <div className="layout-grid investigation">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          <MessageOnePose initialPose="init" pose={isMessageOneVisible ? 'enter' : 'init'}>
                            <StyledMessageH2
                              aria-hidden="true"
                              className='message'
                              color={colorGreen}
                            >
                              THE ACT CLEARLY LOVES ITS SHERLOCK.
                            </StyledMessageH2>
                          </MessageOnePose>
                          {
                            isMessageTwoVisible && (
                              <StyledMessageH2
                                aria-hidden="true"
                                className={`message ${isMessageTwoVisible ? 'appear' : 'disappear'}`}
                                color={colorGreen}
                              >
                                <Desktop>
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      INVESTIGATION SERVICES UP&nbsp;
                                    </SplitText>

                                    {
                                      isMessageTwoVisible && (
                                        <CountUp
                                          end={32.2}
                                          separator=","
                                          duration={1}
                                          decimals={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )
                                    }
                                    <SplitText charPoses={messagePoseProps}>
                                      %
                                    </SplitText>
                                  </MessagePoseContainer>
                                </Desktop>
                                <TabletRetinaDown>
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      INVESTIGATION SERVICES&nbsp;
                                    </SplitText>
                                    <br />
                                    <SplitText charPoses={messagePoseProps}>
                                      UP&nbsp;
                                    </SplitText>
                                    {
                                      isMessageTwoVisible && (
                                        <CountUp
                                          end={32.2}
                                          separator=","
                                          duration={1}
                                          decimals={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )
                                    }
                                    <SplitText charPoses={messagePoseProps}>
                                      %
                                    </SplitText>
                                  </MessagePoseContainer>
                                </TabletRetinaDown>
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
                  isSherlockVisible && (
                    <SherlockAnimation />
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
        text="THE ACT CLEARLY LOVES ITS SHERLOCK. INVESTIGATION SERVICES UP 32.2%"
      />
    </StyledWrapper>
  )
}

export default Investigation
