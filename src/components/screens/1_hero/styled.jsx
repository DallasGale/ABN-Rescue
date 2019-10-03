import styled from 'styled-components'
import { colorWhite } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenSmallDeviceDown, ScreenPhoneDown } from '../../utils/media'


export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const StyledHeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media ${ScreenPhoneDown} {
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 ${pxToRem(20)};
  }
  @media ${ScreenSmallDeviceDown} {
    padding: 0 ${pxToRem(20)};
    
  }
`

export const StyledTitle = styled.h1`
  position: fixed;
  color: ${colorWhite};
  display: block;
  padding: 0 ${pxToRem(60)};
  font-size: ${pxToRem(140)};
  text-align: center;
  width: 100%;
  z-index: 1;
  @media ${ScreenPhoneDown} {
    padding: 0 0 ${pxToRem(20)};
    font-size: ${pxToRem(100)};
    text-align: left;
    line-height: 0.9;
    left: 0px;
    position: relative;
  }
  @media ${ScreenSmallDeviceDown} {
    font-size: ${pxToRem(60)};
    
  }
`

export const StyledVideo = styled.div`
  top: 0;
  bottom: 0;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  img {
    display: none;
    object-fit: cover;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 768px) {
      display: inline-block;
    }
  }
`
export const StyledPlayButton = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  left: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 2;
  cursor: pointer;
  svg {
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
  }
  @media ${ScreenPhoneDown} {
    bottom: auto;
    position: relative;
    left: 0px;
  }
`
export const StyledPlayIcon = styled.path`
  fill: ${colorWhite};
`

export const StyledPlayText = styled.h2`
  color: ${colorWhite};
  font-size: ${pxToRem(24)};
  margin-left: 10px;
`
