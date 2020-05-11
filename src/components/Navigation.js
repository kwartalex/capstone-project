import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation () {
    return (
        <>
            <NavigationStyled role="navigation">
                <LinkStyled
                activeClassName="selected"
                to="/entriesall"
                >READ
                </LinkStyled>
                <LinkStyled
                activeClassName="selected"
                to="/createentry"
                >WRITE
                </LinkStyled>
            </NavigationStyled>
        </>
    )
}

const NavigationStyled = styled.nav `
display: grid;
grid-template-columns: 1fr 1fr;
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
const LinkStyled = styled(NavLink)`
text-align: center;
&.selected: var(--septenary);
`

