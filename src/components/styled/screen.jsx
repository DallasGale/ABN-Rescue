import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export const StyledScreen = styled.section`
  background: ${props => props.theme};
  height: ${props => (!props.height ? 'auto' : props.height)};
  min-height: ${props => (!props.minHeight ? '110vh' : props.minHeight)};
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: ${props => props.zIndex};
`

const Screen = (props) => {
  const {
    children,
    id,
    height,
    zIndex,
  } = props

  return (
    <StyledScreen id={id} height={height} zindex={zIndex}>
      {children}
    </StyledScreen>
  )
}

Screen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  zIndex: PropTypes.number,
}

Screen.defaultProps = {
  height: 'auto',
  zIndex: 1,
}

export default Screen
