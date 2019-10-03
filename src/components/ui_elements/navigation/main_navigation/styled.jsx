import styled from 'styled-components'
import { colorGreen, colorWhite, colorNavy } from '../../../styles/colors'
import pxToRem from '../../../utils/px_to_rem'
import { transitionPt1, pageLoadContentAppear } from '../../../utils/transitions'
import { ScreenTabletLandscapeDown, ScreenDesktopDown, ScreenPhoneDown } from '../../../utils/media'

export const StyledHamburgerButton = styled.button`
  background: none;
  border: 0;
  color: ${props => props.hamburgerColor};
  z-index: 105;
  position: absolute;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s;
  svg {
    position: relative;
    right: 10px;
  }
  @media ${ScreenTabletLandscapeDown} {
    position: relative;
    svg {
      position: relative;
      right: 0;
    }
  }
`

export const StyledBar = styled.span`
  color: ${props => props.barColor};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  position: relative;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s;
`

export const StyledMainNav = styled.nav`
  justify-items: stretch;
  justify-content: flex-end;
  align-items: center;
  display: flex;
 
  @media ${ScreenTabletLandscapeDown} {
    padding: 0 ${pxToRem(5)} 0 ${pxToRem(10)};
    justify-content: flex-end;
    justify-items: auto;
    > button {
      margin-left: ${pxToRem(10)};
      margin-right: 0;
      padding: ${pxToRem(8)} ${pxToRem(15)} ${pxToRem(10)};
    }
  }
`

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;

  @media ${ScreenTabletLandscapeDown} {
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: ${colorGreen};
    width: 100%;
    min-height: 80vh;
    padding: ${pxToRem(140)} ${pxToRem(20)} ${pxToRem(20)};
    transition: transform 0.4s ease;
    transform : ${props => props.position};

    &:before {
      content: '';
      position: absolute;
      top: 100%;
      height: 20vh;
      left: 0;
      width: 100%;
      background-color: black;
      opacity: ${props => (props.position == 'translateY(0%)' ? '0.3' : '0')};
      transition: transform 0.4s ease, opacity 0.3s 0.4s ease;
      transform : ${props => props.position};
    }
  }
  @media ${ScreenPhoneDown} {
    padding: ${pxToRem(120)} ${pxToRem(10)} ${pxToRem(20)};
  }
`

export const StyledLi = styled.li`
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
  opacity: 0;
  animation: ${pageLoadContentAppear} 0.2s ease forwards;
  margin: 0;
  display: flex;
  align-items: center;
  text-align: right;

  &:nth-child(4) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.15s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(1) {
    animation-delay: 0.25s;
  }
  &.menu-button {
    min-width: 70px;
    @media ${ScreenDesktopDown} {
      min-width: 50px;
    }
    svg {
      right: 0;
    }
  }
  @media ${ScreenDesktopDown} {
    padding-right: ${pxToRem(8)};
    padding-left: ${pxToRem(8)};
  }
  @media ${ScreenTabletLandscapeDown} {
    text-align: left; 
    margin-bottom: ${pxToRem(25)};
    display: inline-block;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.15s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.25s;
    }
    &:nth-child(5) {
      animation-delay: 0.3s;
    }
    &:last-child a {
      color: ${colorWhite};
      &:hover {
        border-bottom: none;
        color: ${colorNavy};
      }
    }    
  }
  
  
`

export const StyledLink = styled.a`
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  font-family: druk-bold;
  text-transform: uppercase;
  font-size: ${pxToRem(24)};
  color: ${colorWhite};
  padding: ${pxToRem(2)} 0 ${pxToRem(1)};
  text-decoration: none;

  @media ${ScreenTabletLandscapeDown} {
    background: none;
    border: 0;
    color: ${colorNavy};
    font-size: ${pxToRem(32)};
    line-height: 1.1;
    text-decoration: none;
    padding-bottom: ${pxToRem(1)};
  }

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(24)};
  }

  &:hover {
    border-bottom-color: ${colorGreen};
    ${transitionPt1};
    color: ${colorGreen};
    @media ${ScreenTabletLandscapeDown} {
      color: ${colorNavy};
      border-bottom: 5px solid ${colorNavy};
    }
  }
`
