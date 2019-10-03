import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

import { StyledContent } from './styled'

const StyledConePolygon = posed.polygon()
const StyledDripPath = posed.path()

const ConeUp = posed.div({
  init: {
    y: '150vh',
  },
  in: {
    y: '70vh',
    duration: 1200,
    transition: {
      type: 'spring',
      damping: 100,
    },
    ease: 'ease-out',
  },
  out: {
    y: '150vh',
    duration: 1500,
    transition: {
      type: 'spring',
      damping: 100,
    },
    ease: 'ease-in',
  },
  initialPose: 'out',
})

const DropScoop = posed.div({
  props: { continuesFalling: false },
  init: {
    y: '-150vh',
  },
  in: {
    y: '82vh',
    duration: 200,
    transition: {
      // type: "spring",
      damping: 100,
      mass: 0.5,
    },
  },
  out: {
    y: '50vh',
    duration: 1200,
    transition: {
      type: 'spring',
      damping: 100,
      mass: 0.5,
      delay: 200,
    },
  },
  initialPose: 'init',
})

const DropScoopRHS = posed.div({
  init: {
    y: '-150vh',
  },
  in: {
    y: '52vh',
    transition: {
      duration: 200,
    },
  },
  out: {
    y: '150vh',
    duration: 1200,
    transition: {
      type: 'spring',
      damping: 100,
      mass: 0.5,
      delay: 200,
    },
  },
  initialPose: 'init',
})

const DripMotion = posed.div({
  props: { inDelay: 0, outDelay: 0, isDripSlow: false },
  init: {
    y: '35vh',
  },
  in: {
    y: '50vh',
    delay: ({ inDelay }) => inDelay,
    transition: {
      duration: 2000,
    },
  },
  out: {
    delay: ({ outDelay }) => outDelay,
    y: '150vh',
    duration: 2200,
    ease: 'ease-out',
    transition: {
      type: 'spring',
      damping: 100,
    },
  },
  initialPose: 'init',
})

const Cone = (props) => {
  const { isConeVisible, isConeShaking, coneName } = props
  return (
    <>
      <ConeUp
        initialPose="init"
        pose={isConeVisible ? 'in' : 'out'}
        className={`${coneName} ${isConeShaking ? 'shake' : ' '}`}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <StyledConePolygon
            className="cone-polygon"
            points="25,0 75,0 50,100"
          />
        </svg>
      </ConeUp>
    </>
  )
}

/*

I want to drop the scoops 'in' to their cone on the left [continuesFalling="false"], and then leave them.
I want to drop the scoops 'in' to their cone on the right [continuesFalling="true"],
and then use 'out' to have them fall at the
same time as the cones leave

*/
const Scoop = (props) => {
  const {
    scoopID,
    scoopSize,
    scoopColor,
    isScoopVisible,
    continuesFalling,
  } = props
  let scoopClass = ['scoop', `scoop-${scoopID}`, `scoop-${scoopSize}`]
  let ballClass = ['ball', `ball-${scoopColor}`]
  scoopClass = scoopClass.join(' ')
  ballClass = ballClass.join(' ')
  return (
    <>
      <DropScoop
        initialPose="init"
        pose={isScoopVisible ? 'in' : 'out'}
        className={scoopClass}
        continuesFalling={continuesFalling}
      >
        <div className={ballClass} />
      </DropScoop>
    </>
  )
}

const ScoopRHS = (props) => {
  const {
    scoopID,
    scoopSize,
    scoopColor,
    isScoopVisible,
    continuesFalling,
  } = props
  let scoopClass = ['scoop', `scoop-${scoopID}`, `scoop-${scoopSize}`]
  let ballClass = ['ball', `ball-${scoopColor}`]
  scoopClass = scoopClass.join(' ')
  ballClass = ballClass.join(' ')
  return (
    <>
      <DropScoopRHS
        initialPose="init"
        pose={isScoopVisible ? 'in' : 'out'}
        className={scoopClass}
        continuesFalling={continuesFalling}
      >
        <div className={ballClass} />
      </DropScoopRHS>
    </>
  )
}

