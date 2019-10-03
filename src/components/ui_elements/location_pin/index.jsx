import React from 'react'
import PropTypes from 'prop-types'
import {
  Desktop,
  TabletRetinaDown,
} from '../../utils/media'

import { StyledPin, StyledPinCircle, StyledSvgPath } from './styled'

import StatWithLabel from '../stat_with_label'
import PinCircle from './pin_circle'


const LocationPin = (props) => {
  const {
    isPinAnimating,
    isPinIdling,
    isSceneEnding,
    hasPinEnteredScene,
    showSurroundingSuburbStats,
    showYourSuburbStat,
    totalCancelledAbns,
    isYourSuburbStatVisible,
  } = props
  return (
    <div>
      <StyledPinCircle
        isVisible={isPinAnimating}
        showSurroundingSuburbStats={showSurroundingSuburbStats}
        className={`pin-circle-replacement ${isPinAnimating ? 'enter' : 'exit'}
        ${isSceneEnding ? 'circles-leave-page-animation' : ''}`}
      >
        {
          isYourSuburbStatVisible && (
            <StatWithLabel
              label="Your suburb"
              stat={totalCancelledAbns}
              showStat={showYourSuburbStat}
            />
          )
        }
        <PinCircle {...props} />
      </StyledPinCircle>
      <StyledPin className={`${isPinIdling ? 'idling' : ''}`}>
        <Desktop>
          <svg
            id="pin-background"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2328 1518.04"
          >
            <StyledSvgPath
              d="M1062.85,1527h6.2a762.05,762.05,0,0,0,137.19-13.67C1778.1,1412.37,2598.06,788.3,2631,768c-14-10.47-52.55-33.73-64.73-43.66C2340.46,540.2,1494.65-6.22,1059.44,9.28h0C641.45,10.6,303,349.84,303,768.14c0,419,339.54,758.65,758.47,758.86Z"
              transform="translate(-303 -8.96)"
            />
          </svg>
        </Desktop>

        <TabletRetinaDown>
          <svg
            id="pin-background-tablet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1518.04 2328">
            <StyledSvgPath
              d="M405,354.87v6.2a762.05,762.05,0,0,0,13.67,137.19c101,571.86,725,1391.82,745.33,1424.76,10.47-14,33.73-52.55,43.66-64.73C1391.78,1632.48,1938.2,786.67,1922.7,351.46h0C1921.38-66.53,1582.14-405,1163.84-405,744.84-405,405.19-65.44,405,353.49Z"
              transform="translate(-404.98 404.98)"
            />
          </svg>

        </TabletRetinaDown>
      </StyledPin>
    </div>
  )
}

LocationPin.propTypes = {
  isPinAnimating: PropTypes.bool,
  isSceneEnding: PropTypes.bool,
  isYourSuburbStatVisible: PropTypes.bool,
  showSurroundingSuburbStats: PropTypes.bool,
  showYourSuburbStat: PropTypes.bool,
  totalCancelledAbns: PropTypes.number,

}

LocationPin.defaultProps = {
  isPinAnimating: false,
  isSceneEnding: false,
  isYourSuburbStatVisible: false,
  showSurroundingSuburbStats: false,
  showYourSuburbStat: false,
  totalCancelledAbns: 0,
}

export default LocationPin
