import { createGlobalStyle } from "styled-components"

import { newColors, fontFamily } from '../ui-kit/sharedStyles'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${fontFamily};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button, input, select, textarea {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    outline: none;
    border: none;
    padding: 0;
  }
`
