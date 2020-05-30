import React from 'react'
import styled from 'styled-components/macro'
import HeaderIcon from '../images/yay_logo_orange.png'

export default function Header () {
    return (
        <HeaderStyled>
        <img src={HeaderIcon} alt="" />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    margin: 0;
    width: 100vw;
    height: 100px;
    text-align: center;
    
    img {
        height: 96px;
        }
`
