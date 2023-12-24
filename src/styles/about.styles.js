import styled from 'styled-components'
import { GlassContainer } from './index.styles'
import { fadeInFromBottom, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const AboutMeContainer = styled(GlassContainer)`
  animation: ${fadeInFromBottom};
  animation-duration: 400ms;

  margin-top: 30px;

  p {
    font-size: 18px;
    padding: 0 20px;
    margin: 30px 0;
    line-height: 1.7rem;
  }

  :first-child {
    padding-bottom: 0px;
  }

  :last-child {
    padding-top: 0px;
  }
`

export const AboutBlock = styled.div`
  display: flex;
  padding: 25px;
  align-items: center;

  a {
    color: white;
  }

  #about-1 {
    animation: ${fadeInFromLeft};
    animation-duration: 800ms;
  }

  #about-2 {
    animation: ${fadeInFromRight};
    animation-duration: 800ms;
  }

  #about-2-mobile {
    animation: ${fadeInFromRight};
    animation-duration: 800ms;
    display: none;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    #about-1 {
      animation: ${fadeInFromBottom};
      animation-duration: 800ms;
    }

    #about-2 {
      display: none;
    }

    #about-2-mobile {
      animation: ${fadeInFromBottom};
      animation-duration: 800ms;
      display: block;
    }
  }
`