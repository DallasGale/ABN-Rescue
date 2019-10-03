import styled from 'styled-components'
import { StyledMessageH2 } from './components/styled/typography'

export const StyledMessage = styled(StyledMessageH2)`
  top: 25%;
  position: absolute;
  z-index: ${props => (props.zIndex ? props.zIndex : 3)};

  .appear {
    opacity: 1;
  }

  .disappear {
    opacity: 0;
  }
`
export const StyledMain = styled.main`
  color: white;
  font-size: 0.5em;
  margin: 0;
  height: auto;
  display: block;
  position: relative;
  width: 100%;
`
