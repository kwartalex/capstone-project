import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation () {
    return (
        <>
            <FooterStyled role="footer">
                <LinkStyled
                activeClassName="selected"
                to="/entriesall"
                ><img src="../images/create.png" alt="" />
                </LinkStyled>
                <LinkStyled
                activeClassName="selected"
                to="/createentry"
                ><img src="../images/read.png" alt="" />
                </LinkStyled>
            </FooterStyled>
        </>
    )
}

const FooterStyled = styled.footer `
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    margin: 0;
    width: 100vw;
    height: 80px;
    background: var(--secondary);
    opacity: 0.9;
    `

const LinkStyled = styled(NavLink)`
    text-align: center;
    &.selected {
        background: var(--senary);
    } 
    `

