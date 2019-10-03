import React from 'react'
import Responsive from 'react-responsive'

const onlyScreen = 'only screen and'

const breakpoints = {
  widescreen_down: 'max-width: 1920px',
  desktop_down: 'max-width: 1440px',
  tablet_landscape_down: 'max-width: 1366px',
  small_laptop_down: 'max-width: 1300px',
  tablet_pro_down: 'max-width: 1024px',
  tablet_down: 'max-width: 768px',
  phone_down: 'max-width: 748px',
  small_device_down: 'max-width: 320px',
}

// For CSS in JS
export const ScreenWidescreenDown = `${onlyScreen} (${breakpoints.widescreen_down})`
export const ScreenDesktopDown = `${onlyScreen} (${breakpoints.desktop_down})`
export const ScreenSmallLaptopDown = `${onlyScreen} (${breakpoints.small_laptop_down})`
export const ScreenTabletRetinaDown = `${onlyScreen} (${breakpoints.tablet_pro_down})`
export const ScreenTabletDown = `${onlyScreen} (${breakpoints.tablet_down})`
export const ScreenPhoneDown = `${onlyScreen} (${breakpoints.phone_down})`
export const ScreenSmallDeviceDown = `${onlyScreen} (${breakpoints.small_device_down})`
export const ScreenTabletLandscapeDown = `${onlyScreen} (${breakpoints.tablet_landscape_down})`

// For Components
export const Widescreen = props => <Responsive {...props} minWidth={1920} />
export const Desktop = props => <Responsive {...props} minWidth={1025} />
export const TabletRetina = props => <Responsive {...props} minWidth={768} maxWidth={1024} />
export const TabletRetinaDown = props => <Responsive {...props} maxWidth={1024} />
export const TabletRetinaUp = props => <Responsive {...props} minWidth={748} />
export const Tablet = props => <Responsive {...props} minWidth={749} maxWidth={767} />
export const Mobile = props => <Responsive {...props} maxWidth={748} />
export const SmallDevice = props => <Responsive {...props} maxWidth={320} />
