import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import { colorOrangeBright, colorNavy } from '../../styles/colors'
import { StyledContent, StyledWrapper, StyledH2, StyledRescueH2 } from './styled'

const BackingSmallBusiness = (props) => {
  const { duration } = props

  const [isOurAmbitionTextVisible, setIsOurAmbitionTextVisible] = useState(false)
  const [isRescueAustraliaTextVisible, setIsRescueAustraliaTextVisible] = useState(false)

  return (
    <StyledWrapper>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={duration}
          pin
          reverse
        >
          {progress => {

            // console.log(progress)

            if (progress > 0.48 && progress < 0.9) {
              setIsOurAmbitionTextVisible(true)
            } else {
              setIsOurAmbitionTextVisible(false)
            }

            if (progress > 0.65 && progress < 0.9) {
              setIsRescueAustraliaTextVisible(true)
            } else {
              setIsRescueAustraliaTextVisible(false)
            }
            return (
              <div className="sticky">
                <Timeline
                  totalProgress={progress}
                  paused
                  target={(
                    <StyledContent>

                      <Timeline
                        totalProgress={progress}
                        paused
                        target={(
                          <StyledH2>
                            For over 165 years,
                          </StyledH2>
                        )}
                      >
                        <Tween
                          duration={0.5}
                          to={{ color: colorNavy }}
                        />
                        <Tween
                          duration={1.75}
                        />
                        <Tween
                          duration={0.25}
                          to={{ color: colorOrangeBright }}
                        />
                        <Tween
                          duration={0.5}
                        />
                        <Tween
                          duration={0.5}
                          to={{ css: { opacity: 0 } }}
                        />
                        <Tween duration={6} />
                      </Timeline>

                      <Timeline
                        totalProgress={progress}
                        paused
                        target={(
                          <StyledH2>
                            CGU has been insuring ambitious aussies.
                          </StyledH2>
                        )}
                      >
                        <Tween
                          duration={2.25}
                        />
                        <Tween
                          duration={0.25}
                          to={{ color: colorNavy }}
                        />
                        <Tween
                          duration={1.25}
                        />
                        <Tween
                          duration={0.5}
                          to={{ css: { opacity: 0 } }}
                        />
                        <Tween duration={5.75} />
                      </Timeline>
                      <Timeline
                        totalProgress={progress}
                        paused
                        target={(
                          <div className="panel top">
                            <Timeline
                              totalProgress={progress}
                              paused
                              target={(
                                <StyledRescueH2 className={`message message__top ${isOurAmbitionTextVisible ? 'appear' : 'disappear'}`} zIndex={2}>
                                  Our ambition?
                                </StyledRescueH2>
                              )}
                            >
                              <Tween
                                delay={4.5}
                                duration={1.5}
                                from={{
                                  yPercent: -130,
                                }}
                                to={{
                                  yPercent: 0,
                                }}
                                ease="Circ.easeOut"
                              />
                              <Tween
                                duration={4}
                              />
                            </Timeline>
                          </div>
                        )}
                      >
                        <Tween
                          delay={3.5}
                          duration={2}
                          from={{
                            top: '-90%',
                          }}
                          to={{
                            top: '0',
                          }}
                          ease="Circ.easeOut"
                        />
                        <Tween
                          duration={4}
                        />
                        <Tween
                          duration={0.5}
                          to={{
                            top: 0,
                            height: '120vh',
                          }}
                        />
                      </Timeline>
                      <Timeline
                        totalProgress={progress}
                        paused
                        target={(
                          <div className="panel bottom">
                            <Timeline
                              totalProgress={progress}
                              paused
                              target={(
                                <StyledRescueH2 className={`message message__bottom ${isRescueAustraliaTextVisible ? 'appear' : 'disappear'}`} zIndex={2}>
                                  To rescue australia&apos;s ambition.
                                </StyledRescueH2>
                              )}
                            >
                              <Tween
                                delay={4.5}
                                duration={1.5}
                                from={{
                                  top: '100%',
                                }}
                                to={{
                                  top: '0%',
                                }}
                                ease="Circ.easeOut"
                              />
                              <Tween
                                duration={4}
                              />
                            </Timeline>
                          </div>
                        )}
                      >
                        <Tween
                          delay={5}
                          duration={1}
                          from={{
                            bottom: '-90%',
                          }}
                          to={{
                            bottom: '0',
                            visibility: 'visible',
                          }}
                          ease="Circ.easeOut"
                        />
                        <Tween duration={3} />
                        <Tween
                          duration={1}
                          from={{
                            bottom: '0',
                          }}
                          to={{
                            bottom: '-90%',
                          }}
                        />
                      </Timeline>
                    </StyledContent>
                  )}
                />
              </div>
            )
          }
          }
        </Scene>
      </Controller>
    </StyledWrapper>
  )
}

BackingSmallBusiness.propTypes = {
  duration: PropTypes.number.isRequired,
}

export default BackingSmallBusiness
