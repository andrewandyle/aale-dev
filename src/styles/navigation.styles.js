import { styled } from 'styled-components'
import { GlassContainer } from './index.styles'

export const NavContainer = styled(GlassContainer)`
  margin-bottom: 50px;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding-inline-start: 0px;
    font-weight: 500;
  }
`
