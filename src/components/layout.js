import * as React from "react"
import Navigation from "./navigation"

const Layout = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Navigation />
    {children}
  </div>
)

export default Layout