import styled from 'styled-components'
import pxToRem from '../../utils/px_to_rem'
import { colorWhite } from '../../styles/colors'
import { ScreenPhoneDown } from '../../utils/media'
import { zGlobalLogo } from '../../utils/zIndex'

export const StyledTagline = styled.span`
font-size: ${pxToRem(15)};
    
    color: ${colorWhite};
    width: ${pxToRem(140)};
    line-height: ${pxToRem(10)};
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;

    height: 22px;
    display: flex;
    align-items: center;
    
    @media ${ScreenPhoneDown} {
      left: ${pxToRem(48)};
      font-size: ${pxToRem(12)};
      width: ${pxToRem(100)};
    }
`

export const StyledTaglineWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${pxToRem(70)};
    overflow: hidden;
    height: 22px;
    width: 0;
    transition: width 0.4s ease-in-out;
    
    &.show {
      
      width: ${pxToRem(140)};
      @media ${ScreenPhoneDown} {
      width: ${pxToRem(100)};
    }
    @media only screen and (max-width: 480px) {
      width: 0;
    }
    }
`
export const StyledButton = styled.button`
  background: none;
  border: 0;
  height: ${pxToRem(60)};
  width: ${pxToRem(60)};
  text-align: left;
  margin-left: 0;
  margin-right: auto;
  position: relative;
  margin: 0;
  padding: 0;
  z-index: ${zGlobalLogo};
  @media ${ScreenPhoneDown} {
    height: ${pxToRem(40)};
    width: ${pxToRem(40)};
  }
`
