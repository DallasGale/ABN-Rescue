import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Waypoint } from 'react-waypoint'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

import CloseIcon from '../../ui_elements/close_icon'
import EditLocation from '../../ui_elements/edit_location'
import { API_URL } from '../../../constants'

import { colorBlue } from '../../styles/colors'
import { StyledScreen } from '../../styled/screen'

const IndustriesThrive = dynamic(() => import('../11_industries_thrive'))
const BoomingStates = dynamic(() => import('../12_booming_states'))
const OverToYou = dynamic(() => import('../12_over_to_you'))

const AmbitionExplorer = (props) => {

  // ? Set State
  const [ambitionExplorerJourney, setAmbitionExplorerJourney] = useState(false)
  const [ambitionErrorMsg, setAmbitionErrorMsg] = useState('')
  const [apiData, setApiData] = useState({ state: '', suburbs: [] })
  const [apiLoading, setApiLoading] = useState(false)

  const [hasClosedButtonBeenClicked, setHasClosedButtonBeenClicked] = useState(false)

  const [isEditAndCloseVisible, setIsEditAndCloseVisible] = useState(false)
  const [isAmbitionExplorerVisible, setIsAmbitionExplorerVisible] = useState(false)
  const [isAmbitionExplorerJourneyVisible, setIsAmbitionExplorerJourneyVisible] = useState(false)
  const [isPinAnimating, setIsPinAnimating] = useState(false)
  const [isSurroundingSuburbAbnsVisible, setIsSurroundingSuburbAbnsVisible] = useState(false)
  const [isPostcodeFieldFocused, setIsPostcodeFieldFocused] = useState(false)

  const [postcodeValue, setPostcodeValue] = useState(undefined)
  useEffect(() => {
    if (typeof postcodeValue === 'undefined' || postcodeValue.length < 1) {
      setIsPostcodeFieldFocused(false)
    } else setIsPostcodeFieldFocused(true)
  }, [postcodeValue])


  // ? Intersection Observer
  const [
    ambitionExplorerJourneyRef,
    ambitionExplorerJourneyInView
  ] = useInView({ threshold: 0 })

  useEffect(() => {
    if (isAmbitionExplorerJourneyVisible) {
      setIsApplicationFormVisible(false)
    }
  }, [isAmbitionExplorerJourneyVisible])


  const [
    nowOverToYouRef,
    nowOverToYouInView,
  ] = useInView({ threshold: 0 })

  useEffect(() => {
    if (nowOverToYouInView) {
      setIsAmbitionExplorerVisible(true)
      setIsEditAndCloseVisible(false)
    }
  }, [nowOverToYouInView])



  //* API INTEGRATION

  // ? ABNs cancelled in your area
  async function fetchAbnCancelledApi() {
    const result = await axios(`${API_URL + postcodeValue}?${Math.random().toString(36).substring(7)}`)
    const { data } = result
    return data
  }

  //* FORM MANAGEMENT

  // ? To set focus to postcode field
  // ? after Edit Location is clicked.
  const postcodeField = useRef(null)

  const {
    isLandingVisible,
    isPreviousSceneVisible,
    onEnterAmbitionExplorerWaypoint,
    onLeaveAmbitionExplorerWaypoint,
    onEnterAmbitionExplorerJourneyWaypoint,
  } = props

  return (
    <section className="screen-section">
      <div className={`${!ambitionExplorerJourney ? 'ambition-explorer-take-over' : 'ambition-explorer-release'}`}>
        <div
          className="anchor anchor__ambition-explorer"
          id="ambition-explorer" />
        <StyledScreen
          theme={colorBlue}
          height={ambitionExplorerJourney ? '4000px' : '120vh'}
        >
          <Waypoint
            onEnter={onEnterAmbitionExplorerWaypoint}
            onLeave={onLeaveAmbitionExplorerWaypoint}
          >
            <div>
              <AmbitionExplorer
                apiData={apiData}
                ctaLabel="CLICK TO SEARCH A POSTCODE"
                ctaOnClick={handleLaunchAmbitionExplorer}
                ctaLink="/"
                trackingName="launchExplorer"
                isPinAnimating={isPinAnimating}
                isLandingVisible={isLandingVisible}
                isSurroundingSuburbAbnsVisible={isSurroundingSuburbAbnsVisible}
                isPostcodeFieldFocused={isPostcodeFieldFocused}
                isPreviousSceneVisible={isPreviousSceneVisible}
                postcodeOnChange={handlePostcodeOnChange}
                placeholder="postcode"
                postcodeValue={postcodeValue}
                postcodeFieldRef={postcodeField}
                yourPostcode={postcodeValue}
                errorMsg={ambitionErrorMsg}
                loading={apiLoading}
              />
              {
                isEditAndCloseVisible && (
                  <>
                    <EditLocation
                      postcodeValue={postcodeValue}
                      handleEditLocation={handleEditLocation}
                    />
                    <CloseIcon
                      closeIconOnClick={handleCloseAmbitionExplorer}
                      closeIconLink="#ambition-explorer"
                    />
                  </>
                )
              }
            </div>
          </Waypoint>
        </StyledScreen>

        <Waypoint onEnter={onEnterAmbitionExplorerJourneyWaypoint}>
          <div>
            {
              ambitionExplorerJourney && (
                <>
                  <section id="ambition-explorer-journey">
                    <div ref={ambitionExplorerJourneyRef}>
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

                      <StyledScreen id="booming-states" theme={colorBlue} height="3000px">
                        <BoomingStates state={apiData.state} />
                      </StyledScreen>

                      <StyledScreen id="over-to-you" theme={colorGreen} ref={nowOverToYouRef}>
                        <OverToYou />
                      </StyledScreen>
                      <Waypoint onEnter={onEnterIgniteYourAmbitionJourneyPath} onLeave={onLeaveIgniteYourAmbition}>
                        <div>
                          <div ref={igniteYourAmbitionRef} style={{ zIndex: 5, position: 'relative' }}>
                            <Waypoint onEnter={() => setIgniteAnimation(true)} onLeave={() => setIgniteAnimation(false)}>
                              <section className="screen-section">
                                <Desktop>
                                  <StyledScreen id="ignite-your-ambition" height="100vh" theme={colorNavy}>
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
                          <div ref={applicationFormRef}>
                            <section className="screen-section">
                              <Waypoint onEnter={() => setTrackingData(['download-grant-application'])} />
                              <StyledScreen minHeight="100vh" id="grant-application" theme={colorGreen}>
                                <ApplyForGrant onClickSubmitApplication={onClickSubmitApplication} />
                              </StyledScreen>
                              <StyledScreen minHeight="20vh" id="footer" theme={colorNavy}>
                                <Footer />
                              </StyledScreen>
                            </section>
                          </div>
                        </div>
                      </Waypoint>
                    </div>
                  </section>
                </>
              )
            }
          </div>
        </Waypoint>
      </div>
    </section>
  )
}


// ? Input Field (Postcode)
function handlePostcodeOnChange(e) {
  setAmbitionErrorMsg('')
  setPostcodeValue(e.target.value)
}

// ? Close Button
function handleCloseAmbitionExplorer() {
  setHasClosedButtonBeenClicked(true)
  shutdownAmbitionJourney()
  setIsAmbitionExplorerJourneyVisible(false)
  document.location = '#ambition-explorer'

  setTimeout(() => {
    setIsIgniteYourAmbitionBackupEnabled(true)
  }, 500)
}

// ? Edit Location
function handleEditLocation() {
  shutdownAmbitionJourney()
  document.location = '#ambition-explorer'
  postcodeField.current.focus()
}


// ? API Fetch
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
    setAmbitionExplorerJourney(true)
    setIsEditAndCloseVisible(true)
    setIsAmbitionExplorerVisible(true)
  })
}




export default AmbitionExplorer

