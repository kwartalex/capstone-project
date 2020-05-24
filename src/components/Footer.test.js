import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Footer from './Footer'
import Home from '../pages/Home'
import CreateEntry from '../pages/CreateEntry'
import EntriesAll from '../pages/EntriesAll'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'



test('that I can navigate to through all pages using navlink', () => {
    const history = createMemoryHistory({initialEntries: ['/'] })
    const { getByTestId } = render(
        <Router history={history}>
            <Footer />
        </Router>
    )
    const homelink = getByTestId(/home-link/i)
    const createlink = getByTestId(/createentry-link/i)
    const readlink = getByTestId(/entriesall-link/i)
    const { getByAltText } = render(
        <Router history={history}>
            <Home/>
            <CreateEntry />
            <EntriesAll />
        </Router>
    )

    expect(getByAltText(/link to entries page/i)).toBeInTheDocument()
    userEvent.click(readlink)
    expect(getByAltText(/link to create page/i)).toBeInTheDocument()
    userEvent.click(createlink)
    expect(getByAltText(/link to home page/i)).toBeInTheDocument()
    userEvent.click(homelink)
}
)