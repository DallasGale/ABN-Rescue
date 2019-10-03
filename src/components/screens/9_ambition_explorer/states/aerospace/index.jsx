import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorGreen } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import Stars from '../../../../ui_elements/stars'
import Spaceship from '../../../../ui_elements/spaceship'
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

const Aerospace = () => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [areStarsVisible, setAreStarsVisible] = useState(false)
  const [isSpaceshipVisible, setIsSpaceshipVisible] = useState(false)
  const [isSpaceshipLeaving, setIsSpaceshipLeaving] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setAreStarsVisible(true)
      }
    }, 0)

    const timer2 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageOneVisible(true)
      }
    }, 500)

    const timer3 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageOneVisible(true)
      }
    }, 500)

    const timer4 = setTimeout(() => {
      setIsSpaceshipLeaving(false)
      if (hasSceneBegun) {
        setIsSpaceshipVisible(true)
      }
    }, 800)

    const timer5 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsSpaceshipLeaving(true)
      }
    }, 4800)


    const timer6 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageTwoVisible(true)
        setIsMessageOneVisible(false)
      }
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
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
              setAreStarsVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid">
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
                                color={colorGreen}
                              >
                                <MessagePoseContainer
                                  initialPose="exit"
                                  pose={messagePoseProps ? 'enter' : 'exit'}
                                >
                                  <SplitText charPoses={messagePoseProps}>
                                    NSW IS ALSO SHOOTING FOR THE STARS
                                  </SplitText>
                                </MessagePoseContainer>
                              </StyledMessageH2>
                            )
                          }
                          {
                            isMessageTwoVisible && (
                              <StyledMessageH2
                                aria-hidden="true"
                                className={`message ${isMessageTwoVisible ? 'appear' : 'disappear'}`}
                                color={colorGreen}
                              >
                                <MessagePoseContainer
                                  initialPose="exit"
                                  pose={messagePoseProps ? 'enter' : 'exit'}
                                >
                                  <Desktop>
                                    <SplitText charPoses={messagePoseProps}>
                                      WITH&nbsp;
                                    </SplitText>
                                    {
                                      isMessageTwoVisible && (
                                        <CountUp
                                          end={368}
                                          separator=","
                                          duration={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )}
                                    {' '}
                                    <SplitText charPoses={messagePoseProps}>
                                      AEROSPACE BUSINESSES.
                                    </SplitText>
                                  </Desktop>

                                  <TabletRetinaDown>
                                    <SplitText charPoses={messagePoseProps}>
                                      WITH&nbsp;
                                    </SplitText>
                                    {
                                      isMessageTwoVisible && (
                                        <CountUp
                                          end={368}
                                          separator=","
                                          duration={1}
                                          start={0}
                                          useEasing={false}
                                        />
                                      )}
                                    <br />
                                    <SplitText charPoses={messagePoseProps}>
                                      AEROSPACE BUSINESSES.
                                    </SplitText>
                                  </TabletRetinaDown>
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

                  <div />
                </div>

                {
                  areStarsVisible && <Stars />
                }

                <Spaceship isVisible={isSpaceshipVisible} isLeaving={isSpaceshipLeaving} />
              </div>
            )
          }
          }
        </Scene>
      </Controller>
      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="NSW IS ALSO SHOOTING FOR THE STARS. WITH 368 AEROSPACE BUSINESSES."
      />
    </StyledWrapper>
  )
}

export default Aerospace
