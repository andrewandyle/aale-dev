import * as React from "react"
import { Link } from "gatsby"
import { NavContainer } from "../styles/navigation.styles"
import { FaBars, FaTimes } from "react-icons/fa"

const links = [
  { route: '/', name: 'Home' },
  { route: '/about', name: 'About' },
  { route: '/experience', name: 'Experience' },
  { route: '/blog', name: 'Blog' }
]

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 700)
 
  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <NavContainer>
      {showMobileNav
        ? <FaTimes id="mobile-menu-close" onClick={() => setShowMobileNav(false)} />
        : <FaBars id="mobile-menu-open" onClick={() => setShowMobileNav(true)} />}
      <nav style={{ display: !isMobile ? 'flex' : showMobileNav ? 'block' : 'none' }}>
        {links.map(link =>
          <li key={link.name}><Link to={link.route}>{link.name}</Link></li>
        )}
      </nav>
    </NavContainer>
  )
}

export default Navigation