import React from 'react'
import styled from 'styled-components'

import Typist from 'react-typist'
import TextInput from '../../ui_elements/text_input'
import ArrowCta from '../../styled/arrow_cta'

import {
  ScreenTabletRetinaDown,
  ScreenTabletDown,
  ScreenPhoneDown,
  ScreenSmallDeviceDown,
  ScreenDesktopDown,
  ScreenWidescreenDown,
} from '../../utils/media'
import pxToRem from '../../utils/px_to_rem'
import { colorNavy, colorBlueShadow } from '../../styles/colors'

import { FadeIn } from '../../utils/transitions'

const StyledWrapper = styled.div`
  opacity: 0;

  &.appear {
    animation: ${FadeIn} 1s forwards 0.8s ease-out;
  }
`

const StyledGrid = styled.div`
  align-items: baseline;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 25% 65%;
  &.loading {
    /* TODO: insert loading styles here */
  }
  @media ${ScreenTabletRetinaDown} {
    display: block;
    padding-left: 5vw;
  }
`

const StyledField = styled.div`
  width: ${pxToRem(210)};
  max-width: 100%;
  margin-top: ${pxToRem(10)};
  @media ${ScreenTabletRetinaDown} {
    width: ${pxToRem(175)};
    
  }

  @media ${ScreenTabletDown} {
    width: ${pxToRem(160)};
  }

  @media ${ScreenPhoneDown} {
    width: ${pxToRem(120)};
  }
`
const StyledCta = styled.div`
  @media ${ScreenTabletRetinaDown} {
    margin-top: ${pxToRem(60)};
  }

  @media ${ScreenTabletDown} {
    margin-top: ${pxToRem(30)};
  }
`
const StyledErrorMsg = styled.div`
  /* TODO: add error styles here */
  color: ${colorNavy};
  font-size:  ${pxToRem(14)};
  font-weight: bold;
  line-height: normal;
  position: relative;
  margin-top: ${pxToRem(10)};
  display: none;
  grid-row: 2;
  padding-left: ${pxToRem(15)};
  &.is-visible {
    display: block;
  }
  svg {
    position: absolute;
    top: ${pxToRem(4)};
    left: 0;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
  }
`

const StyledRect = styled.rect`
  fill: ${colorNavy};
`
const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.66 31.66">
    <StyledRect
      x="0.12"
      y="14.5"
      width="36.77"
      height="8"
      transform="translate(-10.33 15.83) rotate(-45)"
    />
    <StyledRect
      x="14.5"
      y="0.12"
      width="8"
      height="36.77"
      transform="translate(-10.33 15.83) rotate(-45)"
    />
  </svg>
)


const StyledTypistWrapper = styled.div`
  height: auto;
  position: absolute;
  margin-top: ${pxToRem(120)};
  z-index: 0;

  @media ${ScreenWidescreenDown} {
    margin-top: ${pxToRem(60)};   
  }

  .typist {
    color: ${colorBlueShadow};
    font-family: Druk-bold;
    font-size: ${pxToRem(60)};
    position: relative;

    @media ${ScreenWidescreenDown} {
      font-size: ${pxToRem(40)}; 
    }
    
    @media ${ScreenTabletRetinaDown} {
      font-size: ${pxToRem(40)};
    }
    
    @media ${ScreenPhoneDown} {
      font-size: ${pxToRem(40)};
    }

  }

  @media ${ScreenTabletRetinaDown} {
    margin-top: ${pxToRem(50)};
  }


  @media ${ScreenSmallDeviceDown} {
    margin-top: ${pxToRem(30)};
  }
`


const LaunchAmbitionExplorer = (props) => {

  const {
    ctaOnClick,
    errorMsg,
    loading,
    isPostcodeFieldFocused,
    isVisible,
  } = props
  return (
    <StyledWrapper className={`${isVisible ? 'appear' : ''}`}>
      <form onSubmit={ctaOnClick}>
        <StyledGrid className={loading && 'loading'}>

          {
            !isPostcodeFieldFocused && (
              <StyledTypistWrapper>
                <Typist
                  className="typist"
                  avgTypingDelay={120}
                  blink
                >
                  POSTCODE
                  <Typist.Backspace delay={500} count={8} />
                  <Typist.Delay ms={700} />
                  EG. 2010
                      <Typist.Backspace delay={300} count={8} />
                  <Typist.Delay ms={1000} />
                  EG. 3012
                      <Typist.Backspace delay={300} count={8} />
                  <Typist.Delay ms={1000} />
                  EG. 4390
                      <Typist.Backspace delay={300} count={8} />
                  <Typist.Delay ms={1000} />
                  POSTCODE
                </Typist>
              </StyledTypistWrapper>
            )
          }
          <StyledField>
            <label hidden htmlFor="postcode">
              CLICK TO SEARCH A POSTCODE
            </label>

            <TextInput
              id="postcode"
              type="tel"
              pattern="[0-9]*"
              maxLength={4}
              {...props}
            />
          </StyledField>
          <StyledErrorMsg className={errorMsg.length && 'is-visible'}>
            <Svg />
            {errorMsg}
          </StyledErrorMsg>
          <StyledCta>
            <ArrowCta {...props} />
          </StyledCta>
        </StyledGrid>
      </form>
    </StyledWrapper>
  )
}

export default LaunchAmbitionExplorer
