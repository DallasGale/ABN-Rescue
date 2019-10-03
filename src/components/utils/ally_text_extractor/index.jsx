import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import MockSplitTextComponent from './__mocks__/split_text'

const AllyTextSwapper = (props) => {
  const { text, Element } = props

  return (
    <Element className='ally__screen-reader-only-text'>
      {text}
    </Element>
  )
}

AllyTextSwapper.propTypes = {
  text: PropTypes.string.isRequired,
  Element: PropTypes.string.isRequired,
}


export default AllyTextSwapper
