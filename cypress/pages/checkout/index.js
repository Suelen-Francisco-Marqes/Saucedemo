import { elements as el } from "./elements"
import { MESSAGES } from '../../support/constants'

class Checkout {
    visitarPagina(){
        cy.visit('/')
    }

    preencherInformacoesValidas() {
        cy.get(el.primeiroNome).type('Suelen')
        cy.get(el.segundoNome).type('Marques')
        cy.get(el.cep).type('88806820')
    }

    continuar() {
        cy.get(el.continue).click()
    }

    finalizarCompra() {                           
        cy.get(el.finish).click()
    }

    validarSucesso() {                             
        cy.get(el.successMessage).should('be.visible')
    }

    primeiroNomeVazio() {
        cy.get(el.segundoNome).type('Marques')
        cy.get(el.cep).type('88806820')
    }


    validarNomeCheckout() {
        cy.get(el.errorMessageContainer)
            .should('contain.text', MESSAGES.InformacaoNomeCheckoutVazio)
    }

}

export default new Checkout()