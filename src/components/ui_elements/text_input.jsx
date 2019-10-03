import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import pxToRem from '../utils/px_to_rem'
import { colorBlue, colorBlueShadow, colorNavy } from '../styles/colors'
import {
  ScreenWidescreenDown,
  ScreenDesktopDown,
  ScreenTabletRetinaDown,
  ScreenTabletDown,
  ScreenPhoneDown,
  ScreenSmallDeviceDown,
} from '../utils/media'

const StyledInput = styled.input`
  background: none;
  border: 0;
  border-bottom: ${pxToRem(8)} ${colorNavy} solid;
  color: ${colorNavy};
  height: ${pxToRem(170)};
  font-family: druk-bold;
  font-size: ${pxToRem(130)};
  text-transform: uppercase;
  text-align: left;
  padding: ${pxToRem(8)};
  width: 100%;
  line-height: normal;
  outline-color: ${colorBlueShadow};
  outline-offset:  ${pxToRem(3)};
  overflow: visible;
  border-radius: 0;
  position: relative;
  z-index: 1;
  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${colorBlue} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${colorBlue} inset;
    color: ${colorNavy}!important;
  }

  ::placeholder {
    line-height: ${pxToRem(65)};
    font-size: ${pxToRem(60)};
    text-align: center;
    visibility: hidden;
    color: ${colorBlueShadow};
  }
  ::webkit-input-placeholder {
    line-height: inherit;
    text-align: center;
  }

  @media ${ScreenWidescreenDown} {
    font-size: ${pxToRem(90)};
    height: ${pxToRem(90)};
    border-width: ${pxToRem(5)};
    ::placeholder {
      font-size: ${pxToRem(42)};
    }
  }

  @media ${ScreenDesktopDown} {
    font-size: ${pxToRem(80)};
    ::placeholder {
      font-size: ${pxToRem(38)};
    }
  }

  @media ${ScreenTabletRetinaDown} {
    ::placeholder {
      font-size: ${pxToRem(55)};
    }
  }

  @media ${ScreenTabletDown} {
    font-size: ${pxToRem(80)};
    height: ${pxToRem(100)};
    ::placeholder {
      font-size: ${pxToRem(45)};
    }
  }

  @media ${ScreenPhoneDown} {
    font-size: ${pxToRem(65)};
    height: ${pxToRem(85)};
    ::placeholder {
      font-size: ${pxToRem(35)};
      height: ${pxToRem(45)};
    }
  }
  @media ${ScreenSmallDeviceDown} {
    font-size: ${pxToRem(45)};
    height: ${pxToRem(65)};
  }
`


const TextInput = (props) => {
  const {
    id,
    postcodeOnChange,
    placeholder,
    postcodeValue,
    fieldRef,
    type,
    pattern,
    maxLength,
  } = props
  return (
    <StyledInput
      ref={fieldRef}
      id={id}
      type={type}
      maxLength={maxLength}
      onChange={postcodeOnChange}
      value={postcodeValue}
      placeholder={placeholder}
      novalidate
      pattern={pattern}
    />
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  postcodeValue: PropTypes.string,
  placeholder: PropTypes.string,
  postcodeOnChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fieldRef: PropTypes.object,
  type: PropTypes.string,
  pattern: PropTypes.string,
  maxLength: PropTypes.number,
}

TextInput.defaultProps = {
  postcodeValue: '',
  placeholder: '',
  fieldRef: {},
  type: '',
  maxLength: '',
  pattern: ''
}

export default TextInput
