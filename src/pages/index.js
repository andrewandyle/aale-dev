import * as React from "react"
import Layout from "../components/layout"

// Styled Components
import { LogoContainer, ButtonContainer } from '../styles/index.styles'

// Images
import Avatar from '../images/avatar.png'
import Logo from '../images/logo.png'
import Email from '../images/email.png'
import LinkedIn from '../images/linkedin.png'
import GitHub from '../images/github.jpg'

const IndexPage = () => (
  <Layout>
    <LogoContainer>
      <img id="avatar" src={Avatar} alt="Avatar" />
      <img id="logo" src={Logo} alt="Logo" />
    </LogoContainer>
    <ButtonContainer>
      <a href="mailto:andrewandyle@gmail.com" target="_blank" rel="noreferrer">
        <img src={Email} height={50} alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
        <img src={LinkedIn} height={50} alt="LinkedIn" />
      </a>
      <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
        <img src={GitHub} height={50} alt="GitHub" />
      </a>
    </ButtonContainer>
  </Layout>
)

export default IndexPage

export const Head = () => <title>Home | Andrew Le's Website</title>
