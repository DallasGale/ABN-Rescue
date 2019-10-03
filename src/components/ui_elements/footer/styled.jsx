import styled from 'styled-components'
import { ScreenTabletLandscapeDown, ScreenTabletDown, ScreenPhoneDown, ScreenTabletRetinaDown } from '../../utils/media'
import pxToRem from '../../utils/px_to_rem';
import { colorWhite, colorGreen } from '../../styles/colors';

export const StyledFooter = styled.footer`

`

export const StyledFooterInner = styled.div`
    padding: ${pxToRem(95)} ${pxToRem(150)};
    @media ${ScreenTabletLandscapeDown} {
        padding: ${pxToRem(95)} ${pxToRem(80)};
    }
    @media ${ScreenTabletDown} {
        padding: ${pxToRem(35)} ${pxToRem(30)};
    }
    @media ${ScreenPhoneDown} {
        padding: ${pxToRem(35)} ${pxToRem(35)} ${pxToRem(35)} ${pxToRem(20)};
    }
`

export const StyledFooterLower = styled.div`
    display: flex;
    margin: ${pxToRem(50)} ${pxToRem(-20)} 0;
    @media ${ScreenTabletRetinaDown} {
        margin: ${pxToRem(20)} ${pxToRem(-20)} 0;
    }
    @media ${ScreenPhoneDown} {
        flex-direction: column;
        margin: ${pxToRem(20)} ${pxToRem(-10)} 0;
    }
`
export const StyledFooterLogo = styled.div`
   padding: ${pxToRem(20)};
   width: ${pxToRem(80)};
   height: ${pxToRem(80)};
   flex: 1 0 auto;
   @media ${ScreenPhoneDown} {
        padding: ${pxToRem(10)};
        width: ${pxToRem(60)};
        height: ${pxToRem(60)};
    }
`

export const StyledFooterDisclaimer = styled.div`
    padding: ${pxToRem(20)} ${pxToRem(20)} 0;
    flex: 0 1 auto;
    @media ${ScreenPhoneDown} {
        padding: ${pxToRem(10)} ${pxToRem(10)} 0;
    }
    p {
        color: ${colorWhite};
        font-size: ${pxToRem(12)};
        line-height: ${pxToRem(18)};
        &:last-child {
            margin-bottom: 0;
        }
    }
`
export const StyledCtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background: transparent;
  width: fit-content;
  border: 0;
  padding: ${pxToRem(5)} 0;
  margin: 0;
  span {
    font-size: ${pxToRem(30)};
    font-family: druk-medium;
    color: ${colorGreen};
    text-transform: uppercase;
    padding-right: ${pxToRem(10)};
  }
  svg {
    position: relative;
    top: -2px;
    path {
      stroke: ${colorGreen};
    }
  }
  &:hover {
    span {
        color: ${colorWhite};
    }
    svg {
        path {
            stroke: ${colorWhite};
            }
        }
    }
`