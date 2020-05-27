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
    border: none;
    margin: 32px auto 16px;
    width: 170px;
    height: 42px;
    background: ${props => props.styleActivated ? "var(--senary)" : "var(--septenary)"};
    color: var(--quaternary);
    box-shadow: 0  12px 10px -10px rgba(0, 0, 0, 0.4);
    font-size: 22px;
    font-weight: 300;
    `