import { styled } from 'styled-components'
import { GlassContainer } from './index.styles'
import { fadeIn, fadeInFromTop } from './keyframes'

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`

export const BlogEntry = styled(GlassContainer)`
  max-width: 260px;
  padding: 10px;
  margin: 10px;
  color: white;

  animation: ${fadeInFromTop};
  transition: 300ms ease;
  ${({ index }) => `animation-duration: ${(index + 1) * 300}ms;`}

  p {
    margin-block-end: 0.5em;
  }

  div {
    display: flex;
    align-items: center;

    h3 {
      margin: 0;
      margin-left: 8px;
    }

    img {
      width: 30px;
    }
  }

  &:hover {
    transform: translateY(-10px);
    transition: transform 300ms ease, filter 300ms ease;
  }
`

export const BlogPostHeader = styled.div`
  align-self: normal;
  display: flex;
  align-items: center;

  img {
    width: 30px;
  }

  h1 {
    margin: 0;
    margin-left: 10px;
  }
`

export const BlogPostContainer = styled(GlassContainer)`
  width: 100%;
  padding: 14px 0;
  line-height: 1.3rem;
  animation: ${fadeIn};
  animation-duration: 400ms;

  p, h2, h3, table {
    padding: 0 30px;
  }
  
  a {
    color: white;
  }

  hr {
    margin: 0 30px;
  }

  img {
    padding: 0 10px;
    margin: auto;
    display: block;
    max-width: 90%;
  }

  video {
    max-width: 480px;
    max-height: 640px;

    @media only screen and (max-width: 500px) {
      max-width: 90%;
    }
  }

  th {
    padding: 0;
    text-decoration: underline;

    p {
      margin-block-start: 8px;
      margin-block-end: 8px;
    }
  }

  td {
    padding: 0;

    p {
      padding: 0 10px;
    }
  }

  table {
    table-layout: fixed;
    width: 100%;
  }

  tr {
    :last-child {
      display: block;
    }
  }

  ul {
    p {
      padding: 0;
    }
  }

  ol {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;

    @media only screen and (max-width: 768px) {
      flex-direction: column;

      img {
        padding: 5px 0;
      }
    }
  }
`
