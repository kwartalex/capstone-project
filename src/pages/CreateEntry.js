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
                    placeholder="What was your most favorite thing about today?"
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
    justify-content: center;
    align-items: center;
    margin: 128px auto 28px;
    border-radius: 8px;
    height: 44vh;
    width: 64vw;
    padding: 20px;
    border: 2px solid var(--primary);
    background: var(--tertiary);
    color: var(--primary);
    caret-color: var(--primary);
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.05em;
    font-family: Raleway-Light, Helvetica Neue, Helvetica, sans-serif;
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: auto;
    white-space: normal;
    resize: none;

    ::placeholder {
        opacity: 1;
        font-weight: 300;
        color: var(--primary);
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.05em;
      }
      
    // &:required {
    //     border-color: var(--senary);
    //   }
    // &:focus{
    //     outline: 3px solid var(--primary);
    // }
`