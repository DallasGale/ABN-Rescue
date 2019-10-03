/* eslint-disable no-param-reassign */
import styled from 'styled-components'

export const log = (msg) => {
  console.log(`%c ${msg}`, 'color: #bada55')
}

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: ${props => (!props.flexHeight ? '100%' : props.flexHeight)};
`
