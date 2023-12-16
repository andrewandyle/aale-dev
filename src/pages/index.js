import * as React from "react"
import Layout from "../components/layout"

// Styled Components
import {
  MainHeader,
  LogoContainer,
  ButtonContainer
} from '../styles/index.styles'

// Images
import Avatar from '../images/avatar.png'
import Logo from '../images/logo.png'
import Email from '../images/email.png'
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <MainHeader>
        <LogoContainer>
          <img id="avatar" src={Avatar} alt="Avatar" />
          <img id="logo" src={Logo} alt="Logo" />
        </LogoContainer>
        <ButtonContainer>
          <div>
            <a href="mailto:andrewandyle@gmail.com" target="_blank" rel="noreferrer">
              <img src={Email} height={50} alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
              <img src={LinkedIn} height={50} alt="LinkedIn" />
            </a>
            <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
              <img src={GitHub} height={50} alt="GitHub" />
            </a>
          </div>
        </ButtonContainer>
      </MainHeader>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home | Andrew Le's Website</title>
