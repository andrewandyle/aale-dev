import { styled } from 'styled-components'

export const NavContainer = styled.header`
  margin-bottom: 50px;
  
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;

  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  a {
    color: white;
    text-decoration: none;
  }

  nav {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding-inline-start: 0px;
    margin-block-start: 1em;
    margin-block-end: 1em;
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

  #mobile-menu-open,
  #mobile-menu-close {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    padding: 15px;
    background-color: #60487e;

    #mobile-menu-open,
    #mobile-menu-close {
      display: block;
      font-size: 30px;
      cursor: pointer;
    }

    nav {
      ${({ showMobileNav }) => `display: ${showMobileNav ? 'block' : 'none'};`}

      position: fixed;
      top: 100%;
      left: 0;
      width: 100%;
      margin-block-start: 0;

      padding: .5rem 4%;
      background-color: #291355;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 20px;

      li {
        margin: 1.5rem 0;
        &:hover {
          -webkit-transform: none;
          transition: 0;
        }
      }
    }
  }
`
