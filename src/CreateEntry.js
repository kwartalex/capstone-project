import React from 'react'
import styled from 'styled-components/macro'

export default function CreateEntry () {
    return (
        <section>
            <form>
                <InputStyled/>
                <ButtonStyled>Make my day!</ButtonStyled>
            </form>
        </section>
    )
}

const InputStyled = styled.input`
    margin: 100px auto 10px;
    border: 2px solid #fff7f7;
    background: #fff7f7;
    border-radius: 4px;
    height: 40vh;
    width: 50vw;
`
const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 2rem 1rem;
    width: 10rem;
    background: #FF8B91;
    color: #FFFFFF;
    font-size: 18px;
    border: none;
`
