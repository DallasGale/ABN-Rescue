import styled from 'styled-components'
import { ForgroundStarsAppear } from '../../utils/transitions'
import { ScreenPhoneDown } from '../../utils/media'

export const StyledStarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &.move-up {
    transition: all 1s;
    transform: translateY(-50%);
    opacity: 0;
  }
`

export const StyledStarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  
  &.stars {
    &__background {
      z-index: 0;

      @media ${ScreenPhoneDown} {
        div {
          transform: scale(0.2);
        }
      }

      &.appear {
        opacity: 1;
        transition: all 1.5s ease-out;
        transform: translateY(0);
      }
      &.disappear {
        opacity: 0;
        transform: translateY(10%);
      }

      .star {
        filter: blur(0.8px);
        opacity: 0.7;
      }
    }
    &__foreground {
      z-index: 1;

      @media ${ScreenPhoneDown} {
        div {
          transform: scale(0.6);
        }
      }

      &.appear {
        opacity: 1;
        animation: ${ForgroundStarsAppear} 2.5s forwards ease-in-out;
      }
      &.disappear {
        opacity: 0;
        transform: translateY(-40%);
      }
    }
  }
  &.appear {
    opacity: 1;
    transition: all 1s ease-out;
  }
`
