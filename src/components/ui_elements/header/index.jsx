import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader } from './styled'
import MainNavigation from '../navigation/main_navigation/index'

const Header = (props) => {
  const { children } = props
  return (
    <>
      <StyledHeader>
        {children}
        <div>
          <MainNavigation {...props} />
        </div>
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
}


export default Header
