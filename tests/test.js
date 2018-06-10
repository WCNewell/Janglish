describe('translation app', () => {
    it('should display and function correctly', () => {
        cy.visit('https://janglish-10d51.firebaseapp.com')
        cy.get('h1').should('have.text', 'Janglish')
        cy.get('button').click()

    })
})