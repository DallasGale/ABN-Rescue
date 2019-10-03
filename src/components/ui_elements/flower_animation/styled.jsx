import styled, { keyframes } from 'styled-components'
import { colorBlue, colorGreenShade } from '../../styles/colors'
import { ScreenTabletRetinaDown, ScreenPhoneDown } from '../../utils/media'

const leafSize = '30px'
const leafSizeMobile = '15px'

const flowerHead = keyframes`
  0% {
    background-color: ${colorGreenShade};

  }
  100% {
    background-color: ${colorBlue};
  }
`

export const StyledContent = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vh;
  top: 0;

  .flowers-container {
    position: absolute;
    bottom: 0;
    width: 95%;
    margin: 0 auto;
    display: block;
    left: 0;
    right: 0;
  }

  .flowers {
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }

  .flower {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &__head {
      width: 15vh;
      height: 15vh;
      border-radius: 50%;
      background: ${colorGreenShade};

      @media ${ScreenTabletRetinaDown} {
        width: 10vh;
        height: 10vh;
      }
      @media ${ScreenPhoneDown} {
        width: 6vh;
        height: 6vh;
      }
    }
    &__body {
      position: relative;
    }
    &__stem {
      height: 20vh;
      width: 4px;
      background: ${colorGreenShade};
      &--tall {
        height:  40vh;
      }
      &--short {
        height:  20vh;
      }
      &--x-short {
        height:  10vh;
      }
    }
    &__leaves {
      position: absolute;
      top: 10%;
      width: 120px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;

      @media ${ScreenPhoneDown} {
        width: 60px;
      }
    }
    &__leaf {
      border: ${leafSize} solid ${colorGreenShade};
      border-top: ${leafSize} solid transparent;

      @media ${ScreenPhoneDown} {
        border-width: ${leafSizeMobile};
        border-top-width: ${leafSizeMobile};
      }
      &--left {
        border-right: ${leafSize} solid transparent;

        @media ${ScreenPhoneDown} {
          border-right-width: ${leafSizeMobile};
        }
      }
      &--right {
        border-left: ${leafSize} solid transparent;
        
        @media ${ScreenPhoneDown} {
          border-left-width: ${leafSizeMobile};
        }
      }
    }

    &.in {
      .flower {
        &__head {
          animation: ${flowerHead} 500ms ease 1 linear forwards;
        }
      }
    }
  }
`
