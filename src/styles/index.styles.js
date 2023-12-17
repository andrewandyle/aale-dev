import styled from 'styled-components'
import { fadeIn, fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const LogoContainer = styled.div`
  animation: ${fadeIn};
  animation-duration: 800ms;

  @media only screen and (min-width: 900px) {
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
    backdrop-filter: blur(5px);

    width: 750px;
    margin-bottom: 30px;
    padding: 50px;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  #avatar {
    animation: ${fadeInFromLeft};
    animation-duration: 800ms;
    max-width: 375px;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }

  #logo {
    position: absolute;
    right: 30px;
    animation: ${fadeInFromRight};
    animation-duration: 800ms;
    max-width: 500px;

    @media only screen and (max-width: 900px) {
      position: relative;
      right: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  animation: ${fadeInFromTop};
  animation-duration: 1000ms;
  
  & img {
    margin: 10px 15px;
    transition: 600ms ease;

    &:hover {
      filter: drop-shadow(0px 0px 10px white);
      transition: 600ms ease;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-top: 30px;
  }
`