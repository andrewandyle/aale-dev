import { styled, createGlobalStyle } from 'styled-components'
import imageBg from '../images/bg.jpg'

export const OuterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 80px;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), url(${imageBg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    font-family: 'Ubuntu', sans-serif;

    &:before {
      content: "";
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ), url(${imageBg}) no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }
`