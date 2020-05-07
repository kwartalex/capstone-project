import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root{
    --primary: #FE5960; {/* pink */}
    --secondary: #FF8B91; {/* rosa */}
    --tertiary: #fff7f7; {/* offwhite */}
    --quaternary: #FFFFFF; {/* white */}
    --quinary: #495057; {/* grey */}
    --senary: #ffc942; {/* plum */}

  }

  body {
    color: var(--quaternary);
    background: var(--primary);
    margin: 0;
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: 18px;
    overflow: scroll;
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