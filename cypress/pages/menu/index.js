import { elements as el } from "./elements"

class Menu {
    visitarPagina() {
        cy.visit('/')
    }


    clicarMenulateral() {
        cy.get(el.menulateral).click()
    }

    ExibirTodosItensDoMenu() {
      cy.get(el.Todosositens).should('be.visible')
      cy.get(el.Sobre).should('be.visible')
      cy.get(el.Sair).should('be.visible')
      cy.get(el.Redefinirestadodoaplicativo).should('be.visible')
    }

    clicarEmSobre() {
        cy.get(el.Sobre).click()
    }

    clicarEmTodosOsItens() {
        cy.get(el.Todosositens).click()
    }

    clicarNoProduto() {
        cy.get(el.imagemProduto).click()
    }

    clicarEmSair() {
      cy.get(el.Sair).click()   
    }
}

export default new Menu()