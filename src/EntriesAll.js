import React from 'react'
import styled from 'styled-components/macro'

export default function EntriesAll ({entries}) {
    return (
        <ul>
            {entries && entries.map((entry) => (
                <li key={entry.name}>
                   <EntryStyled>{entry}</EntryStyled> 
                </li>
            ))}
        </ul>
    )
}

const EntryStyled = styled.section`
    margin: 20px auto 20px;
    border: none;
    width: 60vw;
`
  