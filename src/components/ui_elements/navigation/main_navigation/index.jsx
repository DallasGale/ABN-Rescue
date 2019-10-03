import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { colorGreen } from '../../../styles/colors'

import NavItems from './nav_items'
import ApplyForGrantCTA from '../../../styled/apply_for_grant_cta'
import ArrowCta from '../../../styled/arrow_cta'
import MenuOpenIcon from '../../menu_open'
import MenuCloseIcon from '../../menu_close'
import MenuCloseBarIcon from '../../menu_close_bar'
import {
  StyledHamburgerButton,
  StyledBar,
  StyledMainNav,
  StyledUl,
  StyledLi,
} from './styled'

// Navigation
const navItems = [
  {
    id: 1, label: 'The Ambition Problem', link: '#the-problem', target: '', trackingName: 'theAmbitionProblem',
  },
  {
    id: 2, label: 'The Ambition Explorer', link: '#ambition-explorer', target: '', trackingName: 'ambitionExplorerTool',
  },
  {
    id: 3, label: 'Insure Your Ambition', link: 'https://www.cgu.com.au/small-business', target: '_blank', trackingName: 'insureYourAmbition', rel: 'noopener noreferrer',
  },
  {
    id: 4, label: 'Read Our Whitepaper', link: 'https://www.cgu.com.au/ambition/CGU_Ambition_Index.pdf', target: '_blank', trackingName: 'readOurWhitepaper', rel: 'noopener noreferrer',
  },
]

const MainNavigation = (props) => {
  const {
    hamburgerColor,
    isMainMenuShown,
    isBurgerMobileMenuOpen,
    onBurgerClick,
    onBurgerMobileClick,
  } = props

  const grantBtn = {
    ctaLabel: 'Apply for a grant',
    ctaLink: '#grant-application',
    ctaOnClick: onBurgerMobileClick,
    isMenuItem: true,
    trackingName: 'applyForAGrant',
  }
  useEffect(() => {
    if (isBurgerMobileMenuOpen) {
      document.body.classList.add('modal-open')
      document.body.addEventListener('touchmove', (e) => {
        e.preventDefault()
      }, false)
    } else {
      document.body.classList.remove('modal-open')
      document.body.removeEventListener('touchmove', (e) => {
        e.preventDefault()
      }, false)
    }
    return () => { }
  }, [isBurgerMobileMenuOpen])
  return (
    <>
      <MediaQuery maxWidth={1365}>
        <StyledMainNav aria-label="Main navigation for tablet and mobile devices">

          {!isBurgerMobileMenuOpen && (
            <>
              <ApplyForGrantCTA {...props} />
              <StyledHamburgerButton
                tabindex={`${isBurgerMobileMenuOpen ? '5' : '0'}`}
                isVisible
                hamburgerColor={hamburgerColor}
                onClick={onBurgerMobileClick}
                aria-label={isBurgerMobileMenuOpen ? 'Close Main Menu' : 'Open Main Menu'}
                data-tracking="btn-click:toggleMenuDropdown"
              >
                {
                  !isBurgerMobileMenuOpen ? (
                    <MenuOpenIcon barColor={hamburgerColor} />
                  ) : (
                      <MenuCloseIcon />
                    )
                }
              </StyledHamburgerButton>
            </>
          )}

          <StyledUl position={!isBurgerMobileMenuOpen ? ('translateY(-120%)') : ('translateY(0%)')}>
            {
              navItems.map(items => (
                <NavItems onBurgerMobileClick={onBurgerMobileClick} key={items.label} items={items} />
              ))
            }
            <StyledLi key="Apply for a grant">
              <ArrowCta {...grantBtn} />
            </StyledLi>
          </StyledUl>

          {isBurgerMobileMenuOpen && (
            <StyledHamburgerButton
              tabindex={`${isBurgerMobileMenuOpen ? '5' : '0'}`}
              isVisible
              hamburgerColor={hamburgerColor}
              onClick={onBurgerMobileClick}
              aria-label={isBurgerMobileMenuOpen ? 'Close Main Menu' : 'Open Main Menu'}
              data-tracking="btn-click:toggleMenuDropdown"
            >
              {
                !isBurgerMobileMenuOpen ? (
                  <MenuOpenIcon barColor={hamburgerColor} />
                ) : (
                    <MenuCloseIcon />
                  )
              }
            </StyledHamburgerButton>
          )}


        </StyledMainNav>
      </MediaQuery>
      <MediaQuery minWidth={1366}>
        <StyledMainNav aria-label="Main navigation for desktop browsers.">
          <StyledUl>
            {
              isMainMenuShown && (
                navItems.map(items => (
                  <NavItems key={items.label} items={items} rel={`${items.target === '_blank' ? items.rel : ''}`} />
                ))
              )
            }
            <StyledLi className="menu-button">
              <StyledHamburgerButton
                aria-label="Close Navigation Menu Button"
                aria-labelledby="close-main-navigation"
                isVisible={!isMainMenuShown}
                hamburgerColor={hamburgerColor}
                onClick={onBurgerClick}
                data-tracking="btn-click:openMenuDesktop"
              >

                <MenuOpenIcon barColor={hamburgerColor} />
              </StyledHamburgerButton>
              <StyledHamburgerButton
                aria-label="Open Navigation Menu Button"
                isVisible={isMainMenuShown}
                hamburgerColor={hamburgerColor}
                onClick={onBurgerClick}
                data-tracking="btn-click:closeMenuDesktop"
              >
                <StyledBar
                  isVisible={isMainMenuShown}
                  barColor={hamburgerColor}
                >
                  <MenuCloseBarIcon barColor={hamburgerColor} />
                </StyledBar>
              </StyledHamburgerButton>
            </StyledLi>
            <StyledLi>
              <ApplyForGrantCTA {...props} />
            </StyledLi>
          </StyledUl>
        </StyledMainNav>
      </MediaQuery>
    </>
  )
}

MainNavigation.propTypes = {
  hamburgerColor: PropTypes.string,
  isMainMenuShown: PropTypes.bool,
  isBurgerMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  onBurgerMobileClick: PropTypes.func.isRequired,
}

MainNavigation.defaultProps = {
  hamburgerColor: colorGreen,
  isMainMenuShown: false,
  isBurgerMobileMenuOpen: false,
}

export default MainNavigation
