import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import posed from 'react-pose'
import SplitText from 'react-pose-text'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import StatWithLabel from '../../ui_elements/stat_with_label'

import AmbitionExplorerMessage from './message'

import {
  Desktop,
  TabletRetina,
  TabletRetinaDown,
  Mobile,
} from '../../utils/media'

import {
  StyledWrapper,
  StyledNothingBeatsMessage,
  StyledLaunchExplorer,
  StyledMessage,
  StyledSurroundingSuburbCircle,
  StyledSurroundingSuburbsWrapper,
} from './styled'

import AverageMarker from './average_marker'
import LocationPin from '../../ui_elements/location_pin'
import LaunchTheAmbitionExplorer from './launch_ambition_explorer'

import Disclaimer from '../../ui_elements/disclaimer'

const PoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 5,
  },
})

const poseMessageProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}


const MainMessagePose = posed.div({
  init: {
    y: '10vh',
    opacity: 0,
  },
  enter: {
    y: '20vh',
    opacity: 1,
    transition: {
      y: {
        type: 'spring',
        damping: '19',
        duration: 300,
        ease: 'easeInOut',
      },
    },
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 300,
    },
  },
})

const MainMessagePoseHoriz = posed.div({
  init: {
    x: '-70vw',
    opacity: 0,
  },
  enter: {
    x: '0vw',
    opacity: 1,
    transition: {
      x: {
        type: 'spring',
        damping: '19',
        duration: 300,
        ease: 'easeInOut',
      },
    },
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 300,
    },
  },
})


const PinPose = posed.div({
  init: {
    x: '-70vw',
  },
  enter: {
    x: '15vw',
    transition: {
      x: {
        type: 'spring',
        damping: '19',
        duration: 300,
        ease: 'easeInOut',
      },
    },
  },
})

const PinPoseVert = posed.div({
  init: {
    y: '-100vh',
  },
  enter: {
    y: '10vh',
    transition: {
      y: {
        type: 'spring',
        damping: '19',
        duration: 300,
        ease: 'easeInOut',
      },
    },
  },
})

const PinPoseVertMobile = posed.div({
  init: {
    y: '-100vh',
  },
  enter: {
    y: '-10vh',
    transition: {
      y: {
        type: 'spring',
        damping: '19',
        duration: 300,
        ease: 'easeInOut',
      },
    },
  },
})


