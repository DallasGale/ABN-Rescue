import React from 'react'
import PropTypes from 'prop-types'
import { StyledLi, StyledLink } from './styled'

const NavItems = (props) => {
  const {
    items,
    onBurgerMobileClick,
    rel,
  } = props
  return (
    <StyledLi>
      <StyledLink
        aria-label={`Go to ${items.label} section`}
        tabindex={items.id.toString()}
        rel={rel}
        href={items.link}
        onClick={onBurgerMobileClick}
        role="button"
        target={items.target}
        data-tracking={`link-click:mainNav_${items.trackingName}`}
      >
        {items.label}
      </StyledLink>
    </StyledLi>
  )
}

NavItems.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number]),
  ).isRequired,
  onBurgerMobileClick: PropTypes.func,
  rel: PropTypes.string,

}

NavItems.defaultProps = {
  onBurgerMobileClick: () => { },
  rel: "",
}

export default NavItems
