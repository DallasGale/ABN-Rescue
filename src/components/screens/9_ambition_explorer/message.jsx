import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CountUp from 'react-countup'
import posed from 'react-pose'
import SplitText from 'react-pose-text'

import { StyledMessageH2 } from '../../styled/typography'
import {
  ScreenTabletRetinaDown,
  ScreenTabletDown,
  ScreenDesktopDown,
  ScreenSmallLaptopDown,
  ScreenPhoneDown,
} from '../../utils/media'

import pxToRem from '../../utils/px_to_rem'


const PoseContainerFirst = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
  },
})

const PoseContainerSecond = posed.div({
  enter: {
    beforeChildren: true,
    staggerChildren: 30,
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

const Message = styled(StyledMessageH2)`
  position: absolute;
  top: 18%;
  z-index: 5;
  max-width: 70vw;

  @media ${ScreenDesktopDown} {
    max-width: 75vw;
  }

  @media ${ScreenSmallLaptopDown} {
    max-width: 76vw;
    font-size: ${pxToRem(60)};
  }

  @media ${ScreenTabletRetinaDown} {
    max-width: 90%;
    font-size: ${pxToRem(105)};
  }

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(75)};
  }


  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(45)};
  }

`

const StyledWrapper = styled.div`
  &.fadeOut {
    opacity: 0;
  }

  @media ${ScreenTabletRetinaDown} {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    h2 {
      padding-top: 0;
    }
  }
`

const AmbitionExplorerMessage = (props) => {
  const {
    isFirstMessageVisible,
    isPinAnimating,
    totalCancelledAbns,
    isSceneEnding,
  } = props

  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timedMessage = setTimeout(() => {
      setShowMessage(true)
    }, 1300)

    return (() => {
      clearInterval(timedMessage)
    })
  }, [])
  return (
    <StyledWrapper className={`${isSceneEnding ? 'fadeOut' : ''}`}>
      {showMessage && (
        isFirstMessageVisible ? (
          <Message>
            <PoseContainerFirst
              initialPose="exit"
              pose={isPinAnimating ? 'enter' : 'exit'}
            >
              <SplitText charPoses={poseMessageProps}>
                OVER THE PAST FEW&nbsp;
              </SplitText>
              {/* <Desktop> */}
              <SplitText charPoses={poseMessageProps}>
                YEARS&nbsp;
                </SplitText>
              {isPinAnimating && (
                <CountUp
                  end={totalCancelledAbns}
                  separator=","
                  duration={2}
                  start={0}
                />
              )}
              <br />
              <SplitText className="lowercase-s" charPoses={poseMessageProps}>
                ABNs
              </SplitText>
              &nbsp;
              <SplitText charPoses={poseMessageProps}>
                WERE CANCELLED IN YOUR SUBURB. CRAZY, RIGHT?
              </SplitText>
            </PoseContainerFirst>
          </Message>
        ) : (
            <Message>
              <PoseContainerSecond
                initialPose="exit"
                pose={isPinAnimating ? 'enter' : 'exit'}
              >
                <SplitText charPoses={poseMessageProps}>
                  It&apos;s a problem
                </SplitText>
                <br />
                <SplitText charPoses={poseMessageProps}>
                  felt everywhere.
                </SplitText>
              </PoseContainerSecond>
            </Message>
          )
      )}
    </StyledWrapper>
  )
}

AmbitionExplorerMessage.propTypes = {
  isSceneEnding: PropTypes.bool,
  isFirstMessageVisible: PropTypes.bool,
  isPinAnimating: PropTypes.bool,
  totalCancelledAbns: PropTypes.number,
}

AmbitionExplorerMessage.defaultProps = {
  isSceneEnding: false,
  isFirstMessageVisible: false,
  isPinAnimating: false,
  totalCancelledAbns: 0,
}

export default AmbitionExplorerMessage
