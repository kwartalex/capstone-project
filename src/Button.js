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
    padding: 0.5rem;
    margin: 20px auto 10px;
    width: 10rem;
    background: ${props => props.styleActivated ? "var(--senary)" : "var(--secondary)"};
    color: var(--quaternary);
    font-size: 18px;
    border: none;
`