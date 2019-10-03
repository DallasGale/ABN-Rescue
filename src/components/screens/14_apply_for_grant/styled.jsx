import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { colorGreen, colorNavy, colorWhite } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletLandscapeDown, ScreenTabletRetinaDown, ScreenTabletDown, ScreenPhoneDown } from '../../utils/media'

export const StyledWrapper = styled.div`
  background-color: ${colorNavy};
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`

export const StyledContentContainer = styled.div`
  background-color: ${colorGreen};
  color: ${colorNavy};
  padding: ${pxToRem(95)} ${pxToRem(150)};
  @media ${ScreenTabletLandscapeDown} {
    padding: ${pxToRem(95)} ${pxToRem(80)};
  }
  @media ${ScreenTabletDown} {
    padding: ${pxToRem(35)} ${pxToRem(30)};
  }
  @media ${ScreenPhoneDown} {
    padding: ${pxToRem(65)} ${pxToRem(35)} ${pxToRem(0)} ${pxToRem(20)};
  }
`

export const StyledContentWrapper = styled.div`
  display: flex;
  @media ${ScreenTabletRetinaDown} {
    flex-direction: column;
  }
`

export const StyledContent = styled.div`
  padding: 0 ${pxToRem(60)} ${pxToRem(25)} 0;
  color: ${colorNavy};
  @media ${ScreenPhoneDown} {
    padding: 0 0 ${pxToRem(50)} 0;
  }
`

export const StyledHeading = styled.h2`
  margin-bottom: ${pxToRem(30)};
  font-size: ${pxToRem(65)};
  @media only screen and (max-width: 768px) { 
    font-size: ${pxToRem(45)};
  }
  br {
    @media only screen and (max-width: 850px) { 
      display: none;
    }
  }
`

export const StyledOl = styled.ol`
  margin-bottom: ${pxToRem(35)};
  li {
    padding-left: ${pxToRem(10)};
    font-size: ${pxToRem(16)};
    &:last-child {
      margin: 0;
    }
  }
`

export const StyledLink = styled.a`
  color: ${colorNavy};
`

export const StyledCtaSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorNavy};
  color: ${colorGreen};
  padding: ${pxToRem(25)};
  @media only screen and (max-width: 900px) { 
    margin-left: -2.1875rem;
    margin-right: -2.1875rem;
    padding: 2.1875rem;
  }
  @media ${ScreenPhoneDown} {
    padding-top: ${pxToRem(50)};
  }
`

export const StyledCtaSectionHeading = styled.h3`
  color: ${colorGreen};
  margin-bottom: ${pxToRem(20)};
`

export const StyledCtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background: transparent;
  width: fit-content;
  border: 0;
  padding: ${pxToRem(5)} 0;
  margin: 0;
  &.callout-cta {
    margin-top: auto;
  }
  span {
    font-size: ${pxToRem(30)};
    font-family: druk-medium;
    color: ${colorWhite};
    text-transform: uppercase;
    padding-right: ${pxToRem(10)};
  }
  svg {
    position: relative;
    top: -2px;
    path {
      stroke: ${props => (props.stroke ? props.stroke : colorNavy)};
    }
  }
`

export const StyledDialogOverlay = styled(DialogOverlay)`
  z-index: 100;
  display: flex;
  -webkit-overflow-scrolling: auto;
`

export const StyledDialogContent = styled(DialogContent)`
  width: 100%;
  max-width: 90vw;
  position: relative;
  padding: ${pxToRem(40)} ${pxToRem(80)};
  margin: auto;
  background: ${colorNavy};
  @media only screen and (max-width: 1200px) { 
    max-width: 85vw;
    padding: ${pxToRem(40)};
  }
  @media only screen and (max-width: 900px) { 
    max-width: 100%;
    margin: auto 10px;
    padding: ${pxToRem(25)};
  }
`
export const StyledCloseButton = styled.button`
  position: absolute;
  top: ${pxToRem(25)};
  right: ${pxToRem(25)};
  display: flex;
  align-items: center;
  padding: ${pxToRem(5)};
  border: 0;
  background: transparent;
  font-family: druk-bold;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    top: ${pxToRem(15)};
    right: ${pxToRem(15)};
  }
  &:focus {
    outline: 1px dotted ${colorGreen};
  }
  span {
    font-size: ${pxToRem(20)};
    color: ${colorWhite};
    text-transform: uppercase;
  }
  svg {
    transform: scale(1.25);
    margin-left: ${pxToRem(15)};
  }
`
