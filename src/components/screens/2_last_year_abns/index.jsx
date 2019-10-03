import React from 'react'
import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { Tween, Timeline } from 'react-gsap'

import {
  StyledSpeechBubbleBox,
  StyledCorner,
  StyledBlueShape,
  StyledMessageWrapper,
} from './styled'

import { StyledMessageH2, CountUpWrapper } from '../../styled/typography'

import { colorGreen, colorWhite } from '../../styles/colors'

import Disclaimer from '../../ui_elements/disclaimer'

import AllyTextExtractor from '../../utils/ally_text_extractor'


const LastYearsPoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
  },
})

const lastYearsPoseMessageProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const MessageOnePoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
  },
})

const messageOnePoseProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const MessageaTwoPoseContainer = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
  },
})

const messageTwoPoseProps = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const LastYearAbns = (props) => {
  const {
    isDislaimerVisible,
    isSpeechBubbleBoxVisible,
    isSpeechBubbleExploding,
    isLastYearsAbnTextVisible,
    isScreenVisible,
    is48HoursTextVisible,
    progress,
    isLostAmbitionTextVisible,
    isBlueWedgeTicking,
    isSceneEnding,

  } = props
  return (
    <>
      <Timeline
        totalProgress={progress}
        paused
        target={(
          <div>
            <StyledSpeechBubbleBox className={`${isSpeechBubbleBoxVisible ? 'appear' : ''} ${isSpeechBubbleExploding ? 'explode' : ''}`}>
              {!isSpeechBubbleExploding && <StyledCorner />}

              <StyledMessageH2
                aria-hidden="true"
                className={`${!isLastYearsAbnTextVisible ? 'disappear' : 'appear'}`}>


                  <LastYearsPoseContainer
                    initialPose="exit"
                    pose={isSpeechBubbleBoxVisible ? 'enter' : 'exit'}
                  >
                    <SplitText
                      charPoses={lastYearsPoseMessageProps}
                    >
                      Last year&nbsp;
                        </SplitText>
                    {isSpeechBubbleBoxVisible && (
                      <CountUpWrapper>
                        <CountUp
                          end={424144}
                          separator=","
                          duration={2}
                          start={0}
                          useEasing={false}
                        />
                      </CountUpWrapper>
                    )}
                    <SplitText
                      className="lowercase-s"
                      charPoses={lastYearsPoseMessageProps}
                    >
                      ABNs&nbsp;
                        </SplitText>
                    <SplitText
                      charPoses={lastYearsPoseMessageProps}
                    >
                      didn&apos;t get off the ground.
                        </SplitText>
                  </LastYearsPoseContainer>
              </StyledMessageH2>
            </StyledSpeechBubbleBox>
            {
              isDislaimerVisible && (
                <Disclaimer
                  color={colorWhite}
                  copy="The above ABN figures are for the period 01/05/2018 – 31/04/2019 from bulk data extracted at 7:00AM on 05/05/2019."
                  sourceName="data.gov.au"
                  sourceLink="http://data.gov.au"
                />
              )
            }
          </div>
        )}
      >
        <Tween duration={20} />
      </Timeline>

      <Timeline
        totalProgress={progress}
        paused
        target={(
          <StyledMessageWrapper>
            <StyledMessageH2
              aria-hidden="true"
              style={{ zIndex: 1 }}
              className={`${is48HoursTextVisible ? 'appear appear-slower' : 'disappear disappear-slower'}`}>
              <MessageOnePoseContainer
                initialPose="exit"
                pose={isScreenVisible ? 'enter' : 'exit'}
              >
                <SplitText
                  charPoses={messageOnePoseProps}
                >
                  That&apos;s 48 every hour.
                </SplitText>
              </MessageOnePoseContainer>
            </StyledMessageH2>
          </StyledMessageWrapper>
        )}
      >
        <Tween duration={20} />
      </Timeline>

      {/* IT'S ALOT OF LOST AMBITION .... */}
      <Timeline
        totalProgress={progress}
        paused
        target={(
          <StyledMessageWrapper>
            <StyledMessageH2
              aria-hidden="true"
              style={{ zIndex: 1 }}
              className={`${isLostAmbitionTextVisible ? 'appear appear-slower' : 'disappear disappear-slower'}`}>
              <MessageaTwoPoseContainer
                initialPose="exit"
                pose={isScreenVisible ? 'enter' : 'exit'}
              >
                <SplitText
                  charPoses={messageTwoPoseProps}
                >
                  It&apos;s a lot of lost ambition.
                </SplitText>
              </MessageaTwoPoseContainer>
            </StyledMessageH2>
          </StyledMessageWrapper>
        )}
      >
        <Tween duration={20} />
      </Timeline>


      {/* BLUE WEDGE .... to be automated */}
      {
        isBlueWedgeTicking && (
          <>
            <StyledBlueShape isSceneEnding={isSceneEnding} />
            <div style={{ background: colorGreen, position: 'absolute', zIndex: 0, width: '100vw', height: '100vh', left: 0, top: 0 }} />
          </>

        )
      }

      {/* For Screen Reader */}
      <AllyTextExtractor
        Element="h2"
        text="
          Last Year 424,144 ABN's didn't get off the ground.
          That's 48 every hour.
          It's a lot of lost ambition."
        />
    </>
  )
}

export default LastYearAbns
