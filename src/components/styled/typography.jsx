import React from 'react'
import styled from 'styled-components'

import { colorNavy, colorGreen } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'
import {
  ScreenDesktopDown,
  ScreenWidescreenDown,
  ScreenTabletDown,
  ScreenPhoneDown,
  ScreenTabletRetinaDown,
  ScreenSmallDeviceDown,
} from '../utils/media'

export const StyledMessageH2 = styled.h2`
  color: ${props => (!props.color ? colorNavy : props.color)};
  font-size: ${pxToRem(130)};
  line-height: 0.9;
  position: ${props => (!props.position ? 'relative' : props.position)};
  top: 0;
  left: 0;
  padding: ${pxToRem(30)} ${pxToRem(60)} ${pxToRem(30)} ${pxToRem(30)};
  z-index: ${props => (!props.zIndex ? 0 : props.zIndex)};

  .lowercase-s {
    text-transform: none;
  }

  @media ${ScreenWidescreenDown} {
    font-size: ${pxToRem(90)};
    span {
      width: ${pxToRem(205)};
    }
  }

  @media ${ScreenDesktopDown} {
    font-size: ${pxToRem(80)};
    span {
      width: ${pxToRem(180)};
    }
  }

  @media ${ScreenTabletRetinaDown} {
    padding-left: 5vw;
  }

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(80)};
    span {
      width: ${pxToRem(180)};
    }
  }

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(40)};
    span {
      width: ${pxToRem(90)};
    }
  }
  @media ${ScreenSmallDeviceDown} {
    font-size: ${pxToRem(40)};
    padding-right: ${pxToRem(40)};
    span {
      width: ${pxToRem(90)};
    }
  }

  &.appear {
    opacity: 1;
    transition: all 0.2s;
    &-slower {
      transition: all 0.5s;
    }
  }

  &.disappear {
    opacity: 0;
    transition: all 0.2s;
    &-slower {
      transition: all 0.5s;
    }
  }

  &.disappear-tight {
    opacity: 0;
  }
  
`


export const CountUpWrapper = styled.span`
    width: ${pxToRem(295)};
    white-space: nowrap;
    display: inline-block;
    position: relative;

    @media ${ScreenWidescreenDown} {
      width: ${pxToRem(205)};
    }


  @media ${ScreenDesktopDown} {
      width: ${pxToRem(180)};
  }

  @media ${ScreenTabletRetinaDown} {
      width: ${pxToRem(225)};
  }

  @media ${ScreenTabletDown} {
      width: ${pxToRem(180)};
  }

  @media ${ScreenPhoneDown} {
      width: ${pxToRem(90)};
  }
  @media ${ScreenSmallDeviceDown} {
    width: ${pxToRem(90)};
  }
`

export const StyledParagraph = styled.p`
  margin: ${props => (!props.margin ? `0 0 ${pxToRem(20)} 0` : props.margin)};
  padding: 0;
  font-size: ${props => (!props.fontSize ? pxToRem(16) : props.fontSize)};
  line-height: ${props => (!props.lineHeight ? pxToRem(25) : props.lineHeight)};
  color: ${props => (!props.color ? colorNavy : props.color)};
`
const StyledPath = styled.path`
  fill: ${colorGreen};
`

