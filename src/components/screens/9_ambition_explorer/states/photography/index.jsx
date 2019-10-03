import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledCameraFlash } from './styled'
import { StyledMessageH2 } from '../../../../styled/typography'
import CameraLensAnimation from '../../../../ui_elements/camera_lens_animation'
import CameraBackground from '../../../../ui_elements/camera_background'
import { Desktop } from '../../../../utils/media'
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

const CameraPose = posed.div({
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

const Photography = () => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)
  const [isFlashVisible, setIsFlashVisible] = useState(false)
  const [isCameraLensVisible, setIsCameraLensVisible] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsCameraLensVisible(true)
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

    const flashTimer = setTimeout(() => {
      setIsFlashVisible(true)
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(flashTimer)
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
              setIsCameraLensVisible(false)
              setIsFlashVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid photography">
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
                                    YOUR STATE ISN&apos;T CAMERA SHY, EITHER.
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
                                    WITH&nbsp;
                                  </SplitText>
                                  {
                                    isMessageTwoVisible && (
                                      <CountUp
                                        end={1111}
                                        separator=","
                                        duration={1}
                                        start={0}
                                        useEasing={false}
                                      />
                                    )
                                  }
                                  <br />
                                  <SplitText charPoses={messagePoseProps}>
                                    PHOTOGRAPHY BUSINESSES.
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
                {
                  isCameraLensVisible && (
                    <CameraPose initialPose="init" pose={isCameraLensVisible ? 'enter' : ''}>
                      <StyledCameraFlash className={`${isFlashVisible ? 'flash' : 'no-flash'}`} />
                      <CameraLensAnimation isMessageTwoVisible={isMessageTwoVisible} />
                      <Desktop>
                        <CameraBackground />
                      </Desktop>
                    </CameraPose>
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
        text="YOUR STATE ISN'T CAMERA SHY, EITHER. WITH 1111 PHOTOGRAPHY BUSINESSES."
      />
    </StyledWrapper>
  )
}

export default Photography
