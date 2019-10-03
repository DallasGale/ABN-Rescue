import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy, colorPink } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledLobsterWrapper } from './styled'
import { StyledMessageH2 } from '../../../../styled/typography'
import LobsterAnimation from '../../../../ui_elements/lobster_animation'
import BubbleAnimation from '../../../../ui_elements/bubble_animation'
import { Desktop, TabletRetinaDown } from '../../../../utils/media'
import AllyTextExtractor from '../../../../utils/ally_text_extractor'


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


const SlideInBackgroundPose = posed.div({
  init: {
    position: 'absolute',
    background: colorPink,
    height: '100vh',
    width: '100vw',
    transform: 'translateX(100%)',
    top: 0,
    zIndex: 0,
  },
  enter: {
    transform: 'translateX(50%)',
    transition: {
      type: 'spring',
      damping: 60,
      duration: 3000,
    },
  },
})

const SlideInBackgroundPoseDevice = posed.div({
  init: {
    position: 'absolute',
    background: colorPink,
    height: '100vh',
    width: '100vw',
    transform: 'translateY(100%)',
    top: 0,
    zIndex: 0,
  },
  enter: {
    transform: 'translateY(50%)',
    transition: {
      type: 'spring',
      damping: 60,
      duration: 3000,
    },
  },
})

const SlideInLobsterPose = posed.div({
  init: {
    position: 'relative',
    transform: 'translateX(60%)',
    zIndex: 1,
  },
  push: {
    transform: 'translateX(40%)',
    transition: {
      type: 'spring',
      damping: 60,
      duration: 2000,
    },
  },
})

const SlideInLobsterPoseDevice = posed.div({
  init: {
    position: 'relative',
    transform: 'translateY(20%)',
    zIndex: 1,
  },
  push: {
    transform: 'translateY(0%)',
    transition: {
      type: 'spring',
      damping: 60,
      duration: 2000,
    },
  },
})

