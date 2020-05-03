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
    font-size: 18px;
  }

  p {
    line-height: 150%;
    font-size: 18px;
  }

  li {
    list-style-type: none;
    font-size: 18px;
  }
`