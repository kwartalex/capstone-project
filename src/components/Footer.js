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
                data-testid="entriesall-link"
                data-cy="allentries_icon"
                ><img src="../images/nav_create.png" alt="link to entries page" />
                </LinkStyled>
                <LinkStyled
                activeClassName="selected"
                to="/createentry"
                data-testid="createentry-link"
                data-cy="create_icon"
                ><img src="../images/nav_read.png" alt="link to create page" />
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

    img {
        height: 80px;
        }
    `

const LinkStyled = styled(NavLink)`
    text-align: center;
    &.selected {
        background: var(--septenary);
    } 
    `

