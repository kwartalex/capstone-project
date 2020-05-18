import React from 'react'
import styled from 'styled-components/macro'

export default function Header () {
    return (
        <HeaderStyled>
        <img src="../images/yay_logo_orange.png" alt="" />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    margin: 0;
    width: 100vw;
    height: 48px;
    text-align: center;
    
    img {
        height: 96px;
        }
`
