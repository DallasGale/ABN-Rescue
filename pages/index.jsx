/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react'
import { Waypoint } from 'react-waypoint'
import { Preloader, Placeholder } from 'react-preloading-screen'
import dynamic from 'next/dynamic'

import MediaQuery from 'react-responsive'
import Head from 'next/head'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

import { Controller, Scene } from 'react-scrollmagic'

import {
  Desktop,
  TabletRetina,
  Mobile,
  TabletRetinaDown,
} from '../src/components/utils/media'

import {
  colorGreen,
  colorNavy,
  colorBlue,
  colorOrange,
  colorWhite,
} from '../src/components/styles/colors'
import { StyledScreen } from '../src/components/styled/screen'
import Page from '../src/components/styled/page'
import { StyledStartABizWrapper } from '../src/components/screens/4_nine_million_time_we_changed/styled'
import { StyledLastYearWrapper } from '../src/components/screens/2_last_year_abns/styled'
import Main from '../src/components/styled/main'
import Header from '../src/components/ui_elements/header'
import Logo from '../src/components/ui_elements/logo'
import SideNavigation from '../src/components/ui_elements/navigation/side_navigation'
import ScrollPrompt from '../src/components/ui_elements/scroll_prompt'
import Hero from '../src/components/screens/1_hero'
import LastYearAbns from '../src/components/screens/2_last_year_abns'

import '../src/sass/app.scss'
// ? Dynamic Loading
const AmbitionExplorer = dynamic(() => import('../src/components/screens/9_ambition_explorer'))
const ApplyForGrant = dynamic(() => import('../src/components/screens/14_apply_for_grant'))
const Aerospace = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/aerospace'))
const BackingSmallBusiness = dynamic(() => import('../src/components/screens/7_backing_small_business'))
const Bees = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/bees'))
const BoomingStates = dynamic(() => import('../src/components/screens/12_booming_states'))
const CloseIcon = dynamic(() => import('../src/components/ui_elements/close_icon'))
const Disclaimer = dynamic(() => import('../src/components/ui_elements/disclaimer'))
const EditLocation = dynamic(() => import('../src/components/ui_elements/edit_location'))
const Florist = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/florist'))
const Footer = dynamic(() => import('../src/components/ui_elements/footer'))
const IndustriesThrive = dynamic(() => import('../src/components/screens/11_industries_thrive'))
const IceCream = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/ice_cream'))
const IgniteYourAmbition = dynamic(() => import('../src/components/screens/13_ignite_your_ambition'))
const Investigation = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/investigation'))
const Lobster = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/lobster'))
const Mattress = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/mattress'))
const OverToYou = dynamic(() => import('../src/components/screens/12_over_to_you'))
const Photography = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/photography'))
const Pub = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/pub'))
const SugarCane = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/sugar_cane'))
const StartABizTimeline = dynamic(() => import('../src/components/screens/4_nine_million_time_we_changed/timelines'))
const TravelAgent = dynamic(() => import('../src/components/screens/9_ambition_explorer/states/travel_agent'))

