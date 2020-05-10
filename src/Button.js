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
    border-radius: 8px;
    padding: 8px;
    margin: 24px auto 16px;
    width: 10rem;
    background: ${props => props.styleActivated ? "var(--senary)" : "var(--secondary)"};
    color: var(--quaternary);
    font-size: 18px;
    border: none;
`