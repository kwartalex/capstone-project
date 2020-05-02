import React from 'react'
import styled from 'styled-components/macro'

export default function Button () {
    return (
        <section>
            <ButtonStyled>Make my day!</ButtonStyled>
        </section>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 20px auto 10px;
    width: 10rem;
    background: #FF8B91;
    color: #FFFFFF;
    font-size: 18px;
    border: none;
`