export const IgniteYourAmbitionText = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2436.34 305.6"
  >
    <title>ignite_your_ambition</title>
    <StyledPath
      d="M205.47,432.26h-53.2V134.67h53.2Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M267.86,436.26c-31.2,0-48.4-26.8-48.4-58.4V200.67c0-36.8,15.2-69.6,62-69.6h10.8c52.4,0,61.6,33.6,61.6,69.2v32.79h-52V199.87c0-12-2.8-18.8-13.6-18.8-9.2,0-13.2,6.4-13.2,18.8V365.46c0,12.8,5.2,19.2,14.4,19.2,10,0,15.6-6.4,15.6-18.4v-64h-19.6v-50h70.8v180h-32.4c-1.6-6.8-4.8-19.2-8-28.4-4.8,10-17.6,32.4-44,32.4Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M420.26,134.67l36.4,152v-152h47.2V432.26h-45.2l-41.2-163.2v163.2h-47.2V134.67Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M572.26,432.26h-53.2V134.67h53.2Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M711.45,134.67v52.4h-38V432.26h-53.2V187.07h-38v-52.4Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M832.65,134.67v52.4h-58v64.79h45.6v53.6h-45.6v73.2h60.8v53.6h-114V134.67Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M973.44,315.06v117.2h-53.2V317.06l-44-182.39h53.2l18,105.59,18-105.59h48Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1150.64,364.26c0,43.6-23.2,72.4-63.2,72.4h-12c-42,0-64.4-26-64.4-72.4V207.06c0-46,18-76,64-76h12c46.8,0,63.6,30,63.6,75.6ZM1095,202.67c0-13.2-4.4-19.6-14-19.6-10.4,0-14.4,6.4-14.4,19.6V365.86c0,9.2,3.6,17.6,14.8,17.6,10.8,0,13.6-8.4,13.6-17.6Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1164.24,134.67H1219V365.06c0,11.6,4,18.4,13.2,18.4s12.8-6.8,12.8-18.4V134.67h54.8V363.06c0,48.8-24,73.6-61.6,73.6H1225c-38.8,0-60.8-24.8-60.8-73.6Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1367.84,432.26h-53.2V134.67h84c32.4,0,48.8,18,48.8,49.6v47.59c0,24-13.6,36-23.6,40,8.8,3.2,22.8,12.8,22.8,35.2v101.2c0,12.8,2.4,18.4,4.4,22v2h-53.2c-2.4-3.2-4.8-9.6-4.8-22.8v-86.8c0-13.6-3.2-17.6-14-17.6h-11.2Zm0-176.4h10.4c10.4,0,14.8-4,14.8-18V197.47c0-12.8-2.4-16.8-13.2-16.8h-12Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1576.64,382.26h-32l-4.8,50h-47.2l37.6-297.59h63.2l40.4,297.59h-51.6Zm-26.8-51.2h21.6l-11.2-102Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1639.83,134.67h65.6l20.4,150.39,20.4-150.39h61.2V432.26h-48v-176l-26.4,176h-20l-26.8-176v176h-46.4Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M1822.63,134.67H1903c35.59,0,51.59,14,51.59,53.2v39.59c0,24.4-14.39,38-25.19,41.6,15.19,4,29.6,15.2,29.6,46.8v49.6c0,46.8-16.41,66.8-48.8,66.8h-87.6Zm53.2,45.6v70.79h12c8.8,0,14.4-4,14.4-17.6V196.27c0-10.8-3.6-16-13.6-16Zm0,118.79v86h14.8c8.8,0,13.6-2.8,13.6-19.6v-48.4c0-12.4-3.6-18-15.6-18Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2024.62,432.26h-53.2V134.67h53.2Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2163.82,134.67v52.4h-38V432.26h-53.2V187.07h-38v-52.4Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2227,432.26h-53.2V134.67H2227Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2380.61,364.26c0,43.6-23.2,72.4-63.2,72.4h-12c-42,0-64.4-26-64.4-72.4V207.06c0-46,18-76,64-76h12c46.8,0,63.6,30,63.6,75.6ZM2325,202.67c0-13.2-4.4-19.6-14-19.6-10.4,0-14.4,6.4-14.4,19.6V365.86c0,9.2,3.6,17.6,14.8,17.6,10.8,0,13.6-8.4,13.6-17.6Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2444.61,134.67l36.4,152v-152h47.2V432.26H2483l-41.2-163.2v163.2h-47.2V134.67Z"
      transform="translate(-152.27 -131.07)"
    />
    <StyledPath
      d="M2588.61,432.26H2541v-57.6h47.6Z"
      transform="translate(-152.27 -131.07)"
    />
  </svg>
)
