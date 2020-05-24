import React from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri';
import styled from 'styled-components/macro';
import Divider from '../components/Divider'

export default function EntriesAll ({entries, onDeleteClick}) {
    return (
        <SectionStyled>
            {entries && entries.map((entry) => (
                <div data-cy="read_entry">
                   <EntryStyled>
                    {entry}
                        <DeleteBtnStyled alt="Delete entry" onClick={() => onDeleteClick(entry)}/>
                    </EntryStyled> 
                    <Divider />
                </div>
            ))}
        </SectionStyled>
    )
}

const SectionStyled = styled.section `
    display: flex;
    flex-direction: column;
`


const EntryStyled = styled.section`
    margin: 12px auto 12px;
    width: 80vw;
    padding: 12px;
    border: none;
    font-weight: 220;
    letter-spacing: 0.0625em;
    text-align: left
    word-wrap: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    position: relative;

    ::first-Letter {
        color: var(--senary);
        font-size: 22px;
        font-weight:360;
    }
`

const DeleteBtnStyled = styled(RiDeleteBin7Line)`
    position: absolute;
    top: -6px;
    right: -4px;
    fill: var(--septenary);

`


  