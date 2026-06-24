import { elements as el } from "./elements"
import { MESSAGES } from '../../support/constants'
import { DATA } from "../../support/data"

class Checkout {
    visitarPagina(){
        cy.visit('/')
    }

    preencherInformacoesValidas() {
        cy.get(el.primeiroNome).type(DATA.primeiroNome)
        cy.get(el.segundoNome).type(DATA.segundoNome)
        cy.get(el.cep).type(DATA.cep)
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
        cy.get(el.segundoNome).type(DATA.segundoNome)
        cy.get(el.cep).type(DATA.cep)
    }

    segundoNomeVazio() {
        cy.get(el.primeiroNome).type(DATA.primeiroNome)
        cy.get(el.cep).type(DATA.cep)
    }

    validarNomeCheckout() {
        cy.get(el.errorMessageContainer)
            .should('contain.text', MESSAGES.InformacaoNomeCheckoutVazio)
    }

    validarSegundoNomeCheckout() {
        cy.get(el.errorMessageContainer)
            .should('contain.text', MESSAGES.InformacaoSobrenomeCheckoutVazio)
    }

    validarCepCheckout() {
        cy.get(el.primeiroNome).type(DATA.primeiroNome)
        cy.get(el.segundoNome).type(DATA.segundoNome)
    }

    validacaoCep() {
        cy.get(el.errorMessageContainer)
            .should('contain.text', MESSAGES.InformacaoCep)
    }

}

export default new Checkout()