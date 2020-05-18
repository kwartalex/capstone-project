describe('after submit a new entry is added to the map', () => {
    it('a new entry is created', () => {
        cy.visit('/createentry')
        cy.get('[data-cy="create_entry"]').type('Es war sonnig und warm.')
        cy.get('[data-cy="submit_entry"]').submit()
        cy.visit('/entriesall')
        cy.get('[data-cy="read_entry"]').contains('Es war sonnig und warm').should("exist")
    })
})