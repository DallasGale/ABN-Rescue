import styled from 'styled-components'

import { colorNavy } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../../utils/media'

import { zEditLocation } from '../../utils/zIndex'

export const StyledWrapper = styled.div`
  font-family: neptune-bold;
  font-size: ${pxToRem(15)};
  color: ${props => (props.theme !== null ? props.theme : colorNavy)};
  width: 300px; 
  position: fixed;
  z-index: ${zEditLocation};
  height: auto;
  text-align: right;
  top: ${pxToRem(100)};
  right: 30px;


  @media ${ScreenTabletRetinaDown} {
    font-size: ${pxToRem(15)};
    top: ${pxToRem(80)};
    padding: 0 ${pxToRem(8)};
  }

  @media ${ScreenPhoneDown} {
    right: ${pxToRem(30)};
    font-size: ${pxToRem(12)};
    top: ${pxToRem(70)};
  }
`

export const StyledButton = styled.button`
  background: none;
  color: ${props => (props.theme !== null ? props.theme : colorNavy)};
  border: 0;
  text-decoration: underline;
`
