
import styled from 'styled-components'
import { colorNavy, colorBlue } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'

export const StyledsMessageWrapper = styled.div`
  color: ${colorNavy};
  height: 100vh;
  padding: ${pxToRem(100)} 0;
  position: relative;
  width: 100%;
  h2 {
    top: 25%
  }
`

export const StyledWrapper = styled.div`
  overflow: hidden;

  .sticky {
    width: 100%;
  }
`
export const StyledBlueShape = styled.div`
  background: ${colorBlue};
  left: ${pxToRem(-5000)};
  bottom: 0;
  width: ${pxToRem(5000)};
  position: absolute;
  height: ${pxToRem(5000)};
  transform-origin: bottom right;
  z-index: 0;
`

