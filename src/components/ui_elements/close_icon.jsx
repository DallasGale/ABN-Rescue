import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { colorNavy } from '../styles/colors'
import { ScreenTabletRetinaDown, ScreenTabletDown, ScreenPhoneDown } from '../utils/media'

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 4;
  height: auto;
  width: auto;
  bottom: ${pxToRem(40)};
  right: ${pxToRem(80)};

  @media ${ScreenPhoneDown} {
    right: ${pxToRem(30)};
    bottom: ${pxToRem(20)};
  }
`

const StyledLink = styled.a`
  color: ${props => (props.theme !== null ? props.theme : colorNavy)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: druk-medium;
  position: relative;
  height: auto;
  width: auto;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${pxToRem(20)};

  @media ${ScreenTabletRetinaDown} {
    font-size: ${pxToRem(40)};
  }

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(30)};
  }
  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(20)};
  }
`

const StyledRect = styled.rect`
  fill: ${props => (props.theme !== null ? props.theme : colorNavy)};
`

const StyledCrossWrapper = styled.div`
  height: ${pxToRem(17)};
  width: ${pxToRem(17)};
  margin-left: ${pxToRem(15)};
  margin-top: -2px;

  @media ${ScreenTabletRetinaDown} {
    height: ${pxToRem(27)};
    width: ${pxToRem(27)};
  }

  @media ${ScreenTabletDown} {
    height: ${pxToRem(22)};
    width: ${pxToRem(22)};
  }

  @media ${ScreenTabletDown} {
    height: ${pxToRem(16)};
    width: ${pxToRem(16)};
  }
`

const CloseIcon = (props) => {
  const {
    closeIconOnClick,
    closeIconLink,
    theme,
  } = props
  return (
    <StyledWrapper>
      <StyledLink
        theme={theme}
        onClick={closeIconOnClick}
        href={closeIconLink}
        data-tracking="link-click:closeExplorer"
      >
        <div>
          Close
        </div>
        <StyledCrossWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 31.66">
            <StyledRect
              x="0.12"
              y="14.5"
              width="36.77"
              height="8"
              transform="translate(-10.33 15.83) rotate(-45)"
              theme={theme}
            />
            <StyledRect
              x="14.5"
              y="0.12"
              width="8"
              height="36.77"
              transform="translate(-10.33 15.83) rotate(-45)"
              theme={theme}
            />
          </svg>
        </StyledCrossWrapper>
      </StyledLink>
    </StyledWrapper>
  )
}

CloseIcon.propTypes = {
  closeIconOnClick: PropTypes.func.isRequired,
  closeIconLink: PropTypes.string,
  theme: PropTypes.string,
}

CloseIcon.defaultProps = {
  closeIconLink: '/',
  theme: colorNavy,
}

export default CloseIcon
