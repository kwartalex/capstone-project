import React, { useState, useEffect } from 'react'
import CreateEntry from './CreateEntry'
import EntriesAll from './EntriesAll'
import Header from './Header'
import Navigation from './Navigation'
import { loadEntry, saveEntry } from './LocalStorage'

export default function App () {

    const [entries, setEntries] = useState(loadEntry('entries') || '')
    
    useEffect(() => {
        saveEntry('entries', entries);
        })

    return (
        <>
        <Header/>
        <CreateEntry handleSubmit = {addEntry}/>
        <EntriesAll entries={entries} onDeleteClick={deleteEntry}/>
        <Navigation/>
        </>
    )

    function addEntry (newEntry) {
        setEntries([newEntry, ...entries])
    }

    function deleteEntry(entry) {
        const index = entries.indexOf(entry)
        setEntries([...entries.slice(0, index), ...entries.slice(index + 1)])
      }
}

