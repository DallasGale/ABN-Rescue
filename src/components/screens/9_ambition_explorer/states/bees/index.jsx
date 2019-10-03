import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import BeesScene from '../../../../ui_elements/bees'
import Honeycomb from '../../../../ui_elements/honeycomb'
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
    top: '20vh',
    transition: {
      type: 'spring',
      damping: 60,
      duration: 3000,
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


const BeeEntrancePose = posed.div({
  init: {
    zIndex: 2,
    position: 'absolute',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 500,
    },
  },
  exit: {
    opacity: 0,
  },
})


const BeeBackgroundEntrancePose = posed.div({
  init: {
    zIndex: 0,
    position: 'absolute',
    transform: 'scale(0)',
    transformOrigin: 'center center',
  },
  enter: {
    transform: 'scale(1)',
    transition: {
      type: 'spring',
      duration: 500,
      damping: 8,
    },
  },
  exit: {
    opacity: 0,
  },
})

const Bees = (props) => {
  const { state } = props
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageOneLeaving, setIsMessageOneLeaving] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)

  const [areBeesVisible, setAreBeesVisible] = useState(false)
  const [areBackgroundBeesVisible, setAreBackgroundBeesVisible] = useState(false)

  const [isBeeTwoVisible, setIsBeeTwoVisible] = useState(false)
  const [isBeeThreeVisible, setIsBeeThreeVisible] = useState(false)
  const [isHoneycombVisible, setIsHoneycombVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAreBeesVisible(true)
      setIsMessageOneVisible(true)
    }, 10)


    const timer2 = setTimeout(() => {
      setIsBeeTwoVisible(true)
    }, 2300)

    const timer3 = setTimeout(() => {
      setIsBeeThreeVisible(true)
    }, 3100)


    const timer4 = setTimeout(() => {
      setIsHoneycombVisible(true)
      setIsMessageTwoVisible(true)
      setIsMessageOneLeaving(true)
      setAreBackgroundBeesVisible(true)
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
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
              setAreBackgroundBeesVisible(false)
              setIsMessageOneLeaving(false)
              setIsHoneycombVisible(false)
              setIsMessageTwoVisible(false)
              setAreBeesVisible(false)
              setIsBeeTwoVisible(false)
              setIsBeeThreeVisible(false)
              // setIsMessageOneVisible(true)
            }

            if (progress === 0 || progress === 1) {
              setIsMessageTwoVisible(false)
              setIsHoneycombVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid bees">
                  <div>
                    <Timeline
                      totalProgress={progress}
                      paused
                      target={(
                        <div>
                          <MessageOnePose initialPose="init" pose={isMessageOneVisible ? 'enter' : 'init'}>
                            <StyledMessageH2
                              aria-hidden="true"
                              className={`message ${isMessageOneLeaving ? 'leaving' : ''}`}
                              color={colorNavy}
                            >
                              OTHER INDUSTRIES ARE BUZZING, TOO.
                            </StyledMessageH2>
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
                                  {
                                    state === 'NSW' && (
                                      <>
                                        <SplitText charPoses={messagePoseProps}>
                                          WITH&nbsp;
                                        </SplitText>

                                        {
                                          isMessageTwoVisible && (
                                            <CountUp
                                              end={172}
                                              separator=","
                                              duration={1}
                                              start={0}
                                              useEasing={false}
                                            />
                                          )
                                        }

                                        <SplitText charPoses={messagePoseProps}>
                                          &nbsp;MORE BEEKEEPERS THAN QLD.
                                        </SplitText>
                                      </>
                                    )
                                  }

                                  {
                                    state === 'TAS' && (
                                      <>
                                        <SplitText charPoses={messagePoseProps}>
                                          NEW BEEKEEPING UP BY&nbsp;
                                        </SplitText>
                                        {
                                          isMessageTwoVisible && (
                                            <CountUp
                                              end={22.7}
                                              separator=","
                                              decimals={1}
                                              duration={1}
                                              start={0}
                                              useEasing={false}
                                            />
                                          )
                                        }
                                        {'%.'}
                                      </>
                                    )
                                  }
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

                <BeeEntrancePose initialPose="init" pose={areBeesVisible ? 'enter' : 'init'}>
                  <BeesScene isBeeTwoVisible={false} isBeeThreeVisible={false} />
                </BeeEntrancePose>

                <BeeBackgroundEntrancePose initialPose="init" pose={isBeeTwoVisible ? 'enter' : 'init'}>
                  <BeesScene isBeeTwoVisible />
                </BeeBackgroundEntrancePose>

                <BeeEntrancePose initialPose="init" pose={isBeeThreeVisible ? 'enter' : 'init'}>
                  <BeesScene isBeeTwoVisible isBeeThreeVisible />
                </BeeEntrancePose>

                <BeeBackgroundEntrancePose initialPose="init" pose={areBackgroundBeesVisible ? 'enter' : 'init'}>
                  <BeesScene isBeeTwoVisible isBeeThreeVisible isFlipped />
                </BeeBackgroundEntrancePose>

                <Honeycomb isVisible={isHoneycombVisible} />
              </div>
            )
          }
          }
        </Scene>
      </Controller>

      {/* For Screen Reader */}
      {
        state === 'NSW' && (
          <AllyTextExtractor
            Element="h2"
            text="OTHER INDUSTRIES ARE BUZZING, TOO. WITH 172 MORE BEEKEEPERS THAN QLD."
          />
        )
      }
      {
        state === 'TAS' && (
          <AllyTextExtractor
            Element="h2"
            text="OTHER INDUSTRIES ARE BUZZING, TOO. NEW BEEKEEPING UP BY 22.7%"
          />
        )
      }
    </StyledWrapper>
  )
}

export default Bees
