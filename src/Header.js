import React from 'react'
import styled from 'styled-components/macro'

export default function Header () {
    return (
    <section>
        <HeaderStyled>
        YAY!
        </HeaderStyled>
    </section>
    )
}

const HeaderStyled = styled.header`
    position: fixed;
    left: 0;
    top: 0;
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