const Drip = (props) => {
  const { isDripSlow, inDelay, outDelay } = props
  return (
    <>
      <div className="drip">
        <DripMotion
          initialPose="init"
          pose={isDripSlow ? 'in' : 'out'}
          inDelay={inDelay}
          outDelay={outDelay}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="700px"
            height="1519px"
            viewBox="0 0 700 1519"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(350.000000, 759.500000) scale(-1, 1) rotate(-180.000000) translate(-350.000000, -759.500000) "
              stroke="none"
            >
              <StyledDripPath d="M346.54023,1518.92834 C321.182545,1444.35131 7.32183908,463.960423 0.563218391,370.801208 C-1.20689655,347.029547 1.93103448,309.857644 8.04597701,281.58864 C20.7586207,222.113595 47.1494253,168.604411 86.0114943,123.172085 C116.103448,88.0193958 146.034483,63.4216918 184.574713,42.2199396 C224.402299,20.37571 264.390805,7.61794562 311.298851,1.74386707 C329.885057,-0.550694864 369.954023,-0.550694864 388.54023,1.74386707 C436.252874,7.7097281 476.965517,20.9264048 517.678161,43.6884592 C552.275862,63.0545619 580.356322,85.5412689 607.310345,115.645921 C663.471264,178.425136 694.448276,254.053897 699.195402,340.145861 C700.643678,366.762779 698.712644,387.689184 691.873563,419.537704 C665.724138,540.874139 348.068966,1521.48318 346.54023,1518.92834 Z" />
            </g>
          </svg>
        </DripMotion>
      </div>
    </>
  )
}

const Drips = () => (
  <div className="drips">
    <div className="drips-inner">
      <Drip inDelay="0" outDelay="2600" />
      <Drip inDelay="0" outDelay="3200" />
      <Drip inDelay="0" outDelay="3500" />
      <Drip inDelay="0" outDelay="2700" />
      <Drip inDelay="0" outDelay="3900" />
    </div>
  </div>
)

const SlowDrips = () => {
  const [isDrip1Visible, setIsDrip1Visible] = useState(true)
  const [isDrip2Visible, setIsDrip2Visible] = useState(true)
  useEffect(() => {
    const drip1Timer = setTimeout(() => {
      setIsDrip1Visible(false)
    }, 4200)
    const drip2Timer = setTimeout(() => {
      setIsDrip2Visible(false)
    }, 4000)
    return () => {
      clearTimeout(drip1Timer)
      clearTimeout(drip2Timer)
    }
  }, [])
  return (
    <>
      <div className="drips">
        <div className="drips-inner">
          <Drip isDripSlow={isDrip1Visible} inDelay="1" outDelay="0" />
          <Drip isDripSlow={isDrip2Visible} inDelay="500" outDelay="0" />
        </div>
      </div>
    </>
  )
}

const Icecream1 = (props) => {
  const {
    areSlowDripsVisible,
    isConeVisible,
    isScoop1Visible,
    isScoop2Visible,
    isScoop3Visible,
    isDripsVisible,
  } = props
  return (
    <>
      <div className={`icecream icecream-1 ${isScoop1Visible ? 'dip' : ' '}`}>
        <Cone {...props} coneName="cone cone-1" />
        <div className="scoops">
          <div
            className={`scoops-inner ${
              !isConeVisible ? 'scoop-becomes-sun' : ' '
              }`}
          >
            {isScoop3Visible && (
              <Scoop
                isScoopVisible={isScoop3Visible}
                continuesFalling={false}
                scoopID="3"
                scoopColor="orange"
                scoopSize="large"
              />
            )}
            {isScoop2Visible && (
              <Scoop
                isScoopVisible={isScoop2Visible}
                continuesFalling={false}
                scoopID="2"
                scoopColor="white"
                scoopSize="small"
              />
            )}
            {isScoop1Visible && (
              <Scoop
                isScoopVisible={isScoop1Visible}
                continuesFalling={false}
                scoopID="1"
                scoopColor="white"
                scoopSize="large"
              />
            )}
          </div>
          {areSlowDripsVisible && <SlowDrips />}
          {isDripsVisible && <Drips />}
        </div>
      </div>
    </>
  )
}

