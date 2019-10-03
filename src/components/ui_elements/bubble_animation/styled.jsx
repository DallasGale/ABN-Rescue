import styled, { keyframes } from 'styled-components'
import { colorWhite } from '../../styles/colors'
import { ScreenTabletRetinaDown } from '../../utils/media';

const wobble = keyframes`
  0%, 100% {
    transform: translateX(-15%);
  }
  50% {
    transform: translateX(15%);
  }
`

const wobbleBig = keyframes`
  0%, 100% {
    transform: translateX(25%);
  }
  50% {
    transform: translateX(-25%);
  }
`

export const StyledBubbles = styled.div`
	height: 100vh;
  width: 100%;
  position: ${props => (props.position !== null ? props.position : 'fixed')};
  z-index: 3;
  top: 0;
  transform: ${props => (props.direction === 'down' ? 'rotate(0deg)' : 'rotate(180deg)')};
  overflow: hidden;

  .bubbles {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .bubble {
    width: 100%;
    height: 100%;
    background-color: ${colorWhite};
    border-radius: 50%;
    opacity: 0.2;
  }
  .pose-bubble {
    position: absolute;
    animation: ${wobble} 1000ms ease-in-out infinite;
    width: 40px;
    height: 40px;

    @media ${ScreenTabletRetinaDown} {
      width: 6vw;
      height: 6vw;
    }

    &:nth-child(even) {
      animation: ${wobbleBig} 1500ms ease-in-out infinite reverse;
    }
  }
`
