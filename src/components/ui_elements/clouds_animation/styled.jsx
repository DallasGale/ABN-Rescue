import styled, { keyframes } from 'styled-components'
import { ScreenTabletRetinaDown } from '../../utils/media'

const Falling = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(200vh);
  }
`

const FallingDevice = keyframes`
  0% {
    transform: translateY(-100vh) scale(2);
  }
  100% {
    transform: translateY(200vh) scale(2);
  }
`

export const StyledCloud = styled.div`
  position: absolute;
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
  transform: translateY(-100vh);
  background: white;
  animation-iteration-count: infinite;
  animation-duration: 13s;
  animation-name: ${Falling};
	opacity: 0.8;
	@media ${ScreenTabletRetinaDown} {
		animation-name: ${FallingDevice};
	}

  &:nth-of-type(1) {
    left: 6%;
    width: 6vw;
    height: 6vw;
    animation-duration: 7.7s;
    animation-delay: 1s;
    opacity: 0.1;
  } 
  &:nth-of-type(2) {
    left: 0%;
    width: 4vw;
    height: 4vw;
    animation-duration: 5.8s;
    animation-delay: 2.2s;
    opacity: 0.5;
  } 
  &:nth-of-type(3) {
    left: 4%;
    width: 24vw;
    animation-duration: 7.2s;
    height: 24vw;
    animation-delay: 2.7s;
    opacity: 0.8;
  } 
  &:nth-of-type(4) {
    left: 5%;
    width: 18vw;
    height: 18vw;
    opacity: 0.2;
    animation-duration: 7.8s;
  } 
  &:nth-of-type(5) {
    left: 72%;
    width: 22vw;
    height: 22vw;
    animation-delay: 1.7s;
    animation-duration: 8s;
    opacity: 0.5;
  } 
  &:nth-of-type(6) {
    left: 93%;
    width: 20vw;
    height: 20vw;
    animation-delay: 1.2s;
    animation-duration: 7.1s;
    opacity: 0.4;
  } 
  &:nth-of-type(7) {
    left: 77%;
    width: 28vw;
    height: 28vw;
    animation-delay: 2.1s;
    animation-duration: 8.2s;
    opacity: 0.7;
  } 
  &:nth-of-type(8) {
    left: 30%;
    width: 10vw;
    height: 10vw;
    animation-delay: 3.7s;
    opacity: 0.5;
    animation-duration: 10s;
  }

  &:nth-of-type(9) {
    left: 19%;
    width: 4vw;
    height: 4vw;
    animation-delay: 2.2s;
    animation-duration: 8.2s;
    opacity: 0.2;
  } 
  &:nth-of-type(10) {
    left: 26%;
    width: 21vw;
    height: 21vw;
    animation-delay: 2.7s;
    animation-duration: 12s;
    opacity: 0.4;
  } 
  &:nth-of-type(11) {
    left: 40%;
    width: 18vw;
    height: 18vw;
    opacity: 0.63;
    animation-delay: 5.7s;
    animation-duration: 10s;
  } 
  &:nth-of-type(12) {
    left: 87%;
    width: 22vw;
    height: 22vw;
    animation-delay: 4.7s;
    opacity: 0.4;
    animation-duration: 18s;
  } 
  &:nth-of-type(13) {
    left: 90%;
    width: 20vw;
    height: 20vw;
    animation-delay: 2.2s;
    opacity: 0.3;
    animation-duration: 11s;
  } 
  &:nth-of-type(14) {
    left: 88%;
    width: 15vw;
    height: 15vw;
    animation-duration: 9s;
    animation-delay: 2.1s;
    opacity: 0.2;
  } 

  &:nth-of-type(15) {
    left: 5%;
    width: 6vw;
    height: 6vw;
    animation-delay: 1s;
    animation-duration: 8.1s;
    opacity: 0.3;
  } 
  &:nth-of-type(16) {
    left: 18%;
    width: 4vw;
    height: 4vw;
    animation-delay: 2.2s;
    animation-duration: 8.2s;
    opacity: 0.2;
  } 
  &:nth-of-type(17) {
    left: 7%;
    width: 21vw;
    height: 21vw;
    animation-delay: 1.7s;
    animation-duration: 7.2s;
    opacity: 0.8;
  } 
  &:nth-of-type(18) {
    left: 90%;
    width: 18vw;
    height: 18vw;
    opacity: 0.6;
    animation-delay: 3.7s;
    animation-duration: 11s;
  } 
  &:nth-of-type(19) {
    left: 82%;
    width: 23vw;
    height: 23vw;
    animation-delay: 1.7s;
    animation-duration: 6.2s;
    opacity: 0.5;
  } 
  &:nth-of-type(20) {
    left: 73%;
    width: 19vw;
    height: 19vw;
    animation-delay: 3.2s;
    animation-duration: 9.2s;
    opacity: 0.4;
	} 
`
