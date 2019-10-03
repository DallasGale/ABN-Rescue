import React from 'react'
import PropTypes from 'prop-types'

import { StyledContent } from './styled'

const Lobster = () => (
  <div className="lobster">
    <div className="lobster-elements-container">
      <div className="feeler-position feeler-position--left">
        <div className="feeler-box feeler-box--left">
          <div className="feeler" />
        </div>
      </div>
      <div className="feeler-position feeler-position--right">
        <div className="feeler-box feeler-box--right">
          <div className="feeler" />
        </div>
      </div>
      <div className="arms-position arms-position--left">
        <div className="arms-box arms-box--left">
          <div className="arm arm-1" />
          <div className="arm arm-2" />
        </div>
      </div>
      <div className="arms-position arms-position--right">
        <div className="arms-box arms-box--right">
          <div className="arm arm-1" />
          <div className="arm arm-2" />
        </div>
      </div>
    </div>
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 343.08 561.66"
    >
      <polygon
        className="cls-1"
        points="222.13 85.66 170.48 137.31 118.83 85.66 222.13 85.66"
      />
      <rect
        className="cls-1"
        x="-596.99"
        y="-941.07"
        width="130.05"
        height="130.05"
        transform="translate(1166.47 392.92) rotate(-45)"
      />
      <path
        className="cls-1"
        d="M-584-587.82c0,12.66,10.52,23.82,23.18,23.82H-532v-48h-29.33C-574-612-584-600.49-584-587.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-4"
        d="M-480-587.82c0,12.66-10,23.82-22.67,23.82H-532v-48h28.82C-490.52-612-480-600.49-480-587.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-1"
        d="M-592-643.82c0,12.66,10.52,23.82,23.18,23.82H-532v-48h-37.33C-582-668-592-656.49-592-643.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-4"
        d="M-472-643.82c0,12.66-10,23.82-22.67,23.82H-532v-48h36.82C-482.52-668-472-656.49-472-643.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-1"
        d="M-596-699.82c0,12.66,10.52,23.82,23.18,23.82H-532v-48h-41.33C-586-724-596-712.49-596-699.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-1"
        d="M-604-755.82c0,12.66,10.52,23.82,23.18,23.82H-532v-48h-49.33C-594-780-604-768.49-604-755.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-4"
        d="M-468-699.82c0,12.66-10,23.82-22.67,23.82H-532v-48h40.82C-478.52-724-468-712.49-468-699.82Z"
        transform="translate(702.83 1025.66)"
      />
      <path
        className="cls-4"
        d="M-460-755.82c0,12.66-10,23.82-22.67,23.82H-532v-48h48.82C-470.52-780-460-768.49-460-755.82Z"
        transform="translate(702.83 1025.66)"
      />
      <polygon
        className="cls-4"
        points="170.83 469.66 278.83 561.66 62.83 561.66 170.83 469.66"
      />
      <polygon
        className="cls-1"
        points="170.83 469.66 122.83 561.66 62.83 561.66 170.83 469.66"
      />
      <polygon
        className="cls-1"
        points="170.83 469.66 170.83 561.66 214.83 561.66 170.83 469.66"
      />
      <circle className="cls-5" cx="133.04" cy="75.66" r="6" />
      <circle className="cls-5" cx="208.83" cy="75.66" r="6" />
      <polygon
        className="cls-4"
        points="170.87 57.66 262.83 149.62 170.87 241.58 170.87 57.66"
      />
    </svg>
  </div>
)

const LobsterAnimation = () => (
  <StyledContent>
    <Lobster />
  </StyledContent>
)

export default LobsterAnimation
