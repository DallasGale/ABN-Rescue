import styled from 'styled-components'
import { colorGreen, colorNavy } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { StyledMessageH2 } from '../../styled/typography'

export const StyledWrapper = styled.div`
  overflow: hidden;
  .sticky {
    height: 100vh;
    width: 100vw;
    top: 0 !important;
    overflow: hidden;
  }

  .green-background {
    background: ${colorGreen};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    z-index: 0;
  }
`

export const StyledContent = styled.div`
  color: ${colorNavy};
  height: 100vh;
  width: 100vw;
  padding: ${pxToRem(100)};
  padding-top: 15%;
  position: absolute;
`


export const StyledMessage = styled(StyledMessageH2)`
  position: absolute;
  top: 18%;
  z-index: 5;
`
