import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function CreateEntry ({ handleSubmit }) {

    const [entry, setEntry] = useState('')
    const inputRef = useRef() 
    
    return (
        <section>
            <form onSubmit={onSubmit}>
                <InputStyled 
                autoFocus={true}
                ref={inputRef}
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
        inputRef.current.focus()
    }
}

const InputStyled = styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto 10px;
    border: 2px solid var(--primary);
    background: var(--tertiary);
    color: var(--quinary);
    caret-color: var(--primary);
    caret-size: 8px;
    border-radius: 8px;
    height: 40vh;
    width: 64vw;
    padding: 20px;
    font-size: 18px;
    font-family: Raleway, Helvetica Neue, Helvetica, sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    resize: none;
    // &:focus{
    //     outline: 3px solid var(--primary);
    // }
`