import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation () {
    return (
        <nav>
            <NavigationStyled>
                AWESOME DAY
            </NavigationStyled>
        </nav>  
    )
}

const NavigationStyled = styled.nav `
position: fixed;
left: 0;
bottom: 0;
z-index: 1;
margin: 0;
padding: 12px;
width: 100vw;
height: 48px;
text-align: center;
font-size: 24px;
background: var(--senary);
opacity: 0.9;
`

