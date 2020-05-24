import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/Button'

export default function CreateEntry ({ handleSubmit }) {

    const [entry, setEntry] = useState('')
    const [btnActivated, setIsActivated] = useState(false)
    const [submitted, setIsSubmitted] = useState(false)

    return (
            <form onSubmit={onSubmit} data-cy="submit_entry">
                <InputStyled 
                    autoFocus={true}
                    type="text"
                    name="entry"
                    placeholder="My favorite moment of the day was ..."
                    onChange={(event) => setEntry(event.target.value)}
                    value={entry}
                    required
                    minLength="10"
                    maxLength="300"
                    data-cy="create_entry"
                />
                
                <Button active={btnActivated}/>
            </form>
    )

    function onSubmit(event){
        event.preventDefault()
        handleSubmit(entry)
        setEntry('')
        setIsActivated(!btnActivated)
        setIsSubmitted(true)
    
    }
}

const InputStyled = styled.textarea`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px auto 20px;
    border-radius: 8px;
    height: 44vh;
    width: 64vw;
    padding: 20px;
    border: 2px solid var(--primary);
    background: var(--tertiary);
    color: var(--quinary);
    caret-color: var(--primary);
    font-size: 18px;
    font-family: Raleway-Light, Helvetica Neue, Helvetica, sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    text-overflow: ellipsis;
    resize: none;
      
    // &:required {
    //     border-color: var(--senary);
    //   }
    // &:focus{
    //     outline: 3px solid var(--primary);
    // }
`