import React from 'react'
import styled from 'styled-components/macro'

export default function Button ({ active }) {
    return (
        <section>
            <ButtonStyled styleActivated={active}>Make my day!</ButtonStyled>
        </section>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 32px auto 16px;
    width: 180px;
    height: 46px;
    background: ${props => props.styleActivated ? "var(--senary)" : "var(--septenary)"};
    color: var(--quaternary);
    font-size: 22px;
    font-weight: 300;
    border: none;
    box-shadow: 0  12px 10px -10px rgba(0, 0, 0, 0.4)
`