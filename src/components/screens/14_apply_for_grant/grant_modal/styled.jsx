import styled from 'styled-components'
import pxToRem from '../../../utils/px_to_rem'
import { colorGreen } from '../../../styles/colors'

export const StyledHeader = styled.div`
  max-width: 966px;
  
`

export const StyledHeading = styled.h2`
  font-size: ${pxToRem(65)};
  color: ${colorGreen};
  margin-bottom: ${pxToRem(30)};
  @media only screen and (max-width: 900px) {
    font-size: ${pxToRem(45)};
  }
`

export const StyledContent = styled.div`
  margin-top: ${pxToRem(40)};
  @media only screen and (max-width: 900px) {
    margin: ${pxToRem(15)} -5px;
  }
`

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 480px;
  border: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  @media only screen and (max-width: 1165px) {
    height: 900px;
  }
  @media only screen and (max-width: 900px) {
    height: 1000px;
  }
  @media only screen and (max-width: 600px) {
    height: 1000px;
  }
  @media only screen and (max-width: 500px) {
    height: 1100px;
  }
`
