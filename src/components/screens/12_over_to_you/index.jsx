import React, { useState } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import { StyledMessageH2 } from '../../styled/typography'

import { StyledWrapper, StyledContent } from './styled'

const OverToYou = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false)

  return (
    <StyledWrapper>
      <Controller>
        <Scene
          triggerHook="onLeave"
          duration={2000}
          pin
        >
          {progress => {
            // console.log(progress)

            if (progress > 0.2 && progress < 0.85) setIsMessageVisible(true)
            if (progress < 0.2 || progress > 0.85) setIsMessageVisible(false)

            return (
              <div className="sticky">
                <Timeline
                  target={(
                    <StyledContent>
                      <StyledMessageH2 className={`message ${isMessageVisible ? 'appear' : 'disappear'}`}>
                        Now over to you.
                      </StyledMessageH2>
                    </StyledContent>
                  )}>
                  <Tween duration={10} />
                </Timeline>
              </div>
            )
          }
          }
        </Scene>
      </Controller>
    </StyledWrapper>
  )
}
export default OverToYou
