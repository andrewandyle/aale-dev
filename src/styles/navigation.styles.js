import { styled } from 'styled-components'

export const NavContainer = styled.div`
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.25);
  border-radius: 30px;
  backdrop-filter: blur(5px);
  margin-bottom: 50px;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
`
