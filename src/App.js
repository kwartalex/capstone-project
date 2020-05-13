import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import CreateEntry from './pages/CreateEntry'
import EntriesAll from './pages/EntriesAll'
import Header from './components/Header'
import Navigation from './components/Footer'
import { loadEntry, saveEntry } from './LocalStorage'

export default function App () {

    const [entries, setEntries] = useState(loadEntry('entries') || '')
    
    useEffect(() => {
        saveEntry('entries', entries);
        })

    return (
        <>
        <GlobalStyles />
        <Header/>
        <Switch>
            <Route exact path="/createentry">
                <CreateEntry handleSubmit = {addEntry}/>
            </Route>
            <Route path="/entriesall">
                <EntriesAll entries={entries} onDeleteClick={deleteEntry}/>
            </Route>
        </Switch>
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

