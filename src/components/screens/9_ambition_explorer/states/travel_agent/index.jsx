import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'
import CloudsAnimation from '../../../../ui_elements/clouds_animation'
import Aeroplane from '../../../../ui_elements/aeroplane'
import { Desktop, TabletRetina, Mobile } from '../../../../utils/media';
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


const SlideInAeroplanePose = posed.div({
  init: {
    position: 'relative',
    transform: 'translateY(300%)',
    zIndex: 1,
  },
  enter: {
    transform: 'translateY(40%)',
    transition: {
      duration: 5000,
    },
  },
  exit: {
    transform: 'translateY(-200%)',
    transition: {
      duration: 9000,
    },
  },
})

const SlideInAeroplanePoseTablet = posed.div({
  init: {
    position: 'relative',
    transform: 'translateY(300%)',
    zIndex: 1,
  },
  enter: {
    transform: 'translateY(90%)',
    transition: {
      duration: 5000,
    },
  },
  exit: {
    transform: 'translateY(-300%)',
    transition: {
      duration: 9000,
    },
  },
})

const SlideInAeroplanePoseMobile = posed.div({
  init: {
    position: 'relative',
    transform: 'translateY(300%)',
    zIndex: 1,
  },
  enter: {
    transform: 'translateY(150%)',
    transition: {
      duration: 5000,
    },
  },
  exit: {
    transform: 'translateY(-300%)',
    transition: {
      duration: 9000,
    },
  },
})


const TravelAgent = (props) => {
  const { state } = props
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [isStateResultOneVisible, setIsStateResultOneVisible] = useState(false)
  const [isStateResultTwoVisible, setIsStateResultTwoVisible] = useState(false)
  const [isStateResultVsVisible, setIsStateResultVsVisible] = useState(false)
  const [isAeroplaneVisible, setIsAeroplanevisible] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsAeroplanevisible(true)
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
    }, 4000)

    const timer4 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultOneVisible(true)
      }
    }, 4200)

    const timer5 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultVsVisible(true)
      }
    }, 4900)

    const timer6 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsStateResultTwoVisible(true)
      }
    }, 5900)

    const timer7 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsAeroplanevisible(false)
      }
    }, 6900)

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
              setIsAeroplanevisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky" style={{ zIndex: 1 }}>
                <div className="layout-grid travel-agent">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          {
                            isMessageOneVisible && (
                              <StyledMessageH2
                                aria-hidden="true"
                                className={`message ${isMessageOneVisible ? 'appear' : 'disappear'}`}
                                color={colorNavy}
                              >
                                {
                                  state === 'NT' ? (
                                    <MessagePoseContainer
                                      initialPose="exit"
                                      pose={messagePoseProps ? 'enter' : 'exit'}
                                    >
                                      <SplitText charPoses={messagePoseProps}>
                                        NT WINS THE TRAVEL AGENT BATTLE WITH THE ACT.
                                      </SplitText>
                                    </MessagePoseContainer>
                                  ) : (
                                      <MessagePoseContainer
                                        initialPose="exit"
                                        pose={messagePoseProps ? 'enter' : 'exit'}
                                      >
                                        <SplitText charPoses={messagePoseProps}>
                                          TRAVEL AGENT BUSINESSES ARE TAKING OFF, TOO.
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
                    <div className="travel-agent-versus-grid">
                      <div className="column">
                        {
                          isStateResultOneVisible && (
                            <StyledMessageH2
                              className={`message ${isStateResultOneVisible ? 'appear' : 'disappear'}`}
                              color={colorNavy}
                            >
                              {
                                state === 'NT' ? (
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      NT&nbsp;
                                    </SplitText>
                                    {
                                      isStateResultOneVisible && (
                                        <CountUp
                                          end={76}
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
                                        WITH&nbsp;
                                      </SplitText>
                                      {
                                        isStateResultOneVisible && (
                                          <CountUp
                                            end={134}
                                            separator=","
                                            duration={1}
                                            start={0}
                                            useEasing={false}
                                          />
                                        )
                                      }

                                      <SplitText charPoses={messagePoseProps}>
                                        &nbsp;NEW COMPANIES.
                                      </SplitText>
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
                            state === 'NT' && (
                              <StyledMessageH2
                                className={`message ${isStateResultVsVisible ? 'appear' : 'disappear'}`}
                                color={colorNavy}
                              >
                                VS
                              </StyledMessageH2>
                            )
                          )
                        }
                      </div>
                      <div className="column">
                        {
                          isMessageTwoVisible && (
                            <StyledMessageH2
                              className={`message ${isStateResultTwoVisible ? 'appear' : 'disappear'}`}
                              color={colorNavy}
                            >
                              {
                                state === 'NT' && (
                                  <MessagePoseContainer
                                    initialPose="exit"
                                    pose={messagePoseProps ? 'enter' : 'exit'}
                                  >
                                    <SplitText charPoses={messagePoseProps}>
                                      THE ACT&nbsp;
                                    </SplitText>
                                    {
                                      isStateResultTwoVisible && (
                                        <CountUp
                                          end={67}
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
                  hasSceneBegun && (
                    <>
                      <Desktop>
                        <SlideInAeroplanePose initialPose="init" pose={isAeroplaneVisible ? 'enter' : 'exit'}>
                          <Aeroplane />
                        </SlideInAeroplanePose>
                      </Desktop>

                      <TabletRetina>
                        <SlideInAeroplanePoseTablet initialPose="init" pose={isAeroplaneVisible ? 'enter' : 'exit'}>
                          <Aeroplane />
                        </SlideInAeroplanePoseTablet>
                      </TabletRetina>

                      <Mobile>
                        <SlideInAeroplanePoseMobile initialPose="init" pose={isAeroplaneVisible ? 'enter' : 'exit'}>
                          <Aeroplane />
                        </SlideInAeroplanePoseMobile>
                      </Mobile>
                    </>
                  )
                }
              </div>
            )
          }
          }
        </Scene>
      </Controller>
      {hasSceneBegun && <CloudsAnimation />}

      {/* For Screen Reader */}
      {
        state === 'NT' && (
          <AllyTextExtractor
            Element="h2"
            text=" NT WINS THE TRAVEL AGENT BATTLE WITH THE ACT. NT 76 VS THE ACT 67."
          />
        )
      }
      {
        state === 'WA' && (
          <AllyTextExtractor
            Element="h2"
            text="TRAVEL AGENT BUSINESSES ARE TAKING OFF, TOO. WITH 134 NEW COMPANIES."
          />
        )
      }
    </StyledWrapper>
  )
}

export default TravelAgent
