import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    background: #FE5960;
    margin: 0;
    font-family: sans-serif;
    font-size: 20px;
  }

  p {
    line-height: 150%;
  }
`