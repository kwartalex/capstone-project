import React, { useState } from 'react'
import CreateEntry from './CreateEntry'
import EntriesAll from './EntriesAll'

export default function App () {

    const [entries, setEntries] = useState([])

    return (
        <>
        <CreateEntry savedEntries = {handleEntries}/>
        <EntriesAll entries = {entries}/>
        </>
    )

    function handleEntries (entry) {
        setEntries([entry])
    }
}