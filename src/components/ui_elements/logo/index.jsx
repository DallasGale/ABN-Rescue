import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledButton, StyledTagline, StyledTaglineWrapper } from './styled'

import { colorGreen, colorWhite } from '../../styles/colors'

const StyledCls1 = styled.path`
  fill: ${colorGreen};
`
const StyledCls2 = styled.path`
  fill: ${colorWhite};
`
const StyledCls3 = styled.path`
  fill: ${colorWhite};
`


const PrimaryLogo = () => (
  <svg
    id="CGU_Logo_Green"
    dataname="CGU_Logo_Green"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96.23 96.24"
  >
    <StyledCls1
      d="M97.33,49A48.12,48.12,0,1,1,49.21.93,48.12,48.12,0,0,1,97.33,49"
      transform="translate(-1.09 -0.93)"
    />
    <StyledCls2
      d="M48.54,52h3.62v3.43a6.58,6.58,0,0,1-2.74.55c-4.24,0-6.84-2.78-6.85-6.94s2.6-7,7.19-7A17,17,0,0,1,57.1,44V38.53a16.68,16.68,0,0,0-7.6-1.76c-8,0-12.94,5.22-12.93,12.31s5,12.29,12.31,12.28C52.6,61.36,56,60,58,57.48V46.67h-9.4Z"
      transform="translate(-1.09 -0.93)"
    />
    <StyledCls2
      d="M15.52,49.07c0,7.08,4.88,12.29,12.23,12.29a11.37,11.37,0,0,0,6.11-1.59V54.35A10.72,10.72,0,0,1,28.18,56c-4.12,0-6.65-2.79-6.65-6.94s2.53-7,6.65-7a10.63,10.63,0,0,1,5.68,1.67V38.36a11.46,11.46,0,0,0-6.11-1.59c-7.35,0-12.23,5.21-12.23,12.3"
      transform="translate(-1.09 -0.93)"
    />
    <StyledCls2
      d="M76,37.13v14.1C76,54.09,74.29,56,71.72,56s-4.23-1.92-4.23-4.78V37.13H61.7v14.1c0,6.19,4.23,10.13,10,10.13s10-3.94,10-10.12V37.13Z"
      transform="translate(-1.09 -0.93)"
    />
  </svg>
)

const SecondaryLogo = () => (
  <svg
    id="CGU_Logo_White"
    data-name="CGU_Logo_Green"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44">
    <StyledCls3
      d="M23,1A22,22,0,1,0,45,23,22,22,0,0,0,23,1ZM16,20.6a4.82,4.82,0,0,0-2.6-.77,2.92,2.92,0,0,0-3,3.18,2.91,2.91,0,0,0,3,3.17,4.82,4.82,0,0,0,2.6-.76V27.9a5.14,5.14,0,0,1-2.79.73A5.36,5.36,0,0,1,7.6,23a5.36,5.36,0,0,1,5.59-5.62,5.14,5.14,0,0,1,2.79.73Zm6.87,8A5.38,5.38,0,0,1,17.22,23c0-3.24,2.26-5.63,5.91-5.63a7.74,7.74,0,0,1,3.48.8v2.48a7.89,7.89,0,0,0-3.36-.84A3,3,0,0,0,20,23a2.94,2.94,0,0,0,3.12,3.17,2.93,2.93,0,0,0,1.26-.25V24.36H22.7V21.92H27v4.95A5.2,5.2,0,0,1,22.85,28.63Zm15-4.63a4.39,4.39,0,0,1-4.58,4.63A4.38,4.38,0,0,1,28.71,24V17.55h2.65V24a1.95,1.95,0,1,0,3.87,0V17.55h2.64Z"
      transform="translate(-1 -1)" />
  </svg>
)


const Logo = (props) => {
  const { isLogoPrimary, logoOnClick, showTagline } = props

  return (
    <div style={{ padding: 10 }}>
      <StyledButton
        aria-label="CGU - Insuring Ambition (logo). Press to go back to top of page."
        type="button"
        onClick={logoOnClick}
        data-tracking="btn-click:logo">
        {
          isLogoPrimary ? (<PrimaryLogo />)
            :
            (<SecondaryLogo />)
        }
        <StyledTaglineWrapper className={showTagline && 'show'}>
          <StyledTagline> Insuring Ambition</StyledTagline>
        </StyledTaglineWrapper>
      </StyledButton>
    </div>
  )
}

Logo.propTypes = {
  isLogoPrimary: PropTypes.bool,
  logoOnClick: PropTypes.func.isRequired,
  showTagline: PropTypes.bool,
}

Logo.defaultProps = {
  isLogoPrimary: true,
  showTagline: false,
}

export default Logo
