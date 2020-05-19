describe('navigation to another url within app', () => {
    it('clicking entries icon navigates to respective url', () => {
        cy.visit('/createentry')

        cy.get('[data-cy="allentries_icon"]').click()
        cy.url().should('include', '/entriesall')
    })

    it('clicking create icon navigates to respective url', () => {
        cy.visit('/entriesall')

        cy.get('[data-cy="create_icon"]').click()
        cy.url().should('include', '/createentry')
    })
})