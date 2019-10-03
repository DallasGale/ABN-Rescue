import React, { useState, useEffect } from 'react'

import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'

import IceCreamAnimation from '../../../../ui_elements/ice_cream_animation'
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

const IceCream = () => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [isIceCreamVisible, setIsIceCreamVisible] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageOneVisible(true)
      }
    }, 200)

    const timer2 = setTimeout(() => {
      setIsIceCreamVisible(false)
      if (hasSceneBegun) {
        setIsIceCreamVisible(true)
      }
    }, 1500)

    const timer3 = setTimeout(() => {
      setIsMessageTwoVisible(true)
      if (hasSceneBegun) {
        setIsMessageOneVisible(false)
      }
    }, 5500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
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
              // iceCreamTimer(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid ice-cream">
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
                                <MessagePoseContainer
                                  initialPose="exit"
                                  pose={messagePoseProps ? 'enter' : 'exit'}
                                >
                                  <SplitText charPoses={messagePoseProps}>
                                    You&apos;ve also got the most ice-cream manufacturers.
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
                                color={colorNavy}
                              >
                                <MessagePoseContainer
                                  initialPose="exit"
                                  pose={messagePoseProps ? 'enter' : 'exit'}
                                >
                                  <SplitText charPoses={messagePoseProps}>
                                    Not bad for the wettest state.
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
                  <div />
                </div>
                {isIceCreamVisible && <IceCreamAnimation />}
              </div>
            )
          }
          }
        </Scene>
      </Controller>

      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="You've also got the most ice-cream manufacturers. Not bad for the wettest state."
      />
    </StyledWrapper>
  )
}

export default IceCream
