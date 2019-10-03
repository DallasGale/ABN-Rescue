import styled from 'styled-components'

import { colorWhite } from '../../../styles/colors'

import pxToRem from '../../../utils/px_to_rem'
import { ScreenPhoneDown } from '../../../utils/media'
import { FadeIn } from '../../../utils/transitions'

export const StyledSideNav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  width: ${pxToRem(50)};
  z-index: 99;
  opacity: 0;
  animation: ${FadeIn} 1s forwards;

  @media ${ScreenPhoneDown} {
    width: ${pxToRem(30)};
    right: ${pxToRem(15)};
  }
`

export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  transition: all 0.3s;
`

export const StyledLi = styled.li`
  list-style: none;
  transition: all 0.3s;
  padding-bottom: ${pxToRem(20)};
  padding-top: ${pxToRem(10)};
  height: auto;
  writing-mode: vertical-lr;

  &.active {
    transition: all 0.5s;

    &__the-problem {
      height: ${pxToRem(120)};
    }

    &__the-solution {
      height: ${pxToRem(120)};
    }

    &__ambition-explorer {
      height: ${pxToRem(160)};
    }

    &__grant-application {
      height: ${pxToRem(180)};
    } 
  }

  &.inactive {
    height: 0px;
    transition: all 0.5s;
  }
`

export const StyledLink = styled.button`
  background: none;
  border: 0;
  position: relative;
  color: ${colorWhite};
  text-decoration: none;
  font-family: neptune-bold;
  transition: all 0.3s;
  writing-mode: horizontal-tb;
`

export const StyledDot = styled.span`
  color: ${props => (props.isActive ? colorWhite : props.inactiveSideNavDotColor)};
  height: ${pxToRem(10)};
  width: ${pxToRem(10)};
  position: relative;
  font-size: ${pxToRem(10)};
  transition: all 0.3s;
  left: ${pxToRem(6)};
  display: flex;
`

export const StyledLabelText = styled.div`
  position: relative;
  font-size: ${pxToRem(14)};
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: all 0.3s;
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  padding-top: ${pxToRem(20)};
  writing-mode: vertical-lr;
  transition: all 0.5s;
`
