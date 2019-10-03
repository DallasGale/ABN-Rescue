import styled from 'styled-components'
import { ScreenTabletLandscapeDown, ScreenPhoneDown } from '../../utils/media'
import { zHeader } from '../../utils/zIndex'
import { FadeIn } from '../../utils/transitions'

export const StyledHeader = styled.header`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 150px auto;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  z-index: ${zHeader};
  padding: 20px 30px;
  opacity: 0;
  animation: ${FadeIn} 1s forwards;
  @media ${ScreenTabletLandscapeDown} {
    grid-template-columns: 120px auto;
  }
  @media ${ScreenPhoneDown} {
    grid-template-columns: 80px auto;
    padding:10px;
  }

`