const AmbitionExplorer = (props) => {
  const {
    apiData,
    isPinAnimating,
    isLandingVisible,
    isPreviousSceneVisible,
    isSurroundingSuburbAbnsVisible,
    postcodeFieldRef,
    yourPostcode,
  } = props

  const [isFirstMessageVisible, setIsFirstMessageVisible] = useState(false)
  const [reduceMainCircleSize, setReduceMainCircleSize] = useState(false)
  const [showSurroundingSuburbStats, setShowSurroundingSuburbStats] = useState(false)
  const [isSceneEnding, setIsSceneEnding] = useState(false)
  const [areStatsVisible, setAreStatsVisible] = useState(false)
  const [isNothingBeatsVisible, setIsNothingBeatsVisible] = useState(false)

  const [isCallToActionVisible, setIsCallToActionVisible] = useState(false)

  const yourSuburbStat = apiData.suburbs[0] && parseInt(apiData.suburbs[0].cancelledAbns, 10)

  const surroundingPostcodes = apiData.suburbs[0]
    ? apiData.suburbs.filter(stat => stat.postcode !== yourPostcode).slice(0, 5)
    : null

  const [hasPinEnteredScene, setHasPinEnteredScene] = useState(false)
  const [isPinIdling, setIsPinIdling] = useState(false)

  function idlePinAnimation() {
    setTimeout(() => {
      setIsPinIdling(true)
    }, 5000)
  }

  useEffect(() => {
    if (areStatsVisible) {
      idlePinAnimation()
    }

    return () => {

    }
  }, [areStatsVisible])

  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false)

  useEffect(() => {
    if (isPinAnimating) {
      setIsDisclaimerVisible(true)
    } else {
      setIsDisclaimerVisible(false)
    }

    if (isNothingBeatsVisible) {
      setIsDisclaimerVisible(false)
    }

  }, [isPinAnimating, isNothingBeatsVisible])

  // console.log('isLandingVisible', isLandingVisible)
  return (
    <StyledWrapper>
      <Controller>
        <Scene duration={7000} pin reverse>
          {(progress) => {
            // console.log(progress)
            if (progress > 0) setHasPinEnteredScene(true)
            else setHasPinEnteredScene(false)

            if (progress > 0 && progress < 0.42) {
              setAreStatsVisible(true)
            } else {
              setAreStatsVisible(false)
            }

            if (progress > 0 && progress < 0.22) {
              setIsCallToActionVisible(true)
            } else setIsCallToActionVisible(false)

            if (progress < 0.28) {
              setIsFirstMessageVisible(true)
              setReduceMainCircleSize(false)
              setShowSurroundingSuburbStats(false)
            }
            if (progress > 0.28) {
              setIsFirstMessageVisible(false)
              setReduceMainCircleSize(true)
              setShowSurroundingSuburbStats(true)
            }

            if (progress > 0.45) {
              setIsSceneEnding(true)
              setIsNothingBeatsVisible(true)
            }

            if (progress < 0.45) {
              setIsSceneEnding(false)
              setIsNothingBeatsVisible(false)
            }

            return (
              <div className="sticky">
                <Timeline
                  totalProgress={progress}
                  paused
                  target={(
                    <div>
                      {
                        isLandingVisible && (
                          <>
                            <Desktop>
                              <MainMessagePose
                                initialPose="init"
                                pose={isCallToActionVisible ? 'enter' : 'leave'}
                              >
                                <StyledLaunchExplorer className={`${isCallToActionVisible ? 'appear' : 'disappear'}`}>
                                  <StyledMessage>
                                    Be inspired
                                    <br />
                                    by ambition
                                    <br />
                                    in your area.
                                  </StyledMessage>
                                  <LaunchTheAmbitionExplorer
                                    isVisible={isLandingVisible}
                                    fieldRef={postcodeFieldRef}
                                    isLandingVisible={isLandingVisible}
                                    {...props}
                                  />
                                </StyledLaunchExplorer>
                              </MainMessagePose>
                            </Desktop>
                            <TabletRetinaDown>
                              <MainMessagePoseHoriz
                                initialPose="init"
                                pose={isLandingVisible ? 'enter' : 'leave'}
                              >
                                <StyledLaunchExplorer className={`${isCallToActionVisible ? 'appear' : 'disappear'}`}>
                                  <StyledMessage>
                                    Be inspired
                                  <br />
                                    by ambition
                                  <br />
                                    in your area.
                                </StyledMessage>
                                  <LaunchTheAmbitionExplorer
                                    isVisible={isLandingVisible}
                                    fieldRef={postcodeFieldRef}
                                    isLandingVisible={isLandingVisible}
                                    {...props}
                                  />
                                </StyledLaunchExplorer>
                              </MainMessagePoseHoriz>
                            </TabletRetinaDown>
                          </>
                        )
                      }
                    </div>
                  )}
                >
                  <Tween duration={15} />
                </Timeline>
                {/* Responsive Breakpoint */}
                <Desktop>
                  <Timeline
                    totalProgress={progress}
                    paused
                    target={(
                      <>
                        <div className={`pin-wrapper ${isPinAnimating ? 'animate-in' : null}`}>
                          {
                            isLandingVisible && (
                              <PinPose
                                initialPose="init"
                                pose={isLandingVisible ? 'enter' : 'leave'}
                              >
                                <LocationPin
                                  reduceSize={reduceMainCircleSize}
                                  hasPinEnteredScene={hasPinEnteredScene}
                                  isPinAnimating={isPinAnimating}
                                  isPinIdling={isPinIdling}
                                  isSceneEnding={isSceneEnding}
                                  showSurroundingSuburbStats={showSurroundingSuburbStats}
                                  totalCancelledAbns={yourSuburbStat}
                                  showYourSuburbStat={isPinAnimating}
                                  isYourSuburbStatVisible={isPinAnimating}
                                />
                              </PinPose>
                            )
                          }
                        </div>
                        <StyledSurroundingSuburbsWrapper isVisible={isSurroundingSuburbAbnsVisible}>
                          {showSurroundingSuburbStats
                            && (surroundingPostcodes !== null
                              && surroundingPostcodes.map((stat, index) => {
                                const iterator = index + 1
                                const { name, cancelledAbns, postcode } = stat
                                return (
                                  <StyledSurroundingSuburbCircle
                                    key={postcode}
                                    className={`surrounding-suburb-${iterator} ${
                                      isSceneEnding ? 'circles-leave-page-animation' : ''
                                      }`}
                                  >
                                    {
                                      areStatsVisible && (
                                        <StatWithLabel
                                          label={name}
                                          stat={parseInt(cancelledAbns, 10)}
                                          showStat={isSurroundingSuburbAbnsVisible}
                                        />
                                      )
                                    }
                                  </StyledSurroundingSuburbCircle>
                                )
                              }))}
                          <AverageMarker
                            cancelledAverage={'2,885'}
                            isSceneEnding={isSceneEnding}
                            isVisible={showSurroundingSuburbStats}
                          />
                        </StyledSurroundingSuburbsWrapper>
                      </>
                    )}
                  >
                    <Tween
                      duration={1}
                      from={{
                        left: '-100vw',
                      }}
                      to={{
                        visibility: 'visible',
                        left: '-70vw',
                      }}
                      ease="Circ.easeOut"
                    />

                    <Tween
                      duration={10}
                    />
                    <Tween
                      duration={2}
                    />
                    <Tween
                      duration={2}
                      to={{ opacity: 0 }}
                    />
                  </Timeline>
                  {
                    isPinAnimating && (
                      <StyledNothingBeatsMessage className={`${isNothingBeatsVisible ? 'appear' : 'disappear'}`}>
                        <PoseContainer
                          initialPose="exit"
                          pose={isNothingBeatsVisible ? 'enter' : 'exit'}
                        >
                          <SplitText charPoses={poseMessageProps}>
                            But nothing beats ambition.
                          </SplitText>
                        </PoseContainer>
                      </StyledNothingBeatsMessage>
                    )
                  }
                  {
                    isPinAnimating && <div className={`green-background ${isSceneEnding ? 'appear' : 'disappear'} `} />
                  }
                </Desktop>
                {/* Responsive Breakpoint */}
                <TabletRetina>
                  <Timeline
                    totalProgress={progress}
                    paused
                    target={(
                      <>
                        <div className={`pin-wrapper ${isPinAnimating ? 'animate-in' : null}`}>
                          {
                            isLandingVisible && (
                              <PinPoseVert
                                initialPose="init"
                                pose={isLandingVisible ? 'enter' : ''}
                              >
                                <LocationPin
                                  reduceSize={reduceMainCircleSize}
                                  hasPinEnteredScene={hasPinEnteredScene}
                                  isPinAnimating={isPinAnimating}
                                  isPinIdling={isPinIdling}
                                  isSceneEnding={isSceneEnding}
                                  showSurroundingSuburbStats={showSurroundingSuburbStats}
                                  totalCancelledAbns={yourSuburbStat}
                                  showYourSuburbStat={isPinAnimating}
                                  isYourSuburbStatVisible={isPinAnimating}
                                />
                              </PinPoseVert>
                            )
                          }
                        </div>
                        <StyledSurroundingSuburbsWrapper isVisible={isSurroundingSuburbAbnsVisible}>
                          {showSurroundingSuburbStats
                            && (surroundingPostcodes !== null
                              && surroundingPostcodes.map((stat, index) => {
                                const iterator = index + 1
                                const { name, cancelledAbns, postcode } = stat
                                return (
                                  <StyledSurroundingSuburbCircle
                                    key={postcode}
                                    className={`surrounding-suburb-${iterator} ${
                                      isSceneEnding ? 'circles-leave-page-animation' : ''
                                      }`}
                                  >
                                    {
                                      areStatsVisible && (
                                        <StatWithLabel
                                          label={name}
                                          stat={parseInt(cancelledAbns, 10)}
                                          showStat={isSurroundingSuburbAbnsVisible}
                                        />
                                      )
                                    }
                                  </StyledSurroundingSuburbCircle>
                                )
                              }))}
                          <AverageMarker
                            cancelledAverage={'2,885'}
                            isSceneEnding={isSceneEnding}
                            isVisible={showSurroundingSuburbStats}
                          />
                        </StyledSurroundingSuburbsWrapper>
                      </>
                    )}
                  >
                    <Tween
                      duration={1}
                      from={{
                        yPercent: -200,
                      }}
                      to={{
                        yPercent: -80,
                      }}
                      ease="Circ.easeOut"
                    />

                    <Tween
                      duration={10}
                    />
                    <Tween
                      duration={2}
                    />
                    <Tween
                      duration={2}
                      to={{ opacity: 0 }}
                    />
                  </Timeline>
                  {
                    isPinAnimating && (
                      <StyledNothingBeatsMessage className={`${isNothingBeatsVisible ? 'appear' : 'disappear'}`}>
                        <PoseContainer
                          initialPose="exit"
                          pose={isNothingBeatsVisible ? 'enter' : 'exit'}
                        >
                          <SplitText charPoses={poseMessageProps}>
                            But nothing beats ambition.
                          </SplitText>
                        </PoseContainer>
                      </StyledNothingBeatsMessage>
                    )
                  }
                  {
                    isPinAnimating && <div className={`green-background ${isSceneEnding ? 'appear' : 'disappear'} `} />
                  }
                </TabletRetina>
                {/* Responsive Breakpoint */}
                <Mobile>
                  <Timeline
                    totalProgress={progress}
                    paused
                    target={(
                      <>
                        <div className={`pin-wrapper ${isPinAnimating ? 'animate-in' : null}`}>
                          {
                            isLandingVisible && (
                              <PinPoseVertMobile
                                initialPose="init"
                                pose={isLandingVisible ? 'enter' : ''}
                              >
                                <LocationPin
                                  reduceSize={reduceMainCircleSize}
                                  hasPinEnteredScene={hasPinEnteredScene}
                                  isPinAnimating={isPinAnimating}
                                  isPinIdling={isPinIdling}
                                  isSceneEnding={isSceneEnding}
                                  showSurroundingSuburbStats={showSurroundingSuburbStats}
                                  totalCancelledAbns={yourSuburbStat}
                                  showYourSuburbStat={isPinAnimating}
                                  isYourSuburbStatVisible={areStatsVisible}
                                />
                              </PinPoseVertMobile>
                            )
                          }
                        </div>
                        <StyledSurroundingSuburbsWrapper isVisible={isSurroundingSuburbAbnsVisible}>
                          {showSurroundingSuburbStats
                            && (surroundingPostcodes !== null
                              && surroundingPostcodes.map((stat, index) => {
                                const iterator = index + 1
                                const { name, cancelledAbns, postcode } = stat
                                return (
                                  <StyledSurroundingSuburbCircle
                                    key={postcode}
                                    className={`surrounding-suburb-${iterator} ${
                                      isSceneEnding ? 'circles-leave-page-animation' : ''
                                      }`}
                                  >
                                    {
                                      areStatsVisible && (
                                        <StatWithLabel
                                          label={name}
                                          stat={parseInt(cancelledAbns, 10)}
                                          showStat={areStatsVisible}
                                        />
                                      )
                                    }
                                  </StyledSurroundingSuburbCircle>
                                )
                              }))}
                          <AverageMarker
                            cancelledAverage={'2,885'}
                            isSceneEnding={isSceneEnding}
                            isVisible={showSurroundingSuburbStats}
                          />
                        </StyledSurroundingSuburbsWrapper>
                      </>
                    )}
                  >
                    <Tween
                      duration={1}
                      from={{
                        yPercent: -200,
                      }}
                      to={{
                        yPercent: -40,
                      }}
                      ease="Circ.easeOut"
                    />

                    <Tween
                      duration={10}
                    />
                    <Tween
                      duration={2}
                    />
                    <Tween
                      duration={2}
                      to={{ opacity: 0 }}
                    />
                  </Timeline>
                  {
                    isPinAnimating && (
                      <StyledNothingBeatsMessage className={`${isNothingBeatsVisible ? 'appear' : 'disappear'}`}>
                        <PoseContainer
                          initialPose="exit"
                          pose={isNothingBeatsVisible ? 'enter' : 'exit'}
                        >
                          <SplitText charPoses={poseMessageProps}>
                            But nothing beats ambition.
                          </SplitText>
                        </PoseContainer>
                      </StyledNothingBeatsMessage>
                    )
                  }
                  {
                    isPinAnimating && <div className={`green-background ${isSceneEnding ? 'appear' : 'disappear'} `} />
                  }
                </Mobile>

                {isPinAnimating && (
                  <AmbitionExplorerMessage
                    isSceneEnding={isSceneEnding}
                    isFirstMessageVisible={isFirstMessageVisible}
                    isPinAnimating={isPinAnimating}
                    totalCancelledAbns={yourSuburbStat}
                    {...props}
                  />
                )}
              </div>
            )
          }}
        </Scene>
      </Controller>
      {
        isDisclaimerVisible && (
          <Disclaimer
            copy="The above ABN figures are for the period 2014 to 2019."
            sourceName="Australian Business Register"
            sourceLink="https://abr.business.gov.au/"
          />
        )
      }
    </StyledWrapper>
  )
}


AmbitionExplorer.propTypes = {
  apiData: PropTypes.shape({
    state: PropTypes.string,
    suburbs: PropTypes.arrayOf(
      PropTypes.shape({
        cancelledAbns: PropTypes.string,
        name: PropTypes.string,
        postcode: PropTypes.string,
      }),
    ),
  }).isRequired,
  isPinAnimating: PropTypes.bool,
  isSurroundingSuburbAbnsVisible: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  postcodeFieldRef: PropTypes.object.isRequired,
  yourPostcode: PropTypes.string,
}

AmbitionExplorer.defaultProps = {
  isPinAnimating: false,
  isSurroundingSuburbAbnsVisible: false,
  yourPostcode: null,
}

export default AmbitionExplorer
