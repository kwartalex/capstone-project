import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import Footer from './Footer'
import CreateEntry from '../pages/CreateEntry'
import EntriesAll from '../pages/EntriesAll'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'



test('that I can navigate to createpage using navlink', () => {
    const history = createMemoryHistory({initialEntries: ['/'] })
    const { getByTestId } = render(
        <Router history={history}>
            <Footer />
        </Router>
    )
    const createlink = getByTestId(/createentry-link/i)
    const readlink = getByTestId(/entriesall-link/i)
    const { getByAltText } = render(
        <Router history={history}>
            <CreateEntry />
            <EntriesAll />
        </Router>
    )

    expect(getByAltText(/linkread/i)).toBeInTheDocument()
    userEvent.click(readlink)
    expect(getByAltText(/linkcreate/i)).toBeInTheDocument()
    userEvent.click(createlink)
}
)