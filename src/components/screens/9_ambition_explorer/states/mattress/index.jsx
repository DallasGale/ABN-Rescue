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
import MattressScene from '../../../../ui_elements/mattress'
import Moon from '../../../../ui_elements/moon'
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


const Mattress = (props) => {
  const { state } = props
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [areStarsVisible, setAreStarsVisible] = useState(false)
  const [isMoonVisible, setIsMoonVisible] = useState(false)
  const [isMoonLeaving, setIsMoonLeaving] = useState(false)

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
        setIsMoonVisible(true)
      }
    }, 600)

    const timer4 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageTwoVisible(true)
        setIsMessageOneVisible(false)
        setIsMoonVisible(false)
        setIsMoonLeaving(true)
      }
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
                <div className="layout-grid mattress">
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
                                  {state}
                                  <SplitText charPoses={messagePoseProps}>
                                    &apos;S MATTRESS INDUSTRY IS ALSO WIDE AWAKE.
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
                                  {
                                    state === 'VIC' && (
                                      <>
                                        <SplitText charPoses={messagePoseProps}>
                                          WITH&nbsp;
                                        </SplitText>

                                        {
                                          isMessageTwoVisible && (
                                            <CountUp
                                              end={32}
                                              separator=","
                                              duration={1}
                                              start={0}
                                              useEasing={false}
                                            />
                                          )
                                        }

                                        <SplitText charPoses={messagePoseProps}>
                                          &nbsp;NEW MANUFACTURERS.
                                        </SplitText>
                                      </>
                                    )
                                  }

                                  {
                                    state === 'SA' && (
                                      <SplitText charPoses={messagePoseProps}>
                                        THE INDUSTRY DOUBLED LAST YEAR.
                                      </SplitText>
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

                  <div />
                </div>

                {
                  areStarsVisible && (
                    <Stars isMessageTwoVisible={isMessageTwoVisible} />
                  )
                }
                {
                  areStarsVisible && (
                    <Moon
                      isMoonVisible={isMoonVisible}
                      isMoonLeaving={isMoonLeaving}
                    />
                  )
                }
                {
                  isMessageTwoVisible && (
                    <MattressScene />
                  )
                }
              </div>
            )
          }
          }
        </Scene>
      </Controller>

      {/* For Screen Reader */}
      {
        state === 'VIC' && (
          <AllyTextExtractor
            Element="h2"
            text="VIC'S MATTRESS INDUSTRY IS ALSO WIDE AWAKE. WITH 32 NEW MANUFACTURERS."
          />
        )
      }
      {
        state === 'SA' && (
          <AllyTextExtractor
            Element="h2"
            text="SA'S MATTRESS INDUSTRY IS ALSO WIDE AWAKE. THE INDUSTRY DOUBLED LAST YEAR."
          />
        )
      }
    </StyledWrapper>
  )
}

export default Mattress
