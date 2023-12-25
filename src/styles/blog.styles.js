import { styled } from 'styled-components'
import { GlassContainer } from './index.styles'
import { fadeIn } from './keyframes'

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`

export const BlogEntry = styled(GlassContainer)`
  max-width: 250px;
  padding: 10px;
  color: white;

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
  }

  &:hover {
    transform: translateY(-10px);
    transition: transform 300ms ease, filter 300ms ease;
  }
`

export const BlogPostContainer = styled(GlassContainer)`
  width: 100%;
  padding: 14px 0;
  line-height: 1.3rem;
  animation: ${fadeIn};
  animation-duration: 400ms;

  * {
    padding: 0 30px;
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
`
