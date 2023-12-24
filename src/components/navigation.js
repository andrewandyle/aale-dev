import * as React from "react"
import { Link } from "gatsby"
import { NavContainer } from "../styles/navigation.styles"

const links = [
  { route: '/', name: 'Home' },
  { route: '/about', name: 'About' },
  { route: '/experience', name: 'Experience' }
]

const Navigation = () => (
  <NavContainer>
    <ul>
      {links.map(link =>
        <li key={link.name}><Link to={link.route}>{link.name}</Link></li>
      )}
    </ul>
  </NavContainer>
)

export default Navigation