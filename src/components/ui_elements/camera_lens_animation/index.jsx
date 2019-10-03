import React from 'react'
import styled from 'styled-components'
import {
  ScreenTabletRetinaDown,
  ScreenPhoneDown,
  TabletRetinaDown,
  Desktop,
} from '../../utils/media'

import CameraBackground from '../camera_background'
// ? See 'src/sass/state_animations/_camera.scss' for stylesheet

const StyledContent = styled.div`
  width: 55vh;
  position: absolute;
  right: 25%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;

  .lens-container {
    width: 100%;
    display: block;
  }

  @media ${ScreenTabletRetinaDown} {
    right: 0;
    width: 100%;
    left: 0;
    margin: 0 auto;
    align-items: flex-end;
    top: -20vh;
  }
  
`

const StyledExtraElement = styled.div`
  width: 30%;
  display: block;
  height: 20%;
  background: #289dfd;
  position: absolute;
  top: 37%;
  right: 11%;
  border-top-right-radius: 10vw;
  border-bottom-right-radius: 10vw;
  visibility: hidden;
  z-index: 0;

  @media ${ScreenTabletRetinaDown} {
    visibility: visible;
  }
  

  @media ${ScreenPhoneDown} {
    width: 100px;
    height: 50px;
    right: 9%;
  }
`

const StyledCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #64b8fd;
  right: 13%;
  position: absolute;
  top: 32%;
  float: right;

  @media ${ScreenPhoneDown} {
    width: 20px;
    height: 20px;
  }
`
const ExtraElement = () => (
  <StyledExtraElement>
    <StyledCircle />
  </StyledExtraElement>
)

const Lens = (props) => {
  const { children } = props
  return (
    <>
      <div className="lens">
        <div className="lens__shutter-wrapper">
          <div className="shutter-blade" />
          <div className="shutter-blade" />
          <div className="shutter-blade" />
          <div className="shutter-blade" />
          <div className="shutter-blade" />
          <div className="shutter-blade" />
        </div>
      </div>
      {children}
    </>
  )
}

const CameraLensAnimation = () => (
  <StyledContent>
    <div className="lens-container">
      <Desktop>
        <Lens />
      </Desktop>

      <TabletRetinaDown>
        <div className="lens-outer-wrapper">
          <Lens>
            <ExtraElement />
            <CameraBackground />
          </Lens>
        </div>

      </TabletRetinaDown>
    </div>
  </StyledContent>
)

export default CameraLensAnimation