const Icecream2 = (props) => {
  const { isConeVisible, isScoop4Visible, isScoop5Visible } = props
  return (
    <>
      <div className={`icecream icecream-2 ${isScoop4Visible ? 'dip' : ' '}`}>
        <Cone {...props} coneName="cone cone-2" />
        <div className="scoops">
          <div
            className={`scoops-inner ${
              !isConeVisible ? 'scoop-becomes-sun' : ' '
              }`}
          >
            {isScoop5Visible && (
              <ScoopRHS
                isScoopVisible={isScoop5Visible}
                scoopID="5"
                scoopColor="white"
                scoopSize="large"
              />
            )}
            {isScoop4Visible && (
              <ScoopRHS
                isScoopVisible={isScoop4Visible}
                scoopID="4"
                scoopColor="orange"
                scoopSize="large"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const IceCreamAnimation = () => {
  const [isCone1Visible, setIsCone1Visible] = useState(false)
  const [isCone2Visible, setIsCone2Visible] = useState(false)
  const [isScoop1Visible, setIsScoop1Visible] = useState(false)
  const [isScoop2Visible, setIsScoop2Visible] = useState(false)
  const [isScoop3Visible, setIsScoop3Visible] = useState(false)
  const [isScoop4Visible, setIsScoop4Visible] = useState(false)
  const [isScoop5Visible, setIsScoop5Visible] = useState(false)
  const [isDripsVisible, setIsDripsVisible] = useState(false)
  const [isConeRightShaking, setIsConeRightShaking] = useState(false)
  const [isConeLeftShaking, setIsConeLeftShaking] = useState(false)
  const [areSlowDripsVisible, setAreSlowDripsVisible] = useState(false)

  useEffect(() => {
    const cone1TimerIn = setTimeout(() => {
      setIsCone1Visible(true)
    }, 0)
    const cone2TimerIn = setTimeout(() => {
      setIsCone2Visible(true)
    }, 200)

    const scoop1Timer = setTimeout(() => {
      setIsScoop1Visible(true)
    }, 500)

    const scoop1ShakeTimer = setTimeout(() => {
      setIsConeLeftShaking(true)
    }, 800)

    const slowDripsTimer = setTimeout(() => {
      setAreSlowDripsVisible(true)
    }, 900)

    const scoop2Timer = setTimeout(() => {
      setIsScoop2Visible(true)
    }, 1300)

    const scoop4Timer = setTimeout(() => {
      setIsScoop4Visible(true)
    }, 1700)

    const scoop4ShakeTimer = setTimeout(() => {
      setIsConeRightShaking(true)
    }, 1900)

    const scoop3Timer = setTimeout(() => {
      setIsScoop3Visible(true)
      setIsConeLeftShaking(false)
    }, 1580)

    const scoop2ShakeTimer = setTimeout(() => {
      setIsConeLeftShaking(true)
    }, 1600)

    const scoop3ShakeTimer = setTimeout(() => {
      setIsConeLeftShaking(true)
    }, 1650)

    const scoop5Timer = setTimeout(() => {
      setIsScoop5Visible(true)
      setIsConeRightShaking(false)
    }, 2100)

    const scoop5ShakeTimer = setTimeout(() => {
      setIsConeRightShaking(true)
    }, 2300)

    const dripsTimer = setTimeout(() => {
      setIsDripsVisible(true)
    }, 3000)

    const coneTimerOut1 = setTimeout(() => {
      setIsCone2Visible(false)
    }, 4500)
    const coneTimerOut2 = setTimeout(() => {
      setIsCone1Visible(false)
    }, 4800)

    return () => {
      clearTimeout(cone1TimerIn)
      clearTimeout(cone2TimerIn)
      clearTimeout(scoop1Timer)
      clearTimeout(scoop1ShakeTimer)
      clearTimeout(scoop2Timer)
      clearTimeout(scoop2ShakeTimer)
      clearTimeout(scoop3Timer)
      clearTimeout(scoop3ShakeTimer)
      clearTimeout(scoop4Timer)
      clearTimeout(scoop4ShakeTimer)
      clearTimeout(scoop5Timer)
      clearTimeout(scoop5ShakeTimer)
      clearTimeout(dripsTimer)
      clearTimeout(slowDripsTimer)
      clearTimeout(coneTimerOut1)
      clearTimeout(coneTimerOut2)
    }
  }, [])

  return (
    <StyledContent>
      <div className="icecream-container">
        <Icecream1
          isConeVisible={isCone1Visible}
          isScoop1Visible={isScoop1Visible}
          isScoop2Visible={isScoop2Visible}
          isScoop3Visible={isScoop3Visible}
          isDripsVisible={isDripsVisible}
          isConeShaking={isConeLeftShaking}
          areSlowDripsVisible={areSlowDripsVisible}
        />
        <Icecream2
          className="cone-2"
          isConeVisible={isCone2Visible}
          isScoop4Visible={isScoop4Visible}
          isScoop5Visible={isScoop5Visible}
          isConeShaking={isConeRightShaking}
          isDripsVisible={isDripsVisible}
        />
      </div>
    </StyledContent>
  )
}

export default IceCreamAnimation
