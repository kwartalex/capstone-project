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
        <EntriesAll entries = {entries} onDeleteClick={deleteEntry}/>
        </>
    )

    function addEntry (newEntry) {
        setEntries([newEntry, ...entries])
    }

    function deleteEntry(deletedEntry) {
        const index = entries.findIndex((entry) => entry === deletedEntry)
        setEntries([...entries.slice(0, index, + 1)])
      }
}

