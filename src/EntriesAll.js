import React from 'react'
import styled from 'styled-components/macro'

export default function EntriesAll ({entries, onDeleteClick}) {
    return (
        <section>
            {entries && entries.map((entry) => (
                <div>
                   <EntryStyled>
                    {entry}
                    <DeleteBtnStyled onClick={() => onDeleteClick(entry)}>x</DeleteBtnStyled>
                    </EntryStyled> 
                </div>
            ))}
        </section>
    )
}

const EntryStyled = styled.section`
    display: flex;
    align-items: center;
    margin: 12px auto 12px;
    width: 80vw;
    padding: 12px;
    border: none;
    font-weight: 300;
    letter-spacing: 0.0625em;
    text-align: left
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


  