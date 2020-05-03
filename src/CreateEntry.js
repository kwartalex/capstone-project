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
                placeholder="My favorite moment of the day was when ..."
                onChange={(event) => setEntry(event.target.value)}
                />{console.log(entry)}
                <Button/>
            </form>
        </section>
    )

    function handleSubmit(event, entry) {
        event.preventDefault()
        savedEntries(entry)
      }
}

const InputStyled = styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto 10px;
    border: 2px solid #fff7f7;
    background: #fff7f7;
    color: #495057;
    border-radius: 4px;
    height: 40vh;
    width: 60vw;
    padding: 20px;
    font-size: 18px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`