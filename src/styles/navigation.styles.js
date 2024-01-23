import { styled } from 'styled-components'
import { GlassContainer } from './index.styles'

export const NavContainer = styled(GlassContainer)`
  margin-bottom: 50px;
  
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;

  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

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

    li {
      -webkit-transform: scale(1.0);
      transition: 500ms;
      
      &:hover {
        -webkit-transform: scale(1.3);
        transition: 500ms;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
    transition: .5s;
  }

  &:hover {
    &:before {
      left: 100%;
    }
  }
`
