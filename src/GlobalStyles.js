import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  #root {
    display: grid;
    grid-template-rows: 100px auto 90px; 
    height: 100vh;
  }

  :root{
    --primary: #FE5960; {/* pink */}
    --secondary: #FF8B91; {/* rosa */}
    --tertiary: #fff7f7; {/* offwhite */}
    --quaternary: #FFFFFF; {/* white */}
    --quinary: #495057; {/* grey */}
    --senary: #DDA0DD; {/* plum */}
    --septenary: #ffc942; {/ *orange */}
  }

  body {
    color: var(--quaternary);
    background: var(--primary);
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    font-size: 18px;
    overflow: scroll;
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: var(--septenary);
  }
`