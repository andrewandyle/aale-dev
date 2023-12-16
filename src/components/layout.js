import * as React from "react"
import Navigation from "./navigation"
import { OuterContainer, PageContainer, GlobalStyle } from "../styles/layout.styles"

const Layout = ({ children }) => (
  <OuterContainer>
    <GlobalStyle />
    <Navigation />
    <PageContainer>
      {children}
    </PageContainer>
  </OuterContainer>
)

export default Layout