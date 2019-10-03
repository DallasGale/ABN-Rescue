import React from 'react'
import PropTypes from 'prop-types'

import { StyledDisclaimerWrapper, StyledDisclaimer } from './styled'

import { colorNavy, colorWhite } from '../../styles/colors'

const FiguresDisclaimer = (props) => {
  const {
    copy,
    color,
    sourceName,
    sourceLink,
    zIndex,
  } = props

  return (
    <StyledDisclaimerWrapper zIndex={zIndex}>
      <StyledDisclaimer color={color}>
        {copy}&nbsp;
        Source:&nbsp;
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`typography__link--external ${color === colorWhite ? 'white' : ''}`}
        >
          {sourceName}
        </a>
      </StyledDisclaimer>
    </StyledDisclaimerWrapper>
  )
}

FiguresDisclaimer.propTypes = {
  copy: PropTypes.string.isRequired,
  color: PropTypes.string,
  sourceName: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  zIndex: PropTypes.number,
}

FiguresDisclaimer.defaultProps = {
  color: colorNavy,
  zIndex: 10,
}

export default FiguresDisclaimer
