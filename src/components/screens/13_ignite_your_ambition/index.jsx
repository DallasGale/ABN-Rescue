import React from 'react'
import posed from 'react-pose'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import {
  Desktop,
  TabletRetinaDown,
} from '../../utils/media'


import { StyledWrapper, StyledMessageWrapper } from './styled'
import { IgniteYourAmbitionText } from '../../styled/typography'

const MainMessagePose = posed.div({
  init: {
    x: '20%',
  },
  enter: {
    x: '-200%',
    transition: {
      x: {
        duration: 5000,
      },
    },
  },
})
const IgniteYourAmbition = (props) => {
  const { isVisible } = props
  return (
    <>
      <Desktop>
        <StyledWrapper>
          <Controller>
            <Scene
              triggerHook="onLeave"
              duration={3000}
              pin
            >
              <Timeline
                wrapper={<div className="sticky" />}
              >
                <Tween
                  duration={10}
                  position="0"
                  from={{ left: '100vw' }}
                  to={{ left: '-80%' }}
                >
                  <StyledMessageWrapper>
                    <IgniteYourAmbitionText className="message" />
                  </StyledMessageWrapper>
                </Tween>
                <Tween
                  duration={10}
                  position="0"
                  from={{ left: '-30%' }}
                  to={{ left: '-100%' }}
                >
                  <div className="panel" />
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </StyledWrapper>
      </Desktop>

      <TabletRetinaDown>
        <StyledWrapper>
          <StyledMessageWrapper>
            <IgniteYourAmbitionText className="message" />
          </StyledMessageWrapper>
        </StyledWrapper>
      </TabletRetinaDown>
    </>
  )
}

export default IgniteYourAmbition
