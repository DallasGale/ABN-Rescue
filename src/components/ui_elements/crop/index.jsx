import React from 'react'
import styled from 'styled-components'
import { ScreenTabletRetinaDown } from '../../utils/media'


const StyledWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  transform: scale(1);
  background-position: center center !important;
  background-size: 800% !important;
  background-repeat: no-repeat !important;
  background: url('static/media/crop.svg');


  @media ${ScreenTabletRetinaDown} {
    background-size: 800% !important;
    background: url('static/media/crop-device.svg');
  }

  &.enter {
    transition: all 6s ease-out;
    background-size: 100% !important;

    @media ${ScreenTabletRetinaDown} {
      background-size: 150% !important;
    }
  }
`

const Crop = (props) => {
  const { isCropVisible } = props

  return (
    <StyledWrapper className={`${isCropVisible ? 'enter' : ''}`} />
  )
}

export default Crop
