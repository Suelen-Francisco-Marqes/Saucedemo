import { elements as el } from "./elements"

class Inventory {
    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('Acesso a página de inventario')
    }

    adicionarProduto(itemName) {
        cy.get(el.addToCart(itemName)).click()
    }

    removerProduto(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
    }

    validarAcessoPaginaCheckout() {
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.screenshot('Acesso a página de checkout')
    }
}

export default new Inventory()