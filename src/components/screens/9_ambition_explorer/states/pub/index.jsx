import React, { useState, useEffect } from 'react'

import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { colorNavy } from '../../../../styles/colors'

import { StyledWrapper } from '../styled'
import { StyledMessageH2 } from '../../../../styled/typography'
import BeerAnimation, { BeerFoam } from '../../../../ui_elements/beer_animation'
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

const SlideInBeerPose = posed.div({
  init: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: '130vh',
    zIndex: 1,
  },
  enter: {
    opacity: 1,
    top: '15vh',
    transition: {
      ease: 'easeInOut',
      duration: 1200,
    },
  },
})


const SlideInBeerPoseDevice = posed.div({
  init: {
    position: 'absolute',
    width: '190vw',
    height: '100vh',
    top: '130vh',
    zIndex: 1,
  },
  enter: {
    opacity: 1,
    top: '10vh',
    transition: {
      ease: 'easeInOut',
      duration: 1200,
    },
  },
})

const Pub = (props) => {
  const [hasSceneBegun, setHasSceneBegun] = useState(false)
  const [isMessageOneVisible, setIsMessageOneVisible] = useState(false)
  const [isMessageTwoVisible, setIsMessageTwoVisible] = useState(false)

  const [isBeerVisible, setIsBeerVisible] = useState(false)
  const [isBeerAnimating, setIsBeerAnimating] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsBeerAnimating(true)
      }
    }, 100)

    const timer2 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageOneVisible(true)
        setIsBeerVisible(true)
      }
    }, 500)

    const timer3 = setTimeout(() => {
      if (hasSceneBegun) {
        setIsMessageTwoVisible(true)
        setIsMessageOneVisible(false)
      }
    }, 4500)

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
              setIsBeerAnimating(false)
              setIsBeerVisible(false)
            }

            if (progress > 0 && progress < 1) {
              setHasSceneBegun(true)
            } else setHasSceneBegun(false)

            return (
              <div className="sticky">
                <div className="layout-grid pub">
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
                                    WHILE POLLIES&nbsp;
                                  </SplitText>
                                  <br />
                                  <SplitText charPoses={messagePoseProps}>
                                    CLEARLY LOVE A TIPPLE.
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
                                    WITH PUBS UP&nbsp;
                                  </SplitText>
                                  {
                                    isMessageTwoVisible && (
                                      <CountUp
                                        end={18.8}
                                        separator=","
                                        duration={1}
                                        start={0}
                                        decimals={1}
                                        useEasing={false}
                                      />
                                    )
                                  }
                                  <SplitText charPoses={messagePoseProps}>
                                    %
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
                  isBeerVisible && (
                    <>
                      <Desktop>
                        <SlideInBeerPose initialPose="init" pose={isBeerAnimating ? 'enter' : 'init'}>
                          <BeerAnimation
                            isBeerTilted={isMessageTwoVisible}
                          />
                        </SlideInBeerPose>
                      </Desktop>

                      <TabletRetinaDown>
                        <SlideInBeerPoseDevice initialPose="init" pose={isBeerAnimating ? 'enter' : 'init'}>
                          <BeerAnimation isBeerTilted={isMessageTwoVisible} />
                        </SlideInBeerPoseDevice>
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

      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="WHILE POLLIES CLEARLY LOVE A TIPPLE. WITH PUBS UP 18.7%."
      />
    </StyledWrapper>
  )
}

export default Pub