const App = () => {

  // * Preloader
  const preLoadStyles = {
    backgroundColor: colorNavy,
    color: colorGreen,
    transition: 'opacity 1000ms ease-in-out',
    transitionDelay: '3s',
    fontFamily: 'druk-bold',
    fontSize: '40px',
  }

  // * Main Navigation
  const [isBurgerMobileMenuOpen, setIsBurgerMobileMenuOpen] = useState(false)
  const [isMainMenuShown, setIsMainMenuShown] = useState(true)
  const [hamburgerColor, setHamburgerColor] = useState(colorGreen)

  // * Side Navigation
  const [isSideNavigationVisible, setIsSideNavigationVisible] = useState(false)
  const [inactiveSideNavDotColor, setInactiveSideNavDotColor] = useState(colorGreen)

  // * The Hero
  const [heroRef, heroInView] = useInView({ threshold: 0 })

  // * The Problem
  const [theProblemRef, theProblemInView] = useInView({ threshold: 0 })
  const [isTheProblemVisible, setIsTheProblemVisible] = useState(false)

  // * The Solution
  const [theSolutionRef, theSolutionInView] = useInView({ threshold: 0, })
  const [isTheSolutionVisible, setIsTheSolutionVisible] = useState(false)

  // * Ambition Explorer - Landing
  const [ambitionExplorerLandingRef, ambitionExplorerLandingInView] = useInView({ threshold: 0, })
  const [isAmbitionExplorerVisible, setIsAmbitionExplorerVisible] = useState(false)
  const [ambitionExplorerJourney, setAmbitionExplorerJourney] = useState(false)

  // ? Postcode field
  const postcodeField = useRef(null)

  const [
    ambitionErrorMsg,
    setAmbitionErrorMsg] = useState('')

  const [
    postcodeValue,
    setPostcodeValue] = useState(undefined)

  const [
    isPostcodeFieldFocused,
    setIsPostcodeFieldFocused] = useState(false)

  const [apiBaseURL, setApiBaseURL] = useState('www.cgu.com.au')

  useEffect(() => {
    window.location.host === 'www.cgu.com.au' && setApiBaseURL('www.cgu.com.au')
  }, [])

  // ? Used to set a classname to the landing page (ie. to fix the position and increase z-index)

  useEffect(() => {
    if (typeof postcodeValue === 'undefined' || postcodeValue.length < 1) {
      setIsPostcodeFieldFocused(false)
    } else setIsPostcodeFieldFocused(true)
  }, [postcodeValue, isPostcodeFieldFocused])


  // * Ambition Explorer Journey sections
  const [industriesThriveRef, industriesThriveInView] = useInView({ threshold: 0, })
  const [boomingIndustriesRef, boomingIndustriesInView] = useInView({ threshold: 0, })
  const [ambitionExplorerJourneyUiTheme, setAmbitionExplorerJourneyUiTheme] = useState(colorNavy)
  const [isAmbitionExplorerJourneyEnabled, setIsAmbitionExplorerJourneyEnabled] = useState(false)
  const [isAmbitionExplorerLandingEnabled, setIsAmbitionExplorerLandingEnabled] = useState(true)

  const [isIndustriesThriveEnabled, setIsIndustriesThriveEnabled] = useState(true)

  const [isStateSceneEnabled, setIsStateSceneEnabled] = useState(false)
  const [isStateSceneDisclaimerVisible, setIsStateSceneDisclaimerVisible] = useState(false)

  const [stateSceneAerospaceRef, stateSceneAerospaceInView] = useInView({ threshold: 0, })
  const [stateSceneMattressRef, stateSceneMattressInView] = useInView({ threshold: 0, })
  const [stateSceneBeesRef, stateSceneBeesInView] = useInView({ threshold: 0, })
  const [stateSceneIceCreamRef, stateSceneIceCreamInView] = useInView({ threshold: 0, })
  const [stateScenePhotographyRef, stateScenePhotographyInView] = useInView({ threshold: 0, })
  const [stateSceneSugarCaneRef, stateSceneSugarCaneInView] = useInView({ threshold: 0, })
  const [stateSceneLobsterRef, stateSceneLobsterInView] = useInView({ threshold: 0, })
  const [stateSceneTravelAgentRef, stateSceneTravelAgentInView] = useInView({ threshold: 0, })
  const [stateScenePubRef, stateScenePubInView] = useInView({ threshold: 0, })
  const [stateSceneInvestigationRef, stateSceneInvestigationInView] = useInView({ threshold: 0, })
  const [stateSceneFloristRef, stateSceneFloristInView] = useInView({ threshold: 0, })

  const StateDisclaimer = (props) => (
    <Disclaimer
      {...props}
      zIndex={1}
      copy="The above figures refer to actively trading businesses for the period 2017/2018 financial year"
      sourceName="Australian Bureau of Statistics"
      sourceLink="https://www.abs.gov.au/"
    />
  )

  // * Grant Application
  const [applicationFormRef, applicationFormInView] = useInView({ threshold: 0, })
  const [isApplicationFormVisible, setIsApplicationFormVisible] = useState(false)
  const [igniteYourAmbitionRef, igniteYourAmbitionInView] = useInView({ threshold: 0 })
  const [nowOverToYouRef, nowOverToYouInView] = useInView({ threshold: 0 })
  const [isIgniteYourAmbitionEnabled, setIsIgniteYourAmbitionEnabled] = useState(true)
  const [isApplicationFormEnabled, setIsApplicationFormEnabled] = useState(true)


  // * Toggle active sections or side menu
  useEffect(() => {
    // console.log('1. Is The Hero:', heroInView)
    // console.log('2. Is The Problem:', theProblemInView)
    // console.log('3. Is The Solution:', theSolutionInView)
    // console.log('4. Is Ambition Explorer:', ambitionExplorerLandingInView)
    // console.log('4.1 Is Ambition Explorer Landing:', isAmbitionExplorerLandingEnabled)
    // console.log('4.2 Is Ambition Explorer Journey Enabled:', isAmbitionExplorerJourneyEnabled)

    // console.log('6. Is Journey > Industries Thrive:', industriesThriveInView)
    // console.log('7. Is Journey > Booming Industries:', boomingIndustriesInView)
    // console.log('Aerospace:', stateSceneAerospaceInView)
    // console.log('Mattress:', stateSceneMattressInView)
    // console.log('Bees:', stateSceneBeesInView)
    // console.log('IceCream:', stateSceneIceCreamInView)
    // console.log('Photography:', stateScenePhotographyInView)
    // console.log('Sugarcane:', stateSceneSugarCaneInView)
    // console.log('Grapes:', stateSceneGrapesInView)
    // console.log('9. Is Ignite Ambition ', igniteYourAmbitionInView)
    // console.log('10. Is Application Form', applicationFormInView)

    if (stateSceneBeesInView ||
      stateSceneIceCreamInView ||
      stateSceneSugarCaneInView ||
      stateScenePhotographyInView ||
      stateSceneLobsterInView ||
      stateSceneTravelAgentInView ||
      stateScenePubInView ||
      stateSceneInvestigationInView ||
      stateSceneFloristInView) {
      // * Set colors of UI elements
      setHamburgerColor(colorNavy)
      setInactiveSideNavDotColor(colorNavy)
      setAmbitionExplorerJourneyUiTheme(colorNavy)

      // * Set Visibilty to other elements
      setIsStateSceneDisclaimerVisible(true)
    }

    if (stateSceneAerospaceInView ||
      stateSceneMattressInView ||
      stateSceneInvestigationInView) {
      // * Set colors of UI elements
      setHamburgerColor(colorGreen)
      setInactiveSideNavDotColor(colorGreen)
      setAmbitionExplorerJourneyUiTheme(colorGreen)

      // * Set Visibilty to other elements
      setIsStateSceneDisclaimerVisible(true)
    }

    if (theProblemInView) {
      setIsTheProblemVisible(true)
      setTrackingData(['the-problem'])

      // * Set colors of UI elements
      setHamburgerColor(colorGreen)
      setInactiveSideNavDotColor(colorGreen)

      // * Set No Visibilty to other sections
      setIsTheSolutionVisible(false)
      setIsAmbitionExplorerVisible(false)
      setIsApplicationFormVisible(false)
    }

    if (theSolutionInView) {
      setIsTheSolutionVisible(true)
      setTrackingData(['the-solution'])

      // * Set colors of UI elements
      setHamburgerColor(colorNavy)
      setInactiveSideNavDotColor(colorNavy)

      // * Set No Visibilty to other sections
      setIsTheProblemVisible(false)
      setIsAmbitionExplorerVisible(false)
      setIsApplicationFormVisible(false)
    }

    if (boomingIndustriesInView) {
      // * Set colors of UI elements
      setAmbitionExplorerJourneyUiTheme(colorNavy)
    }

    if (ambitionExplorerLandingInView) {
      shutdownAmbitionJourney()
      setIsAmbitionExplorerVisible(true)
      setTrackingData(['ambition-explorer-tool'])

      // * Set colors of UI elements
      setHamburgerColor(colorNavy)
      setInactiveSideNavDotColor(colorNavy)
      setAmbitionExplorerJourneyUiTheme(colorNavy)

      // * Set No Visibilty to other sections
      setIsTheSolutionVisible(false)
      setIsTheProblemVisible(false)
      setIsApplicationFormVisible(false)
      setIsAmbitionExplorerJourneyEnabled(false)
      setIsEditAndCloseVisible(false)
      setIsStateSceneDisclaimerVisible(false)
    }

    if (nowOverToYouInView) {
      setIsEditAndCloseVisible(false)

      // * Set colors of UI elements
      setHamburgerColor(colorNavy)
      setInactiveSideNavDotColor(colorNavy)
      setAmbitionExplorerJourneyUiTheme(colorNavy)

      // * Set No Visibilty to other sections
      // setIsStateSceneEnabled(false)
      setIsStateSceneDisclaimerVisible(false)
    }

    if (applicationFormInView) {
      setIsApplicationFormVisible(true)

      // * Set colors of UI elements
      setHamburgerColor(colorNavy)
      setInactiveSideNavDotColor(colorNavy)

      // * Set No Visibilty to other sections
      setIsAmbitionExplorerVisible(false)
      setIsTheSolutionVisible(false)
      setIsTheProblemVisible(false)

      shutdownAmbitionJourney()
      setIsAmbitionExplorerJourneyEnabled(false)
    }

    if (igniteYourAmbitionInView) {
      setIsIgniteScreenVisible(true)
      setIsApplicationFormVisible(true)

      // * Set colors of UI elements
      setHamburgerColor(colorGreen)
      setInactiveSideNavDotColor(colorGreen)

      // * Set No Visibilty to other sections
      setIsAmbitionExplorerVisible(false)
      setIsTheSolutionVisible(false)
      setIsTheProblemVisible(false)
      setIsStateSceneDisclaimerVisible(false)
    }

    if (heroInView) {
      setIsSideNavigationVisible(false)
      setIsMainMenuShown(true)
      setShowLogoTagline(true)

      // * Set colors of UI elements
      setHamburgerColor(colorGreen)
      setInactiveSideNavDotColor(colorGreen)

      // * Set No Visibilty to other sections
      setIsTheProblemVisible(false)
      setIsTheSolutionVisible(false)
      setIsAmbitionExplorerVisible(false)
      setIsApplicationFormVisible(false)
      setIsStateSceneDisclaimerVisible(false)

    } else {
      setIsSideNavigationVisible(true)
      setShowLogoTagline(false)
      setIsMainMenuShown(false)
    }

  }, [
    heroInView,
    theProblemInView,
    theSolutionInView,
    ambitionExplorerLandingInView,
    isAmbitionExplorerLandingEnabled,
    boomingIndustriesInView,
    stateSceneAerospaceInView,
    stateSceneMattressInView,
    stateSceneBeesInView,
    stateSceneIceCreamInView,
    stateScenePhotographyInView,
    stateSceneSugarCaneInView,
    stateSceneLobsterInView,
    stateSceneTravelAgentInView,
    stateSceneInvestigationInView,
    stateSceneFloristInView,
    igniteYourAmbitionInView,
    applicationFormInView,
  ])

  // * Disclaimers
  const [isLastYearsAbnDisclaimerVisible, setIsLastYearsAbnDisclaimerVisible] = useState(false)

  // * <StyledLastYearWrapper />
  const [isScreenVisible, setIsScreenVisible] = useState(false)
  const [isBlueWedgeTicking, setIsBlueWedgeTicking] = useState(false)
  const [isLastYearsAbnTextVisible, setIsLastYearsAbnTextVisible] = useState(true)
  const [is48HoursTextVisible, setIs48HoursTextVisible] = useState(false)
  const [isLostAmbitionTextVisible, setIsLostAmbitionTextVisible] = useState(false)
  const [isSceneEnding, setIsSceneEnding] = useState(false)
  const [isLastYearVisible, setIsLastYearVisible] = useState(true)
  const [isSpeechBubbleBoxVisible, setIsSpeechBubbleBoxVisible] = useState(false)
  const [isSpeechBubbleExploding, setIsSpeechBubbleExploding] = useState(false)

  // * <StyledStartABizWrapper />
  const [isAflLogoPrimary, setIsAflLogoPrimary] = useState(false)
  const [is90timesTextVisible, setIs90timesTextVisible] = useState(false)
  const [is6PercentTextVisible, setIs6PercentTextVisible] = useState(false)
  const [is9millionAusTextVisible, setIs9millionAusTextVisible] = useState(false)
  const [isTimeWeChangedTextVisible, setIsTimeWeChangedTextVisible] = useState(false)
  const [isStartABizVisible, setIsStartABizVisible] = useState(false)
  const [isTimeWeChangedScreenVisible, setIsTimeWeChangedScreenVisible] = useState(false)
  const [isZoomOutDotVisible, setIsZoomOutDotVisible] = useState(false)

  // * <Logo />
  const [isLogoPrimary, setIsLogoPrimary] = useState(true)
  const [savedLogoState, setSavedLogoState] = useState(true)
  const [showLogoTagline, setShowLogoTagline] = useState(false)

  // * <StartABusiness />
  const [showDots, setShowDots] = useState(false)
  const [showNavy, setShowNavy] = useState(false)
  const [areDotsFalling, setAreDotsFalling] = useState(false)

  // * <AmbitionExplorer - Journey />
  const [apiData, setApiData] = useState({ state: '', suburbs: [] })
  const [apiLoading, setApiLoading] = useState(false)
  const [isPinAnimating, setIsPinAnimating] = useState(false)
  const [isSurroundingSuburbAbnsVisible, setIsSurroundingSuburbAbnsVisible] = useState(false)

  const [hasClosedButtonBeenClicked, setHasClosedButtonBeenClicked] = useState(false)
  const [isEditAndCloseVisible, setIsEditAndCloseVisible] = useState(false)

  // * <IgniteYourAmbition />
  const [isIgniteScreenVisible, setIsIgniteScreenVisible] = useState(false)
  const [isIgniteYourAmbitionBackupEnabled, setIsIgniteYourAmbitionBackupEnabled] = useState(false)

  const [hideLastApplicationForm, setHideLastApplicationForm] = useState(false)
  const [igniteAnimation, setIgniteAnimation] = useState(false)
  const [igniteLowerIndex, setIgniteLowerIndex] = useState(0)
  const [trackingData, setTrackingData] = useState(['home', false, false])

  //* SCROLL
  const [scrollPaused, setScrollPaused] = useState(true)

  const [scrollDotColor, setScrollDotColor] = useState(colorGreen)

  function handleScrollPromptOnClick(e) {
    e.preventDefault()
    if (heroInView) {
      document.location = '#the-problem'
    }
    else if (theProblemInView) {
      document.location = '#the-solution'
    }
    else if (theSolutionInView) {
      document.location = '#ambition-explorer'
    }
    else if (
      ambitionExplorerLandingInView ||
      stateSceneBeesInView ||
      stateSceneIceCreamInView ||
      stateSceneSugarCaneInView ||
      stateSceneAerospaceInView ||
      stateSceneMattressInView ||
      stateScenePhotographyInView) {
      document.location = '#grant-application'
    }
    else {
      document.location = '#top'
    }
  }

  function offset(el) {
    if (el !== null) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
  }

  useEffect(() => {
    let isScrolling
    window.addEventListener('scroll', (event) => {
      window.clearTimeout(isScrolling)

      setScrollPaused(false)
      // TODO: conditional to check if current scene animation has finished
      isScrolling = setTimeout(() => {
        // Run the callback
        let application = document.getElementById('grant-application')
        let applicationOffset = offset(application)
        if (window.scrollY < applicationOffset.top) {
          setScrollPaused(true);
        }

      }, 1500)

    }, false)
  }, [scrollPaused])


  //* API INTEGRATION

  // ? ABNs cancelled in your area
  async function fetchAbnCancelledApi() {
    const result = await axios(`https://${apiBaseURL}/abn/api/can/postcodes/${postcodeValue}?${Math.random().toString(36).substring(7)}`)
    const { data } = result
    return data
  }

  useEffect(() => {
    tracking(trackingData[0], trackingData[1], trackingData[2])
  }, [trackingData])


  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (isBlueWedgeTicking) {
        setShowNavy(false)
        setIs48HoursTextVisible(true)
        setIsLostAmbitionTextVisible(false)
        setScrollDotColor(colorWhite)
      }
    }, 0)

    const timer2 = setTimeout(() => {
      if (isBlueWedgeTicking) {
        setIs48HoursTextVisible(false)
      }
    }, 3500)

    const timer3 = setTimeout(() => {
      if (isBlueWedgeTicking) {
        setIsLostAmbitionTextVisible(true)
      }
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [isBlueWedgeTicking])


  useEffect(() => {
    const nineMiliionSequenceTimer1 = setTimeout(() => {
      setIs90timesTextVisible(false)
      setIsZoomOutDotVisible(false)
      setShowDots(false)
      setIs6PercentTextVisible(false)
      setAreDotsFalling(false)
      setScrollDotColor(colorWhite)

      if (isStartABizVisible) {
        setIsTimeWeChangedScreenVisible(false)
        setIs90timesTextVisible(false)
        setIs9millionAusTextVisible(true)
      }
    }, 0)

    const nineMiliionSequenceTimer2 = setTimeout(() => {
      if (isStartABizVisible) {
        setIsZoomOutDotVisible(true)
      }
    }, 3500)

    const nineMiliionSequenceTimer3 = setTimeout(() => {
      if (isStartABizVisible) {
        setIs9millionAusTextVisible(false)
        setHamburgerColor(colorGreen)
        setInactiveSideNavDotColor(colorGreen)
      }
    }, 3550)

    const nineMiliionSequenceTimer4 = setTimeout(() => {
      if (isStartABizVisible) {
        setShowNavy(true)
      }
    }, 3650)

    const nineMiliionSequenceTimer5 = setTimeout(() => {
      if (isStartABizVisible) {
        setIs90timesTextVisible(true)
        setIsZoomOutDotVisible(false)
        setShowDots(true)
      }
    }, 3710)

    // const nineMiliionSequenceTimer6 = setTimeout(() => {
    //   if (isStartABizVisible) {
    //   }
    // }, 4800)

    return () => {
      clearTimeout(nineMiliionSequenceTimer1)
      clearTimeout(nineMiliionSequenceTimer2)
      clearTimeout(nineMiliionSequenceTimer3)
      clearTimeout(nineMiliionSequenceTimer4)
      clearTimeout(nineMiliionSequenceTimer5)
      // clearTimeout(nineMiliionSequenceTimer6)
    }
  }, [isStartABizVisible])

  return (
    <Preloader fadeDuration="4000" style={preLoadStyles}>
      <>
        <Head>
          <title>ABN Rescue</title>
          <meta name="description" content="When did ambition become a dirty word? Our ambition is to rescue Australia's ambition. Kickstart your ambition with a business grant from CGU. CGU - Insuring Ambition"></meta>
          <link rel="icon" type="image/ico" href="static/media/favicon.ico" />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: 'druk-bold';
            src: url('static/fonts/Druk-Bold-Web.woff2') format('woff2'),
              url('static/fonts/Druk-Bold-Web.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            font-display: auto;

          }
          @font-face {
            font-family: 'druk-medium';
            src: url('static/fonts/Druk-Medium-Web.woff2') format('woff2'),
              url('static/fonts/Druk-Medium-Web.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            font-display: auto;
          }
          @font-face {
            font-family: 'neptune-bold';
            font-display: auto;
            src: url('static/fonts/39D72D_0_0.eot');
            src: url('static/fonts/39D72D_0_0.eot?#iefix') format('embedded-opentype'),
              url('static/fonts/39D72D_0_0.woff2') format('woff2'),
              url('static/fonts/39D72D_0_0.woff') format('woff'),
              url('static/fonts/39D72D_0_0.ttf') format('truetype');
          }
          @font-face {
            font-family: 'neptune';
            font-display: auto;
            src: url('static/fonts/39D72D_1_0.eot');
            src: url('static/fonts/39D72D_1_0.eot?#iefix') format('embedded-opentype'),
              url('static/fonts/39D72D_1_0.woff2') format('woff2'),
              url('static/fonts/39D72D_1_0.woff') format('woff'),
              url('static/fonts/39D72D_1_0.ttf') format('truetype');
          }
        `}</style>
        <Page isBurgerMobileMenuOpen={isBurgerMobileMenuOpen}>
          <Header
            hamburgerColor={hamburgerColor}
            isLogoPrimary={isLogoPrimary}
            grantApplicationOnClick={handleGrantAppliactionCta}
            logoLink="#top"
            logoOnClick={handleLogoClick}
            isMainMenuShown={isMainMenuShown}
            isBurgerMobileMenuOpen={isBurgerMobileMenuOpen}
            onBurgerClick={() => toggleBurgerClick()}
            onBurgerMobileClick={() => toggleBurgerMobileClick()}
          >
            {
              (
                heroInView ||
                isAflLogoPrimary ||
                stateSceneAerospaceInView ||
                stateSceneMattressInView ||
                stateSceneInvestigationInView
              ) ? (
                  <Logo
                    isLogoPrimary
                    logoOnClick={handleLogoClick}
                    showTagline={showLogoTagline}
                  />
                ) : (
                  <Logo
                    isLogoPrimary={false}
                    logoOnClick={handleLogoClick}
                    showTagline={showLogoTagline} />
                )
            }
          </Header>
          {
            isSideNavigationVisible && (
              <SideNavigation
                inactiveSideNavDotColor={inactiveSideNavDotColor}
                isTheProblemScreenVisible={isTheProblemVisible}
                isTheSolutionScreenVisible={isTheSolutionVisible}
                isAmbitionExplorerScreenVisible={isAmbitionExplorerVisible}
                isGrantApplicationScreenVisible={isApplicationFormVisible}
                onClickTheProblemSideNav={onClickTheProblemSideNav}
                onClickTheSolutionSideNav={onClickTheSolutionSideNav}
                onClickAmbitionExplorerSideNav={onClickAmbitionExplorerSideNav}
                onClickGrantApplicationSideNav={onClickGrantApplicationSideNav}
              />
            )
          }

          {
            !isApplicationFormVisible && (
              <ScrollPrompt
                scrollDotColor={scrollDotColor}
                scrollPaused={scrollPaused}
                onClick={handleScrollPromptOnClick}
              />
            )
          }

          <StyledScreen ref={heroRef} id="ambition-wanted" theme={colorNavy} zIndex={0}>
            <Waypoint onEnter={onEnterHero} onLeave={() => setIsMainMenuShown(false)}>
              <div>
                <Hero />
              </div>
            </Waypoint>
          </StyledScreen>

          <Main>
            <div ref={theProblemRef}>
              <section className="screen-section">
                <div className="anchor" id="the-problem" />
                <Controller>
                  <Scene
                    triggerHook="onLeave"
                    duration={5250}
                    reverse
                    pin
                  >
                    {(progress) => {
                      // console.log(progress)
                      // * Last Years ABNS > Lot of lost ambition
                      if (progress === 0) {
                        setIsTimeWeChangedScreenVisible(false)
                        setShowNavy(false)
                        setIsZoomOutDotVisible(false)
                      }

                      if (progress > 0 && progress < 0.18) {
                        setIsLastYearsAbnDisclaimerVisible(true)
                      } else {
                        setIsLastYearsAbnDisclaimerVisible(false)
                      }

                      if (progress > 0 && progress < 0.5) {
                        setIsScreenVisible(true)
                      } else setIsScreenVisible(false)

                      // * Green speech bubble with text
                      if (progress > 0) {
                        setIsSpeechBubbleBoxVisible(true)
                        setIsLastYearsAbnTextVisible(true)
                      } else {
                        setIsSpeechBubbleBoxVisible(false)
                        setIsLastYearsAbnTextVisible(false)
                      }

                      if (progress > 0.18) {
                        setIsSpeechBubbleExploding(true)
                      } else setIsSpeechBubbleExploding(false)

                      // ? Blue Wedge Ticking
                      if (progress > 0.185 && progress < 0.4) {
                        setIsBlueWedgeTicking(true)
                        setHamburgerColor(colorNavy)
                        setInactiveSideNavDotColor(colorNavy)
                      } else {
                        setIsBlueWedgeTicking(false)
                        setIsLostAmbitionTextVisible(false)
                        setIs48HoursTextVisible(false)
                      }

                      if (progress > 0.4) {
                        setIsSceneEnding(true)
                        setIsLostAmbitionTextVisible(false)
                      } else setIsSceneEnding(false)


                      if (progress > 0.4) {
                        setIsLastYearVisible(false)
                      } else setIsLastYearVisible(true)

                      // * 9 Million > Time We Changed
                      if (progress > 0.4 && progress < 1) {
                        setIsStartABizVisible(true)
                      }

                      if (progress < 0.4) {
                        setIsStartABizVisible(false)
                        setIs90timesTextVisible(false)
                      }

                      if (progress > 0.5 && progress < 0.6) {
                        setIs6PercentTextVisible(false)
                        setAreDotsFalling(false)
                      }

                      if (progress > 0.55 && progress < 0.6) {
                        setIs90timesTextVisible(true)
                      }

                      if (progress > 0.86 && progress < 0.93) {
                        setIsAflLogoPrimary(true)
                      }

                      if (progress > 0.83) {
                        setIsAflLogoPrimary(false)
                      }

                      if (progress > 0.6 && progress < 0.75) {
                        setIs6PercentTextVisible(true)
                        setIs90timesTextVisible(false)
                        setAreDotsFalling(true)
                      }

                      if (progress < 0.75) {
                        setIsTimeWeChangedScreenVisible(false)
                      }

                      if (progress > 0.75) {
                        setIsTimeWeChangedScreenVisible(true)
                      }

                      if (progress > 0.75 && progress < 1) {
                        setHamburgerColor(colorNavy)
                        setInactiveSideNavDotColor(colorNavy)
                      }

                      if (progress > 0 && progress < 0.75) {
                        setIsTimeWeChangedTextVisible(false)
                      } else if (progress > 0.95) setIsTimeWeChangedTextVisible(false)
                      else setIsTimeWeChangedTextVisible(true)

                      return (
                        <div>
                          {
                            isLastYearVisible && (
                              <StyledScreen theme={colorNavy} zIndex={5}>
                                <StyledLastYearWrapper>
                                  <div className="sticky">
                                    <LastYearAbns
                                      isDislaimerVisible={isLastYearsAbnDisclaimerVisible}
                                      isSpeechBubbleBoxVisible={isSpeechBubbleBoxVisible}
                                      isSpeechBubbleExploding={isSpeechBubbleExploding}
                                      isBlueWedgeTicking={isBlueWedgeTicking}
                                      isLastYearsAbnTextVisible={isLastYearsAbnTextVisible}
                                      is48HoursTextVisible={is48HoursTextVisible}
                                      isScreenVisible={isScreenVisible}
                                      isSceneEnding={isSceneEnding}
                                      progress={progress}
                                      isLostAmbitionTextVisible={isLostAmbitionTextVisible}
                                    />
                                  </div>

                                </StyledLastYearWrapper>
                              </StyledScreen>
                            )
                          }
                          {
                            isStartABizVisible && (
                              <StyledScreen theme={`${progress > 0.9 ? colorGreen : colorBlue}`} zIndex={6}>
                                <StyledStartABizWrapper>
                                  <div className="sticky">
                                    <StartABizTimeline
                                      areDotsFalling={areDotsFalling}
                                      is90timesTextVisible={is90timesTextVisible}
                                      is6PercentTextVisible={is6PercentTextVisible}
                                      is9millionAusTextVisible={is9millionAusTextVisible}
                                      isTimeWeChangedTextVisible={isTimeWeChangedTextVisible}
                                      isTimeWeChangedScreenVisible={isTimeWeChangedScreenVisible}
                                      isZoomOutDotVisible={isZoomOutDotVisible}
                                      progress={progress}
                                      showNavy={showNavy}
                                      showDots={showDots}
                                    />
                                  </div>
                                </StyledStartABizWrapper>
                              </StyledScreen>
                            )
                          }
                        </div>
                      )
                    }}
                  </Scene>
                </Controller>

              </section>
            </div>

            <Waypoint onEnter={() => setIsMainMenuShown(false)} />
            <div ref={theSolutionRef}>
              <section className="screen-section">
                <StyledScreen theme={colorOrange}>
                  <div className="anchor" id="the-solution" />
                  <Desktop>
                    <BackingSmallBusiness duration={7500} />
                  </Desktop>
                  <TabletRetina>
                    <BackingSmallBusiness duration={4000} />
                  </TabletRetina>
                  <Mobile>
                    <BackingSmallBusiness duration={5000} />
                  </Mobile>
                </StyledScreen>
              </section>
            </div>




            {/* 
              Ambition Explorer Landing !
              Disable Component when Journey has been started.
              Only Enable when Journey has completed, 
              Edit Location has been clicked or close has been clicked 
            */}

            {
              isAmbitionExplorerLandingEnabled && (
                <div ref={ambitionExplorerLandingRef} style={{ background: colorBlue }}>

                  <section className="screen-section">
                    <div className="anchor anchor__ambition-explorer" id="ambition-explorer" />
                    <StyledScreen theme={colorBlue} height='3000px'>
                      <div>
                        <AmbitionExplorer
                          apiData={apiData}
                          ctaLabel="CLICK TO SEARCH A POSTCODE"
                          ctaOnClick={handleLaunchAmbitionExplorer}
                          ctaLink="/"
                          trackingName="launchExplorer"
                          isPinAnimating={isPinAnimating}
                          isLandingVisible={ambitionExplorerLandingInView}
                          isSurroundingSuburbAbnsVisible={isSurroundingSuburbAbnsVisible}
                          isPostcodeFieldFocused={isPostcodeFieldFocused}
                          isPreviousSceneVisible={theSolutionInView}
                          postcodeOnChange={handlePostcodeOnChange}
                          placeholder="postcode"
                          postcodeValue={postcodeValue}
                          postcodeFieldRef={postcodeField}
                          yourPostcode={postcodeValue}
                          errorMsg={ambitionErrorMsg}
                          loading={apiLoading}
                        />
                      </div>
                    </StyledScreen>
                  </section>
                </div>
              )
            }


            {
              isEditAndCloseVisible && (
                <>
                  <EditLocation
                    theme={ambitionExplorerJourneyUiTheme}
                    postcodeValue={postcodeValue}
                    handleEditLocation={handleEditLocation}
                  />
                  <CloseIcon
                    theme={ambitionExplorerJourneyUiTheme}
                    closeIconOnClick={handleCloseAmbitionExplorer}
                    closeIconLink="#ambition-explorer"
                  />
                </>
              )
            }


            {
              isAmbitionExplorerJourneyEnabled && (
                <section id="ambition-explorer-journey">

                  {
                    isIndustriesThriveEnabled && (
                      <div ref={industriesThriveRef}>
                        <MediaQuery minDeviceWidth={1901}>
                          <StyledScreen id="industries-thrive" height="5000px">
                            <IndustriesThrive duration={5000} />
                          </StyledScreen>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1900}>
                          <StyledScreen id="industries-thrive" height="3500px">
                            <IndustriesThrive duration={3500} />
                          </StyledScreen>
                        </MediaQuery>
                      </div>
                    )
                  }

                  <div ref={boomingIndustriesRef}>
                    <StyledScreen id="booming-states" theme={colorBlue} height="3000px">
                      <BoomingStates state={apiData.state} />
                    </StyledScreen>
                  </div>

                  {/* 
                  State Based - NSW Starts
                */}

                  {
                    isStateSceneEnabled && (
                      <>
                        {
                          apiData.state === 'NSW' ? (
                            <>
                              <div ref={stateSceneAerospaceRef}>
                                <StyledScreen id="new-south-wales-aerospace-industry" theme={colorNavy} height="3000px">
                                  <Aerospace />
                                  {
                                    isStateSceneDisclaimerVisible && (
                                      !stateSceneBeesInView && (
                                        <StateDisclaimer color={colorWhite} />
                                      )
                                    )
                                  }
                                </StyledScreen>
                              </div>

                              <div ref={stateSceneBeesRef}>
                                <StyledScreen id="new-south-wales-bees-industry" theme={colorOrange} height="3000px">
                                  <Bees state="NSW" />
                                  {
                                    isStateSceneDisclaimerVisible && (
                                      stateSceneBeesInView && (
                                        <StateDisclaimer />
                                      )
                                    )
                                  }
                                </StyledScreen>
                              </div>
                            </>
                          ) : null
                        }

                        {
                          apiData.state === 'VIC' ? (
                            <>
                              <div ref={stateSceneMattressRef}>
                                <StyledScreen id="victoria-mattress-industry" theme={colorNavy} height="3000px">
                                  <Mattress state='VIC' />
                                  {
                                    isStateSceneDisclaimerVisible && (
                                      !stateSceneIceCreamInView && (
                                        <StateDisclaimer color={colorWhite} />
                                      )
                                    )
                                  }
                                </StyledScreen>
                              </div>
                              <div ref={stateSceneIceCreamRef}>
                                <StyledScreen id="victoria-ice-cream-industry" theme={colorBlue} height="3000px">
                                  <IceCream />
                                  {
                                    isStateSceneDisclaimerVisible && (
                                      stateSceneIceCreamInView && (
                                        <StateDisclaimer color={colorNavy} />
                                      )
                                    )
                                  }
                                </StyledScreen>
                              </div>
                            </>
                          ) : null
                        }

                        {
                          apiData.state === 'SA' ? (
                            <div ref={stateSceneMattressRef}>
                              <StyledScreen id="south-australia-mattress-industry" theme={colorNavy} height="3000px">
                                <Mattress state='SA' />
                                {
                                  isStateSceneDisclaimerVisible && (
                                    <StateDisclaimer color={colorWhite} />
                                  )
                                }
                              </StyledScreen>
                            </div>
                          ) : null
                        }

                        {
                          apiData.state === 'NT' ? (
                            <>
                              <div ref={stateSceneFloristRef}>
                                <StyledScreen id="northern-terrirory-florist-industry" theme={colorGreen} height="3000px">
                                  <Florist />
                                </StyledScreen>
                              </div>

                              <div ref={stateSceneTravelAgentRef}>
                                <StyledScreen id="northern-terrirory-travel-agent-industry" theme={colorBlue} height="3000px">
                                  <TravelAgent state="NT" />
                                </StyledScreen>
                              </div>
                              {
                                isStateSceneDisclaimerVisible && (
                                  <StateDisclaimer />
                                )
                              }
                            </>
                          ) : null
                        }

                        {
                          apiData.state === 'ACT' ? (
                            <>
                              <div ref={stateSceneInvestigationRef}>
                                <StyledScreen id="act-investigation-industry" theme={colorNavy} height="3000px">
                                  <Investigation />
                                </StyledScreen>
                                {
                                  isStateSceneDisclaimerVisible && (
                                    stateSceneInvestigationInView && (
                                      <StateDisclaimer color={colorGreen} />
                                    )
                                  )
                                }
                              </div>

                              <div ref={stateScenePubRef}>
                                <StyledScreen id="act-pub-industry" theme={colorOrange} height="3000px">
                                  <Pub />
                                </StyledScreen>
                                {
                                  isStateSceneDisclaimerVisible && (
                                    !stateSceneInvestigationInView && (
                                      <StateDisclaimer />
                                    )
                                  )
                                }
                              </div>
                            </>
                          ) : null
                        }


                        {
                          apiData.state === 'TAS' ? (
                            <>
                              <div ref={stateSceneBeesRef}>
                                <StyledScreen id="tasmania-bee-industry" theme={colorOrange} height="3000px">
                                  <Bees state='TAS' />
                                </StyledScreen>
                              </div>
                              <div ref={stateSceneLobsterRef}>
                                <StyledScreen id="tasmania-lobster-industry" theme={colorBlue} height="3000px">
                                  <Lobster state='TAS' />
                                </StyledScreen>
                              </div>

                              {
                                isStateSceneDisclaimerVisible && (
                                  <StateDisclaimer />
                                )
                              }
                            </>
                          ) : null
                        }

                        {
                          apiData.state === 'WA' ? (
                            <>
                              <div ref={stateSceneLobsterRef}>
                                <StyledScreen id="western-australian-lobster-industry" theme={colorBlue} height="3000px">
                                  <Lobster state='WA' />
                                </StyledScreen>
                              </div>

                              <div ref={stateSceneTravelAgentRef}>
                                <StyledScreen id="western-australian-travel-agent-industry" theme={colorBlue} height="3000px">
                                  <TravelAgent state='WA' />
                                </StyledScreen>
                              </div>
                              {
                                isStateSceneDisclaimerVisible && (
                                  <StateDisclaimer />
                                )
                              }
                            </>
                          ) : null
                        }

                        {
                          apiData.state === 'QLD' ? (
                            <>
                              <div ref={stateSceneSugarCaneRef}>
                                <StyledScreen id="queensland-sugar-cane-industry" theme={colorGreen} height="3000px">
                                  <SugarCane />
                                </StyledScreen>
                              </div>
                              <div ref={stateScenePhotographyRef}>
                                <StyledScreen id="queensland-photography-industry" theme={colorBlue} height="3000px">
                                  <Photography />
                                </StyledScreen>
                              </div>
                              {
                                isStateSceneDisclaimerVisible && (
                                  (stateSceneSugarCaneRef || stateScenePhotographyInView) && (
                                    <StateDisclaimer />
                                  )
                                )
                              }
                            </>
                          ) : null
                        }
                      </>
                    )
                  }


                  <div ref={nowOverToYouRef}>
                    <StyledScreen id="over-to-you" theme={colorGreen}>
                      <OverToYou />
                    </StyledScreen>
                  </div>
                </section>
              )
            }


            {
              isIgniteYourAmbitionEnabled && (
                <div ref={igniteYourAmbitionRef} style={{ zIndex: 1, position: 'relative' }}>
                  <Waypoint onEnter={() => setIgniteAnimation(true)} onLeave={() => setIgniteAnimation(false)}>
                    <section className="screen-section">
                      <Desktop>
                        <StyledScreen id="ignite-your-ambition" height={3000} theme={colorNavy}>
                          <IgniteYourAmbition isVisible={igniteAnimation} hasClosedButtonBeenClicked={hasClosedButtonBeenClicked} />
                        </StyledScreen>
                      </Desktop>
                      <TabletRetinaDown>
                        <StyledScreen id="ignite-your-ambition" theme={colorNavy}>
                          <IgniteYourAmbition hasClosedButtonBeenClicked={hasClosedButtonBeenClicked} />
                        </StyledScreen>
                      </TabletRetinaDown>
                    </section>
                  </Waypoint>
                </div>
              )
            }



            <div ref={applicationFormRef}>
              <section className="screen-section">
                <Waypoint onEnter={() => setTrackingData(['download-grant-application'])} />
                <div className="anchor anchor__grant-application" id="grant-application" />
                <StyledScreen minHeight="100vh" theme={colorGreen}>
                  {
                    isApplicationFormEnabled && (
                      <ApplyForGrant onClickSubmitApplication={onClickSubmitApplication} />
                    )
                  }
                </StyledScreen>
                <StyledScreen minHeight="20vh" id="footer" theme={colorNavy}>
                  <Footer />
                </StyledScreen>
              </section>
            </div>
          </Main>
        </Page>
      </>
      <Placeholder>
        <div className="loader" />
      </Placeholder>

    </Preloader>
  )


  //* /////////// *//
  //* // Functions //
  //* /////////// *//



  function showScrollIcon() {
    console.log('show scroll icon');
  }

  function tracking(pageName, grantSubmit) {
    if (pageName === undefined) {
      pageName = 'home';
    }
    if (grantSubmit === undefined) {
      grantSubmit = false;
    }
    if (!grantSubmit) {
      iagDataLayer.push({
        'event': 'pageview',
        'pageId': 'CGU/all/abn-rescue/' + pageName,
        'data': {
          'appNameVersion': 'abn-rescue|version1.0'
        }
      })
    } else {
      iagDataLayer.push({
        'event': 'pageview',
        'pageId': 'CGU/all/abn-rescue/' + pageName,
        'data': {
          'appNameVersion': 'abn-rescue|version1.0',
          'transactionType': 'business:abn-rescue:grant-app-complete',
          'quoteComplete': 'true'
        }
      })
    }
  }

  function handleGrantAppliactionCta() {

    setTimeout(() => {
      if (hideLastApplicationForm) {
        setHideLastApplicationForm(false)
      }
    }, 0)

    setTimeout(() => {
      if (!hideLastApplicationForm) {
        document.location = '#grant-application'
      }
    }, 5)

    document.location = '#grant-application'
  }

  function handleCloseAmbitionExplorer() {
    shutdownAmbitionJourney()
    setIsAmbitionExplorerJourneyEnabled(false)
    setIsStateSceneEnabled(false)
    setIsIgniteYourAmbitionEnabled(false)
    setIsApplicationFormEnabled(false)
    setAmbitionExplorerJourneyUiTheme(colorNavy)
    document.location = '#ambition-explorer'

    setTimeout(() => {
      setIsIgniteYourAmbitionEnabled(true)
      setIsApplicationFormEnabled(true)
    }, 500)
  }

  function shutdownAmbitionJourney() {
    setAmbitionExplorerJourney(false)
    setIsPinAnimating(false)
    setIsSurroundingSuburbAbnsVisible(false)
  }

  // ? Side Navigation Handlers
  function onClickTheProblemSideNav(e) {
    e.preventDefault()
    document.location = '#the-problem'
  }
  function onClickTheSolutionSideNav(e) {
    e.preventDefault()
    document.location = '#the-solution'
  }
  function onClickAmbitionExplorerSideNav(e) {
    e.preventDefault()
    document.location = '#ambition-explorer'
  }

  function onClickGrantApplicationSideNav(e) {
    e.preventDefault()
    document.location = '#grant-application'
  }

  function onClickSubmitApplication() {
    setTrackingData(['submit-grant-application', true])
  }

  // ? OnEnter Waypoints
  function onEnterHero() {
    setIsMainMenuShown(true)
  }

  // * Hamburger Menu
  function toggleBurgerClick() {
    if (!heroInView) {
      setIsMainMenuShown(!isMainMenuShown)
    }
  }

  function toggleBurgerMobileClick() {
    if (!isBurgerMobileMenuOpen) {
      setSavedLogoState(isLogoPrimary)
      document.body.classList.add('menu-open')
      document.getElementsByTagName('html')[0].classList.add('menu-open')
      setIsLogoPrimary(false)
    } else {
      document.body.classList.remove('menu-open')
      document.getElementsByTagName('html')[0].classList.remove('menu-open')
      setIsLogoPrimary(savedLogoState)
    }

    setIsBurgerMobileMenuOpen(!isBurgerMobileMenuOpen)
  }

  // * Logo
  function handleLogoClick() {
    shutdownAmbitionJourney()
    setIsSideNavigationVisible(false)
    setIsLogoPrimary(true)
    setIsMainMenuShown(true)
    setIsEditAndCloseVisible(false)
    setIsIgniteScreenVisible(false)
    setIsApplicationFormVisible(false)
    setIsIgniteYourAmbitionBackupEnabled(false)

    setHamburgerColor(colorGreen)
    setInactiveSideNavDotColor(colorGreen)
    document.location = '#top'
  }


  function handlePostcodeOnChange(e) {
    setAmbitionErrorMsg('')
    setPostcodeValue(e.target.value)
  }

  function handleEditLocation() {
    shutdownAmbitionJourney()
    setAmbitionExplorerJourneyUiTheme(colorNavy)
    setIsStateSceneEnabled(false)
    document.location = '#ambition-explorer'

    setTimeout(() => {
      if (postcodeField.current !== null) {
        postcodeField.current.focus()
      }
    }, 500)
  }

  // * Ambition Explore
  // * API FETCH
  // * onClick handler to fetch api,
  // * then update the UI.
  function handleLaunchAmbitionExplorer(e) {
    e.preventDefault()
    setApiLoading(true)
    // ? check user has entered a valid postcode
    if (!/^[0-9]{4}$/.test(postcodeValue)) {
      setAmbitionErrorMsg('Please enter a valid postcode')
      setApiLoading(false)
      return
    }
    Promise.all([fetchAbnCancelledApi()]).then((data) => {
      setApiLoading(false)
      // ? check API data exists for queried postcode
      if (data[0].itemCount < 6) {
        setAmbitionErrorMsg('There was an error fetching ambition data for your postcode, please try again.')
        return
      }
      const { state } = data[0].items[0].localities.items[0]
      const suburbs = data[0].items.map(item => (
        {
          postcode: item.postcode,
          name: item.localities.items[0].locality,
          cancelledAbns: item.localities.items[0].totalCount,
        }
      ))
      setApiData({
        state,
        suburbs,
      })
      setIsPinAnimating(true)
      setIsSurroundingSuburbAbnsVisible(true)
      setIsEditAndCloseVisible(true)
      setIsAmbitionExplorerJourneyEnabled(true)
      setIsStateSceneEnabled(true)
    })
  }
}

export default App