const Lobster = (props) => {
  const { state } = props
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [isStateResultOneVisible, setIsStateResultOneVisible] = useState(false)
  const [isStateResultTwoVisible, setIsStateResultTwoVisible] = useState(false)
  const [isStateResultVsVisible, setIsStateResultVsVisible] = useState(false)

  const [islobsterPushed, setIslobsterPushed] = useState(false)

  const [isLobsterVisible, setIsLobsterVisible] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setIslobsterPushed(false)
        setIsLobsterVisible(true)
      }
    }, 0)

    const timer2 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageOneVisible(true)
      }
    }, 500)

    const timer3 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageTwoVisible(true)
        setIsMessageOneVisible(false)
      }
    }, 3500)

    const timer4 = setTimeout(() => {
      if (hasSceneBegun) {
        setIslobsterPushed(true)
      }
    }, 3670)

    const timer5 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultOneVisible(true)
      }
    }, 3700)

    const timer6 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultVsVisible(true)
      }
    }, 4700)

    const timer7 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultTwoVisible(true)
      }
    }, 5700)


    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
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
            // console.log(progress)

            if (progress === 0 || progress === 1) {
              setIsMessageOneVisible(false)
              setIsMessageTwoVisible(false)
              setIsLobsterVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid lobster">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          {
                            isMessageOneVisible && (
                              <StyledMessageH2
                                className={`message ${isMessageOneVisible ? 'appear' : 'disappear'}`}
                                color={colorNavy}
                              >
                                {
                                  state === 'TAS' ? (
                                    <MessagePoseContainer
                                      initialPose="exit"
                                      pose={messagePoseProps ? 'enter' : 'exit'}
                                    >
                                      <SplitText charPoses={messagePoseProps}>
                                        AND TAS IS WINNING THE LOBSTER BUSINESS BATTLE AGAINST VIC.
                                      </SplitText>
                                    </MessagePoseContainer>
                                  ) : (
                                      <MessagePoseContainer
                                        initialPose="exit"
                                        pose={messagePoseProps ? 'enter' : 'exit'}
                                      >
                                        <SplitText charPoses={messagePoseProps}>
                                          AND WA IS WINNING THE LOBSTER BUSINESS BATTLE AGAINST SA.
                                      </SplitText>
                                      </MessagePoseContainer>
                                    )
                                }
                              </StyledMessageH2>
                            )
                          }
                        </div>
                      )}
                    >
                      <Tween duration={20} />
                    </Timeline>
                  </div>

                  <div />
                </div>
                {
                  isMessageTwoVisible && (
                    <div className="lobster-versus-grid">
                      <div className="column">
                        {
                          isStateResultOneVisible && (
                            <StyledMessageH2
                              aria-hidden="true"
                              className={`message ${isStateResultOneVisible ? 'appear' : 'disappear'}`}
                              color={colorNavy}
                            >
                              {
                                state === 'TAS' ? (
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      TAS&nbsp;
                                    </SplitText>
                                    {
                                      isStateResultOneVisible && (
                                        <CountUp
                                          end={228}
                                          separator=","
                                          duration={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )
                                    }
                                  </MessagePoseContainer>
                                )
                                  : (
                                    <MessagePoseContainer
                                      initialPose="exit"
                                      pose={messagePoseProps ? 'enter' : 'exit'}
                                    >
                                      <SplitText charPoses={messagePoseProps}>
                                        WA&nbsp;
                                      </SplitText>
                                      {
                                        isStateResultOneVisible && (
                                          <CountUp
                                            end={715}
                                            separator=","
                                            duration={1}
                                            start={0}
                                            useEasing={false}
                                          />
                                        )
                                      }
                                    </MessagePoseContainer>
                                  )
                              }
                            </StyledMessageH2>
                          )
                        }
                      </div>
                      <div className="column">
                        {
                          isMessageTwoVisible && (
                            <StyledMessageH2
                              aria-hidden="true"
                              className={`message ${isStateResultVsVisible ? 'appear' : 'disappear'}`}
                              color={colorNavy}
                            >
                              VS
                            </StyledMessageH2>
                          )
                        }
                      </div>
                      <div className="column">
                        {
                          isMessageTwoVisible && (
                            <StyledMessageH2
                              aria-hidden="true"
                              className={`message ${isStateResultTwoVisible ? 'appear' : 'disappear'}`}
                              color={colorNavy}
                            >
                              {
                                state === 'TAS' ? (
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      VIC&nbsp;
                                    </SplitText>
                                    {
                                      isStateResultTwoVisible && (
                                        <CountUp
                                          end={74}
                                          separator=","
                                          duration={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )
                                    }
                                  </MessagePoseContainer>
                                )
                                  : (
                                    <MessagePoseContainer
                                      initialPose="exit"
                                      pose={messagePoseProps ? 'enter' : 'exit'}
                                    >
                                      <SplitText charPoses={messagePoseProps}>
                                        SA&nbsp;
                                      </SplitText>
                                      {
                                        isStateResultTwoVisible && (
                                          <CountUp
                                            end={310}
                                            separator=","
                                            duration={1}
                                            start={0}
                                            useEasing={false}
                                          />
                                        )
                                      }
                                    </MessagePoseContainer>
                                  )
                              }
                            </StyledMessageH2>
                          )
                        }
                      </div>
                    </div>
                  )
                }
                {
                  isLobsterVisible && (
                    <>
                      <StyledLobsterWrapper className={`${isMessageOneVisible ? 'slide-up' : ''} ${isMessageTwoVisible ? 'slide-up' : ''}`}>

                        <Desktop>
                          <SlideInLobsterPose initialPose="init" pose={islobsterPushed ? 'push' : 'init'}>
                            <LobsterAnimation />
                          </SlideInLobsterPose>
                        </Desktop>

                        <TabletRetinaDown>
                          <SlideInLobsterPoseDevice initialPose="init" pose={islobsterPushed ? 'push' : 'init'}>
                            <LobsterAnimation />
                          </SlideInLobsterPoseDevice>
                        </TabletRetinaDown>

                      </StyledLobsterWrapper>

                      <Desktop>
                        <SlideInBackgroundPose initialPose="init" pose={isMessageTwoVisible ? 'enter' : ''} />
                      </Desktop>

                      <TabletRetinaDown>
                        <SlideInBackgroundPoseDevice initialPose="init" pose={isMessageTwoVisible ? 'enter' : ''} />
                      </TabletRetinaDown>
                    </>
                  )
                }
              </div>
            )
          }
          }
        </Scene>
      </Controller>
      {<BubbleAnimation areBubblesVisible={hasSceneBegun} />}

      {/* For Screen Reader */}
      {
        state === 'TAS' && (
          <AllyTextExtractor
            Element="h2"
            text="AND TAS IS WINNING THE LOBSTER BUSINESS BATTLE AGAINST VIC. TAS 228 VS VIC 74"
          />
        )
      }
      {
        state === 'WA' && (
          <AllyTextExtractor
            Element="h2"
            text="AND WA IS WINNING THE LOBSTER BUSINESS BATTLE AGAINST SA. WA 715 VS SA 310"
          />
        )
      }
    </StyledWrapper>
  )
}

export default Lobster
