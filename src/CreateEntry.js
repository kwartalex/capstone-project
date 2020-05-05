import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function CreateEntry ({ handleSubmit }) {

    const [entry, setEntry] = useState('')
    
    return (
        <section>
            <form onSubmit={onSubmit}>
                <InputStyled 
                //autoFocus={true}
                type="text"
                name="entry"
                placeholder="My favorite moment of the day was when ..."
                onChange={(event) => setEntry(event.target.value)}
                value={entry}
                />
                <Button/>
            </form>
        </section>
    )

    function onSubmit(event){
        event.preventDefault()
        handleSubmit(entry)
        setEntry('')
    }
}

const InputStyled = styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto 10px;
    border: 2px solid var(--tertiary);
    background: var(--tertiary);
    color: #495057;
    border-radius: 4px;
    height: 40vh;
    width: 60vw;
    padding: 20px;
    font-size: 18px;
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`