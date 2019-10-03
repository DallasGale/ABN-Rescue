import React, { useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import styled from 'styled-components'

import {
  StyledContent,
  StyledHeroContent,
  StyledTitle,
  StyledVideo,
  StyledPlayButton,
  StyledPlayIcon,
  StyledPlayText,
} from './styled'

const StyledDialogOverlay = styled(DialogOverlay)`
  z-index: 100;
  display: flex;
`

const StyledDialogContent = styled(DialogContent)`
  position: relative;
  padding: 0;
  margin: auto;
  background: black;
  width: 70vw;
  @media only screen and (max-width: 768px) {
    width: 85vw;
  }
  .iframe-wrap {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const StyledCloseButton = styled.button`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
  .cls-1 {
    fill: #090d2b;
  }
  .cls-2 {
    fill: none;
    stroke: #fff;
    stroke-width: 8px;
  }
`

const message = 'Ambition Wanted'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <StyledContent>
      <StyledVideo>
        <StyledDialogOverlay isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)}>
          <StyledDialogContent>
            <div className="iframe-wrap">
              <iframe
                title="Ambition Video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pAyckhkcK0M"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <StyledCloseButton type="button" onClick={() => setIsModalOpen(false)}>
              <svg id="Hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 122">
                <title>Close</title>
                <circle className="cls-1" cx="61" cy="61" r="61" />
                <path className="cls-2" d="M74,48,48,74" />
                <path className="cls-2" d="M48,48,74,74" />
              </svg>
            </StyledCloseButton>
          </StyledDialogContent>
        </StyledDialogOverlay>
        <video width="1600" height="900" autoPlay loop muted>
          <source src="static/media/ABN_Rescue_Homepage_Shopfront_1280x720_Fade_All-Businesses_op3.mp4" type="video/mp4" />
        </video>
        <img loading="lazy" src="static/media/ABN_Rescue_Homepage_Shopfront_Mob_750x133a_all-businesses_op2.gif" alt="" />
      </StyledVideo>
      <StyledHeroContent>
        <StyledTitle>{message}</StyledTitle>
        <StyledPlayButton
          aria-label="Play film"
          onClick={() => setIsModalOpen(true)}>
          <svg id="Play_button" dataname="Play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234">
            <StyledPlayIcon
              d="M135,18A117,117,0,1,0,252,135,117,117,0,0,0,135,18ZM110.5,178.8V92.2l75,43.3Z"
              transform="translate(-18 -18)"
            />
          </svg>
          <StyledPlayText>Play Film</StyledPlayText>
        </StyledPlayButton>
      </StyledHeroContent>
    </StyledContent>
  )
}

export default Hero
