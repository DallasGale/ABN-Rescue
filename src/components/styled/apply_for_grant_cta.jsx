import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pxToRem from '../utils/px_to_rem'
import { colorWhite, colorGreen } from '../styles/colors'

const StyledCTA = styled.button`
  background: none;
  border: none;
  color: ${colorWhite};
  font-size: ${pxToRem(24)};
  font-family: druk-bold;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: ${colorGreen};
  }
`
const label = 'Apply for a grant'

const ApplyForGrantCTA = (props) => {
  const { grantApplicationOnClick } = props
  return (
    <StyledCTA
      tabindex="1"
      aria-label="Apply For A Grant"
      onClick={grantApplicationOnClick}
      data-tracking={'link-click:mainNav_applyForAGrant'}>{label}</StyledCTA>
  )
}

ApplyForGrantCTA.propTypes = {
  grantApplicationOnClick: PropTypes.func.isRequired,
}

export default ApplyForGrantCTA
