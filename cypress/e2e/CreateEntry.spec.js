describe('after submit a new entry is added to the map and the textarea is cleared', () => {
    it('the form is cleared after submit', () => {
        cy.visit('/createentry')

        cy.get('[data-cy="create_entry]')
        cy.get('input[name="entry"]').type('Es war sonnig und warm.')
    })

    it('a new entry is created', () => {
        cy.visit('/entriesall')

        cy.contains('Es war sonnig und warm.').should('exist')
    })
})