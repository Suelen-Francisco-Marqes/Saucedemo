import { elements as el } from "./elements"

class Inventory {
    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('Acesso a página de inventario')
    }

    adicionarProduto(itemName) {
        cy.get(el.addToCart(itemName)).click()
    }
}

export default new Inventory()