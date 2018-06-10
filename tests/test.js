describe('translation app', () => {
    it('should display and function correctly', () => {
        cy.visit('/')
        cy.get('h1').should('have.text', 'Janglish')
        cy.get('button').click()

    })
})