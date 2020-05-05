import React, { useState, useEffect } from 'react'
import CreateEntry from './CreateEntry'
import EntriesAll from './EntriesAll'
import { loadEntry, saveEntry } from './LocalStorage'

export default function App () {

    const [entries, setEntries] = useState(loadEntry('entries') || '')
    
    useEffect(() => {
        saveEntry('entries', entries);
        })

    return (
        <>
        <CreateEntry handleSubmit = {addEntry}/>
        <EntriesAll entries = {entries}/>
        </>
    )

    function addEntry (newEntry) {
        setEntries([newEntry, ...entries])
    }
}