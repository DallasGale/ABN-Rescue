import styled, { keyframes } from 'styled-components'
import {
  colorNavyDarker,
  colorNavyLight,
  colorYellow,
  colorWhite,
} from '../../styles/colors'
import { ScreenDesktopDown, ScreenPhoneDown, ScreenTabletRetinaDown } from '../../utils/media'

const blinking = keyframes`
	0%, 80%, 90%, 92%, 95%, 98%, 100%{
		height: 0%;
	}
	15%, 20%, 45%, 48% {
		height: 42%;
	}
	30%, 38% {
		height: 35%;
	}
	40%, 42%, 91%, 96%,  97% {
		height: 105%;
	}
	55% {
		height: 55%
	}

	58%, 70% {
		height: 60%
	}	
`

const roll = keyframes`
	0%, 50% {
		transform: rotate(0deg);
	}
	65%, 100% {
		transform: rotate(-110deg);
	}
`

const pupil = keyframes`
	0%, 5%, 35%, 48% {
		left:15%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(0.5);
	}
	15%, 20% {
		left:85%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(0.5);
	}
	65%, 70% {
		left:15%;
		top: 80%;
		transform: translateY(-50%) translateX(-50%) scale(0.5);
	}
	70% {
		left:15%;
		top: 80%;
		transform: translateY(-50%) translateX(-50%) scale(0.5);
	}
	85%, 90% {
		left:50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(0.5);
	}
	93% {
		left:50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(0.4);
	}
	95% {
		left:50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(1.2);
	}
	96%, 100% {
		left:50%;
		top: 50%;
		transform: translateY(-50%) translateX(-50%) scale(1);
	}
`

export const StyledContent = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;


  @media ${ScreenTabletRetinaDown} {
    height: 50vh;
    top: 40vh;
  }
  @media ${ScreenPhoneDown} {
    height: 40vh;
    top: 50vh;
  }

  .background {
    display: flex;
    position: absolute;
    top: 20%;
    width: 100%;
    height: 80%;
    
    div {
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        background-color: ${colorNavyDarker};
      }
      &:nth-child(2) {
        background-color: ${colorNavyLight};
      }
    }
  }

  .face {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 100%;


    @media ${ScreenTabletRetinaDown} {
      transform: scale(0.8);
    }
  }

  .eyes {
    width: 40%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    top: -20vh;
    position: relative;
    
    @media ${ScreenPhoneDown} {
      top: -10vh;
    }
  }

  .eye {
    position: relative;
    width: 40%;
    height: auto;
    display: inline-block;
    
    &__ball {
      width: 100%;
      padding-top: 100%;
      display: inline-block;
      background-color:${colorWhite};
      border-radius: 50%;
      position: relative;
      animation-name: ${roll};
      animation-duration: 9s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      overflow: hidden;
    }
    &__pupil {
      position: absolute;
      width: 50%;
      padding-top: 50%;
      background-color: ${colorNavyDarker};
      border-radius: 50%;
      top:50%;
      left:calc(50% - 25%);
      transform: translateY(-50%) translateX(-50%);
      animation-name: ${pupil};
      animation-duration:9s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
    &__lid {
      width: 105%;
      height: 0px;
      position: absolute;
      top: -2.5%;
      left: -2.5%;
      background-color: ${colorNavyDarker};
      animation-name: ${blinking};
      animation-duration: 9s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
    &:last-child .eye__lid {
      background-color: ${colorNavyLight};
    }
  }

  .hand {
    width: 8vh;
    min-width: 40px;
    padding-top: 30vh;
    position: relative;

    @media ${ScreenPhoneDown} {
      transform: scale(0.6);
    }
   
    &--left {
      .fingers {
        align-items: flex-start;
        .finger__tip {
          &:before {
            border-radius: 0 50vh 50vh 0;	
            left: calc(100% - 1px);
          }
        }
        .finger {
          &:first-child, &:last-child {
            transform: translateX(-80%);
          }
        }
      }
      @media ${ScreenTabletRetinaDown} {
        left: -13vw;
      }
      @media ${ScreenPhoneDown} {
        left: -16vw;
      }
    }
    &--right {
      .fingers {
        align-items: flex-end;
        .finger__tip {
          &:before {
            border-radius: 50vh 0 0 50vh;	
            right: calc(100% - 1px);
          }
        }
        .finger {
          &:first-child, &:last-child {
            transform: translateX(80%);
          }
        }
      }

      @media ${ScreenTabletRetinaDown} {
        right: -13vw;
      }
      @media ${ScreenPhoneDown} {
        right: -16vw;
      }
    }
  }
  .fingers {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
  }
  .finger {
    background-color: ${colorYellow};
    height: 20%;
    position: relative;
    margin-top: 15%;
    width: 100%;
    &__tip {
      &:before {
        content: '';
        height: 100%;
        width: 4vh;
        background-color: ${colorYellow};
        position: absolute;
      }
    }
  }
`
