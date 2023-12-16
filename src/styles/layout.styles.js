import { styled, createGlobalStyle } from 'styled-components'

export const OuterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%);
    background-attachment: fixed;
    color: white;
    font-family: 'Ubuntu', sans-serif;
  }
`