import styled from 'styled-components'
import { Exhaust } from '../spaceship'
import { ScreenTabletRetinaDown } from '../../utils/media'

export const StyledWrapper = styled.div`
  width: 30vw;
  height: 30vw;
  position: relative;
  left: 50%;


  @media ${ScreenTabletRetinaDown} {
    width: 60vw;
    height: 60vw;
    left: 30%;
  }

  svg {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export const StyledSmokeGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  position: absolute;
  top: 70%;
  width: 100%;
  height: auto;

  div {
    position: relative;
    animation: ${Exhaust} infinite 0.04s;
    &:nth-child(2) {
      top: 10%;
    }
    &:nth-child(3) {
      top: 10%;
    }
  }

  svg {
    height: 30vh;
  }
`

export const StyledChemTrailPolygon = styled.polygon`
  fill: url(#a);
  opacity: 0.8;
`

export const StyledRedPath = styled.path`
  fill: #e00b4b;
`
export const StyledRedRect = styled.rect`
  fill: #e00b4b;
`
export const StyledWhiteRect = styled.rect`
  fill: #fff;
`
export const StyledWhitePolygon = styled.polygon`
  fill: #fff;
`
