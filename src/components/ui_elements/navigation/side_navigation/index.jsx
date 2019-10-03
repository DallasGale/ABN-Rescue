import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledSideNav,
  StyledDot,
  StyledLabelText,
  StyledUl,
  StyledLi,
  StyledLink,
} from './styled'

import FilledCircle from '../../filled-circle'

import { colorGreen, colorWhite } from '../../../styles/colors'

const SideNavigation = (props) => {
  const {
    inactiveSideNavDotColor,
    isTheProblemScreenVisible,
    isTheSolutionScreenVisible,
    isAmbitionExplorerScreenVisible,
    isGrantApplicationScreenVisible,
    onClickTheProblemSideNav,
    onClickTheSolutionSideNav,
    onClickAmbitionExplorerSideNav,
    onClickGrantApplicationSideNav,
  } = props


  function dynamicallyChangeDotColor(pageSection) {
    if (pageSection) return colorWhite
    return inactiveSideNavDotColor
  }

  return (
    // ? NOTE: The below li a are hard coded just to get the state change working correctly.
    // ? I will be lookig into mapping over the array.
    <div>
      <StyledSideNav aria-label="Secondary Navigation">
        <StyledUl>

          {/*  THE PROBLEM */}

          <StyledLi className={`${isTheProblemScreenVisible ? 'active active__the-problem' : 'inactive'}`}>
            <StyledLink
              id="the-problem-side-nav-button"
              type="button"
              onClick={onClickTheProblemSideNav}
              isActive={!!isTheProblemScreenVisible}
              data-tracking="btn-click:sideNav_theProblem"
              aria-label="Go to The Problem section."
            >
              <StyledDot isActive={!!isTheProblemScreenVisible}>
                <FilledCircle color={dynamicallyChangeDotColor(isTheProblemScreenVisible)} />
              </StyledDot>
              <StyledLabelText isActive={!!isTheProblemScreenVisible}>
                The Problem
              </StyledLabelText>
            </StyledLink>
          </StyledLi>

          {/*  THE SOLUTION */}

          <StyledLi className={`${isTheSolutionScreenVisible ? 'active active__the-solution' : 'inactive'}`}>
            <StyledLink
              id="the-solution-side-nav-button"
              type="button"
              onClick={onClickTheSolutionSideNav}
              active={!!isTheSolutionScreenVisible}
              data-tracking="btn-click:sideNav_theSolution"
              aria-label="Go to The Solution section."
            >
              <StyledDot isActive={!!isTheSolutionScreenVisible}>
                <FilledCircle color={dynamicallyChangeDotColor(isTheSolutionScreenVisible)} />
              </StyledDot>
              <StyledLabelText isActive={!!isTheSolutionScreenVisible}>
                The Solution
              </StyledLabelText>
            </StyledLink>
          </StyledLi>

          {/*  AMBITION EXPLORER */}

          <StyledLi className={`${isAmbitionExplorerScreenVisible ? 'active active__ambition-explorer' : 'inactive'}`}>
            <StyledLink
              id="ambition-explorer-side-nav-button"
              type="button"
              onClick={onClickAmbitionExplorerSideNav}
              active={!!isAmbitionExplorerScreenVisible}
              data-tracking="btn-click:sideNav_ambitionExplorer"
              aria-label="Go to Ambition Explorer section."
            >
              <StyledDot isActive={!!isAmbitionExplorerScreenVisible}>
                <FilledCircle color={dynamicallyChangeDotColor(isAmbitionExplorerScreenVisible)} />
              </StyledDot>
              <StyledLabelText isActive={!!isAmbitionExplorerScreenVisible}>
                Ambition Explorer
              </StyledLabelText>
            </StyledLink>
          </StyledLi>

          {/*  GRANT APPLICATION */}

          <StyledLi className={`${isGrantApplicationScreenVisible ? 'active active__ambition-explorer' : 'inactive'}`}>
            <StyledLink
              id="grant-application-side-nav-button"
              type="button"
              onClick={onClickGrantApplicationSideNav}
              active={!!isGrantApplicationScreenVisible}
              data-tracking="btn-click:sideNav_grantApplication"
              aria-label="Go to Grant Application section."
            >
              <StyledDot isActive={!!isGrantApplicationScreenVisible}>
                <FilledCircle color={dynamicallyChangeDotColor(isGrantApplicationScreenVisible)} />
              </StyledDot>
              <StyledLabelText isActive={!!isGrantApplicationScreenVisible}>
                Grant Application
              </StyledLabelText>
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledSideNav>
    </div>
  )
}

SideNavigation.propTypes = {
  inactiveSideNavDotColor: PropTypes.string,
  isTheProblemScreenVisible: PropTypes.bool,
  isTheSolutionScreenVisible: PropTypes.bool,
  isAmbitionExplorerScreenVisible: PropTypes.bool,
  isGrantApplicationScreenVisible: PropTypes.bool,
  onClickTheProblemSideNav: PropTypes.func.isRequired,
  onClickTheSolutionSideNav: PropTypes.func.isRequired,
  onClickAmbitionExplorerSideNav: PropTypes.func.isRequired,
  onClickGrantApplicationSideNav: PropTypes.func.isRequired,
}

SideNavigation.defaultProps = {
  inactiveSideNavDotColor: colorGreen,
  isTheProblemScreenVisible: true,
  isTheSolutionScreenVisible: false,
  isAmbitionExplorerScreenVisible: false,
  isGrantApplicationScreenVisible: false,
}

export default SideNavigation
