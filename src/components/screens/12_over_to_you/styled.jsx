import styled from 'styled-components'
import { colorNavy } from '../../styles/colors'
import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletRetinaDown, ScreenTabletDown } from '../../utils/media';

export const StyledWrapper = styled.div`
  overflow: hidden;
  .sticky {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`

export const StyledContent = styled.div`
  color: ${colorNavy};
  height: 100vh;
  width: 100vw;
  padding: 30vh 0 0 0;
  position: absolute;

  @media ${ScreenTabletRetinaDown} {
    padding-top: 30vh;
    padding-left: 0;
    max-width: ${pxToRem(400)};
  }

  @media ${ScreenTabletDown} {
    max-width: ${pxToRem(300)};
    
    .message {
      font-size: ${pxToRem(70)};
    }
  }
`
