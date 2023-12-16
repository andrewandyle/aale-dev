import styled from 'styled-components'
import { fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const MainHeader = styled.div`
  position: relative;
  margin-top: 80px;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    margin-top: 50px;
  }
`

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  #avatar {
    animation: ${fadeInFromLeft};
    animation-duration: 800ms;
    width: 500px;
  }

  #logo {
    position: absolute;
    right: 0;
    animation: ${fadeInFromRight};
    animation-duration: 800ms;
    width: 600px;

    @media only screen and (max-width: 900px) {
      position: relative;
    }
  }

  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeInFromTop};
  animation-duration: 1000ms;

  & img {
    margin-left: 20px;
    transition: 600ms ease;

    &:hover {
      filter: drop-shadow(0px 0px 10px white);
      transition: 600ms ease;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`