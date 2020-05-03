import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function CreateEntry ({ savedEntries }) {

    const [entry, setEntry] = useState('')
    
    return (
        <section>
            <form onSubmit={(event) => {handleSubmit(event, entry)}}>
                <InputStyled
                type="text"
                name="entry"
                //value={entry}
                onChange={(event) => setEntry(event.target.value)}
                />{console.log(entry)}
                <Button/>
            </form>
        </section>
    )

    function handleSubmit(event, entry) {
        event.preventDefault()
        savedEntries(entry)
        //setEntry('')
      }
}

const InputStyled = styled.input`
    margin: 100px auto 10px;
    border: 2px solid #fff7f7;
    background: #fff7f7;
    border-radius: 4px;
    height: 40vh;
    width: 60vw;
`