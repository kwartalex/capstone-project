import React from 'react'
import styled from 'styled-components/macro'

export default function EntriesAll ({entries, onDeleteClick}) {
    return (
        <ul>
            {entries && entries.map((entry) => (
                <li key={entry.name}>
                   <EntryStyled>{entry}</EntryStyled> 
                   <span onClick={() => onDeleteClick(entry.name)}>x</span>
                </li>
            ))}
        </ul>
    )
}

const EntryStyled = styled.section`
    margin: 20px auto 20px;
    padding: 0 40px 0;
    border: none;
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    text-align: justify;
`
  