import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <div
    style={{
      border: `1px solid rgba(255,255,255,0.4)`,
      backgroundColor: `rgba(255,255,255,0.25)`,
      borderRadius: `30px`,
      backdropFilter: `blur(5px)`,
      marginBottom: `80px`
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Navigation