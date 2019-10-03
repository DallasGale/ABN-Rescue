import React from 'react'
import posed from 'react-pose'
import PropTypes from 'prop-types'
import { Tween, Timeline } from 'react-gsap'

import { colorGreen } from '../../../styles/colors'

import {
  StyledNineMillionAustraliansBlock,
  StyledNineMillionAusMessage,
  StyledTimeWeChangedContent,
  StyledTimeWeChangedH2,
} from '../styled'

import { StyledMessage } from '../../../../styled'

import {
  Desktop,
  TabletRetinaDown,
  Mobile,
} from '../../../utils/media'

import DotGrid from '../../../ui_elements/dot_grid'
import { StyledDotGridWrapper } from '../../../ui_elements/dot_grid/styled'

import pxToRem from '../../../utils/px_to_rem'

import FilledCircle from '../../../ui_elements/filled-circle'
import AllyTextExtractor from '../../../utils/ally_text_extractor'

const DotZoomingPose = posed.div({
  init: {
    width:'100vw',
    height: '100vh',
    borderRadius: pxToRem(5000),
    position: 'absolute',
    zIndex: 4,
  },
  enter: {
    width: pxToRem(22),
    height: pxToRem(22),
    left: '50%',
    top: '18%',
    transition: {
      default: {
        duration: 80,
        ease: 'easeOut',
      },
    }
  },
  leave: {
    transition: {
      duration: 80,
    },
  },
})

const DotZoomingPoseTablet = posed.div({
  init: {
    width:'100vw',
    height: '100vh',
    borderRadius: pxToRem(5000),
    position: 'absolute',
    zIndex: 4,
  },
  enter: {
    width: pxToRem(20),
    height: pxToRem(20),
    left: '5vw',
    top: '15.5vh',
    transition: {
      default: {
        duration: 80,
        ease: 'easeOut',
      },
    }
  },
  leave: {
    transition: {
      duration: 80,
    },
  },
})


const DotZoomingPoseMobile = posed.div({
  init: {
    width:'100vw',
    height: '100vh',
    borderRadius: pxToRem(5000),
    position: 'absolute',
    zIndex: 4,
  },
  enter: {
    width: pxToRem(12),
    height: pxToRem(12),
    left: '5vw',
    top: '15.5vh',
    transition: {
      default: {
        duration: 80,
        ease: 'easeOut',
      },
    }
  },
  leave: {
    transition: {
      duration: 80,
    },
  },
})

const StartABizTimeline = (props) => {
  const {
    progress,
    showNavy,
    is90timesTextVisible,
    is6PercentTextVisible,
    is9millionAusTextVisible,
    isTimeWeChangedTextVisible,
    isTimeWeChangedScreenVisible,
    isZoomOutDotVisible,
    showDots,
    areDotsFalling,
  } = props
  // console.log('isZoomOutDotVisible', isZoomOutDotVisible)
  return (
    <div>
      <Timeline
        totalProgress={progress}
        paused
        target={(
          <StyledNineMillionAusMessage
            aria-hidden="true"
            className={`message_1 ${is9millionAusTextVisible ? 'appear' : 'disappear'}`}
          >
            9 million australians
            <br />
            want to start a business.
          </StyledNineMillionAusMessage>
        )}
      >
        <Tween duration={20} />
      </Timeline>


      <Timeline
        totalProgress={progress}
        paused
        target={(
          <StyledTimeWeChangedH2
            aria-hidden="true"
            className={`${isTimeWeChangedTextVisible ? 'appear' : 'disappear'}`}
          >
            It&apos;s time we&nbsp;
            changed that.
          </StyledTimeWeChangedH2>
        )}>
        <Tween duration={20} />
      </Timeline>

      <Timeline
        totalProgress={progress}
        paused
        target={<StyledTimeWeChangedContent className={`${isTimeWeChangedScreenVisible ? 'appear' : 'disappear'}`} />}
      >
        <Tween duration={20} />
      </Timeline>

      <Timeline
        totalProgress={progress}
        paused
        target={(
          <div>
            {
              showNavy && (
                <StyledNineMillionAustraliansBlock className="navy" />
              )
            }
          </div>
        )}
      />
      <div className="layout-grid">
        <div>
          <Timeline
            totalProgress={progress}
            paused
            target={(
              <StyledMessage
                aria-hidden="true"
                className={`message_2 ${is90timesTextVisible ? 'appear' : 'disappear'}`}
                color={colorGreen}
              >
                That&apos;s 90 times
                <br />
                the crowd at the
                <br />
                afl grand final.
              </StyledMessage>
            )}
          >
            <Tween duration={20} />
          </Timeline>

          <Timeline
            totalProgress={progress}
            paused
            target={(
              <StyledMessage
                aria-hidden="true"
                className={`message_3 ${is6PercentTextVisible ? 'appear' : 'disappear'}`}
                color={colorGreen}>
                But only
                <br />
                6% of the
                <br />
                9 million do.
              </StyledMessage>
            )}
          >
            <Tween duration={20} />
          </Timeline>
        </div>
        <div>
          <Timeline
            totalProgress={progress}
            target={(
              <div>
                <StyledDotGridWrapper>
                  {
                    showDots && (
                      <DotGrid
                        isFadingAway={!showDots}
                        rowDisappear={areDotsFalling}
                      />
                    )
                  }
                </StyledDotGridWrapper>
              </div>
            )}
          />
        </div>
      </div>
      <Timeline
        totalProgress={progress}
        paused
        target={<StyledNineMillionAustraliansBlock className={`${!is9millionAusTextVisible ? 'disappear' : ''}`} />}
      >
        <Tween duration={20} />
      </Timeline>
      {isZoomOutDotVisible && (
        <>
          <Desktop>
            <DotZoomingPose
              initialPose="init"
              pose={showNavy ? 'enter' : 'leave'}
            >
              <FilledCircle color={colorGreen} />
            </DotZoomingPose>
          </Desktop>
          <TabletRetinaDown>
            <DotZoomingPoseTablet
              initialPose="init"
              pose={showNavy ? 'enter' : 'leave'}
            >
              <FilledCircle color={colorGreen} />
            </DotZoomingPoseTablet>
          </TabletRetinaDown>
          <Mobile>
            <DotZoomingPoseMobile
              initialPose="init"
              pose={showNavy ? 'enter' : 'leave'}
            >
              <FilledCircle color={colorGreen} />
            </DotZoomingPoseMobile>
          </Mobile>
        </>
      )}


      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="9 million australians want to start a business.
        It's time we changed that.
        That's 90 times the crowd at the AFL grand final.
        But only 6% of the 9 million do."
        />

    </div>
  )
}

export default StartABizTimeline
