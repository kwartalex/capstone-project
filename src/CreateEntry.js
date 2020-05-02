import React from 'react'
import styled from 'styled-components/macro'

export default function CreateEntry () {
    return (
        <section>
            <form>
                <InputStyled/>
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
    width: 60vw;
`