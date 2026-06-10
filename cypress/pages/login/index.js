import { elements as el } from "./elements"
import { MESSAGES } from '../../support/constants'


class Login {
    visitarPagina(){
        cy.visit('/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas() {
        cy.get(el.username).type('user.invalid')
        cy.get(el.password).type('senha')
        cy.get(el.loginButton).click()
    }

    validarErroCredenciaisInvalidas() {
        cy.get(el.errorMessage)
            .should('contain.text', MESSAGES.credenciaisInvalidas)
        cy.screenshot('erro credenciais inválidas')
    }

    UsuarioBloqueado () {
        cy.get(el.username).type('locked_out_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()   
    }

    validarMensagemBloqueado() {
        cy.get(el.errorMessage)
            .should('contain.text', MESSAGES.usuarioBloqueado)
        cy.screenshot('erro usuário bloqueado')
    }

    validarPreenchimentoUsuario() {
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()   
    }

    validarErroPreenchimentoUsuario () {
        cy.get(el.errorMessage)
            .should('contain.text', MESSAGES.usuarioObrigatorio)
        cy.screenshot('erro usuário em branco')
    }

    validarPreenchimentoSenha() {
        cy.get(el.username).type('standard_user')
        cy.get(el.loginButton).click()   
    }


    validarErroPreenchimentoSenha () {
        cy.get(el.errorMessage)
            .should('contain.text', MESSAGES.senhaObrigatoria)
        cy.screenshot('erro senha em branco')
    }
}

export default new Login()