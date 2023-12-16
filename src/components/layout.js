import * as React from "react"
import Navigation from "./navigation"
import { GlobalStyle } from "../styles/layout.styles"

const Layout = ({ children }) => (
  <div style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`
  }}>
    <GlobalStyle />
    <Navigation />
    {children}
  </div>
)

export default Layout