import React from 'react'
import styled from 'styled-components/macro'

export default function EntriesAll ({entries, onDeleteClick}) {
    return (
        <section>
            {entries && entries.map((entry) => (
                <div key={entry.name}>
                   <EntryStyled>
                    {entry}
                    <DeleteBtnStyled onClick={() => onDeleteClick(entry.name)}>x</DeleteBtnStyled>
                    </EntryStyled> 
                </div>
            ))}
        </section>
        
    )
}

const EntryStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto 10px;
    width: 80vw;
    padding: 16px;
    border: none;
    font-weight: 300;
    letter-spacing: 0.0625em;
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    position: relative;
`
const DeleteBtnStyled = styled.span`    
    position: absolute;
    top: 4px;
    right: 8px;
`


  