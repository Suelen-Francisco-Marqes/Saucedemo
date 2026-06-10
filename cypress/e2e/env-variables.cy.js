describe('Variaveis de ambiente', () => {

    beforeEach(() => {
        Cypress.env('teste', 'testando')
    })

    it('imprimir variaveis de ambiente', () => {
        cy.log(Cypress.env('user'))
        cy.log(Cypress.env('host'))
        cy.log(Cypress.env('api_server'))
        cy.log(Cypress.env('teste'))
    })

})