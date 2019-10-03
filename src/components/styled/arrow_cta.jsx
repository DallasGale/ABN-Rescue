import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import pxToRem from '../utils/px_to_rem'
import { colorWhite, colorNavy } from '../styles/colors'

import IconArrow from '../ui_elements/icon_arrow'

import { StyledFlex } from '../utils/helpers'
import { ScreenWidescreenDown, ScreenTabletLandscapeDown, ScreenTabletRetinaDown, ScreenTabletDown, ScreenPhoneDown, ScreenSmallDeviceDown } from '../utils/media'

const StyledButton = styled.a`
  background: none;
  border: 0;
  color: ${props => (props.ctaLinkColor)};
  font-size: ${pxToRem(45)};
  font-family: druk-bold;
  line-height: 1.1;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media ${ScreenWidescreenDown} {
    font-size: ${pxToRem(28)};
  }

  @media ${ScreenTabletRetinaDown} {
    font-size: ${pxToRem(40)};
  }

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(32)};
  }

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(24)};
  }

  @media ${ScreenSmallDeviceDown} {
    font-size: ${pxToRem(24)};
  }

  &.is-menu-item {
    @media ${ScreenWidescreenDown} {
      font-size: ${pxToRem(28)};
    }

	@media ${ScreenTabletLandscapeDown} {
		font-size: ${pxToRem(32)};
	}

	@media ${ScreenTabletDown} {
		font-size: ${pxToRem(32)};
	}

    @media ${ScreenPhoneDown} {
      font-size: ${pxToRem(24)};
    }

    @media ${ScreenSmallDeviceDown} {
      font-size: ${pxToRem(24)};
    }
  }
`

const StyledArrowWrapper = styled.div`
  width: ${pxToRem(50)};
  position: relative;
  padding-left: ${pxToRem(10)};
  height: 100%;
  svg {
    width: 100%;
  }

  @media ${ScreenTabletRetinaDown} {
    width: ${pxToRem(70)};
  }

  @media ${ScreenTabletDown} {
    width: ${pxToRem(60)};
  }

  @media ${ScreenPhoneDown} {
    width: ${pxToRem(45)};
  }

  @media ${ScreenSmallDeviceDown} {
    width: ${pxToRem(45)};
  }

  &.is-menu-item {
    width: ${pxToRem(55)};

    @media ${ScreenTabletRetinaDown} {
      width: ${pxToRem(55)};
    }

    @media ${ScreenTabletDown} {
      width: ${pxToRem(55)};
    }

    @media ${ScreenPhoneDown} {
      width: ${pxToRem(40)};
    }

    @media ${ScreenSmallDeviceDown} {
      width: ${pxToRem(40)};
    }
  }
`

const ArrowCta = (props) => {
  const {
    arrowColour, ctaLabel, ctaOnClick, ctaLink, ctaLinkColour, isMenuItem, target, flexHeight, className, trackingName
  } = props
  return (
    <StyledFlex className={className} flexHeight={flexHeight}>
      <StyledButton
        className={isMenuItem && 'is-menu-item'}
        ctaLinkColor={ctaLinkColour}
        href={ctaLink}
        onClick={ctaOnClick}
        target={target}
        data-tracking={'link-click:arrowCTA_'+trackingName}
      >
        {ctaLabel}
      </StyledButton>
      <StyledArrowWrapper className={isMenuItem && 'is-menu-item'}>
        <IconArrow arrowColour={arrowColour} />
      </StyledArrowWrapper>
    </StyledFlex>
  )
}

ArrowCta.propTypes = {
  arrowColour: PropTypes.string,
  ctaOnClick: PropTypes.func,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaLinkColour: PropTypes.string,
  isMenuItem: PropTypes.bool,
  target: PropTypes.string,
  flexHeight: PropTypes.string,
  className: PropTypes.string,
  trackingName: PropTypes.string
}

ArrowCta.defaultProps = {
  arrowColour: colorNavy,
  ctaOnClick: null,
  ctaLinkColour: colorWhite,
  isMenuItem: false,
  target: '_self',
  flexHeight: '100%',
  className: null,
  trackingName: 'arrowCTA'
}

export default ArrowCta
