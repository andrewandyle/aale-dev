import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-15%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const fadeInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const fadeInFromLeft = keyframes`
  0% {
     opacity: 0;
     transform: translateX(-15%);
  }
  100% {
     opacity: 1;
     transform: translateX(0%);
  }
`

export const fadeInFromRight = keyframes`
  0% {
     opacity: 0;
     transform: translateX(15%);
  }
  100% {
     opacity: 1;
     transform: translateX(0%);
  }
`
