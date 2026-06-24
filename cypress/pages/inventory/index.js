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

    selecionarFiltro(opcao) {
        cy.get(el.filtro).select(opcao)
    }

    validarOrdemAlfabeticaAZ() {
        cy.get('.inventory_item_name').then(($items) => {
            const nomes = [...$items].map(i => i.innerText)
            expect(nomes).to.deep.equal([...nomes].sort())
        })
        cy.screenshot('filtro nome A to Z')
    }

    validarOrdemAlfabeticaZA() {
        cy.get('.inventory_item_name').then(($items) => {
            const nomes = [...$items].map(i => i.innerText)
            expect(nomes).to.deep.equal([...nomes].sort().reverse())
        })
        cy.screenshot('filtro nome Z to A')
    }

    validarOrdemPrecoCrescente() {
        cy.get('.inventory_item_price').then(($precos) => {
            const valores = [...$precos].map(i => parseFloat(i.innerText.replace('$', '')))
            expect(valores).to.deep.equal([...valores].sort((a, b) => a - b))
        })
        cy.screenshot('filtro preco low to high')
    }

    validarOrdemPrecoDecrescente() {
        cy.get('.inventory_item_price').then(($precos) => {
            const valores = [...$precos].map(i => parseFloat(i.innerText.replace('$', '')))
            expect(valores).to.deep.equal([...valores].sort((a, b) => b - a))
        })
        cy.screenshot('filtro preco high to low')
    }
}

export default new Inventory()