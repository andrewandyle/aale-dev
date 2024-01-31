import styled from 'styled-components'
import { fadeIn, fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const GlassContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);
`

export const LogoContainer = styled(GlassContainer)`
  animation: ${fadeIn};
  animation-duration: 800ms;

  @media only screen and (min-width: 900px) {
    width: 750px;
    margin-bottom: 30px;
    padding: 50px;
  }

  @media only screen and (max-width: 900px) {
    border: none;
    background-color: transparent;
    backdrop-filter: none;
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

export const ButtonsContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 900px) {
    display: block;
    margin-top: 30px;
  }
`

export const ResumeButton = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);

  padding: 20px;
  margin-right: 15px;
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-decoration: none;

  animation: ${fadeInFromTop};
  animation-duration: 1000ms;
  
  &:hover {
    transform: translateY(-10px);
    transition: transform 300ms ease, filter 300ms ease;
  }

  @media only screen and (max-width: 900px) {
    margin-right: 0;
  }
`

export const SocialMedia = styled(GlassContainer)`
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